<?php

use App\Http\Controllers\CvController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Session;


Route::get('/', function () {
    return view('welcome');
});

// UNAUTHENTICATED API's.
Route::post('/login', [UserController::class, 'login']);

Route::middleware('auth:sanctum')->get('/debug-user', function () {
    return response()->json([
        'user' => Auth::user(),
        'session' => session()->all(),
    ]);
});

// for authorised users
Route::group(['middleware' => ['auth:sanctum']], function() {

    // USER.
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Update user
    Route::post('/user/update-password', [UserController::class, 'updatePassword']);

    // CV CRUD
    Route::resource('cv', CvController::class)->except(['update']);
    Route::post('/cv/{cv}', [CvController::class, 'update']);
    
    Route::get('/cv-list', [CvController::class, 'index']);
});


// Test Session APP_KEY
Route::get('/session-test', function (Request $request) {
    // 1. Get current count or default to 0
    $count = Session::get('test_count', 0);
    
    // 2. Increment and save
    Session::put('test_count', ++$count);
    
    return response()->json([
        'session_id' => Session::getId(),
        'test_count' => $count,
        'driver' => config('session.driver'),
        'user' => $request->user(), // Will be null if 401
    ]);
})->middleware(['web']); // Use 'web' to ensure cookies/sessions are active


