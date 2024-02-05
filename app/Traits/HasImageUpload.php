<?php

namespace App\Traits;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\InteractsWithMedia;

trait HasImageUpload
{

    use InteractsWithMedia;  // Trait from Spatie's Media Library

    protected static function bootHasImageUpload()
    {

        static::created(function($model){

             // Verify that the image belongs to the correct session
             $tempImagePath = session('temp_blog_img'); 
             if (Storage::disk('public')->exists($tempImagePath)) {
                 // Add the temporarily stored image to the media collection
                 $model->addMedia(storage_path("app/public/{$tempImagePath}"))->toMediaCollection('default');
 
                 // Clean up temporary storage (if needed)
                 Storage::disk('public')->delete($tempImagePath);
 
                 session()->forget('temp_blog_img');
             } else {
                 // Image doesn't belong to the correct session
                 // Handle accordingly (e.g., show an error, log the incident)
             }
        });
 
        // Append the 'image_url' accessor to the model
        static::retrieved(function ($model) {
            $model->append('image_url');
        }); 

        // Optional: Delete image when model is being deleted
        static::deleting(function ($model) {
            $model->clearMediaCollection('default');
        });
    }

    /**
     * Get URL of the associated image.
     *
     * @return string|null
     */
    public function getImageUrlAttribute()
    {
        return $this->getFirstMediaUrl('default');
    }
}
