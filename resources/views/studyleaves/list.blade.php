@extends('layouts.app')
@section('title','Upgrading List')
@section('content')
<div class="container-fluid">
    <br>
        <div class="card">
        <div class="card-heaer">
            <div class="row" style="margin-left: 10px;margin-right: 10px;margin-top: 10px;">
                <div class="col-4">
                    <h4>Study Leave List</h4>
                </div>
                <div class="col-8 text-right" style="float: ">

                    <a href="{{ route('studyleave.create') }}" class="btn btn-primary">Add New Staff</a>
                    <a href="{{ route('studyleave.export') }}" class="btn btn-success">Export Excel</a>
                    <button data-bs-toggle="modal" data-bs-target="#importVendorForm" class="btn btn-warning">Import Excel</button>
                    <a href="{{ route('studyleave.printAll') }}" target="_blank" class="btn btn-info">Print All</a>
                    &nbsp;
                    <a class="btn btn-default" href="{{ asset('sample/study-leaves.xlsx') }}">Download Sample Excel File</a>
                </div>
            </div>
        </div>
        <hr>
        <div class="card-body">
            {{ $dataTable->table() }}
        </div>
    </div>
</div>
{{-- Template for Modal --}}
    <div class="modal fade" id="importVendorForm" tabindex="-1" role="dialog" aria-labelledby="vendorFlagsModal" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Import Study Leave Data</h5>
                    <button type="button" class="close d-none" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <form id="vImportForm" enctype="multipart/form-data" >
                    @csrf
                    <div class="modal-body">
                        <input type="file" name="file" id="vendor_import_input" class="form-control" accept=".xls, .xlsx, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" required>
                        <span id="upload_status" class="d-none"></span>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="btnSubmit" class="btn btn-primary">Submit</button>
                        <button type="button" id="closeVendorImport" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Close</button>
                    </div>
                    <div class="text-center" id="loader" style="display: none;">
                        <style>

                            .progress-container {
                                width: 100%;
                                background-color: #ddd;
                                border-radius: 5px;
                                overflow: hidden;
                                height: 30px;
                                margin: 20px 0;
                            }

                            .progress-bar {
                                height: 100%;
                                width: 0; /* Start at 0% */
                                background-color: #4caf50; /* Green */
                                transition: width 0.5s ease; /* Smooth transition */
                            }
                        </style>

                        <div class="progress-container">
                            <div class="progress-bar" id="progress-bar"></div>
                        </div>
                        <span id="splabel"></span>
                    </div>
                </form>

            </div>
        </div>
    </div>


@endsection
@push('js')
{{ $dataTable->scripts(attributes: ['type' => 'module']) }}

<script>
    document.getElementById('btnSubmit').addEventListener('click', function (e) {
            e.preventDefault();
            let numb = 1;
            let formData = new FormData();
            let file = document.getElementById('vendor_import_input').files[0];
            formData.append('file', file);

            $('#btnSubmit').prop('disabled',true);
            $('#closeVendorImport').prop('disabled',true);
            $('#loader').css('display', 'block');
            $('#splabel').text('Loading.....');

            let progressBar = document.getElementById('progress-bar');
            let width = 0;

            const interval = setInterval(function() {
                if (width >= 100) {
                    clearInterval(interval); // Stop the interval when 100% is reached
                } else {
                    width++; // Increment the width
                    progressBar.style.width = width + '%';
                    showlabel(width);
                }

            }, 800); // Adjust the speed (50ms interval for smoother animation)


            $.ajax({
                type: 'POST',
                url: '{{route('studyleave.import')}}',
                data: formData,
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                processData: false,
                contentType: false,
                success: function (res) {
                    if (res.status === 200) {
                        $('#loader').hide();
                        window.location.href = '{{route('studyleave.list')}}';
                    }
                }, error: function (xhr, status, error) {
                    $('#loader').hide();
                    alert('Error uploading file: ' + error);
                    $('#btnSubmit').prop('disabled',false);
                    $('#closeVendorImport').prop('disabled',false);
                }
            })
        });

        function showlabel(numb){
            if(numb === 1) {
                $('#splabel').text('Start Initializing...');
            }else if(numb === 2){
                $('#splabel').text('Adding  Study Leaves Data...');
            }
            else if(numb === 3)
            {
                $('#splabel').text('Saving or Updating Data...');
            }
            else{
                $('#splabel').text('Done... Please wait redirect Soon');

            }
        }

        $(document).ready(function(){
            $('#importVendorForm').modal({
                backdrop: 'static',  // Prevent close on clicking outside
                keyboard: false      // Optional: Prevent close on pressing the Esc key
            });
        })
</script>
@endpush
