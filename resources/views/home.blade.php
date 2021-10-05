@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    @auth
                        {{ Auth::user()->name }}
                    @endauth

                    You are logged in!

            </div>
        </div>
    </div>
</div>
@endsection

@section('searchbox')
    @include('searchlayout')
@endsection

@section('adminbutton')
        @auth()
            @if(auth()->user()->email == 'admin@gmail.com')
                <form method="GET" action="{{route('adminrequests')}}">
                    <input type="submit" class="button" value="Admin Request">
                </form>
            @endif
        @endauth
@endsection
