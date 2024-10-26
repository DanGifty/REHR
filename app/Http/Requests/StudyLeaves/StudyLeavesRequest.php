<?php

namespace App\Http\Requests\StudyLeaves;

use Illuminate\Foundation\Http\FormRequest;

class StudyLeavesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'letter_date'=>'required',
            'region'=>'required',
            'effect_date'=>'required',
            'name'=>'required',
            'regno'=>'required|unique:study_leaves,regno,except,id',
            'staffid'=>'required|unique:study_leaves,staffid,except,id',
            'rank'=>'required',
            'age'=>'required',
            'yrs_service'=>'required',
            'yrs_after_last_course'=>'required',
            'institution'=>'required',
            'course'=>'required',
            'district'=>'required',
            'duration'=>'required',
            'yr_completion'=>'required',
            'current_school'=>'required',
            'doc_count'=>'required',
        ];
    }

    public function messages(): array
    {
        return [
            'letter_date.required'=>'Letter Date is required',
            'region.required'=>'Region is required',
            'effect_date.required'=>'Effect Date is required',
            'name.required'=>'Name is required',
            'regno.required'=>'Registration Number is required',
            'regno.unique'=>'Registration Number already exists',
            'staffid.required'=>'Staff ID is required',
            'staffid.unique'=>'Staff ID already exists',
            'rank.required'=>'Rank is required',
            'age.required'=>'Age is required',
            'yrs_service.required'=>'Years of Service is required',
            'yrs_after_last_course.required'=>'Years after last course is required',
            'institution.required'=>'Institution is required',
            'course.required'=>'Course is required',
            'district.required'=>'District is required',
            'duration.required'=>'Duration is required',
            'yr_completion.required'=>'Year of Completion is required',
            'current_School.required'=>'Current School is required',
            'doc_count.required'=>'Document Count is required',
        ];
    }


}
