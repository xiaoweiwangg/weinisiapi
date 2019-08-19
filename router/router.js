let db = require("../module/db")
//日期时间处理模块
let time = require("../module/time")
//token模块
let token=require("../token/settoken")

//全局路由中间件
exports.use = function (req, res, next) {
  
  if (req.url != "/logoin" && req.url != "/registry"&&req.url!="/"&&req.url!="/fuser") {
    if(!req.headers.token){
      res.sendStatus(401)
    }else{
      next()
    }
  }else{
    next()
  }
}
//查询公告模块
exports.gonggao = function (req, res) {
  db.findgg((x) => {
    res.json(x)
  })
}
//插入用户信息模块
exports.inuser = function (req, res) {
  let userinfo = req.body
  userinfo.level = 1
  userinfo.rigtime = time.time().datetime
  db.finduser(userinfo, function (x) {
    if (x.length > 0) {
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
        usermsg.token =  token.settoken(usermsg.userinfo.name,3)
        usermsg.msg = "ok"
        res.json(usermsg)
      })
    } else {
      res.json({ msg: "no" })
    }
  })
}