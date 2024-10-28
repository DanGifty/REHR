<!DOCTYPE html>
<html
    lang="en"
    class="light-style layout-wide"
    dir="ltr"
    data-theme="theme-default"
    data-assets-path="../../assets/"
    data-template="vertical-menu-template">
<head>
    <meta charset="utf-8" />
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
        {{-- <style>
            @media print {
                body {
                    font-family: 'Public Sans', sans-serif; /* Change to your desired font family */
                    font-size: 8pt; /* Adjust font size */
                    line-height: 1.0; /* Adjust line height */
                    margin: 0;
                    padding: 0;
                }

                .print-content {
                    margin: 20px;
                }

                .no-print {
                    display: none;
                }

                /* Adjust table styles */
                table {
                    width: 100%;
                    border-collapse: collapse;
                }

                th, td {
                    border: 1px solid #dee2e6; /* Adjust border color */
                    padding: 8px;
                    text-align: left;
                }

                th {
                    background-color: #f8f9fa; /* Adjust header background color */
                }

                /* Adjust other element styles */
                h1, h2, h3, h4, h5, h6 {
                    margin-top: 0;
                    margin-bottom: 0.5rem;
                }

                p {
                    margin-top: 0;
                    margin-bottom: 0.5rem;
                }

                /* Optionally hide certain elements for printing */
                .no-print {
                    display: none;
                }

                /* Set page orientation to landscape */
                @page {
                    size: landscape;
                }
            }
            .watermark-container {
                position: relative;
                width: 100%;
                height: 900px;
                background-color: #f9f9f9;
                border: 1px solid #ccc;
                background-image: url('../bg_ca.png'); /* Path to the watermark image */
                background-position: center;
                background-repeat: no-repeat;
                background-size: 700px; /* Adjust size of the watermark */
                opacity: 0.1; /* Adjust opacity for the watermark effect */
            }
        </style> --}}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&ampdisplay=swap"
            rel="stylesheet" />

        <!-- Icons -->
        <link rel="stylesheet" href="{{asset('vendor/fonts/fontawesome.css')}}" />
        <link rel="stylesheet" href="{{asset('vendor/fonts/tabler-icons.css')}}" />
        <link rel="stylesheet" href="{{asset('vendor/fonts/flag-icons.css')}}" />

        <!-- Core CSS -->
        <link rel="stylesheet" href="{{asset('vendor/css/rtl/core.css')}}"/>
        <link rel="stylesheet" href="{{asset('vendor/css/rtl/theme-default.css')}}"/>
        {{--    <link rel="stylesheet" href="{{asset('css/demo.css')}}" />--}}

        <!-- Vendors CSS -->
        <link rel="stylesheet" href="{{asset('vendor/libs/node-waves/node-waves.css')}}" />
        <link rel="stylesheet" href="{{asset('vendor/libs/perfect-scrollbar/perfect-scrollbar.css')}}" />
        <link rel="stylesheet" href="{{asset('vendor/libs/typeahead-js/typeahead.css')}}" />
        <link rel="stylesheet" href="{{asset('vendor/libs/apex-charts/apex-charts.css')}}" />
        <link rel="stylesheet" href="{{asset('vendor/libs/swiper/swiper.css')}}" />
        <link rel="stylesheet" href="{{asset('vendor/libs/datatables-bs5/datatables.bootstrap5.css')}}" />
        <link rel="stylesheet" href="{{asset('vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css')}}" />
        <link rel="stylesheet" href="{{asset('vendor/libs/datatables-checkboxes-jquery/datatables.checkboxes.css')}}" />
        <link rel="stylesheet" href="{{asset('vendor/libs/toastr/toastr.css')}}" />
        <link rel="stylesheet" href="{{asset('vendor/libs/sweetalert2/sweetalert2.css')}}" />

        @stack('css')
        <!-- Page CSS -->
        <link rel="stylesheet" href="{{asset('vendor/css/pages/cards-advance.css')}}" />

        <!-- Helpers -->
        <script src="{{asset('vendor/js/helpers.js')}}"></script>
        <script src="{{asset('js/config.js')}}"></script>

        <style >
            table {
                border: 1px solid #0000;
            }
            #myspace {
                    height: 10px;
            }
            .watermark-image{
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    /* background: url('{{ asset("bg_ca.png") }}') center center no-repeat; */
                    background-size: contain; /* Adjust the size of the watermark */
                    opacity: 0.1; /* Light opacity */
                    z-index: -1; /* Keep the watermark behind the content */
                    pointer-events: none;
            }
            @media print {
                .watermark-image{
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    /* background: url('{{ asset("bg_ca.png") }}') center center no-repeat; */
                    background-size: contain; /* Adjust the size of the watermark */
                    opacity: 0.1; /* Light opacity */
                    z-index: -1; /* Keep the watermark behind the content */
                    pointer-events: none;
                }
                #bprintTable {
                    border-collapse: collapse;
                    width: 100%;
                    transform: scale(0.9);
                    transform-origin: top left;
                }
                #bprintTable th {
                    border: 1px solid black !important; /* Apply a solid black border */
                    padding: 5px;
                    font-size: 9px;
                    font-weight: bolder;
                    text-align: center;
                    font-family: 'Times New Roman, Times, serif';
                }
                #bprintTable td {
                    border: 1px solid black !important; /* Apply a solid black border */
                    padding: 5px;
                    font-size: 11px;
                    text-align: center;
                    font-weight: bolder;
                    font-family: 'Times New Roman Times, serif';

                }
                body {
                    margin: 0;
                    padding: 0;
                }
                .numbWid {
                    width: 10px;
                }
                .page-break {
                    page-break-before: always; /* Forces the next content to start on a new page */
                }
                #myspace {
                    height: 15px;
                }
                #mywidth {
                    width: 40%;
                }

            }
        </style>
