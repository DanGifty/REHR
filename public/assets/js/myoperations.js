/**
 * Created by faith on 1/27/22.
 */

function ShowPostWithData(id) {
    window.location.href = 'admin/post/' +id;
}

function ShowFeeds(){
    var fees = $('#feesSection').html();
    var url = "admin/post_new_store";
    var title = "FEES";
    $.getJSON(url,{'data':fees,'title':title},function (response) {
        if(response.status == 200){
            window.location.href = 'admin/post/' +response.data;
        }
    })
}

