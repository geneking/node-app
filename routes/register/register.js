'use strict';

const express  = require('express');
const page_url = require('../../common/page-url');

exports.route = (app) => {

  app.get('/register', (req, res) => {
      res.sendFile( page_url.register);
  });
};
