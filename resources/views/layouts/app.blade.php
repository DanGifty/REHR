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
    <div class="layout-wrapper layout-content-navbar" id="app">
        <div class="layout-container">
            @include('layouts.sidebar')
                 <div class="layout-page">
                        @include('layouts.header')

                        <div class="content-wrapper">
                            @yield('content')
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
    <script src="https://js.pusher.com/8.2.0/pusher.min.js"></script>

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
