<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name')}} | @yield('title')</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('vendor/fonts/fontawesome.css')}}" />
    <link rel="stylesheet" href="{{asset('vendor/fonts/tabler-icons.css')}}" />
    <link rel="stylesheet" href="{{asset('vendor/fonts/flag-icons.css')}}" />

    <!-- Core CSS -->
    <link rel="stylesheet" href="{{asset('vendor/css/rtl/core.css')}}" />
    <link rel="stylesheet" href="{{asset('vendor/css/rtl/theme-default.css')}}" />

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
    <link rel="stylesheet" href="{{asset('vendor/css/pages/cards-advance.css')}}" />
    <!-- Scripts -->
    {{-- @vite(['resources/sass/app.scss', 'resources/js/app.js'])--}}
    <script src="{{asset('vendor/js/helpers.js')}}"></script>
</head>

<body>
    <div class="layout-wrapper layout-content-navbar" >
        <div class="layout-container text-center">
                 <div class="layout-page">
                    <style>
                        b {
                            font-family: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
                            font-size: 18px;
                        }
                    </style>
                        <div class="content-wrapper">
                            <div  class="flex-grow-1 container-p-y container">
                                <h1 style="color: green">APPROVED</h1>
                                <hr/>
                                <div class="card">
                                    <div class="card-header" style="background-color: green; color: white">
                                        <div class="md-6" style="color: ">
                                            <p>This Study Leave Letter is AUTHENTIC and APPROVED by the REGIONAL EDUCATION DIRECTORATE (E)</p>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="d-flex justify-content-center flex-row">
                                            <i style="color: green" class="fa fa-check fa-5x"></i>
                                        </div>
                                        <div class="d-flex justify-content-center flex-row">
                                            <div class="md-6">Name:  <br><b class="b">{{ $studyleave->name }}</b></div>
                                        </div>
                                        <br>
                                        <div class="d-flex justify-content-center flex-row">
                                            <div class="md-6">Staff ID: <br> <b>{{ $studyleave->staffid }}</b></div>
                                        </div>
                                        <br>
                                        <div class="d-flex justify-content-center flex-row">
                                            <div class="md-6">Rank: <br> <b>{{ $studyleave->rank }}</b></div>
                                        </div>
                                        <br>
                                        <div class="d-flex justify-content-center flex-row">
                                            <div class="md-6">Institution: <br>  <b>{{ $studyleave->institution }}</b></div>
                                        </div>
                                        <br>
                                        <div class="d-flex justify-content-center flex-row">
                                            <div class="md-6">Course: <br> <b>{{ $studyleave->course }}</b></div>
                                        </div>
                                        <br>
                                        <div class="d-flex justify-content-center flex-row">
                                            <div class="md-6">Current School: <br>  <b>{{ $studyleave->current_School }}</b></div>
                                        </div>
                                        <br>
                                        <div class="d-flex justify-content-center flex-row">
                                            <div class="md-6">District: <br> <b>{{ $studyleave->district }}</b></div>
                                        </div>
                                        <br>
                                        <div class="d-flex justify-content-center flex-row">
                                            <div class="md-6">Reference: <br> <b>{{ $studyleave->doc_ref }}</b></div>
                                        </div>
                                    </div>
                                    <div class="card-footer">

                                    </div>
                            </div>
                            </div>
                        </div>
                        <footer class="content-footer footer bg-footer-theme">
                            <div class="container-xxl">
                                <div
                                    class="footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column">
                                    <div>
                                        ©
                                        {{date('Y')}}
                                        , Eastern Regional Education Directorate
                                    </div>
                                </div>
                            </div>
                        </footer>
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
    <!-- Vendors JS -->
    <script src="{{asset('vendor/libs/swiper/swiper.js')}}"></script>
    <script src="{{asset('vendor/libs/datatables-bs5/datatables-bootstrap5.js')}}"></script>

    <!-- Main JS -->
    {{-- <script src="{{asset('js/main.js')}}"></script> --}}
    @stack('js')
</body>
</html>