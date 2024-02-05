<?php

use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ImageUploadController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/dashboard', function () { 
    return Inertia::render('Dashboard');
})->middleware('verified')->name('dashboard');

Route::middleware('auth')->prefix('admin')->name('admin.')->group(function () {  

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('users',UserController::class); 
    Route::resource('blogs',BlogController::class); 

    Route::post('image/upload',[ImageUploadController::class,'upload']);
});
