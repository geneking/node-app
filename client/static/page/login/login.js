'use strict';

require('../common/common.less');
require('./login.less');

//适配
MT.p2m(640);

//dom元素
let DOMS = {
  email: $('input[name=email]'),
  password: $('input[type=password]'),
  loginBtn: $('.login-btn')
};

/**
 * @description 登录请求
 * @param {email:邮箱, password:密码}
 */
let request = (data) => {
  $.post('/login', data, (res) => {
    let data = JSON.parse(res);
    if (+data.code == 0) {
      location.href = '/';
    } else {
      MT.toast(data.msg);
    }
  });
};

/**
 * @function listener
 * @description 注册提交事件
 */
let listener = () => {

  DOMS.loginBtn.on('click', () => {
    let data = {
      email: DOMS.email.val(),
      password: DOMS.password.val()
    };
    request(data);
  });

  DOMS.email.focus();
};
listener();
