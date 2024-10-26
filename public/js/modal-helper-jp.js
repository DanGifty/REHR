// HELPERS
toastr.options.positionClass = 'toast-bottom-left';
function preventEnterAction(modalId){
    document.getElementById(modalId).addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    });
}


function actionModal(formData,action,modalId,datatableName,closeVendorForm,vendorSave){
    const formDataObject = {};
   let objCount = Object.keys(formDataObject).length;
    formData.forEach(item => {
        const key = item.name;
        const value = item.value;

        if (formDataObject[key]) {
            if (Array.isArray(formDataObject[key])) {
            formDataObject[key].push(value);
            } else {
            formDataObject[key] = [formDataObject[key], value];
            }
        } else {
            formDataObject[key] = value;
        }
    });
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    if (vendorSave === 'vendorSave')
    {
        $.ajax({
            type: 'POST',
            url: action,  // Replace with your server endpoint
            // data: JSON.stringify(formDataObject), // Convert JSON object to string
            data: formData, // Convert JSON object to string
            processData: false, // Prevent jQuery from automatically transforming the data into a query string
            contentType: false, // Set content type
            success: function (response) {
                if (closeVendorForm !== 'closeVendorForm')
                {
                    window.LaravelDataTables[datatableName].ajax.reload();
                }
                toastr.success('Yay! Success..');
                $('#'+modalId).modal('hide');
                $('#closeVendorForm').trigger('click');
            },
            error: function (error) {
                if(objCount !== 0 || action !==undefined) {
                    toastr.error(`Ooops!!, ${error.responseJSON.message === undefined ? 'Something went wrong...' : error.responseJSON.message}`);
                    generateValidationError(error.responseJSON.errors === undefined ? error.responseJSON.message : error.responseJSON.errors, modalId);
                }
            }
        });
    }else{
        $.ajax({
            type: 'POST',
            url: action,  // Replace with your server endpoint
            data: JSON.stringify(formDataObject), // Convert JSON object to string
            contentType: 'application/json', // Set content type
            success: function (response) {
                if (closeVendorForm !== 'closeVendorForm')
                {
                    window.LaravelDataTables[datatableName].ajax.reload();
                }
                toastr.success('Yay! Success..');
                $('#'+modalId).modal('hide');
                $('#closeVendorForm').trigger('click');
            },
            error: function (error) {
                if(objCount !== 0 || action !==undefined) {
                    toastr.error(`Ooops!!, ${error.responseJSON.message === undefined ? 'Something went wrong...' : error.responseJSON.message}`);
                    generateValidationError(error.responseJSON.errors === undefined ? error.responseJSON.message : error.responseJSON.errors, modalId);
                }
            }
        });
    }

}


function setModalTitle(title,modalId){
    $('#'+modalId+' h3').html(title);
}
function setModalActionClass(classNow,modalId){
    var obj = $('#'+modalId+' .btn.btn-primary');
    obj.addClass(classNow+'Action');
    classNow =="save" ?  obj.removeClass('updateAction') : obj.removeClass('saveAction');
}

function generateValidationError(errors,modalId){
    var errorHtml = ``;
    $.each(errors, function (index, field) {
        errorHtml+=`<div>`+field+`</div>`;
    });
    $('#'+modalId+' .fv-plugins-message-container').html(errorHtml);
}
// HELPERS
