<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('events', function (Blueprint $table) {
        $table->id();
        $table->foreignId('organisme_id')->constrained('users')->cascadeOnDelete();
        $table->string('title');
        $table->text('description')->nullable();
        $table->string('genre');
        $table->dateTime('date_start');
        $table->string('location');
        $table->decimal('price', 8, 2);
        $table->unsignedInteger('stock');
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
