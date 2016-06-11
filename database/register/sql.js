module.exports = (data) => `insert into users (email,password) values('${data.email}', '${data.password}');`;
