<?php

namespace App\Imports;

use Maatwebsite\Excel\Row;
use App\Models\StudyLeaves;
use App\Models\AcademicYears;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\OnEachRow;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class StudyLeaveImport implements OnEachRow,WithHeadingRow
{
    public function onRow($row)
    {
        $created_by = Auth::user()->id;
        $studyleave = StudyLeaves::where('staffid',$row['staffid'])->first();
        $count = count(StudyLeaves::all()) + 1;
        $doc_ref = $row['doc_ref'];
        if($studyleave){
           return $studyleave->update([
                'doc_ref'=>$doc_ref,
                'doc_count'=>$row['doc_count'],
                'academicsyears_id'=> AcademicYears::where('is_active',true)->first()->id,
                'letter_date'=>$row['letter_date'],
                'region'=>$row['region'],
                'effect_date'=>$row['effect_date'],
                'name'=>$row['name'],
                'regno'=>$row['regno'] == null ? 'NA' :$row['regno'] ,
                'staffid'=>$row['staffid'],
                'rank'=>$row['rank'],
                'age'=>$row['age'],
                'yrs_service'=>$row['yrs_service'],
                'yrs_after_last_course'=>$row['yrs_after_last_course'],
                'institution'=>$row['institution'],
                'course'=>$row['course'],
                'district'=>$row['district'],
                'duration'=>$row['duration'],
                'yr_comppletion'=>$row['yr_comppletion'],
                'current_School'=>$row['current_school'],
            ]);
        }
        return StudyLeaves::create([
                'doc_ref'=>$doc_ref,
                'doc_count'=>$row['doc_count'],
                'academicsyears_id'=> AcademicYears::where('is_active',true)->first()->id,
                'letter_date'=>$row['letter_date'],
                'region'=>$row['region']== null ? 'NA' :$row['region'] ,
                'effect_date'=>$row['effect_date'],
                'name'=>$row['name'],
                'regno'=>$row['regno'] == null ? 'NA' :$row['regno'] ,
                'staffid'=>$row['staffid'],
                'rank'=>$row['rank'],
                'age'=>$row['age'],
                'yrs_service'=>$row['yrs_service'],
                'yrs_after_last_course'=>$row['yrs_after_last_course'],
                'institution'=>$row['institution'],
                'course'=>$row['course'],
                'district'=>$row['district'],
                'duration'=>$row['duration'],
                'yr_comppletion'=>$row['yr_comppletion'],
                'current_School'=>$row['current_school'],
                'created_by'=>$created_by,
        ]);
    }

}
