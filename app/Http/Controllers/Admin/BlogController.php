<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\CrudController;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BlogController extends CrudController
{
    //


    public function __construct(Blog $data)
    {
        parent::__construct($data);
    }

    protected $index = 'Admin/Blogs/Index';
    protected $indexUrl = 'admin.blogs.index';
    protected $form = 'Admin/Blogs/Form';


    public function validationRules()
    {
        return [
            'title' => 'required',
            'content' => 'required',
        ];
    }

    public function withRelation()
    {
        return ['creator'];
    }


    public function update(Request $request, $id)
    { 
        try {
            $item = $this->model->findOrFail($id);
            $item->update($request->all()); 
            $tempImagePath = session('temp_blog_img');  
            if($tempImagePath){
                if (Storage::disk('public')->exists($tempImagePath)) {
                    // Add the temporarily stored image to the media collection
                    $item->addMedia(storage_path("app/public/{$tempImagePath}"))->toMediaCollection('default');
    
                    // Clean up temporary storage (if needed)
                    Storage::disk('public')->delete($tempImagePath);
    
                    session()->forget('temp_blog_img'); 
                } 
            }
           
           

            return redirect()->route($this->indexUrl);
        } catch (\Exception $e) {
            //throw $th; ddd
            dd($e);
            return response()->json(['message' => $e->getMessage()]);
        }


        return redirect()->back();
    }
}
