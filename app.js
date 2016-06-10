var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

var home     = require('./routes/home/home');
var login    = require('./routes/login/login');
var register = require('./routes/register/register');
var conn     = require('./database/connection');

app.listen(3000, function () {
  console.log("Server已启动----访问http://127.0.0.1/login----");
});

app.use('/client/static', express.static(__dirname + '/client/static'));
app.use('/client/build', express.static(__dirname + '/client/build'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//首页
home.route(app);

//登录
login.route(app);

//注册
register.route(app);
