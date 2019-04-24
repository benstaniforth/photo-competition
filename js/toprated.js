'use strict';

function loadTopRatedImage () {
    fetch(buildUrl('/top'))
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            return response.json();
        })
        .then(function (json) {

            var mainImage = $('#top-rated-image');
            mainImage.attr('src', json.url);
            mainImage.attr('alt', 'Photo Competition image, ' + json.name);

            var author = $('#author');
            author.text(json.author);

            var name = $('#name');
            name.text(json.name);

            var license = $('#license');
            license.text(json.license);
        })
        .catch(function (err) {
            console.error('Request to /top failed: ', err);
        });
}
$(function () {
    loadTopRatedImage();
});