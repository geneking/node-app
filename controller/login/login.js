'use strict';

const loginSql = require('../../database/login/sql');
const conn     = require('../../database/connection');

module.exports = (request, response) => {
  const data = {
    email: request.body.email,
    password: request.body.password
  };

  conn.query(loginSql(data) ,(err, res) => {
    if (res) {
      request.session.user = res;
      response.json({
        code: 0,
        msg: '登录成功'
      });
    } else {
      request.session.error = err.msg;
      response.json({
        code: 1,
        msg: err.message
      });
    }
  });
};
