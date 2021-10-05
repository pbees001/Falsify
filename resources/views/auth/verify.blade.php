@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Admin needs to approve your account') }}</div>

                <div class="card-body">
                    @if (session('resent'))
                        <div class="alert alert-success" role="alert">
                            {{ __('Your account request has been successfully submitted to admin.') }}
                        </div>
                    @endif
                        {{ __('You can use it once approved by admin.') }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
