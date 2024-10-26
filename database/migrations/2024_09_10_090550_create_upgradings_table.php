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
        Schema::create('upgradings', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('regdno')->nullable();
            $table->string('staffid');
            $table->string('address');
            $table->string('degree');
            $table->string('school');
            $table->string('monthYearCompleted');
            $table->string('upgrade_from');
            $table->string('upgrade_to');
            $table->string('effectDate');
            $table->string('gradeStep');
            $table->foreignId('users_id')->references('id')->on('users');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('upgradings');
    }
};
