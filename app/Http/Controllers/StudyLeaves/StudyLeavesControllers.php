<?php

namespace App\Http\Controllers\StudyLeaves;

use App\Models\StudyLeaves;
use Illuminate\Http\Request;
use App\Models\AcademicYears;
use App\Exports\StudyLeaveExport;
use App\Imports\StudyLeaveImport;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;
use App\DataTables\StudyLeaveDataTable;
use App\Http\Requests\StudyLeaves\StudyLeavesRequest;
use Illuminate\Support\Facades\Auth;

class StudyLeavesControllers extends Controller
{
    public function list(StudyLeaveDataTable $dataTable){
        return $dataTable->render('studyleaves.list');
    }

    public function create(){
        return view('studyleaves.create');
    }

    public function store(StudyLeavesRequest $request){
        try{
            $count = count(StudyLeaves::all()) + 1;
            $studyleave = StudyLeaves::create([
                'doc_ref'=>$request->doc_ref.gmdate('Y').'/'.$count,
                'academicsyears_id'=> AcademicYears::where('is_active',true)->first()->id,
                'letter_date'=>$request->letter_date,
                'region'=>$request->region,
                'effect_date'=>$request->effect_date,
                'name'=>$request->name,
                'regno'=>$request->regno,
                'staffid'=>$request->staffid,
                'rank'=>$request->rank,
                'age'=>$request->age,
                'yrs_service'=>$request->yrs_service,
                'yrs_after_last_course'=>$request->yrs_after_last_course,
                'institution'=>$request->institution,
                'course'=>$request->course,
                'district'=>$request->district,
                'duration'=>$request->duration,
                'yr_comppletion'=>$request->yr_completion,
                'current_School'=>$request->current_school,
                'doc_count'=>$request->doc_count,
            ]);
            return redirect()->route('studyleave.list')->with('success','Study Leave letter created successfully');
        }catch(\Exception $e){
            return redirect()->route('studyleave.list')->with('v-error',$e->getMessage());
        }
    }

    public function edit(){
        return view('studyleaves.edit');
    }

    public function update(){
        return view('studyleaves.update');
    }
    public function delete(){
        return view('studyleaves.delete');
    }

    public function export(){
        return Excel::download(new StudyLeaveExport, 'study-leaves.xlsx');
    }
    public function import(Request $request){
        Excel::import(new StudyLeaveImport, $request->file('file'));
        return response()->json(['status'=>200,'message'=>'Study Leave letter created successfully'],200);

    }

    public function printSingle($id){
        $studyleave = StudyLeaves::find(decrypt($id));
        $studyleave->status = 'printed';
        $studyleave->printed_by = Auth::user()->id;
        $studyleave->save();
        return view('studyleaves.studyleaveletter',compact('studyleave'));
    }

    public function printAll(){
        $studyleaves = StudyLeaves::all();
        foreach($studyleaves as $item){
            $item->status = 'printed';
            $item->printed_by = Auth::user()->id;
            $item->save();
        }
        return view('studyleaves.printAll.print_all',compact('studyleaves'));
    }

    public function deleted($id){
        $studyleave = StudyLeaves::find(decrypt($id));
        $studyleave->deleted_by = Auth::user()->id;
        $studyleave->save();

        $studyleave->delete();

        return view('studyleaves.studyleaveletter',compact('studyleave'));
    }


    public function verifyLetter($id){
        $myid = trim($id);
        $code = decrypt($myid);
        dd($code);
        $studyleave = StudyLeaves::where('serial_number',$code)->first();
        if($studyleave){
            return view('studyleaves.verify',compact('studyleave'));
        }
        return view('studyleaves.notverify');

    }
}
