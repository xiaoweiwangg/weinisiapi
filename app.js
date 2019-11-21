let exp = require("express")
let db=require("./module/db")
let path = require("path")
let app = exp()

//处理post请求
let body = require("body-parser")
app.use(body.urlencoded({limit:'50mb', extended: false }))  
app.use(body.json({limit:'50mb'}))

//静态文件处理
app.use(exp.static(__dirname + "/dist"))
//引入并执行game模块
let game = require("./game/game")
//设置允许跨域 

// app.use(allowCrossDomain); 

//处理路由
let router = require("./router/router")
app.use(router.use) 
app.get("/gonggao", router.gonggao)
app.post("/inuser", router.inuser)
app.post("/niuniu",router.fniuniu)
app.post("/rbwar",router.frbwar)
app.post("/lhwar",router.flhwar)
app.post("/fuser", router.fuser) 
app.post("/shopcar", router.shopcar)  
app.post("/history", router.findhistory)
app.post("/incard", router.incard)
app.post("/subcash", router.subcash)
app.post("/cash", router.cash)
app.get("/active", router.active) 
app.get("/fhis", router.fhistory)  
app.post("/send",router.sendmail)
app.post("/findxiaji",router.findxiaji)
app.post("/yingkui",router.fyingkui)
app.post("/findcode",router.fcode)
app.post("/fallx",router.fallx)
app.get("/fcid",router.fid)
//端口监听
app.listen(8088)  


