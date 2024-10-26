@extends('layouts.app')
@section('title','Study Leave')
@section('content')
<form class="row mt-2 mx-2 g-4 fv-plugins-bootstrap5 fv-plugins-framework" action="{{route('studyleave.store')}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="flex-grow-1 container-p-y container-fluid">
        <div class="row">
            @if(session()->has('v-error'))
                <div style="margin-left: 10px;">
                    <div class="alert alert-danger" role="alert">{{session()->get('v-error')}}</div>
                </div>
            @endif

            <div class="card mb-4">
                <h5 class="card-header">New Study Leave Staff </h5>
                <hr>
                @if($errors->any())
                    <div class="errorVals">
                        @foreach ($errors->all() as $error)
                        <div>{{ $error }}</div>
                        @endforeach
                    </div>
                    @endif
                    <div class="card-body mt-4">
                        <div class="row mb-3">
                            <div class="col-3 col-md-3 fv-plugins-icon-container">
                                <label class="form-label">Letter Reference</label>
                                <input type="text" name="doc_ref" value="" class="form-control" >
                            </div>

                            <div class="col-3 col-md-3 fv-plugins-icon-container">
                                <label class="form-label">Letter Date</label>
                                <input type="text" name="letter_date" value="" class="form-control" >
                            </div>
                            <div class="col-3 col-md-3 fv-plugins-icon-container">
                                <label class="form-label">Region</label>
                                <select name="region" id="region" class="form-control">
                                    <option value="">Select Region</option>
                                    <option value="CENTRAL">CENTRAL</option>
                                </select>
                            </div>

                            <div class="col-3 col-md-3 fv-plugins-icon-container">
                                <label class="form-label">Effective Date</label>
                                <input type="text" name="effect_date" value="" class="form-control" >
                            </div>
                        </div>
                        <hr/>
                        <div class="row">
                            <div class="col-4 col-md-4 fv-plugins-icon-container">
                                <label class="form-label">Name</label>
                                <input type="text" name="name" value="" class="form-control" >
                            </div>

                            <div class="col-4 col-md-4 fv-plugins-icon-container">
                                <label class="form-label">Registered Number</label>
                                <input type="text" name="regno" value="" class="form-control" >
                            </div>
                            <div class="col-4 col-md-4 fv-plugins-icon-container">
                                <label class="form-label">Staff Id</label>
                                <input type="text" name="staffid" value="" class="form-control" >
                            </div>
                            <div class="col-4 col-md-4 fv-plugins-icon-container">
                                <label class="form-label">Rank</label>
                                <select name="rank" id="rank" class="form-control">
                                    <option value="">Select Rank</option>
                                    <option value="PS">PS</option>
                                </select>
                            </div>
                            <div class="col-2 col-md-2 fv-plugins-icon-container">
                                <label class="form-label">Age</label>
                                <input type="number" name="age" value="" class="form-control" >
                            </div>
                            <div class="col-2 col-md-2 fv-plugins-icon-container">
                                <label class="form-label">Years Service</label>
                                <input type="number" name="yrs_service" value="" class="form-control" >
                            </div>
                            <div class="col-2 col-md-2 fv-plugins-icon-container">
                                <label class="form-label">Year Last Course</label>
                                <input type="number" name="yrs_after_last_course" value="" class="form-control" >
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-4 col-md-4 fv-plugins-icon-container">
                                <label class="form-label">Institution</label>
                                <input type="text" name="institution" value="" class="form-control" />
                            </div>

                            <div class="col-4 col-md-4 fv-plugins-icon-container">
                                <label class="form-label">Course</label>
                                <input type="text" name="course" value="" class="form-control" />
                            </div>
                            <div class="col-4 col-md-4 fv-plugins-icon-container">
                                <label class="form-label">District</label>
                                <select  name="district"  class="form-control" id="district">
                                    <option value="">Select District</option>
                                    <option value="NJN">NJN</option>
                                </select>
                            </div>

                            <div class="col-2 col-md-2 fv-plugins-icon-container">
                                <label class="form-label">Duration</label>
                                <input type="text" name="duration" value="" class="form-control" />
                            </div>
                            <div class="col-2 col-md-2 fv-plugins-icon-container">
                                <label class="form-label">Year Completion</label>
                                <input type="text" name="yr_completion" value="" class="form-control" />
                            </div>
                            <div class="col-4 col-md-4 fv-plugins-icon-container">
                                <label class="form-label">Current School</label>
                                <input type="text" name="current_school" value="" class="form-control" />
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-12 col-md-12 fv-plugins-icon-container">
                                <button type="submit" class="btn btn-primary">Submit</button>
                                <a  href="{{ route('studyleave.list') }}" class="btn btn-default">Cancel</a>
                            </div>
                        </div>

                    </div>
            </div>
        </div>
    </div>
</form>

@endsection
