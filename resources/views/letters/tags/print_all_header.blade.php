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
        <style>
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
                    size: A4 landscape;
                }
                .pagebreak{
	                page-break-after: always;
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
        </style>
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
        <style>
            table {
                border: 1px solid #0000;
            }
            #myspace {
                    height: 10px;
                 }

              @media print {
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

                /* .no-print {
                    display: none;
                } */

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
    <div class=" invoice-print p-12">
                @include('letters.tags.headerlables')
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
