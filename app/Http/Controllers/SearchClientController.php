<?php

namespace App\Http\Controllers;

use Elasticsearch\Client;
use Elasticsearch\ClientBuilder;
use Illuminate\Http\Request;

class SearchClientController extends Controller
{
    //
    protected $elasticsearch;
    protected $esconfig;

    public function __construct() {
        $this->elasticsearch = ClientBuilder::create()->build();
/*        $this->esconfig = new Client([
            'host' => 'localhost',
            'port' => 9200,
            'index' => 'articlesearch1'
        ]);
        echo $this->esconfig;*/
    }

    public function dosearch(){
        $params = [
            'index' => 'articlesearch1',
            'body' => [
                '_source' => ["id","title","content"],
                'query' => [
                    'match' => [
                        'content' => $_POST["searchtext"]
                    ]
                ]
            ]
        ];

        $responce = $this->elasticsearch->search($params);

/*        for ($i=0;$i<$responce["hits"]["total"]["value"];$i++) {
            print_r($responce["hits"]["hits"][$i]["_id"]);
            echo '<br/>';
            print_r($responce["hits"]["hits"][$i]["_source"]["title"]);
            echo '<br/>';
            print_r($responce["hits"]["hits"][$i]["_source"]["content"]);
            echo '<br/>';
        }*/
//        dump($responce);
        return view('searchresults',[
            'responce' => $responce
        ]);
    }

    public function showcontent() {
        $id = request('id');
        return view('searchresultshelper', [
            'id' => $id
        ]);
    }

}
