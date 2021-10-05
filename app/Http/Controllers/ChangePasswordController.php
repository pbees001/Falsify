<?php

namespace App\Http\Controllers;

use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class ChangePasswordController extends Controller
{
    //
    protected $redirectTo = RouteServiceProvider::HOME;


    public function __construct()
    {
        $this->middleware('guest')->except('change');
    }

    public function change()
    {
        return view('/auth/passwords/changepassword');
    }

}
