@extends('layouts.app')

@section('content')
    <div class="container">
        <?php echo $responce["hits"]["total"]["value"]." results found" ?>
        <?php for ($i=0;$i<$responce["hits"]["total"]["value"];$i++): ?>
            <div class="container-sm">
                <a href="/results/?id=<?php echo $responce["hits"]["hits"][$i]["_id"] ?>" ><h2> <?php echo $responce["hits"]["hits"][$i]["_source"]["title"] ?></h2></a>
                <p><?php echo $responce["hits"]["hits"][$i]["_source"]["content"] ?></p>
            </div>
        <?php endfor ?>
    </div>
@endsection

