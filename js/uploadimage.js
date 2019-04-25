'use strict';

function uploadImage() {
    var formData = new FormData();
    var fileField = document.querySelector("input[type='file']");
    var form = document.getElementsByTagName('form');
    var inputAuthor = document.getElementById('author');
    var inputName = document.getElementById('name');
    var file = document.getElementById('file');

    var errorMessage = "Please complete all the fields";

    if (inputAuthor.checkValidity() === false || inputName.checkValidity() === false || file.isEmptyObject() === true) {
        alert(errorMessage);
        return;
    }

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



