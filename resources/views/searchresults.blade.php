@extends('layouts.app')

@section('content')
    <div class="container">
        <?php echo $responce["hits"]["total"]["value"]." results found" ?>
        <?php for ($i=0;$i < $responce["hits"]["total"]["value"];$i++): ?>
            <div class="container-sm">
                <?php
                    $responce["hits"]["hits"][$i]["_source"]["title"] = preg_replace('#'. preg_quote($_POST["searchtext"]) .'#i', '<span style="background-color: #F9F902;">\\0</span>', $responce["hits"]["hits"][$i]["_source"]["title"]);
                    $responce["hits"]["hits"][$i]["_source"]["content"] = preg_replace('#'. preg_quote($_POST["searchtext"]) .'#i', '<span style="background-color: #F9F902;">\\0</span>', $responce["hits"]["hits"][$i]["_source"]["content"]);
                ?>
                <a href="/results/?id=<?php echo $responce["hits"]["hits"][$i]["_id"] ?>" ><h2> <?php echo $responce["hits"]["hits"][$i]["_source"]["title"] ?></h2></a>
                <p class="limitcontent"><?php echo $responce["hits"]["hits"][$i]["_source"]["content"] ?></p>
            </div>
        <?php endfor ?>
    </div>
@endsection