</head>
<body  style="background-color: white">
    <div>
        <img class="watermark-image" src="{{ asset('bg_ca.png') }}" alt="">
    </div>
    <div class=" invoice-print p-12">
        @include('letters.tags.headerlables')

        <div class="d-flex justify-content-between flex-row">
            <div class="mb-6"></div>
            <div class="mb-6 text-center" style="margin-top: -5px">
                <p style="text-decoration: underline;font-weight: 800;font-size: 12px; font-family: 'Times New Roman', Times, serif'">APPROVAL OF STUDY LEAVE WITH PAY: 2024-2025 ACADEMIC YEAR</p>
            </div>
            <div class="mb-6"></div>
        </div>

        {{-- Wordings --}}
        <div class="d-flex justify-content-between flex-row">
            <div class="mb-12" style="font-size: 12px; font-family: 'Times New Roman', Times, serif'">
                <p style="margin-top: -10px">This is to inform you that the Director-General of Ghana Education Service has granted you Study Leave with effect from 1st October, 2024</p>
                <p style="margin-top: -10px">In line with the Study Leave Policy, salaries are paid by the Regional Directors of Education in the Regions where the Institutions are situated.  You are therefore, advised to liaise with the Regional Director of Education, <b>{{ $studyleave->region }}</b> to enable you complete relevant IPPD Forms to facilitate your salary transfer.</p>
                <p style="margin-top: -10px">You are also expected to fill Monitoring and Bond Forms and forward them to the above address.</p>
                <p style="margin-top: -10px">Should there be the need for deferment/suspension of course, approval must be sought in writing from the Director-General (GES), through the Regional Director.</p>
                <p style="margin-top: -10px">In case of withdrawal, inform the Director-General in writing through the Regional Director in the Region where the institution is located.  By a copy of this letter, the Regional Director of Education, <b>{{ $studyleave->region }}</b> should please take note of the duration and pay the salary for the specified period only.</p>
            </div>
        </div>

        {{-- TABLES --}}
        <div id="myspace"></div>
        <div style="margin-top: -15px">
                <table style="border: 1px solid black;"  id="bprintTable" class="table table-bordered responsive-table">
                    <thead>
                        <tr>
                            <th class="numbWid">NO</th>
                            <th>NAME</th>
                            <th>REGD. NO.</th>
                            <th >STAFF NO.</th>
                            <th>RANK</th>
                            <th>AGE</th>
                            <th class="numbWid">YRS. OF SERVICE</th>
                            <th>YRS. AFTER LAST COURSE</th>
                            <th>INST.</th>
                            <th>COURSE</th>
                            <th>DISTRICT</th>
                            <th>DURATION</th>
                            <th>YEAR OF COMPLETION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="numbWid">{{ $studyleave->doc_count }}</td>
                            <td>{{ $studyleave->name }}</td>
                            <td>{{ $studyleave->regno }}</td>
                            <td>{{ $studyleave->staffid }}</td>
                            <td>{{ $studyleave->rank }}</td>
                            <td>{{ $studyleave->age }}</td>
                            <td class="numbWid">{{ $studyleave->yrs_service }}</td>
                            <td>{{ $studyleave->yrs_after_last_course }}</td>
                            <td>{{ $studyleave->institution }}</td>
                            <td>{{ $studyleave->course }}</td>
                            <td>{{ $studyleave->district }}</td>
                            <td>{{ $studyleave->duration }}</td>
                            <td>{{ $studyleave->yr_comppletion }}</td>
                        </tr>
                    </tbody>
                </table>
                <p style="font-size: 10px;font-weight: 400; font-family: 'Times New Roman', Times, serif'"><b>NOTE: You have within three (3) months to transfer your salary to your new station or risk being deleted from the payroll.</b></p>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-md-4" style="font-size: 10px;font-weight: 900; font-family: 'Times New Roman', Times, serif'">
                @include('letters.tags.staff_details')
            </div>
            {{-- <div id="mywidth"></div> --}}
            <div class="col-md-4"></div>
            <div class="col-md-4" style="margin-top: -15px; font-size: 10px;font-weight: 700; font-family: 'Times New Roman', Times, serif'">
                @include('letters.tags.direcitor_sign')
            </div>
            <div class="md-2"></div>
        </div>
        <br>

        {{-- Copies --}}
        <div class="d-flex justify-content-between flex-row" >
            @include('letters.tags.barcodeshow')
            <div class="md-2"></div>
            @include('letters.tags.copyies')
        </div>
    </div>
