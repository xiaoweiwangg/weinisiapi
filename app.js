let app = require("express")()

let body=require("body-parser")
app.use(body.urlencoded({extended:false}))
app.use(body.json())

let router=require("./router/router")
let game=require("./game/game")

app.use(router.use)
app.get("/gonggao", router.gonggao)
app.post("/inuser",router.inuser)
app.post("/fuser",router.fuser)

app.listen(80)


