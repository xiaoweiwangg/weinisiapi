let db = require("../module/db")
//日期时间处理模块
let time = require("../module/time")
//token模块
let token = require("../token/settoken")

//全局路由中间件
exports.use = function (req, res, next) {
    // console.log(req.headers['user-agent']);
    if ((req.method.toLowerCase()) == "post") {
        if (req.url != "/fuser" && req.url != "/inuser") {
            if (!req.headers.token) {
                res.sendStatus(401)
            } else {
                next()
            }
        }else{
            next()
        }
    } else {
        next()
    }
}
//查询公告模块
exports.gonggao = function (req, res) {
    db.findgg((x) => {
        res.json(x)
    })
}
//查询历史订单模块
exports.findhistory = function (req, res) {
    db.set(
        `select playgame,playname,playdate,buytime,buydet,userinput,price,iskj from shopcar where username="${req.body.username}" `,
        (x) => {
        res.json(x)
    })
}
//查询活动模块
exports.active = function (req, res) {
    db.findactive((x) => {
        res.json(x)
    })
}
//插入订单模块
exports.shopcar=function(req,res){
    req.body.buytime=time.time().datetime
    db.findbalance(req.body,function(x){
        if(req.body.price>Number(x[0].balance)){
            res.json({msg:"余额不足"})
        }else{
            db.inshop(req.body,function(t){
                db.set(
                    `update userinfo set balance=balance-${req.body.price} where name="${req.body.username}";`,
                    function(v){
                        res.json({msg:"ok"})
                    }
                )
            })
        }
    })
    console.log(req.body)
    
}
//插入用户信息模块
exports.inuser = function (req, res) {
    let userinfo = req.body
    userinfo.level = 1
    userinfo.rigtime = time.time().datetime
    db.finduser(userinfo, function (x) {
        if (x.length >= 0) {
            console.log(x,123456);
            res.json({ msg: "no" })
            return 
        } 
        db.inuser(userinfo, function (y) {
                delete userinfo.password
                userinfo.balance=0.00
                res.json({ msg: "ok",token:token.settoken(userinfo.name,3),userinfo:userinfo })
            })
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
                usermsg.token = token.settoken(usermsg.userinfo.name, 3)
                usermsg.msg = "ok"
                res.json(usermsg)
            })
        } else {
            res.json({ msg: "no" })
        }
    })
}