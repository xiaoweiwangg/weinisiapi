let db = require("../module/db")
let time = require("../module/time")
let mm = require("moment")


let jwt = require("jwt-simple")
let jwtpwd = "wangerwei"

let token = null
// let u=jwt.decode("","wangerwei")
// console.log(u.exp>Date.now());


exports.use = function (req, res, next) {
  if (req.url != "/logoin" && req.url != "/registry"||req.url=="/") {
    if(!req.headers.token){
      console.log("没有令牌");
    }
    next()
  }
}

exports.gonggao = function (req, res) {

  db.findgg((x) => {
    res.json(x)
  })
}
//插入用户信息
exports.inuser = function (req, res) {
  let userinfo = req.body
  userinfo.level = 1
  userinfo.rigtime = time.time().datetime
  console.log(userinfo);
  db.finduser(userinfo, function (x) {
    if (x.length > 0) {
      console.log("用户名已存在");
      res.json({ msg: "no" })
    } else {
      db.inuser(userinfo, function (x) {
        res.json({ msg: "ok" })
      })
    }
  })
}
//用户登录模块
exports.fuser = function (req, res) {
  let userinfo = req.body
  db.fuser(userinfo, function (x) {
    if (x.length > 0) {
      let usermsg = {}
      db.finduser(userinfo, function (x) {
        usermsg.userinfo = x[0];
        let jwttime = mm().add(3, 'minutes').valueOf()
        token = jwt.encode({ name: usermsg.userinfo.name, exp: jwttime }, jwtpwd)
        usermsg.token = token
        usermsg.msg = "ok"
        res.json(usermsg)
      })
    } else {
      res.json({ msg: "no" })
    }
  })
}