<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\PersonalAccessToken;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Carbon\Carbon;
//use Intervention\Image\Facades\Image;
use PHPUnit\Exception;


/**
 * Class UserController.
 */
class UserController extends Controller
{

    public function login(Request $request)
    {

        // Inside login method:
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        Auth::login($user);
        // SUCCESS: The session is now authenticated

        $request->session()->regenerate(); // Security best practice

        if(Auth::user()) {
            return response()->json([
                'message' => 'Login successful',
                'user' => Auth::user()
            ], 200);
        } else {
            return response()->json([
                'message' => 'Invalid email or password'
            ], 401);
        }        
    }

    /** Change admin password
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updatePassword(Request $request)
    {
        // Validation
        $request->validate([
            'password' => 'min:6|required_with:password_confirmation|same:password_confirmation',
            'password_confirmation' => 'min:6'
        ]);

        // Update the new Password
        User::whereId(auth()->user()->id)->update([
            'password' => Hash::make($request->password)
        ]);

        // Response
        return response()->json([
            'status' => 'success',
        ]);
    }
}
