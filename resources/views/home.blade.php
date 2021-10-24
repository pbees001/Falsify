@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="cardfixed">
                <table>
                    <tr>
                        <td class="cardtd">
                            Original Article
                            @yield('leftpane')
                        </td>
                        <td class="cardtd">
                            <link href="{{ asset('css/app2.css') }}" rel="stylesheet">
                            <div class="tabset">
                                <!-- Tab 1 -->
                                <input type="radio" name="tabset" id="tab1" aria-controls="credibility" checked>
                                <label for="tab1">Credibility Dashboard</label>
                                <!-- Tab 2 -->
                                <input type="radio" name="tabset" id="tab2" aria-controls="snopes">
                                <label for="tab2">Snopes.com</label>
                                <!-- Tab 3 -->
                                <input type="radio" name="tabset" id="tab3" aria-controls="survey">
                                <label for="tab3">Survey page</label>

                                <div class="tab-panels">
                                    <section id="credibility" class="tab-panel">
                                        @yield('rightpane1')
                                    </section>
                                    <section id="snopes" class="tab-panel">
                                        @yield('rightpane2')
                                    </section>
                                    <section id="survey" class="tab-panel">
                                        @yield('rightpane3')
                                    </section>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>

            </div>
        </div>
    </div>
</div>
@endsection

@section('searchbox')
    @include('searchlayout')
@endsection

@section('tabbedpane')

@endsection
