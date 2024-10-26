/**
 * Created by dankoff on 09/04/21.
 */

MARKSREPORT = {
    myMarksData :[],
    allMarks :[],
    enrol :{},
    marks:{},

    init :()=>{

        MARKSREPORT.getCoreMarkrs();
        MARKSREPORT.getAllMarkrs();
    },
    getCoreMarkrs:()=>{
        $.getJSON('core-agg',function (response) {
            if(response.status == 200){
                MARKSREPORT.myMarksData = response.data;
            }

        });
    },

    getAllMarkrs:()=>{
        $.getJSON('all-agg',function (response) {
            if(response.status == 200){
                MARKSREPORT.allMarks = response.data;
            }
        });
    },
    printthis:()=>{
        var options = "menubar=no,resizable=no,scrollbars=yes,status=no,width=820,location=no,left=50px";
        var url ='print.report';
        window.open(url,"_blank",options);
    },
    printthisreg:()=>{
        var options = "menubar=no,resizable=no,scrollbars=yes,status=no,width=820,location=no,left=50px";
        var url ='print.report.reg';
        window.open(url,"_blank",options);
    },

	printsubject:()=>{
		var options = "menubar=no,resizable=no,scrollbars=yes,status=no,width=820,location=no,left=50px";
		var url ='print.report.sub';
		window.open(url,"_blank",options);
	},
   /* previewCore:(data,ptype)=>{
        var mymarks =[];
        var obj ={};

        var coreTable = "";

        if(data){
      /!*  coreTable = `<div style="margin-top: -40px" class="row"><div class="col-8"></div><div class="col-2 text-right"><button type="button" onclick="MARKSREPORT.printthis('${ptype}')"><i class="fa fa-print fa-2x"></i></button></div><div class"col-2 text-right"><button onclick="exportTableToExcel('mymarkstable','{{session()->get("district")}}')" type="button" style="color: green"><i class="fa fa-file-excel fa-2x"></i></button></div></div>`;*!/
        coreTable +=`<table  class="table-bordered" id="hor-minimalist-b" style="width: 100%">`;
        coreTable+=`<thead><tr>`;
        coreTable +=`<th style="font-size: 10px" rowspan="3" width="5%" class="text-center">SN</th>`;
        coreTable +=`<th style="font-size: 10px" rowspan="3" width="15%" class="text-center">SCHOOL</th>`;
        coreTable +=`<th width="8%"  style="font-size: 10px" rowspan="2" colspan="3">Candidates Registered</th>`;
        coreTable +=`<th  colspan="18" class="text-center">Aggregates</th>`;
            coreTable +=`<th style="font-size: 10px" rowspan="2" colspan="3" width="5%" class="text-center">% Pass</th>`;
            coreTable +=`<th style="font-size: 10px" rowspan="2" colspan="3" width="5%" class="text-center">% Fail</th>`;
        coreTable +=`</tr><tr>`;

        coreTable +=`<th style="font-size: 9px" colspan="3" class="text-center">6</th>`;
        coreTable +=`<th style="font-size: 9px" colspan="3" class="text-center">7-15</th>`;
        coreTable +=`<th style="font-size: 9px" colspan="3" class="text-center">16-24</th>`;
        coreTable +=`<th style="font-size: 9px" colspan="3" class="text-center">25-30</th>`;
        coreTable +=`<th style="font-size: 9px" colspan="3" class="text-center">31-36</th>`;
        coreTable +=`<th style="font-size: 9px" colspan="3" class="text-center">37+</th>`;
        coreTable +=`</tr><tr><th style="font-size: 9px"class="text-center">B</th><th style="font-size: 9px" class="text-center">G</th><th class="text-center" style="font-size: 9px">T</th>`;
        coreTable +=`<th style="font-size: 9px" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
        coreTable +=`<th style="font-size: 9px" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
        coreTable +=`<th style="font-size: 9px" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
        coreTable +=`<th style="font-size: 9px" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
        coreTable +=`<th style="font-size: 9px" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
        coreTable +=`<th style="font-size: 9px" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
            coreTable +=`<th style="font-size: 9px" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
            coreTable +=`<th style="font-size: 9px" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;

        coreTable +`</tr></thead>`;
        coreTable +=`<tbody>`;
            var CANDIDATES =[], cannumber=[], fpush=[], SCHOOL=[];
            var m =0, f=0;
            $.each(data.enrol,function(i,c){
               if(CANDIDATES.indexOf(c) == -1){
                   CANDIDATES.push(c);
               }
            });

            $.each(data.enrol,function(i,c){
                 if(SCHOOL.indexOf(c.schname) == -1){
                     SCHOOL.push(c.schname);
                }
            });

            $.each(SCHOOL,function(i,s) {
                coreTable += `<tr><td  class="text-center">` + (i + 1) + `</td>`;
                coreTable += `<td style="font-size: 9px"  width="15%"><strong>${s}</strong></td>`;

                $.each(data.enrol,function (e,r) {
                    if(r.schname == s && SCHOOL.indexOf(s.schname) == -1 && r.sex =="MALE"){
                        m++;
                        cannumber.push(r.schname);
                    }else if(r.schname == s && SCHOOL.indexOf(s.schname) == -1 && r.sex =="FEMALE"){
                        f++;
                        fpush.push(r.schname);
                    }
                });
                count = 0; gcount =0
                for(var c=0; c<cannumber.length; c++){
                   if(cannumber[c] ==s) count ++;
                }
                for(var c=0; c<fpush.length; c++){
                    if(fpush[c] ==s) gcount ++;
                }
                var gendertotal = count + gcount;
                coreTable +=`<td>${count}</td>`;
                coreTable +=`<td>${gcount}</td>`;
                coreTable +=`<td style="font-weight: 900">${gendertotal}</td>`;

                /!*MARKS*!/
                $.each(CANDIDATES,function (i,c) {
                    if(c.schname == s) {
                        var mcoreagg = 0, elective = [], fcoreagg = 0, felective = [];

                        $.each(data.marks, function (i, m) {
                            if (m.candidates_id == c.id && m.schname == s && m.subjecttype == "CORE" && m.sex == "MALE") {
                                mcoreagg += m.grade;

                            } else if (m.candidates_id == c.id && m.schname == s && m.subjecttype == "CORE" && m.sex == "FEMALE") {
                                fcoreagg += m.grade;
                            }
                            if (m.candidates_id == c.id && m.schname == s && m.subjecttype == "Elective" && m.sex == "MALE") {
                                elective.push(m.grade);
                            } else if (m.candidates_id == c.id && m.schname == s && m.subjecttype == "Elective" && m.sex == "FEMALE") {
                                felective.push(m.grade);
                            }
                        });
                        var elecsort = elective.sort(function (a, b) {
                            return a - b;
                        });
                        var felecsort = felective.sort(function (a, b) {
                            return a - b;
                        });
                        var elgrade = elecsort.slice(0, 2).reduce(function (a, b) {
                            var t = a + b
                            return t;
                        }, 0);
                        var felgrade = felecsort.slice(0, 2).reduce(function (a, b) {
                            var t = a + b
                            return t;
                        }, 0);

                        var maggregate = mcoreagg + elgrade;
                        var faggregate = fcoreagg + felgrade;

                        var aggregate = maggregate == 0 ? faggregate : maggregate;
                         obj = {
                            'schname': s,
                                'sex': c.sex,
                                'agg': aggregate,
                        };
                        if(mymarks.indexOf(obj) == -1) {
                            mymarks.push(obj);
                        }
                    }
                });
                var magg =0,genderTotal=0, fagg=0;

                var c7_15m = 0;
                var c7_15f = 0;
                var c16_24m = 0;
                var c16_24f = 0;
                var c25_30m = 0;
                var c25_30f = 0;
                var c31_36m = 0;
                var c31_36f = 0;
                var c37plusm = 0;
                var c37plusf = 0;
                var c15 =[];
                for(var i=0; i < mymarks.length; i++){
                    var mk = mymarks[i];
                    if(mk.schname == s){
                        if(mk.sex =="MALE" && mk.agg == 6){
                            magg++;
                        }else if(mk.sex =="FEMALE" && mk.agg == 6){
                            fagg++;
                        }else if(mk.sex =="MALE" && (mk.agg > 6 && mk.agg <=15 )){
                            c7_15m++;

                        }else if(mk.sex =="FEMALE" && (mk.agg > 6 && mk.agg <=15)){
                            c7_15f++;
                        }else if(mk.sex =="MALE" && (mk.agg > 15 && mk.agg <=24)){
                            c16_24m++;
                        }
                        else if(mk.sex =="FEMALE" && (mk.agg > 15 && mk.agg <=24)){
                            c16_24f++;
                        }else if(mk.sex =="MALE" && (mk.agg > 24 && mk.agg <=30)){
                            c25_30m++;
                        }else if(mk.sex =="FEMALE" && (mk.agg > 24 && mk.agg <=30)){
                            c25_30f++;
                        }else if(mk.sex =="MALE" && (mk.agg > 30 && mk.agg <=36)){
                            c31_36m++;
                        }else if(mk.sex =="FEMALE" && (mk.agg > 30 && mk.agg <=36)){
                            c31_36f++;
                        }else if(mk.sex =="MALE" && mk.agg >=37){
                            c37plusm++;
                        }else if(mk.sex =="FEMALE" && mk.agg >= 37){
                            c37plusf++;
                        }


                    }
                };

                coreTable +=`<td class="text-center">${magg}</td>`;
                coreTable +=`<td class="text-center">${fagg}</td>`;
                coreTable +=`<td style="font-weight: 900" class="text-center">${parseFloat(magg + fagg)}</td>`;

                coreTable +=`<td class="text-center">${c7_15m}</td>`;
                coreTable +=`<td class="text-center">${c7_15f}</td>`;
                coreTable +=`<td style="font-weight: 900" class="text-center">${parseFloat(c7_15m + c7_15f)}</td>`;

                coreTable +=`<td class="text-center">${c16_24m}</td>`;
                coreTable +=`<td class="text-center">${c16_24f}</td>`;
                coreTable +=`<td style="font-weight: 900" class="text-center">${parseFloat(c16_24m + c16_24f)}</td>`;

                coreTable +=`<td class="text-center">${c25_30m}</td>`;
                coreTable +=`<td class="text-center">${c25_30f}</td>`;
                coreTable +=`<td style="font-weight: 900" class="text-center">${parseFloat(c25_30m + c25_30f)}</td>`;

                coreTable +=`<td class="text-center">${c31_36m}</td>`;
                coreTable +=`<td class="text-center">${c31_36f}</td>`;
                coreTable +=`<td style="font-weight: 900" class="text-center">${parseFloat(c31_36m + c31_36f)}</td>`;

                coreTable +=`<td class="text-center">${c37plusm}</td>`;
                coreTable +=`<td class="text-center">${c37plusf}</td>`;
                coreTable +=`<td style="font-weight: 900" class="text-center">${parseFloat(c37plusm + c37plusf)}</td>`;

                /!*Calculating the Percentage Pass*!/
                var bpp = parseFloat(((magg + c7_15m + c16_24m + c25_30m + c31_36m)/count)*100);
                var gpp =parseFloat(((fagg+c7_15f+c16_24f+c25_30f+c31_36f)/gcount)*100);
                var tpass = parseFloat((((magg + c7_15m + c16_24m + c25_30m + c31_36m)+(fagg+c7_15f+c16_24f+c25_30f+c31_36f))/gendertotal)*100)

                coreTable +=`<td style="font-weight: 900;font-size: 10px" class="text-center">${isNaN(bpp) ? 0.0.toFixed(2) :bpp.toFixed(2) }</td>`;
                coreTable +=`<td style="font-weight: 900;font-size: 10px" class="text-center">${isNaN(gpp) ? 0.0.toFixed(2) : gpp.toFixed(2)}</td>`;
                coreTable +=`<td style="font-weight: 900;font-size: 10px" class="text-center">${isNaN(tpass) ? 0.0.toFixed(2) : tpass.toFixed(2)}</td>`;

                /!*Calculate the Percentage Fail*!/
                var bfp = parseFloat(((c37plusm)/count)*100);
                var gfp =parseFloat(((c37plusf)/gcount)*100);
                var tfail = parseFloat(((c37plusm + c37plusf)/gendertotal)*100);
                console.log(tfail);

                coreTable +=`<td style="font-weight: 900;font-size: 10px" class="text-center">${isNaN(bfp) ? 0.0.toFixed(2) :bfp.toFixed(2) }</td>`;
                coreTable +=`<td style="font-weight: 900;font-size: 10px" class="text-center">${isNaN(gfp) ? 0.0.toFixed(2) : gfp.toFixed(2)}</td>`;
                coreTable +=`<td style="font-weight: 900;font-size: 10px" class="text-center">${isNaN(tfail) ? 0.0.toFixed(2) : tfail.toFixed(2)}</td>`;


            });

            coreTable +=`</tr>`;
            coreTable +=`</tbody>`;
        coreTable +=`</table>`;
        }else{
            coreTable  =`<div>No Record Found</div>`
        }
        $('#showreport').html(coreTable);
    },*/
};

