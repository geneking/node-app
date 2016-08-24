'use strict';

const registerSql = require('../../database/register/sql');
const conn        = require('../../database/connection');
const session     = require('express-session');

module.exports = (request, response) => {
  const data = {
    email: request.body.email,
    password: request.body.password
  };

  conn.query(registerSql(data) ,(err, res) => {
    if (res) {
      response.json({
        code: 0,
        msg: '注册成功'
      });
    } else {
      response.json({
        code: 1,
        msg: err.message
      });
    }
  });
};
