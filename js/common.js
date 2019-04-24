'use strict';
// JavaScript containing shared constants, for use in all pages.

var backendIp = 'ec2-99-81-194-20.eu-west-1.compute.amazonaws.com';
var token = '0157f092-5c74-46bc-a554-dac275eba799';

function buildUrl(path) {
    return 'http://' + backendIp + '/images' + path + '?token=' + token;
}
