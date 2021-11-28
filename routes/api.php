<?php

use App\Http\Controllers\passportAuthController;
use Illuminate\Http\Request;
use App\Http\Controllers\SearchClientController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('/search', 'SearchClientController@dosearchapi');

Route::get('/gettoken', 'Auth\LoginController@getTokenapi');

Route::post('register',[passportAuthController::class,'registerUser2']);
Route::post('login',[passportAuthController::class,'loginUser']);
//add this middleware to ensure that every request is authenticated
Route::middleware('auth:api')->group(function(){
    Route::get('user', [passportAuthController::class,'authenticatedUserDetails']);
});


