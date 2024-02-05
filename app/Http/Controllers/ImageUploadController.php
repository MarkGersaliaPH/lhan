<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;

class ImageUploadController extends Controller
{
    //

    public function upload(Request $request){ 
        $sessionId = session()->getId();

        $tempImage = $request->file('filepond');
        $tempImagePath = $tempImage->storeAs("temp_blog_img/{$sessionId}", $tempImage->getClientOriginalName(), 'public');
        
        // Corrected session set with an associative array
        session(['temp_blog_img' => $tempImagePath]);
        
        // Retrieve and dump the stored image path from the session 
        return response()->json(['message' => 'File uploaded successfully']);
  
    }
}