$(function () {
	//MARKSREPORT.init();

	var myMarksData = [];
	var mymarkREg = [];
	var SUBJECT =[];
	var firtFlage =false;
	var secondFlag = false;

	var init = function () {
		getAnanlysis();
		getReg();
		getSubject();
		/*getgradeSubject();*/


	};

	/*District Data*/
	var getAnanlysis = function () {
		var district="";

		$.getJSON('/marks-analysis', function(response) {
			if(response.status == 200) {
				myMarksData = response.data;
				firtFlage = true;
			}
		});
	};

	/*Regional Data*/
	var getReg = function () {
		showloadingIcon('#showhide',5,5,true);
		var district = $('#district').val();
		$.getJSON('/reg-data', function(responsed) {
			if(responsed.status == 200) {
				mymarkREg = responsed.data;
				$('#loader').css('display', 'none');
				$('#showhide').html("");
			}
		});
	};

	/*Subject Data*/
	var getSubject = function () {
		
		$.getJSON('/subject-ananlysis', function(responses) {
			var district = $('#district').val();
			if(responses.status == 200) {
				SUBJECT = responses.data;
				secondFlag = true;
			}
		});
	};

	/*Subject Grading*/
	var getgradeSubject = function (schname) {
		$.getJSON('/subgrades',{'schname':schname}, function (response) {
			var district = $('#district').val();
			if (response.status == 200) {
				SUBJECT = response.data;

			}
			subjectgradeAnalysis(SUBJECT,schname);
		});
	};



	var exportExcel = function (data, dist) {

		var coreTable = "";
		coreTable += `<table id="mymarkstable" style="width: 100%;line-height: 18px"><tbody>`;
		coreTable += `<tr>`;
		coreTable += `<td class="4" style="text-align: center"><div style="padding: 2px 0 0; text-transform: uppercase;font-weight: bolder;font-size: 12px;line-height: 18px">${dist}</div></td>`;
		coreTable += `</tr>`;
		coreTable += `<tr>`;
		coreTable += `<td colspan="4" style="vertical-align: top">`;
		coreTable += `<div style="text-align: center">BASIC EDUCATION CERTIFICATE EXAMINATION</div></td></tr>`;
		coreTable += `<tr><td colspan="4" style="vertical-align: top">`;
		coreTable += `<div style="text-align: center">RESULTS ANALYSIS</div></td></tr>`;
		coreTable += `<tr><td colspan="4">`;
		if (data) {
			coreTable += `<table style="width: 100%;border-collapse: collapse;text-transform: uppercase;font-size: 10px" border="1">`;
			coreTable += `<thead><tr style="line-height: 15px">`;
			coreTable += `<th style="font-size: 10px;text-align: center" rowspan="3" width="5%">SN</th>`;
			coreTable += `<th style="font-size: 10px;text-align: center" rowspan="3" width="15%" class="text-center">SCHOOL</th>`;
			coreTable += `<th width="8%"  style="font-size: 9px;text-align: center" rowspan="2" colspan="3">Candidates Registered</th>`;
			coreTable += `<th width="8%"  style="font-size: 9px;text-align: center" rowspan="2" colspan="3">Candidates Present</th>`;
			coreTable += `<th width="8%"  style="font-size: 9px;text-align: center" rowspan="2" colspan="3">Candidates Absent</th>`;
			coreTable += `<th  colspan="18" style="text-align: center">Aggregates</th>`;
			coreTable += `<th style="font-size: 10px;text-align: center" rowspan="2" colspan="3" width="5%" class="text-center">% Pass</th>`;
			coreTable += `<th style="font-size: 10px;text-align: center" rowspan="2" colspan="3" width="5%" class="text-center">% Fail</th>`;
			coreTable += `</tr><tr>`;

			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">6</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">7-15</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">16-24</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">25-30</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">31-36</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">37+</th>`;
			coreTable += `</tr><tr><th style="font-size: 9px;text-align: center"class="text-center">B</th><th style="font-size: 9px" class="text-center">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;

			coreTable + `</tr></thead>`;
			coreTable += `<tbody>`;
			var CANDIDATES = [], MARKS = [], fpush = [], SCHOOL = [];
			var m = 0, f = 0;
			$.each(data.candidates, function (i, c) {
				if (SCHOOL.indexOf(c.schname) == -1) {
					SCHOOL.push(c.schname);
				}
			});


			$.each(data.activecan, function (i, can) {
				if (CANDIDATES.indexOf(can) == -1) {
					CANDIDATES.push(can);
				}
			});
			
			$.each(data.marks, function (i, marks) {
				if (MARKS.indexOf(marks) == -1) {
					MARKS.push(marks);
				}
			});

			console.log(MARKS);

			$.each(SCHOOL, function (i, r) {
				var br =0 ; var gr = 0,pbpys=0,pgirls=0;
					$.each(data.candidates,function (i,cr) {
						if(cr.schname == r ){
							coreTable += `<tr><td style=";text-align: center;font-size: 10px"  class="text-center">` + (i + 1) + `</td>`;
							coreTable += `<td style="font-size: 9px"  width="15%"><strong>${r}</strong></td>`;
							var gendertotal = cr.boys + cr.girls;
							coreTable += `<td style="font-size: 10px;text-align: center">${cr.boys}</td>`;
							coreTable += `<td style="font-size: 10px;text-align: center">${cr.girls}</td>`;
							coreTable += `<td style="font-weight: 900;text-align: center">${gendertotal}</td>`;
							br+=cr.boys;
							gr+=cr.girls;
						}
					});
					$.each(data.absent, function (i,abt) {
						if(abt.schname == r){
							var absenttotal = abt.abmale + abt.abfemale;
							pbpys = (br - abt.abmale);
							pgirls = (gr - abt.abfemale);

							coreTable += `<td style="font-size: 10px;text-align: center">${br - abt.abmale}</td>`;
							coreTable += `<td style="font-size: 10px;text-align: center">${gr - abt.abfemale}</td>`;
							coreTable += `<td style="font-weight: 900;text-align: center">${(br - abt.abmale) + (gr - abt.abfemale)}</td>`;

							coreTable += `<td style="font-size: 10px;text-align: center">${abt.abmale}</td>`;
							coreTable += `<td style="font-size: 10px;text-align: center">${abt.abfemale}</td>`;
							coreTable += `<td style="font-weight: 900;text-align: center">${absenttotal}</td>`;
						}
					});
				var magg = 0;
				var fagg = 0;
				var c7_15m = 0;
				var c7_15f = 0;
				var c16_24m = 0;
				var c16_24f = 0;
				var c25_30m = 0;
				var c25_30f = 0;
				var c31_36m = 0;
				var c31_36f = 0;
				var c37plusm = 0;
				var c37plusf = 0;
				var c15 = [];


					$.each(CANDIDATES,function (c,cand) {

						if (cand.schname.trim() == r) {
							$.each(MARKS, function (i, mk) {

								if (mk.schname.trim() == r && mk.canid == cand.id) {
									/*MARKS*/
									if (mk.sex.trim() == "MALE" && mk.agg == 6) {
										magg++;
									} else if (mk.sex.trim() == "FEMALE" && mk.agg == 6) {
										fagg++;
									} else if (mk.sex.trim() == "MALE" && (mk.agg > 6 && mk.agg <= 15 )) {
										c7_15m++;

									} else if (mk.sex.trim() == "FEMALE" && (mk.agg > 6 && mk.agg <= 15)) {
										c7_15f++;
									} else if (mk.sex.trim() == "MALE" && (mk.agg > 15 && mk.agg <= 24)) {
										c16_24m++;
									}
									else if (mk.sex.trim() == "FEMALE" && (mk.agg > 15 && mk.agg <= 24)) {
										c16_24f++;
									} else if (mk.sex.trim() == "MALE" && (mk.agg > 24 && mk.agg <= 30)) {
										c25_30m++;
									} else if (mk.sex.trim() == "FEMALE" && (mk.agg > 24 && mk.agg <= 30)) {
										c25_30f++;
									} else if (mk.sex.trim() == "MALE" && (mk.agg > 30 && mk.agg <= 36)) {
										c31_36m++;
									} else if (mk.sex.trim() == "FEMALE" && (mk.agg > 30 && mk.agg <= 36)) {
										c31_36f++;
									} else if (mk.sex.trim() == "MALE" && mk.agg >= 37) {
										c37plusm++;
									} else if (mk.sex.trim() == "FEMALE" && mk.agg >= 37) {
										c37plusf++;

									}

								}
							});
						}
					});

									coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${magg}</td>`;
									coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${fagg}</td>`;
									coreTable += `<td style="font-weight: 900;text-align: center" class="text-center">${parseFloat(magg + fagg)}</td>`;

									coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${c7_15m}</td>`;
									 coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${c7_15f}</td>`;
									 coreTable += `<td style="font-weight: 900;text-align: center" class="text-center">${parseFloat(c7_15m + c7_15f)}</td>`;

									coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${c16_24m}</td>`;
									 coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${c16_24f}</td>`;
									 coreTable += `<td style="font-weight: 900;text-align: center" class="text-center">${parseFloat(c16_24m + c16_24f)}</td>`;

									 coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${c25_30m}</td>`;
									 coreTable += `<td  style="font-size: 10px;text-align: center"class="text-center">${c25_30f}</td>`;
									 coreTable += `<td style="font-weight: 900;text-align: center" class="text-center">${parseFloat(c25_30m + c25_30f)}</td>`;

									 coreTable += `<td  style="font-size: 10px;text-align: center"class="text-center">${c31_36m}</td>`;
									 coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${c31_36f}</td>`;
									 coreTable += `<td style="font-weight: 900;text-align: center" class="text-center">${parseFloat(c31_36m + c31_36f)}</td>`;

									 coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${c37plusm}</td>`;
									 coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${c37plusf}</td>`;
									 coreTable += `<td style="font-weight: 900;text-align: center" class="text-center">${parseFloat(c37plusm + c37plusf)}</td>`;

								 var bpp = parseFloat(((magg + c7_15m + c16_24m + c25_30m + c31_36m)/pbpys)*100);
								 var gpp =parseFloat(((fagg+c7_15f+c16_24f+c25_30f+c31_36f)/pgirls)*100);
								 var tpass = parseFloat((((magg + c7_15m + c16_24m + c25_30m + c31_36m)+(fagg+c7_15f+c16_24f+c25_30f+c31_36f))/(pbpys + pgirls))*100)

								 coreTable +=`<td style="font-weight: 900;font-size: 10px;text-align: center" class="text-center">${isNaN(bpp) ? 0.0.toFixed(2) :bpp.toFixed(2) }</td>`;
								 coreTable +=`<td style="font-weight: 900;font-size: 10px;text-align: center" class="text-center">${isNaN(gpp) ? 0.0.toFixed(2) : gpp.toFixed(2)}</td>`;
								 coreTable +=`<td style="font-weight: 900;font-size: 10px;text-align: center" class="text-center">${isNaN(tpass) ? 0.0.toFixed(2) : tpass.toFixed(2)}</td>`;

								 /!*Calculate the Percentage Fail*!/
								 var bfp = parseFloat(((c37plusm)/pbpys)*100);
								 var gfp =parseFloat(((c37plusf)/pgirls)*100);
								 var tfail = parseFloat(((c37plusm + c37plusf)/(pbpys + pgirls))*100);

								 coreTable +=`<td style="font-weight: 900;font-size: 10px;text-align: center" class="text-center">${isNaN(bfp) ? 0.0.toFixed(2) :bfp.toFixed(2) }</td>`;
								 coreTable +=`<td style="font-weight: 900;font-size: 10px;text-align: center" class="text-center">${isNaN(gfp) ? 0.0.toFixed(2) : gfp.toFixed(2)}</td>`;
								 coreTable +=`<td style="font-weight: 900;font-size: 10px;text-align: center" class="text-center">${isNaN(tfail) ? 0.0.toFixed(2) : tfail.toFixed(2)}</td>`;



					coreTable += `</tr>`;
				});

			coreTable += `</tbody></table></td></tr>`;

			coreTable += `</tbody>`;
			coreTable += `</table>`;

			$('#showhide').html(coreTable);
		}
	};
	var exportReg = function (data, dist) {
		var mymarks = [];
		var obj = {};
		var coreTable = "";
		coreTable += `<table id="mymarkstable" style="width: 100%;line-height: 18px"><tbody>`;
		coreTable += `<tr>`;
		coreTable += `<td class="4" style="text-align: center"><div style="padding: 2px 0 0; text-transform: uppercase;font-weight: bolder;font-size: 12px;line-height: 18px">EASTERN REGIONAL DIRECTORATE</div></td>`;
		coreTable += `</tr>`;
		coreTable += `<tr>`;
		coreTable += `<td colspan="4" style="vertical-align: top">`;
		coreTable += `<div style="text-align: center">BASIC EDUCATION CERTIFICATE EXAMINATION</div></td></tr>`;
		coreTable += `<tr><td colspan="4" style="vertical-align: top">`;
		coreTable += `<div style="text-align: center">RESULTS ANALYSIS</div></td></tr>`;
		coreTable += `<tr><td colspan="4">`;
		if (data) {
			coreTable += `<table style="width: 100%;border-collapse: collapse;text-transform: uppercase;font-size: 10px" border="1">`;
			coreTable += `<thead><tr style="line-height: 15px">`;
			coreTable += `<th style="font-size: 10px;text-align: center" rowspan="3" width="5%">SN</th>`;
			coreTable += `<th style="font-size: 10px;text-align: center" rowspan="3" width="15%" class="text-center">SCHOOL</th>`;
			coreTable += `<th width="8%"  style="font-size: 9px;text-align: center" rowspan="2" colspan="3">Candidates Registered</th>`;
			coreTable += `<th width="8%"  style="font-size: 9px;text-align: center" rowspan="2" colspan="3">Candidates Present</th>`;
			coreTable += `<th width="8%"  style="font-size: 9px;text-align: center" rowspan="2" colspan="3">Candidates Absent</th>`;
			coreTable += `<th  colspan="18" style="text-align: center">Aggregates</th>`;
			coreTable += `<th style="font-size: 10px;text-align: center" rowspan="2" colspan="3" width="5%" class="text-center">% Pass</th>`;
			coreTable += `<th style="font-size: 10px;text-align: center" rowspan="2" colspan="3" width="5%" class="text-center">% Fail</th>`;
			coreTable += `</tr><tr>`;

			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">6</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">7-15</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">16-24</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">25-30</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">31-36</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">37+</th>`;
			coreTable += `</tr><tr><th style="font-size: 9px;text-align: center"class="text-center">B</th><th style="font-size: 9px" class="text-center">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;

			coreTable + `</tr></thead>`;
			coreTable += `<tbody>`;

			var CANDIDATES = [], MARKS = [], fpush = [], DISTRICTS = [];

			$.each(data.districts, function (i, dist) {
				if (DISTRICTS.indexOf(dist) == -1) {
					DISTRICTS.push(dist);
				}
			});
			$.each(data.activecan, function (i, can) {
				if (CANDIDATES.indexOf(can) == -1) {
					CANDIDATES.push(can);
				}
			});
			$.each(data.marks, function (i, marks) {
				if (MARKS.indexOf(marks) == -1) {
					MARKS.push(marks);
				}
			});

			$.each(DISTRICTS, function (i, d) {
				var b=0, g=0;
				$.each(data.candreg,function (i,cr) {
					if(cr.apikey == d.apikey ){
						b+= cr.boys;
						g+= cr.girls;
					}
				});

				coreTable += `<tr><td style=";text-align: center;font-size: 10px"  class="text-center">` + (i + 1) + `</td>`;
				coreTable += `<td style="font-size: 9px"  width="15%"><strong>${d.district}</strong></td>`;
				coreTable += `<td style="font-size: 10px;text-align: center">${b}</td>`;
				coreTable += `<td style="font-size: 10px;text-align: center">${g}</td>`;
				coreTable += `<td style="font-weight: 900;text-align: center">${b+g}</td>`;

				var babt=0, gabt=0, pbpys=0,pgirls=0;
				$.each(data.absent, function (i,abt) {
					if(abt.apikey == d.apikey){
						babt += abt.abmale;
						gabt += abt.abfemale;
					}
				});

				coreTable += `<td style="font-size: 10px;text-align: center">${b - babt}</td>`;
				coreTable += `<td style="font-size: 10px;text-align: center">${g - gabt}</td>`;
				coreTable += `<td style="font-weight: 900;text-align: center">${(b - babt) +(g - gabt) }</td>`;

				coreTable += `<td style="font-size: 10px;text-align: center">${babt}</td>`;
				coreTable += `<td style="font-size: 10px;text-align: center">${gabt}</td>`;
				coreTable += `<td style="font-weight: 900;text-align: center">${babt + gabt}</td>`;


				var magg = 0;
				var fagg = 0;
				var c7_15m = 0;
				var c7_15f = 0;
				var c16_24m = 0;
				var c16_24f = 0;
				var c25_30m = 0;
				var c25_30f = 0;
				var c31_36m = 0;
				var c31_36f = 0;
				var c37plusm = 0;
				var c37plusf = 0;
				var c15 = [];

				$.each(data.candreg,function (c,cand) {
					if (cand.apikey == d.apikey) {
						$.each(MARKS, function (i, mk) {
							if (mk.schname.trim() == cand.schname.trim()) {
								/*MARKS*/

								if (mk.sex.trim() == "MALE" && mk.agg == 6) {
									magg++;
								} else if (mk.sex.trim() == "FEMALE" && mk.agg == 6) {
									fagg++;
								} else if (mk.sex.trim() == "MALE" && (mk.agg > 6 && mk.agg <= 15 )) {
									c7_15m++;

								} else if (mk.sex.trim() == "FEMALE" && (mk.agg > 6 && mk.agg <= 15)) {
									c7_15f++;
								} else if (mk.sex.trim() == "MALE" && (mk.agg > 15 && mk.agg <= 24)) {
									c16_24m++;
								}
								else if (mk.sex.trim() == "FEMALE" && (mk.agg > 15 && mk.agg <= 24)) {
									c16_24f++;
								} else if (mk.sex.trim() == "MALE" && (mk.agg > 24 && mk.agg <= 30)) {
									c25_30m++;
								} else if (mk.sex.trim() == "FEMALE" && (mk.agg > 24 && mk.agg <= 30)) {
									c25_30f++;
								} else if (mk.sex.trim() == "MALE" && (mk.agg > 30 && mk.agg <= 36)) {
									c31_36m++;
								} else if (mk.sex.trim() == "FEMALE" && (mk.agg > 30 && mk.agg <= 36)) {
									c31_36f++;
								} else if (mk.sex.trim() == "MALE" && mk.agg >= 37) {
									c37plusm++;
								} else if (mk.sex.trim() == "FEMALE" && mk.agg >= 37) {
									c37plusf++;
								}
							}
						});
					}
				});
				coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${magg}</td>`;
				coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${fagg}</td>`;
				coreTable += `<td style="font-weight: 900;text-align: center" class="text-center">${parseFloat(magg + fagg)}</td>`;

				coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${c7_15m}</td>`;
				coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${c7_15f}</td>`;
				coreTable += `<td style="font-weight: 900;text-align: center" class="text-center">${parseFloat(c7_15m + c7_15f)}</td>`;

				coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${c16_24m}</td>`;
				coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${c16_24f}</td>`;
				coreTable += `<td style="font-weight: 900;text-align: center" class="text-center">${parseFloat(c16_24m + c16_24f)}</td>`;

				coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${c25_30m}</td>`;
				coreTable += `<td  style="font-size: 10px;text-align: center"class="text-center">${c25_30f}</td>`;
				coreTable += `<td style="font-weight: 900;text-align: center" class="text-center">${parseFloat(c25_30m + c25_30f)}</td>`;

				coreTable += `<td  style="font-size: 10px;text-align: center"class="text-center">${c31_36m}</td>`;
				coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${c31_36f}</td>`;
				coreTable += `<td style="font-weight: 900;text-align: center" class="text-center">${parseFloat(c31_36m + c31_36f)}</td>`;

				coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${c37plusm}</td>`;
				coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${c37plusf}</td>`;
				coreTable += `<td style="font-weight: 900;text-align: center" class="text-center">${parseFloat(c37plusm + c37plusf)}</td>`;



				/*Calculating the Percentage Pass*/
				var count = 0 ,gcount = 0, gtotal = 0;

				count = b - babt;
				gcount = g-gabt;

				gtotal = count + gcount;

				var bpp = parseFloat(((magg + c7_15m + c16_24m + c25_30m + c31_36m)/count)*100);
				var gpp =parseFloat(((fagg+c7_15f+c16_24f+c25_30f+c31_36f)/gcount)*100);
				var tpass = parseFloat((((magg + c7_15m + c16_24m + c25_30m + c31_36m)+(fagg+c7_15f+c16_24f+c25_30f+c31_36f))/gtotal)*100)

				coreTable +=`<td style="font-weight: 900;font-size: 10px;text-align: center" class="text-center">${isNaN(bpp) ? 0.0.toFixed(2) :bpp.toFixed(2) }</td>`;
				coreTable +=`<td style="font-weight: 900;font-size: 10px;text-align: center" class="text-center">${isNaN(gpp) ? 0.0.toFixed(2) : gpp.toFixed(2)}</td>`;
				coreTable +=`<td style="font-weight: 900;font-size: 10px;text-align: center" class="text-center">${isNaN(tpass) ? 0.0.toFixed(2) : tpass.toFixed(2)}</td>`;

				/!*Calculate the Percentage Fail*!/
				var bfp = parseFloat(((c37plusm)/count)*100);
				var gfp =parseFloat(((c37plusf)/gcount)*100);
				var tfail = parseFloat(((c37plusm + c37plusf)/gtotal)*100);

				coreTable +=`<td style="font-weight: 900;font-size: 10px;text-align: center" class="text-center">${isNaN(bfp) ? 0.0.toFixed(2) :bfp.toFixed(2) }</td>`;
				coreTable +=`<td style="font-weight: 900;font-size: 10px;text-align: center" class="text-center">${isNaN(gfp) ? 0.0.toFixed(2) : gfp.toFixed(2)}</td>`;
				coreTable +=`<td style="font-weight: 900;font-size: 10px;text-align: center" class="text-center">${isNaN(tfail) ? 0.0.toFixed(2) : tfail.toFixed(2)}</td>`;
				coreTable += `</tr>`;
			});
			coreTable += `</tbody></table></td></tr>`;
			coreTable += `</tbody>`;
			coreTable += `</table>`;

			$('#showhide').html(coreTable);
		}
	};
	var subjectAnalysis = function (data, dist) {

		var coreTable = "";
		coreTable += `<table id="mymarkstable" style="width: 100%;line-height: 18px"><tbody>`;
		coreTable += `<tr>`;
		coreTable += `<td class="4" style="text-align: center"><div style="padding: 2px 0 0; text-transform: uppercase;font-weight: bolder;font-size: 12px;line-height: 18px">${dist}</div></td>`;
		coreTable += `</tr>`;
		coreTable += `<tr>`;
		coreTable += `<td colspan="4" style="vertical-align: top">`;
		coreTable += `<div style="text-align: center">BASIC EDUCATION CERTIFICATE EXAMINATION</div></td></tr>`;
		coreTable += `<tr><td colspan="4" style="vertical-align: top">`;
		coreTable += `<div style="text-align: center">SUBJECT ANALYSIS</div></td></tr>`;
		coreTable += `<tr><td colspan="4">`;
		if (data) {
			coreTable += `<table style="width: 100%;border-collapse: collapse;text-transform: uppercase;font-size: 10px" border="1">`;
			coreTable += `<thead><tr style="line-height: 15px">`;
			coreTable += `<th style="font-size: 10px;text-align: center" rowspan="3" width="5%">SN</th>`;
			coreTable += `<th style="font-size: 10px;text-align: center" rowspan="3" width="15%" class="text-center">SCHOOL</th>`;
			coreTable += `<th width="8%"  style="font-size: 9px;text-align: center" rowspan="2" colspan="3">Candidates Registered</th>`;
			coreTable += `<th width="8%"  style="font-size: 9px;text-align: center" rowspan="2" colspan="3">Candidates Present</th>`;
			coreTable += `<th width="8%"  style="font-size: 9px;text-align: center" rowspan="2" colspan="3">Candidates Absent</th>`;
			coreTable += `<th  colspan="24" style="text-align: center">Subjects</th>`;
			/*coreTable += `<th style="font-size: 10px;text-align: center" rowspan="2" colspan="3" width="5%" class="text-center">% Pass</th>`;
			coreTable += `<th style="font-size: 10px;text-align: center" rowspan="2" colspan="3" width="5%" class="text-center">% Fail</th>`;*/
			coreTable += `</tr><tr>`;


			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">ENGLISH</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">SOC STD</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">RME</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">MATHS</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">SCIENCE</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">ICT</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">TWI <span id="twispec"></span></th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">BDT <span id="dbtspec"></span></th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">FRENCH</th>`;

			coreTable += `</tr><tr><th style="font-size: 9px;text-align: center"class="text-center">B</th><th style="font-size: 9px" class="text-center">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;

			coreTable + `</tr></thead>`;
			coreTable += `<tbody>`;
			var CANDIDATES = [], MARKS = [], fpush = [], SCHOOL = [];
			var m = 0, f = 0;


			$.each(data.candidates, function (i, c) {
				if (SCHOOL.indexOf(c.schname) == -1) {
					SCHOOL.push(c.schname);
				}
			});
			$.each(data.activecan, function (i, can) {
				if (CANDIDATES.indexOf(can) == -1) {
					CANDIDATES.push(can);
				}
			});
			$.each(data.marks, function (i, marks) {
				if (MARKS.indexOf(marks) == -1) {
					MARKS.push(marks);
				}
			});
			$.each(SCHOOL, function (i, r) {
				var br =0 ; var gr = 0;
				$.each(data.candidates,function (i,cr) {
					if(cr.schname.trim() == r ){
						coreTable += `<tr><td style=";text-align: center;font-size: 10px"  class="text-center">` + (i + 1) + `</td>`;
						coreTable += `<td style="font-size: 9px"  width="15%"><strong>${r}</strong></td>`;
						var gendertotal = cr.boys + cr.girls;
						coreTable += `<td style="font-size: 10px;text-align: center">${cr.boys}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center">${cr.girls}</td>`;
						coreTable += `<td style="font-weight: 900;text-align: center">${gendertotal}</td>`;
						br+=cr.boys;
						gr+=cr.girls;
					}
				});

				$.each(data.absent, function (i,abt) {
					if(abt.schname.trim() == r.trim()){
						var absenttotal = abt.abmale + abt.abfemale;

						coreTable += `<td style="font-size: 10px;text-align: center">${br - abt.abmale}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center">${gr - abt.abfemale}</td>`;
						coreTable += `<td style="font-weight: 900;text-align: center">${(br - abt.abmale) + (gr - abt.abfemale)}</td>`;

						coreTable += `<td style="font-size: 10px;text-align: center">${abt.abmale}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center">${abt.abfemale}</td>`;
						coreTable += `<td style="font-weight: 900;text-align: center">${absenttotal}</td>`;
					}
				});
				/*eng*/
				var magg = 0;
				var fagg = 0;

				/*Soc*/
				var c7_15m = 0;
				var c7_15f = 0;

				/*RME*/
				var c16_24m = 0;
				var c16_24f = 0;

				/*Maths*/
				var c25_30m = 0;
				var c25_30f = 0;

				/*Science*/
				var c31_36m = 0;
				var c31_36f = 0;

				/*ICT*/
				var c37plusm = 0;
				var c37plusf = 0;

				/*Twi*/
				var twim = 0, twif =0 ;

				var bdtm=0, bdtf =0;

				var frem = 0, fref=0;

				$.each(MARKS, function (i, mk) {
					if (mk.sch.trim() == r.trim()) {

						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.em}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.ef}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${(mk.ef)+(mk.em)}</td>`;
						/*SOC*/
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.sm}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.sf}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${(mk.sm)+(mk.sf)}</td>`;

						/*RME*/
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.rm}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.rf}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${(mk.rm)+(mk.rf)}</td>`;

						/*MATHS*/
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.msm}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.msf}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${(mk.msm)+(mk.msf)}</td>`;

						/*SCIENCE*/
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.scm}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.scf}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${(mk.scm)+(mk.scf)}</td>`;

						/*ICT*/
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.ictm}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.ictf}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.ictf}</td>`;

						/*TWI*/
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.twim}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.twif}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${(mk.twif)+(mk.twim)}</td>`;

						/*BDT*/
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.bdtm}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.bdtf}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${(mk.bdtf)+(mk.bdtm)}</td>`;

						/*FRENCH*/
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.frem}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.fref}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.ft}</td>`;


					}
				});



				/*Calculating the Percentage Pass*/
				var count = 0 ,gcount = 0, gtotal =0
				$.each(data.candidates,function (i,cr) {
					if(cr.schname.trim() == r.trim() ){
						count = cr.boys;
						gcount = cr.girls;

						gtotal = count + gcount;
					}
				});

				/*var bpp = parseFloat(((magg + c7_15m + c16_24m + c25_30m + c31_36m)/count)*100);
				var gpp =parseFloat(((fagg+c7_15f+c16_24f+c25_30f+c31_36f)/gcount)*100);
				var tpass = parseFloat((((magg + c7_15m + c16_24m + c25_30m + c31_36m)+(fagg+c7_15f+c16_24f+c25_30f+c31_36f))/gtotal)*100)

				coreTable +=`<td style="font-weight: 900;font-size: 10px;text-align: center" class="text-center">${isNaN(bpp) ? 0.0.toFixed(2) :bpp.toFixed(2) }</td>`;
				coreTable +=`<td style="font-weight: 900;font-size: 10px;text-align: center" class="text-center">${isNaN(gpp) ? 0.0.toFixed(2) : gpp.toFixed(2)}</td>`;
				coreTable +=`<td style="font-weight: 900;font-size: 10px;text-align: center" class="text-center">${isNaN(tpass) ? 0.0.toFixed(2) : tpass.toFixed(2)}</td>`;

				/!*Calculate the Percentage Fail*!/
				var bfp = parseFloat(((c37plusm)/count)*100);
				var gfp =parseFloat(((c37plusf)/gcount)*100);
				var tfail = parseFloat(((c37plusm + c37plusf)/gtotal)*100);

				coreTable +=`<td style="font-weight: 900;font-size: 10px;text-align: center" class="text-center">${isNaN(bfp) ? 0.0.toFixed(2) :bfp.toFixed(2) }</td>`;
				coreTable +=`<td style="font-weight: 900;font-size: 10px;text-align: center" class="text-center">${isNaN(gfp) ? 0.0.toFixed(2) : gfp.toFixed(2)}</td>`;
				coreTable +=`<td style="font-weight: 900;font-size: 10px;text-align: center" class="text-center">${isNaN(tfail) ? 0.0.toFixed(2) : tfail.toFixed(2)}</td>`;
*/


				coreTable += `</tr>`;
			});

			coreTable += `</tbody></table></td></tr>`;

			coreTable += `</tbody>`;
			coreTable += `</table>`;

			$('#showhide').html(coreTable);
		}
	};
	var subjectgradeAnalysis = function (data,sn) {

		var coreTable = "";
		coreTable += `<table id="mymarkstable" style="width: 100%;line-height: 18px"><tbody>`;
		coreTable += `<tr>`;
		coreTable += `<td class="4" style="text-align: center"><div style="padding: 2px 0 0; text-transform: uppercase;font-weight: bolder;font-size: 12px;line-height: 18px">${sn}</div></td>`;
		coreTable += `</tr>`;
		coreTable += `<tr>`;
		coreTable += `<td colspan="4" style="vertical-align: top">`;
		coreTable += `<div style="text-align: center">BASIC EDUCATION CERTIFICATE EXAMINATION</div></td></tr>`;
		coreTable += `<tr><td colspan="4" style="vertical-align: top">`;
		coreTable += `<div style="text-align: center">RESULTS ANALYSIS SHEET FOR SCHOOLS</div></td></tr>`;
		coreTable += `<tr><td colspan="4">`;
		if (data) {
			coreTable += `<table style="width: 100%;border-collapse: collapse;text-transform: uppercase;font-size: 10px" border="1">`;
			coreTable += `<thead><tr style="line-height: 15px">`;
			coreTable += `<th style="font-size: 10px;text-align: center" rowspan="3" width="5%">SN</th>`;
			coreTable += `<th style="font-size: 10px;text-align: center" rowspan="3" width="15%" class="text-center">Subject</th>`;
			coreTable += `<th width="8%"  style="font-size: 9px;text-align: center" rowspan="2" colspan="3">Candidates Registered</th>`;
			coreTable += `<th width="8%"  style="font-size: 9px;text-align: center" rowspan="2" colspan="3">Candidates Present</th>`;
			coreTable += `<th width="8%"  style="font-size: 9px;text-align: center" rowspan="2" colspan="3">Candidates Absent</th>`;
			coreTable += `<th  colspan="24" style="text-align: center">Grades</th>`;
			/*coreTable += `<th style="font-size: 10px;text-align: center" rowspan="2" colspan="3" width="5%" class="text-center">% Pass</th>`;
			 coreTable += `<th style="font-size: 10px;text-align: center" rowspan="2" colspan="3" width="5%" class="text-center">% Fail</th>`;*/
			coreTable += `</tr><tr>`;


			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">1</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">2</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">3</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">4</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">5</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">6</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">7</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">8</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" colspan="3" class="text-center">9</th>`;

			coreTable += `</tr><tr><th style="font-size: 9px;text-align: center"class="text-center">B</th><th style="font-size: 9px" class="text-center">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;
			coreTable += `<th style="font-size: 9px;text-align: center" class="text-center">B</th><th class="text-center" style="font-size: 9px">G</th><th class="text-center" style="font-size: 9px">T</th>`;

			coreTable + `</tr></thead>`;
			coreTable += `<tbody>`;
			var CANDIDATES = [], MARKS = [], SUBJECT = [], SCHOOL = [];
			var m = 0, f = 0;
			SCHOOL.push(sn);

			/*$.each(data.sub, function (i, sb) {
				if (SUBJECT.indexOf(sb.subject) == -1) {
					SUBJECT.push(sb.subject);
				}

					//coreTable += `<td style="text-align: center">${i+1}</td><td style="font-size: 9px"  width="15%"><strong>${sb.subject}</strong></td></tr><tr>`;

			});*/


			/*$.each(data.activecan, function (i, can) {
				if (CANDIDATES.indexOf(can) == -1) {
					CANDIDATES.push(can);
				}
			});
			$.each(data.marks, function (i, marks) {
				if (MARKS.indexOf(marks) == -1) {
					MARKS.push(marks);
				}
			});*/
			/*$.each(SCHOOL, function (s, r) {
				var br =0 ; var gr = 0;
				$.each(SUBJECT,function (o,sub) {*/
			    $.each(data.candidates,function (i,cr) {

							coreTable += `<tr><td style=";text-align: center;font-size: 10px"  class="text-center">` + (i + 1) + `</td>`;
							coreTable += `<td style="font-size: 9px"  width="15%"><strong>${sub.subject}</strong></td>`;

							var gendertotal = cr.boys + cr.girls;
							coreTable += `<td style="font-size: 10px;text-align: center">${cr.boys}</td>`;
							coreTable += `<td style="font-size: 10px;text-align: center">${cr.girls}</td>`;
							coreTable += `<td style="font-weight: 900;text-align: center">${gendertotal}</td>`;
							br+=cr.boys;
							gr+=cr.girls;

					});

				$.each(data.absent, function (i,abt) {
					if(abt.schname == r){
						var absenttotal = abt.abmale + abt.abfemale;

						coreTable += `<td style="font-size: 10px;text-align: center">${br - abt.abmale}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center">${gr - abt.abfemale}</td>`;
						coreTable += `<td style="font-weight: 900;text-align: center">${(br - abt.abmale) + (gr - abt.abfemale)}</td>`;

						coreTable += `<td style="font-size: 10px;text-align: center">${abt.abmale}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center">${abt.abfemale}</td>`;
						coreTable += `<td style="font-weight: 900;text-align: center">${absenttotal}</td>`;
					}
				});
				/*eng*/
				var magg = 0;
				var fagg = 0;

				/*Soc*/
				var c7_15m = 0;
				var c7_15f = 0;

				/*RME*/
				var c16_24m = 0;
				var c16_24f = 0;

				/*Maths*/
				var c25_30m = 0;
				var c25_30f = 0;

				/*Science*/
				var c31_36m = 0;
				var c31_36f = 0;

				/*ICT*/
				var c37plusm = 0;
				var c37plusf = 0;

				/*Twi*/
				var twim = 0, twif =0 ;

				var bdtm=0, bdtf =0;

				var frem = 0, fref=0;

				$.each(MARKS, function (i, mk) {
					if (mk.sch == r) {

						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.em}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.ef}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${(mk.ef)+(mk.em)}</td>`;
						/*SOC*/
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.sm}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.sf}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${(mk.sm)+(mk.sf)}</td>`;

						/*RME*/
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.rm}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.rf}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${(mk.rm)+(mk.rf)}</td>`;

						/*MATHS*/
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.msm}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.msf}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${(mk.msm)+(mk.msf)}</td>`;

						/*SCIENCE*/
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.scm}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.scf}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${(mk.scm)+(mk.scf)}</td>`;

						/*ICT*/
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.ictm}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.ictf}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.ictf}</td>`;

						/*TWI*/
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.twim}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.twif}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${(mk.twif)+(mk.twim)}</td>`;

						/*BDT*/
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.bdtm}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.bdtf}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${(mk.bdtf)+(mk.bdtm)}</td>`;

						/*FRENCH*/
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.frem}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.fref}</td>`;
						coreTable += `<td style="font-size: 10px;text-align: center" class="text-center">${mk.ft}</td>`;


					}
				});



				/*Calculating the Percentage Pass*/
				var count = 0 ,gcount = 0, gtotal = 0
				$.each(data.candidates,function (i,cr) {
					if(cr.schname == r ){
						count = cr.boys;
						gcount = cr.girls;

						gtotal = count + gcount;
					}
				});

				coreTable += `</tr>`;


			coreTable += `</tbody></table></td></tr>`;

			coreTable += `</tbody>`;
			coreTable += `</table>`;

			$('#showhide').html(coreTable);
		}
	};

	init();

	$('#reportoption').on('change', function () {
			$('#showhide').html("");
			$('#showbutton1').css('display', 'none');
			$('#showbutton2').css('display', 'none');
			$('#showbutton3').css('display', 'none');

			if ($(this).val() != "" && $(this).val() == "CORE") {
				var district = $('#district').val();

				showloadingIcon('#showhide',5,12,true);
				setTimeout(function () {
					exportExcel(myMarksData, district);
					/*$('#loader').css('display', 'none');*/
					$('#showbutton1').css('display', 'block');
					$('#showbutton2').css('display', 'block');
				}, 3000);
			} else if ($(this).val() != "" && $(this).val() == "REG") {
				showloadingIcon('#showhide',5,12,true);

				$('#showbutton1').css('display', 'none');
				$('#showbutton2').css('display', 'none');
				$('#showbutton3').css('display', 'none');
				$('#loader').css('display', 'block');
				setTimeout(function () {
					exportReg(mymarkREg, district);
					$('#loader').css('display', 'none');
					$('#showbutton3').css('display', 'block');
					$('#showbutton2').css('display', 'block');
				}, 3000);
			}else if ($(this).val() != "" && $(this).val() == "SUB") {
				showloadingIcon('#showhide',5,12,true);
				var district = $('#district').val();

				$('#showbutton1').css('display', 'none');
				$('#showbutton2').css('display', 'none');
				$('#showbutton3').css('display', 'none');
				setTimeout(function () {
					subjectAnalysis(SUBJECT, district);
					$('#showbutton4').css('display', 'block');
					$('#showbutton2').css('display', 'block');
				}, 3000);
			}else if ($(this).val() != "" && $(this).val() == "GRADE") {
				showloadingIcon('#showhide',5,12,true);
				window.location.href = 'grades';
			}else if($(this).val() != "" && $(this).val() == "SUBGRADE"){
				/*subjectgradeAnalysis(SUBJECT, district);
				$('#loader').css('display', 'none');
				$('#showbutton4').css('display', 'block');
				$('#showbutton2').css('display', 'block');*/
				$('#mysubjectschools').prop('disabled',false);
			}

		});
	$('#mysubjectschools').on('change',function () {
		var subschool = $(this).val();
		var district = $('#district').val();
		if(subschool !=""){

			setTimeout(function () {
				getgradeSubject(subschool);
				//subjectgradeAnalysis(SUBJECT, district,subschool);
				$('#loader').css('display', 'none');
				$('#showbutton4').css('display', 'block');
				$('#showbutton2').css('display', 'block');
			},2000)

		}
	});
});

