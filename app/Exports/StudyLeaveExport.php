<?php

namespace App\Exports;

use App\Models\StudyLeaves;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;


/**
 * Exports study leave data to an Excel file.
 */
class StudyLeaveExport implements FromCollection, WithHeadings
{
    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'doc_count',
            'doc_ref',
            'letter_date',
            'region',
            'effect_date',
            'name',
            'regno',
            'staffid',
            'rank',
            'age',
            'yrs_service',
            'yrs_after_last_course',
            'institution',
            'course',
            'district',
            'duration',
            'yr_comppletion',
            'current_School',
        ];
    }

     /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return StudyLeaves::all();
    }
}
