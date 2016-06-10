'use strict';

const express  = require('express');
const page_url = require('../../common/page-url');

exports.route = (app) => {
  //首页
  app.get('/', (req, res) => {
      res.sendFile( page_url.home);
  });
};
