@extends('home')

@section('leftpane')
    @include('FakeArticles/article'.$id)
@endsection

@section('rightpane1')
    <?php
        $string = file_get_contents("/Users/aruntella/Desktop/Priyatham/Courses/518 - Web Programming/Project/git/CS-518-WebProject/public/researchpapers2.json");
        $json = json_decode($string);
        $ct=$id-1;?>
    <?php
        for($it=0;$it<10;$it++){
    ?>
    <button type="button" class="collapsibles">Relevant paper {{$it+1}}: {{$json->$ct->$it->title}} </button>
    <div class="contents">
        <p><strong>Title: </strong>{{$json->$ct->$it->title}}</p>
        <p><strong>Authors: </strong>
            <?php
                foreach ($json->$ct->$it->authors as $authors) {
                    echo $authors,", ";
                }
            ?>
        </p>
        <p><strong>Citations: </strong>{{$json->$ct->$it->citations}}</p>
        <p><strong>Year: </strong>{{$json->$ct->$it->year}}</p>
        <p><strong>Venue: </strong>{{$json->$ct->$it->venue}}</p>
        <p><strong>Abstract: </strong>{{$json->$ct->$it->abstract}}</p>
    </div>
    <?php }?>
@endsection

@section('rightpane2')
    @include('SnopesPages/snopesarticle'.$id)
@endsection

@section('rightpane3')
    @include('surveypage')
@endsection

<?php
    if(isset($_GET['ques1'])){
        echo "inside search results";
        }
    ?>
