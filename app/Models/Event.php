<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'organisme_id',
        'title',
        'description',
        'genre',
        'date_start',
        'location',
        'price',
        'stock',
    ];

    public function organisme()
    {
        return $this->belongsTo(User::class, 'organisme_id');
    }
}