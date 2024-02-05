<?php

namespace App\Models;

use App\Traits\HasImageUpload;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Blog extends Model implements HasMedia

{

    use HasFactory;
    use HasImageUpload;


    protected $fillable = [
        'title',
        'slug',
        'content',
        'created_by',
        'published_at',
        'status'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d h:m:s a',
        'updated_at' => 'datetime:Y-m-d h:m:s a',
    ];

    protected static function booted(): void
    {
        static::creating(function (Model $model) {
            // ...
            $model->slug = Str::slug($model->title);
            $model->created_by = auth()->id();
        });
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('default')
            ->singleFile();
    }
}
