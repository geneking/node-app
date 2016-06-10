'use strict';

const loginSql   = require('../../database/login/sql');
const conn       =  require('../../database/connection');

module.exports = (request, response) => {
  let data = {
    email: request.body.email,
    password: request.body.password
  };

  conn.query(loginSql(data) ,(err, res) => {
    if (res) {
      response.json({
        code: 0,
        msg: '登录成功'
      });
    } else {
      response.json({
        code: 1,
        msg: err.message
      });
    }
  });
};
