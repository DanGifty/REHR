<?php

namespace App\Http\Controllers\Letters;

use App\DataTables\Letters\UpgradingDataTable;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UpgradingController extends Controller
{
    public function list(UpgradingDataTable $dataTable){
        return $dataTable->render('letters.upgrading.list');
    }

    public function create(){
        return view('letters.upgrading.create');
    }
}
