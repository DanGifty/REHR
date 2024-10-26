function exportTableToExcel(tableID,filename=''){
	var downloadLink;
	var dataType = 'application/vnd.ms-excel';
	var tableSelect = document.getElementById(tableID);
	var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

	filename = filename ? filename +'.xls':'excel_data.xls';

	downloadLink = document.createElement("a");
	document.body.appendChild(downloadLink);
	if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}

function showAlertIn(labelId, containerId, info, status, seconds){
    $('#' + labelId).html(info);
    $('#' + containerId).addClass(status);
    $('#' + containerId).css('display','block');
    //$('#' + containerId).alert();
    setTimeout(function()
    {
        $('#' + labelId).html("");
        $('#' + containerId).removeClass(status);
        $('#' + containerId).css('display','none');
        //$('#' + containerId).alert('close');
    },seconds);
}

function showloadingIcon(tag, iconsize, margintop, flag){
	if(flag){
		var div = "<div style='margin:"+margintop+"em auto; text-align:center;'><i class='fa fa-spinner fa-spin fa-"+iconsize+"x'></i><br/>Loading data</div>";
		$(tag).html(div);
	} else {
		$(tag).html("");
	}
}