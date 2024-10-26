<?php

namespace App\Models;

use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;


class StudyLeaves extends Model
{
    use HasFactory,SoftDeletes;

    protected $date = ['deleted_at'];


    protected $guarded = [];

    protected $table = 'study_leaves';

    public function getEncryptedIdAttribute(){
        return encrypt($this->id);
    }
    protected $appends = ['encrypted_id'];



    protected static function boot(){
        parent::boot();
        static::creating(function($serialNumber){
            $staffid = $serialNumber->staffid;
            $doc_count = $serialNumber->doc_count;
            $serialNumber->serial_number = static::generateUniqueSerialNumber($staffid,$doc_count);
        });
    }



    protected static function generateUniqueSerialNumber($staffid,$doc_count){
        $prefix = 'REDE-SL'.gmdate('Y').'-'.$staffid.'-';
        $suffix = Str::random(4);
        $snumber = $prefix.$doc_count;
        while(static::where('serial_number',$snumber)->exists()){
            $suffix = Str::random(6);
            $snumber = $prefix.$suffix;
        }
        self::generateBarCodeImage($snumber);
        return $snumber;
    }

    public static function generateBarCodeImage($snumber){

        $data = encrypt($snumber);
        $barcodeData = "https://redms.sbaresultchecker.com/verify-study-leave/" .$data;

        $directory = storage_path('app/public/studyleaves/'.$snumber);
        if(!file_exists($directory)){
            mkdir($directory,0755,true);
        }
        $barcodeImagePath = $directory.'/barcode.png';
        $barcodeImage = base64_encode(QrCode::format('png')->size(300)->generate($barcodeData,$barcodeImagePath));

        //file_put_contents($barcodeImagePath,$barcodeImage);
    }

    // public static function generateBarCodeImage($snumber){
    //     $generate = new BarcodeGeneratorPNG();
    //     $data = encrypt($snumber);
    //     $barcodeData = "https://redms.sbaresultchecker.com/verify-study-leave/" .$data;
    //     $barcodeImage = $generate->getBarcode($barcodeData,$generate::TYPE_CODE_128);
    //     $directory = storage_path('app/public/studyleaves/'.$snumber);
    //     if(!file_exists($directory)){
    //         mkdir($directory,0755,true);
    //     }
    //     $barcodeImagePath = $directory.'/barcode.png';
    //     file_put_contents($barcodeImagePath,$barcodeImage);
    // }

    public function getBarcodeHtmlAttribute(){
       $generator = new BarcodeGeneratorHTML();
       return $generator->getBarcode($this->serial_number, $generator::TYPE_CODE_128);
    }

    public function getHTMLStatus()
    {
        switch ($this->status) {
            case 'pending':
                return '<span class="badge bg-label-primary">Pending</span>';
                break;
            case 'received':
                return '<span class="badge bg-label-success">Received</span>';
                break;
            case 'rejected':
                return '<span class="badge bg-label-danger">Rejected</span>';
                break;
            case 'printed':
                return '<span class="badge bg-label-success">Printed</span>';
                break;
        }
    }

    public function getCreatedUser()
    {
        return User::query()->where('id', $this->created_by)->first()->name;
    }

    public function users()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
