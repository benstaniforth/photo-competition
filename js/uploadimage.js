'use strict';

function uploadImage() {
    var formData = new FormData();
    var fileField = document.querySelector("input[type='file']");

    formData.append('metadata', new Blob([JSON.stringify({
        author: $('#author').val(),
        name: $('#name').val(),
        license: 'CC_BY_SA'
    })], {type: 'application/json'}));
    formData.append('rawdata', fileField.files[0]);

    fetch(buildUrl('/'), {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', JSON.stringify(response)))
        .then(function () {
            location.assign('index.html');
        });
}



