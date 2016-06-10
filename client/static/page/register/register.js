'use strict';

require('../common/common.less');
require('./register.less');

//适配
MT.p2m(640);

//dom元素
let DOMS = {
  email:     $('input[name=email]'),
  password:  $('input[name=password]'),
  password2: $('input[name=password2]'),
  regBtn:    $('.reg-btn')
};

//操作
let action =  {
  /**
   * @function samePassword
   * @description 判断两次密码是否一致
   * @param {password:密码, password2:确认密码}
   */
  samePassword: () => {
    let password = $.trim(DOMS.password.val()),
        password2 = $.trim(DOMS.password2.val());

    if (password != password2) {
      MT.toast('两次密码输入不一致');
      return false;
    } else {
      return true;
    }
  },

  /**
   * @function validForm
   * @description 表单校验
   */
  validForm: () => {
    let emailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
        passReg = /^[a-zA-Z]\w{5,17}$/;

    //验证邮箱
    if (!emailReg.test(DOMS.email.val())) {
      MT.toast('邮箱格式不合法');
      return false;
    }

    //密码校验
    if(!passReg.test(DOMS.password.val()) || !passReg.test(DOMS.password.val())){
      MT.toast('密码以字母开头,长度6-18位，只能包含字符、数字和下划线');
      return false;
    }

    return this.samePassword() ? true : false;
  }
};

/**
 * @description 注册请求
 * @param {email:邮箱, password:密码}
 */
let request = (data) => {
  $.post('/register', data, (res) => {
    let data = JSON.parse(res);
    if (+data.code == 0) {
      location.href = '/login';
    } else {
      MT.toast(res.msg);
    }
  });
};

/**
 * @function listener
 * @description 注册提交事件
 */
let listener = () => {
  DOMS.regBtn.on('click', () => {
    let data = {
      email: DOMS.email.val(),
      password: DOMS.password.val()
    };

    if (!action.validForm()) return false;
    request(data);
  });

  DOMS.email.focus();
};
listener();
