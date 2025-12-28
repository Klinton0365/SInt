<?php

use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::get('/health', function () {
    return response()->json([
        'status' => 'API is running',
        'version' => app()->version(),
    ]);
});

Route::post('/contact', [ContactController::class, 'store']);

// Optional: Admin routes (add authentication middleware)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/contacts', [ContactController::class, 'index']);
    Route::get('/contacts/{contact}', [ContactController::class, 'show']);
    Route::patch('/contacts/{contact}/status', [ContactController::class, 'updateStatus']);
});