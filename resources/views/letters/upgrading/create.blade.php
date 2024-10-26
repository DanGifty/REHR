@extends('layouts.app')
@section('title','Upgrading List')
@section('content')
<div class="container-fluid">
    <br>
    <div class="card">
        <div class="card-header">Create New Upgrading Letter</div>
        <div class="card-body">
            <form action="{{ route('upgrading.store') }}" method="POST">
                @csrf
                <div class="form-group">
                    <label for="letter_no">Letter No</label>
                    <input type="text" class="form-control" name="letter_no" id="letter_no" placeholder="Enter Letter No">
                </div>
                <div class="form-group">
                    <label for="letter_date">Letter Date</label>
                    <input type="date" class="form-control" name="letter_date" id="letter_date" placeholder="Enter Letter Date">
                </div>
                <div class="form-group">
                    <label for="letter_type">Letter Type</label>
                    <select class="form-control" name="letter_type" id="letter_type">
                        <option value="upgrading">Upgrading</option>
                    </select>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
