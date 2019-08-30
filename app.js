let exp = require("express")
let db=require("./module/db")
let path = require("path")
let app = exp()

//处理post请求
let body = require("body-parser")
app.use(body.urlencoded({ extended: false }))
app.use(body.json())
//静态文件处理
app.use(exp.static(__dirname + "/dist"))
//引入并执行game模块
let game = require("./game/game")
//设置允许跨域 
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};
app.use(allowCrossDomain);
//处理路由
let router = require("./router/router")
app.use(router.use)
app.get("/gonggao", router.gonggao)
app.post("/inuser", router.inuser)
app.post("/fuser", router.fuser)
app.post("/shopcar", router.shopcar)
app.get("/active", router.active)

//端口监听
app.listen(80)


