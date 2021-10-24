@extends('home')

@section('leftpane')
    @include('FakeArticles/article'.$id)
@endsection

@section('rightpane1')

@endsection

@section('rightpane2')
    @include('SnopesPages/snopesarticle'.$id)
@endsection

@section('rightpane3')
    @include('underconstruction')
@endsection
