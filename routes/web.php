<?php

use \Illuminate\Support\Facades\URL;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
if (env('APP_ENV') === 'production') {
    URL::forceScheme('https');
}

Route::get('/', function () {
    return view('welcome');
});

Auth::routes(['verify' => true]);

Route::get('/home', 'HomeController@index')->name('home')
    ->middleware('verified');

//Route::get('/changepassword', function (){
//    return view('/auth/passwords/changepassword');
//})->name('changepassword');

Route::get('/changepassword', 'ChangePasswordController@change')->name('changepassword')
    ->middleware('verified');

Route::post('/changepassword', 'UpdateChangedPasswordController@update')->name('password.changed');

Route::get('/adminrequests', function (){
    $users = \Illuminate\Support\Facades\DB::select('select * from users where admin_verified = 0');
   return view('adminpagehelper', ['users'=>$users]);//->middleware('adminverified');
})->name('adminrequests');

Route::get('/twofactor', 'TwoFactorController@show')->name('twofactor')->middleware('verified');
Route::POST('/twofactor', 'TwoFactorController@check');

Route::POST('/results', 'SearchClientController@dosearch')->name('searchresults')->middleware('verified');

Route::get('/results/', 'SearchClientController@showcontent')->name('searchresultshelper')->middleware('verified');

Route::get('/articles',function (){
    return view('articlebox');
})->name('articlebox');

Route::get('/surveypage', function (){
    return view('surveypage');
});
