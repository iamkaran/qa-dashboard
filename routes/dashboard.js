var express = require('express');
var ejs = require('ejs');

exports.getDashboard = function (req, res, next) {
    res.render('dashboard');
};
