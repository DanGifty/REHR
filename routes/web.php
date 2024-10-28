<?php

use App\Http\Controllers\Letters\UpgradingController;
use App\Http\Controllers\StudyLeaves\StudyLeavesControllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/admin', function () {
    return view('auth.login');
});

Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'logMeIn'])->name('login');
Auth::routes();

Route::middleware('auth')->group(function(){
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    Route::post('/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('logoutUser');
    Route::prefix('upgrading')->name('upgrading.')->controller(UpgradingController::class)->group(function(){
        Route::get('/','list')->name('list');
        Route::get('/create','create')->name('create');
        Route::post('/store','store')->name('store');
    });
    Route::prefix('studyleave')->name('studyleave.')->controller(StudyLeavesControllers::class)->group(function(){
        Route::get('/','list')->name('list');
        Route::get('/create','create')->name('create');
        Route::post('/store','store')->name('store');
        Route::get('/export','export')->name('export');
        Route::post('/import','import')->name('import');
        Route::get('/print_single/{id}','printSingle')->name('printSingle');
        Route::get('/print_all','printAll')->name('printAll');
    });
});

//VERIFICATION ROUTES
Route::get('/verify-study-leave/{id}', [StudyLeavesControllers::class,'verifyLetter'])->name('verifyLetter');
Route::get('/', [StudyLeavesControllers::class,'getStudyLeave'])->name('getStudyLeave');
Route::get('/print_single/{id}',[StudyLeavesControllers::class,'printSingle'])->name('selfPrint');
Route::post('getLetter',[StudyLeavesControllers::class,'getMyLetter'])->name('getMyLetter');


