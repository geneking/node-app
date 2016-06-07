var express  = require('express');
var page_url = require('../../common/page-url');

exports.route = function (app) {

  app.get('/register', function (req, res) {
      res.sendFile( page_url.register);
  });
};