</div>
<script src="{{asset('vendor/libs/jquery/jquery.js')}}"></script>


<script src="{{asset('vendor/libs/popper/popper.js')}}"></script>
<script src="{{asset('vendor/js/bootstrap.js')}}"></script>
<script src="{{asset('vendor/libs/node-waves/node-waves.js')}}"></script>
<script src="{{asset('vendor/libs/perfect-scrollbar/perfect-scrollbar.js')}}"></script>
<script src="{{asset('vendor/libs/hammer/hammer.js')}}"></script>
<script src="{{asset('vendor/libs/i18n/i18n.js')}}"></script>
<script src="{{asset('vendor/libs/typeahead-js/typeahead.js')}}"></script>
<script src="{{asset('vendor/libs/flatpickr/flatpickr.js')}}"></script>
<script src="{{asset('vendor/libs/select2/select2.js')}}"></script>
<script src="{{asset('vendor/libs/toastr/toastr.js')}}"></script>
<script src="{{asset('vendor/libs/sweetalert2/sweetalert2.js')}}"></script>
<script src="{{asset('js/modal-helper-jp.js')}}"></script>
<script src="{{asset('vendor/js/menu.js')}}"></script>
<!-- endbuild -->

<!-- Vendors JS -->
<script src="{{asset('vendor/libs/swiper/swiper.js')}}"></script>
<script src="{{asset('vendor/libs/datatables-bs5/datatables-bootstrap5.js')}}"></script>

<!-- Main JS -->
<script src="{{asset('js/main.js')}}"></script>
<script>
window.onload = function() {
    window.print();
};
</script>

</body>
</html>

