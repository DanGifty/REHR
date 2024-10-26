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
        Schema::create('study_leaves', function (Blueprint $table) {
            $table->id();
            $table->string('serial_number');
            $table->string('doc_count');
            $table->string('doc_ref');
            $table->string('letter_date');
            $table->foreignId('academicsyears_id')->references('id')->on('academicsyears')->onDelete('cascade');
            $table->string('region');
            $table->string('effect_date');
            $table->string('name');
            $table->string('regno');
            $table->string('staffid');
            $table->string('rank');
            $table->string('age');
            $table->string('yrs_service');
            $table->string('yrs_after_last_course');
            $table->string('institution');
            $table->string('course');
            $table->string('district');
            $table->string('duration');
            $table->string('yr_comppletion');
            $table->string('current_School');
            $table->foreignId('deleted_by')->nullable()->references('id')->on('users')->onDelete('cascade');
            $table->foreignId('created_by')->nullable()->references('id')->on('users')->onDelete('cascade');
            $table->enum('status',['pending','approved','rejected','printed'])->default('pending');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('study_leaves');
    }
};
