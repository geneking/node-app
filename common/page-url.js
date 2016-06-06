var path     = require('path');
var page_url = path.join(__dirname, '../client/views/');

module.exports = {
  home: page_url + "home/home.html",
  login: page_url + "login/login.html",
  register: page_url + "register/register.html"
};
