let app = require("express")()

//处理post请求
let body=require("body-parser")
app.use(body.urlencoded({extended:false}))
app.use(body.json())

//引入并执行game模块
let game=require("./game/game")

//处理路由
let router=require("./router/router")
app.use(router.use)
app.get("/gonggao", router.gonggao)
app.post("/inuser",router.inuser)
app.post("/fuser",router.fuser)

//端口监听
app.listen(80)


