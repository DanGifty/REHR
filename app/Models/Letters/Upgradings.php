<?php

namespace App\Models\Letters;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Upgradings extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function getEncryptedIdAttribute(){
        return encrypt($this->id);
    }
    protected $appends = ['encrypted_id'];

    public function users(){
        return $this->belongsTo(User::class,'users_id','id');
    }
}
