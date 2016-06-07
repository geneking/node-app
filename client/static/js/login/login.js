require('../../less/common/common.less');
require('../../less/login/login.less');

//适配
MT.p2m(640);

//dom元素
var doms = {
  email: $('input[name=email]'),
  password: $('input[name=password]'),
  login: $('.login')
};

/**
 * @description 注册请求
 * @param {email:邮箱, password:密码}
 */
var request = function(data){
  $.post('/login', data, function(res) {
    var res = JSON.parse(res);
    if (+res.code == 0) {
      location.href = '/';
    } else {
      MT.toast(res.msg);
    }
  });
};

/**
 * @function listener
 * @description 注册提交事件
 */
var listener = function(){

  doms.login.on('click', function() {
    var data = {
      email: doms.email.val(),
      password: doms.password.val()
    };
    request(data);
  });

  doms.email.focus();
};
listener();
