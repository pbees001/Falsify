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
                                        <h2>6A. Märzen</h2>
                                        <p><strong>Overall Impression:</strong> An elegant, malty German amber lager with a clean, rich, toasty and bready malt flavor, restrained bitterness, and a dry finish that encourages another drink. The overall malt impression is soft, elegant, and complex, with a rich aftertaste that is never cloying or heavy.</p>
                                        <p><strong>History:</strong> As the name suggests, brewed as a stronger “March beer” in March and lagered in cold caves over the summer. Modern versions trace back to the lager developed by Spaten in 1841, contemporaneous to the development of Vienna lager. However, the Märzen name is much older than 1841; the early ones were dark brown, and in Austria the name implied a strength band (14 °P) rather than a style. The German amber lager version (in the Viennese style of the time) was first served at Oktoberfest in 1872, a tradition that lasted until 1990 when the golden Festbier was adopted as the standard festival beer.</p>
                                    </section>
                                    <section id="snopes" class="tab-panel">
                                        @yield('rightpane2')
                                    </section>
                                    <section id="survey" class="tab-panel">
                                        @yield('rightpane3')
                                        <h2>6C. Dunkles Bock</h2>
                                        <p><strong>Overall Impression:</strong> A dark, strong, malty German lager beer that emphasizes the malty-rich and somewhat toasty qualities of continental malts without being sweet in the finish.</p>
                                        <p><strong>History:</strong> Originated in the Northern German city of Einbeck, which was a brewing center and popular exporter in the days of the Hanseatic League (14th to 17th century). Recreated in Munich starting in the 17th century. The name “bock” is based on a corruption of the name “Einbeck” in the Bavarian dialect, and was thus only used after the beer came to Munich. “Bock” also means “Ram” in German, and is often used in logos and advertisements.</p>
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
