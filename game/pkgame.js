let name = require("./fname")
let db = require("../module/db")
exports.chek = function (x, kj) {
    console.log(x, kj);
    if (x.playname.includes("一星定位胆")) {
        let obj = JSON.parse(x.userinput).data
        kj = kj.split(",").map(t => Number(t))
        console.log(obj, kj, "1234000");
        let n = 0;
        if (obj[0].includes(kj[0])) {
            n++
        }
        if (obj[1].includes(kj[1])) {
            n++
        }
        if (obj[2].includes(kj[2])) {
            n++
        }
        if (obj[3].includes(kj[3])) {
            n++
        }
        if (obj[4].includes(kj[4])) {
            n++
        }
        if (obj[5].includes(kj[5])) {
            n++
        }
        if (obj[6].includes(kj[6])) {
            n++
        }
        if (obj[7].includes(kj[7])) {
            n++
        }
        if (obj[8].includes(kj[8])) {
            n++
        }
        if (obj[9].includes(kj[9])) {
            n++
        }
        console.log(x.userinput, "---------***********");
        if (n == 0) {
            db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "00")
        } else {
            db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj}" where buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "00")
        }
        db.set(
            `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
            function (v) {
                db.set(`update shopcar set jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel * n} where buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "00")
                console.log(v[0][name.fname(x.playname)] * x.playmode * x.playratel * n);
                db.set(
                    `update userinfo set balance=balance+${v[0][name.fname(x.playname)] * x.playmode * x.playratel * n} where name="${x.username}";`,
                    function (z) {
                        console.log(z);
                    }
                )
            }
        )
        return n
    }
    if (x.playname.includes("猜前五")) {
        let obj = JSON.parse(x.userinput).data
        kj = kj.split(",").map(t => Number(t))
        console.log("obj:", obj, kj);
        if (obj[0].includes(kj[0]) && obj[1].includes(kj[1]) && obj[2].includes(kj[2]) && obj[3].includes(kj[3]) && obj[4].includes(kj[4])) {
            db.set(
                `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
                function (v) {
                    db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join(',')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
                    console.log(v[0][name.fname(x.playname)] * x.playmode * x.playratel);
                    db.set(
                        `update userinfo set balance=balance+${v[0][name.fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
                        function (z) {
                        }
                    )
                }
            )
        } else {
            db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("未中", x.playname, "09"); return;
        }
    }
    if (x.playname.includes("猜前四")) {
        let obj = JSON.parse(x.userinput).data
        console.log(kj);
        kj = kj.split(",").map(t => Number(t))
        console.log("obj:", obj, kj);
        if (obj[0].includes(kj[0]) && obj[1].includes(kj[1]) && obj[2].includes(kj[2]) && obj[3].includes(kj[3])) {
            db.set(
                `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
                function (v) {
                    db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join(',')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
                    console.log(v[0][name.fname(x.playname)] * x.playmode * x.playratel);
                    db.set(
                        `update userinfo set balance=balance+${v[0][name.fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
                        function (z) {
                        }
                    )
                }
            )
        } else {
            db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("未中", x.playname, "09"); return;
        }
    }
    if (x.playname.includes("猜前三")) {
        let obj = JSON.parse(x.userinput).data
        kj = kj.split(",").map(t => Number(t))
        console.log("obj:", obj, kj);
        if (obj[0].includes(kj[0]) && obj[1].includes(kj[1]) && obj[2].includes(kj[2])) {
            db.set(
                `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
                function (v) {
                    db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join(',')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
                    console.log(v[0][name.fname(x.playname)] * x.playmode * x.playratel);
                    db.set(
                        `update userinfo set balance=balance+${v[0][name.fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
                        function (z) {
                        }
                    ) 
                }
            )
        } else {
            db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("未中", x.playname, "09"); return;
        }
    }
    if (x.playname.includes("猜前二")) {
        let obj = JSON.parse(x.userinput).data
        kj = kj.split(",").map(t => Number(t))
        console.log(obj, kj);
        let n = 0;
        if (obj[0].includes(kj[0]) && obj[1].includes(kj[1])) {
            n++
            db.set(
                `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
                function (v) {
                    db.set(`update shopcar set iskj=1, jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel * n},iszk="已中奖",  kjnum="${kj.join(',')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "01")
                    console.log(v[0][name.fname(x.playname)] * x.playmode * x.playratel * n);
                    db.set(
                        `update userinfo set balance=balance+${v[0][name.fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
                        function (z) {
                        }
                    )
                }
            )
        } else {
            db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("未中", x.playname, "09"); return;
        }
    }
    if (x.playname.includes("猜冠军")) {
        let obj = JSON.parse(x.userinput).data
        kj = kj.split(",").map(t => Number(t))
        console.log(obj, kj, "1234000");
        let n = 0;
        if (obj[0].includes(kj[0])) {
          n++
        }
        console.log(x.userinput, "---------***********");
        if (n == 0) {
          db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join(',')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "00")
        } else {
          db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join(',')}" where buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "00")
        }
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel * n} where buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "00")
            console.log(v[0][name.fname(x.playname)] * x.playmode * x.playratel * n);
            db.set(
              `update userinfo set balance=balance+${v[0][name.fname(x.playname)] * x.playmode * x.playratel * n} where name="${x.username}";`,
              function (z) {
                console.log(z);
              }
            )
          }
        )
        return n
      }
}