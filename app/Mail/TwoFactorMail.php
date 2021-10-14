<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TwoFactorMail extends Mailable
{
    use Queueable, SerializesModels;
    protected $otp,$name;

    public function __construct($otpsent){
        $this->otp = $otpsent;
        $this->name = auth()->user()->name;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Two Factor Authentication')
            ->with([
                'otp' => $this->otp,
                'name' => $this->name
                ])
            ->markdown('twofactormailcontent');
    }
}
