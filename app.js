'use strict';

const express    = require('express');
const session    = require('express-session');
const app        = express();
const bodyParser = require('body-parser');

const home     = require('./routes/home/home');
const login    = require('./routes/login/login');
const register = require('./routes/register/register');
const conn     = require('./database/connection');

app.listen(3000, () => {
  console.log("Server已启动----访问http://127.0.0.1/login----");
});

app.use('/client/static', express.static(`${__dirname}/client/static`));
app.use('/client/build', express.static(`${__dirname}/client/build`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//首页
home.route(app);

//登录
login.route(app);

//注册
register.route(app);
