<?php

namespace App\Http\Controllers;

use Elasticsearch\Client;
use Elasticsearch\ClientBuilder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use function MongoDB\BSON\toJSON;
use Carbon\Carbon;

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
                'size' => 40,
                'query' => [
                    'match' => [
                        'content' => [
                            'query' => $_POST["searchtext"],
                            'fuzziness' => 'AUTO'
                        ]
                    ]
                ]
            ]
        ];

        $responce = $this->elasticsearch->search($params);

/*        for ($i=0;$i<$responce["hits"]["total"]["value"];$i++) {
            print_r($responce["hits"]["hits"][$i]["_id"]); $_POST["searchtext"]
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
        $id = (int)request('id');
        $q1 = (int)request('ques1');
        $q2 = (int)request('ques2');
        $q3 = (int)request('ques3');
        $q4 = (int)request('ques4');
        $q5 = (int)request('ques5');
        $res = $q1.$q2.$q3.$q4.$q5;
        if($res!="") {
            $val = DB::table('users')->where('id', Auth::user()->id)->first();
            if ($val->survey != $res) {
                $id = (int)request('id');
                $result = strval($val->survey).strval($id).'-'.$res.';';
//                echo $result;
                DB::select('Update users set survey = " '. $result .'" where id = ' . Auth::user()->id);
            }
        }
        if ($id >= 1 && $id <= 50) {
            return view('searchresultshelper', [
                'id' => $id
            ]);
        } else {
            return view('home');
        }
    }

    public function dosearchapi(){
        $terms = request('query');
        $limit = request('n');
        $key = request('key');

        $resultids = (array)DB::select('select id from oauth_access_tokens');
        $resultstr = json_encode($resultids);
        if (str_contains($resultstr, $key)) {
                    $params = [
                        'index' => 'articlesearch1',
                        'body' => [
                            '_source' => ["id","title","content"],
                            'size' => $limit,
                            'query' => [
                                'match' => [
                                    'content' => [
                                        'query' => $terms,
                                        'fuzziness' => 'AUTO'
                                    ]
                                ]
                            ]
                        ]
                    ];

            $responce = $this->elasticsearch->search($params);
#            return $responce;
            $rank = 1;
            $current_date_time = Carbon::now()->toDateTimeString();
            while($rank <= $limit && $rank <= $responce["hits"]["total"]["value"])
            {
                $result[$rank]['ranking'] = $rank;
                $result[$rank]['article_id'] = $responce["hits"]["hits"][$rank-1]["_id"];
                $result[$rank]['title'] = $responce["hits"]["hits"][$rank-1]["_source"]["title"];
//                $result[$rank]['content'] = $responce["hits"]["hits"][$rank-1]["_source"]["content"];
                $result[$rank]['timestamp'] =$current_date_time;
                $rank+=1;
            }
            return response()->json(['response'=>$result], 200);
        } else {
            return response()->json(['error' => 'UnAuthorised Access'], 401);
        }
    }

}
