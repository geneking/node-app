module.exports = function(data){
  return 'select count(*) from users where email="'+data.email+'" and password="'+data.password +'"';
};
