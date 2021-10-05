<?php

namespace App\Http\Controllers;

use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class UpdateChangedPasswordController extends Controller
{
    //
    protected $redirectTo = RouteServiceProvider::HOME;

    public function __construct()
    {
        $this->middleware('guest')->except('update');
    }

    public function update()
    {
        $user = Auth::user();

//        $user->email = Auth::user()->email();
        $user->password = Hash::make(request('password'));
        $user->setRememberToken(Str::random(60));
        $user->save();
        return redirect('/home');
    }

}
