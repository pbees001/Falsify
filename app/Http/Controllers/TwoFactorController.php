<?php

namespace App\Http\Controllers;

use App\Mail\TwoFactorMail;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use \Illuminate\Support\Facades\Session;

class TwoFactorController extends Controller
{

    public function show(){
        $otpsent = mt_rand(100000, 999999);
        Session::put("twofactor",$otpsent);
        Mail::to(auth()->user()->email)->send(new TwoFactorMail($otpsent));
/*        Mail::raw("Your otp is : {$otpsent}", function($message){
           $message->to(auth()->user()->email)
               ->subject('Two Factor Authentication');
        });*/
        return view('twofactor');
    }

    public function check(){
        $otpsent = Session::get("twofactor");
        $pass = $_POST["password"];
        if($otpsent == $pass){
            return redirect('/home');
        } else{
            return redirect('/twofactor')
                ->with('message', 'Wrong OTP entered');
        }
    }
}
