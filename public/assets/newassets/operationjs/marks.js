function saveMarks(id,sub,subject){
    var grade     = $('#'+sub+id).val();
    var schname  = $('#m_schname').val();
    var cname    = $('#cn'+id).text();
    var subject  = $('#m_subject').val();
    var sex      = $('#sex'+id).text();

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    var data ={
        'grade':grade,
        'schname':schname,
        'cname':cname,
        'subject':subject,
        'sex':sex,
    };

    if(grade !=""){
        $.ajax({
            type:'post',
            url:'save-marks',
            data:data,
            dataType:'json',
            success:function (response) {
                if(response.status == 200){
                    if(grade != 0){
                        $('#st'+id).css("background-color","green");
                        $('#st'+id).css("color","white");
                        $('#st'+id).text("SAVED");
                    }

                }
            },
            error:function (xhr, status,msg) {

            }
        })
    }
}
function subjectonchange() {

    var psch = $('#mschname').val();
    var psub = $('#msubject').val();
    if(psch !="" && psub !=""){
        window.location.href = 'generate-school?mschool='+psch+'&msub='+psub;
    }else{
        swal("Sorry!", "All Fields Required ", {
            icon : "error",
            buttons: {
                title:"Close"
            },
        });
    }
}
function schnameonchange() {
    $('#msubject').prop('disabled',false);
}

$(function () {
    $('#generate').on('click',function(){
        var psch = $('#mschname').val();
        var psub = $('#msubject').val();
        if(psch !="" && psub !=""){
            $('#generate').attr('href','generate-school?mschool='+psch+'&msub='+psub);
        }else{
            swal("Sorry!", "All Fields Required ", {
                icon : "error",
                buttons: {
                    title:"Close"
                },
            });
        }
    });
})