'use strict';

import '../common/common.less';
import './login.less';

//适配
MT.p2m(640);

//dom元素
const DOMS = {
  email: $('input[name=email]'),
  password: $('input[type=password]'),
  loginBtn: $('.login-btn')
};

/**
 * @description 登录请求
 * @param {email:邮箱, password:密码}
 */
const request = (data) => {
  $.post('/login', data, (res) => {
    const data = JSON.parse(res);
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
const listener = () => {

  DOMS.loginBtn.on('click', () => {
    const data = {
      email: DOMS.email.val(),
      password: DOMS.password.val()
    };
    request(data);
  });

  DOMS.email.focus();
};
listener();
