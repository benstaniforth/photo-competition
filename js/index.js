'use strict';

// JavaScript for use with the index page.

var photoId;

function loadRandomImage() {
    fetch(buildUrl('/random'))
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            return response.json();
        })
        .then(function (json) {
            console.log('Request to /random succeeded: ');
            console.log(json);

            photoId = json.id;

            var mainImage = $('#main-image');
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
            console.error('Request to /random failed: ', err);
        });
}

$(function () {
    loadRandomImage();
});

function upvoteImage() {
    fetch(buildUrl('/id/' + photoId + '/vote/up'), {method: 'post'})
        .then(function (response) {
            if (response.status !== 204) {
                throw new Error('Request return status code !== 204: ' + response.status + ' - ')
            } else {
                location.reload();
            }
        })

        .catch (function (err) {
            console.error('Request to upvote failed: ', err);
        });
}

function downvoteImage() {
    fetch(buildUrl('/id/' + photoId + '/vote/down'), {method: 'post'})
        .then(function (response) {
            if (response.status !== 204) {
                throw new Error('Request return status code !== 204: ' + response.status + ' - ')
            } else {
                location.reload();
            }
        })
        .catch (function (err) {
            console.error('Request to downvote failed: ', err);
        });
}



