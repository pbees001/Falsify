<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class passportAuthController extends Controller
{
    /**
     * handle user registration request
     */
    public function registerUser(Request $request){//not used
        $this->validate($request,[
            'name'=>'required',
            'email'=>'required|email|unique:users',
            'password'=>'required|min:8',
        ]);
        $user= User::create([
            'name' =>$request->name,
            'email'=>$request->email,
            'password'=>bcrypt($request->password)
        ]);

        $access_token_example = $user->createToken('MyApp')->access_token;
        //return the access token we generated in the above step
        return response()->json(['token'=>$access_token_example],200);
    }

    public function registerUser2(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')-> accessToken;
        $success['name'] =  $user->name;
        return response()->json(['success'=>$success], 200);
    }

    /**
     * login user to our application
     */
    public function loginUser(Request $request){
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){
            //generate the token for the user
            $user_login_token= auth()->user()->createToken('MyApp')->accessToken;
            //now return this token on success login attempt
            $user = Auth::user();
            $id = $user->id;
            $token = DB::select('select id from oauth_access_tokens where user_id='.$id.' limit 1');
            return response()->json(['token' => $token], 200);
        }
        else{
            //wrong login credentials, return, user not authorised to our system, return error code 401
            return response()->json(['error' => 'UnAuthorised Access'], 401);
        }
    }

    /**
     * This method returns authenticated user details
     */
    public function authenticatedUserDetails(){
        //returns details
        return response()->json(['authenticated-user' => auth()->user()], 200);
    }
}
