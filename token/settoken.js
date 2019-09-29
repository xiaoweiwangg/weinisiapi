let jwt = require("jwt-simple")
let mm = require("moment")
let jwtpwd = "wangerwei"
exports.settoken=function(data,timer){
  let config={}
  let jwttime=mm().add(timer,"minutes").valueOf()
  config.exp=jwttime
  config.name=data
  return jwt.encode(config,jwtpwd)
}
exports.gettoken=function(x){ 
  return jwt.decode(x,jwtpwd)
} 