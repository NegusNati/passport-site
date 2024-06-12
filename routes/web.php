<?php

use App\Http\Controllers\PassportSearchController;
use App\Http\Controllers\PDFToSQLiteController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




Route::post('/pdf-to-sqlite',  [PDFToSQLiteController::class, 'store'])->name('pdf-to-sqlite')->can('upload-files');
Route::get('/pdf-to-sqlite',  [PDFToSQLiteController::class, 'create'])->can('upload-files');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {

    Route::get('/passport', [PassportSearchController::class, 'index'])->name('passport');
    Route::post('/passport', [PassportSearchController::class, 'show'])->name('passport');
    Route::get('/passport/{id}', [PassportSearchController::class, 'detail'])->name('passport.showDetail');
    Route::get('/all-passports', [PassportSearchController::class, 'all'])->name('passport.all');


    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// The route that the button calls to initialize payment
Route::get('/payment', function () {


    return Inertia::render('Payment', [
        'amount' => request()->amount,
    ]);
})->name('payment');
// The route that the button calls to initialize payment

Route::post('/pay', 'App\Http\Controllers\ChapaController@initialize')->name('pay');

// The callback url after a payment
Route::get('callback/{reference}', 'App\Http\Controllers\ChapaController@callback')->name('callback');

require __DIR__ . '/auth.php';
