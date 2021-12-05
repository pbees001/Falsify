@extends('layouts.app')

@section('content')
    <br><br><br>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Two Factor Authentication') }}</div>

                    <div class="card-body">
                        <form method="POST" action="{{ route('twofactor') }}">
                            @csrf

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Check OTP sent to mail') }}</label>

                                <div class="col-md-6">
                                    <input id="password" class="form-control" type="text" name="password">

                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Submit OTP') }}
                                    </button>
                                    @if (session('message'))
                                        <p class="text-danger text-xs mt-2">
                                            Wrong OTP entered
                                        </p>
                                    @endif

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <main class="py-4">
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </main>
@endsection
