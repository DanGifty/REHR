@extends('layouts.app')
@section('title','Upgrading List')
@section('content')
<div class="container-fluid">
    <br>
        <div class="card">
        <div class="card-heaer">
            <div class="row" style="margin-left: 10px;margin-right: 10px;margin-top: 10px;">
                <div class="col-9">
                    <h4>Upgrading List</h4>
                </div>
                <div class="col-3 text-right">
                    <a href="{{ route('upgrading.create') }}" class="btn btn-primary">Add Upgrading</a>
                </div>
            </div>
        </div>
        <div class="card-body">
            {{ $dataTable->table() }}
        </div>
    </div>
</div>
@endsection
@push('js')
{{ $dataTable->scripts(attributes: ['type' => 'module']) }}
@endpush
