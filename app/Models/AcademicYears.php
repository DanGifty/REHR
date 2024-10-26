<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademicYears extends Model
{
    use HasFactory;

    protected $table = 'academicsyears';

    protected $guarded = [];

    public function getEncryptedIdAttribute(){
        return encrypt($this->id);
    }
    protected $appends = ['encrypted_id'];
}
