
@foreach ($studyleaves as $studyleave )

    @include('letters.tags.print_all_header')
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
    </div>
    <br>
    <div class="d-flex justify-content-between flex-row">
        <div class="md-6" style="font-size: 10px;font-weight: 900; font-family: 'Times New Roman', Times, serif'">
            {{ $studyleave->name }} <br>
            {{ $studyleave->current_School }} <br>
            {{ $studyleave->district }}
        </div>
        <div id="mywidth"></div>
        <div class="md-6" style="margin-top: -15px; font-size: 10px;font-weight: 700; font-family: 'Times New Roman', Times, serif'">
            <img src="{{ asset('sample/rdsign.png') }}" alt="SIGNATURE" width="10%"/><br>
            <b>MRS IVY ASANTEWA OWUSU (PhD)</b><br>
            <b>REGIONAL DIRECTOR (E)</b> <br>
            <b>For: DIRECTOR-GENERAL</b>
        </div>
        <div class="md-2"></div>
    </div>
    <br>
    {{-- Footer --}}
    <div class="d-flex justify-content-between flex-row" >
        @include('letters.tags.copyies')
    </div>
    <div class="d-flex justify-content-between flex-row">
        @include('letters.tags.barcodeshow')
    </div>
    <div class="pagebreak"></div>
@endforeach
