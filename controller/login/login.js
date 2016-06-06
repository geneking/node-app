var loginSql   = require('../../database/login/sql');
var conn       =  require('../../database/connection');

module.exports = function(request, response){
  var data = {
    email: request.body.email,
    password: request.body.password
  };

  conn.query(loginSql(data) ,function(err, res){
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
