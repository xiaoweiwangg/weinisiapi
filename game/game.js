let request = require("request")
let cheerio = require("cheerio")
let _ = require('underscore')
let db = require("../module/db")
let t = require("../module/time")
let config = [[0, 9], [0, 9], [0, 9], [0, 9], [0, 9]]
// let str=""
// for(let i=0;i<10;i++){
//   for(let a=0;a<10;a++){
//      str+=(i+""+a+ " ")
//     }
// }
// console.log(str);

//socket.io
let exp = require("express")
let app = exp()
let http = require("http").Server(app)
let io = require("socket.io")(http)
function fname(x) {
  if (x.includes("一星直选")) {
    return "yxzhix"
  }
  if (x.includes("二") && x.includes("直选")) {
    return "exzhx"
  }
  if (x.includes("二") && x.includes("组选")) {
    return "exzx"
  }
  if (x.includes("三") && x.includes("直选")) {
    return "sxzhx"
  }
  if (x.includes("三") && x.includes("组选")) {
    return "sxzxz6"
  }
  if (x.includes("三") && x.includes("组六")) {
    return "sxzxz6"
  }
  if (x.includes("三") && x.includes("组三")) {
    return "sxzxz3"
  }
  if (x.includes("三") && x.includes("一码不定位")) {
    return "sx1mbdw"
  }
  if (x.includes("三") && x.includes("二码不定位")) {
    return "sx2mbdw"
  }
  if (x.includes("四") && x.includes("直选")) {
    return "sixzhx"
  }
  if (x.includes("四") && x.includes("一码不定位")) {
    return "six1mbdw"
  }
  if (x.includes("四") && x.includes("二码不定位")) {
    return "six2mbdw"
  }
  if (x.includes("五") && x.includes("直选")) {
    return "wxzhx"
  }
  if (x.includes("五") && x.includes("一码不定位")) {
    return "wx1mbdw"
  }
  if (x.includes("五") && x.includes("二码不定位")) {
    return "wx2mbdw"
  }
  if (x.includes("五") && x.includes("三码不定位")) {
    return "wx3mbdw"
  }
}
function chek(x, kj) {
  // if(){}
  console.log(x);
  
  if (x.playname.includes("一星直选复式")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log(obj, kj, "1234000");
    let n = 0;
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].length > 0) {
        if (obj[i].includes(kj[i])) {
          n++
          db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "00")
        }
      }
    }
    db.set(
      `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
      function (v) {
        console.log(v[0][fname(x.playname)] * x.playmode * x.playratel * n);
        db.set(
          `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel * n} where name="${x.username}";`,
          function (z) {
            console.log(z);
          }
        )
      }
    )
    return n
  }
  if (x.playname.includes("前二直选复式")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log(obj, kj);
    let n = 0;
    if (obj[0].includes(kj[0]) && obj[1].includes(kj[1])) {
      n++
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "01")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel * n);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("后二直选复式")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    let n = 0;
    if (obj[0].includes(kj[3]) && obj[1].includes(kj[4])) {
      n++
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "02")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel * n);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
              console.log(z);
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("后二") && x.playname.includes("直选和值")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    let n = 0;
    console.log(obj, kj);
    if (obj[0].includes(kj[3] + kj[4])) {
      n++
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "03")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel * n);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("前二") && x.playname.includes("直选和值")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log(obj, kj);
    if (obj[0].includes((kj[0] + kj[1]))) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "04")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("前二") && x.playname.includes("直选跨度")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log(obj, kj);
    if (obj[0].includes(Math.abs(kj[0] - kj[1]))) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "05")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("后二") && x.playname.includes("直选跨度")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log(obj, kj);
    if (obj[0].includes(Math.abs(kj[3] - kj[4]))) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "05")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("前二直选单式")) {
    let obj = JSON.parse(x.buydet).data
    kj = kj.split("").map(t => Number(t))
    console.log(obj, kj);
    if (obj.includes((kj[0] + "" + kj[1]))) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "06")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("前二组选单式")) {
    let obj = JSON.parse(x.buydet).data
    kj = kj.split("").map(t => Number(t))
    console.log(obj, kj);
    if (obj.includes(kj[0] + "" + kj[1]) || obj.includes(kj[1] + "" + kj[0])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "07")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("后二直选单式")) {
    let obj = JSON.parse(x.buydet).data
    kj = kj.split("").map(t => Number(t))
    console.log(obj, kj);
    if (obj.includes(kj[3] + "" + kj[4])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "08")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("后二组选单式")) {
    let obj = JSON.parse(x.buydet).data
    kj = kj.split("").map(t => Number(t))
    console.log(obj, kj);
    if (obj.includes(kj[3] + "" + kj[4]) || obj.includes(kj[4] + "" + kj[3])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "07")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }

  if (x.playname.includes("前二组选复式")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj[0], kj);
    if (kj[0] != kj[1] && obj[0].includes(kj[0]) && obj[0].includes(kj[1])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("后二组选复式")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj[0], kj);
    if (kj[3] != kj[4] && obj[0].includes(kj[3]) && obj[0].includes(kj[4])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("前二组选和值")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj[0], kj);
    if (kj[0] != kj[1] && obj[0].map(u => Number(u)).includes((kj[0] + kj[1]))) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("后二组选和值")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj[0], kj);
    if (kj[3] != kj[4] && obj[0].map(u => Number(u)).includes((kj[3] + kj[4]))) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("前三直选复式")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    if (obj[0].includes(kj[0]) && obj[1].includes(kj[1]) && obj[2].includes(kj[2])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("中三直选复式")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    if (obj[0].includes(kj[1]) && obj[1].includes(kj[2]) && obj[2].includes(kj[3])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }

  if (x.playname.includes("后三直选复式")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    if (obj[0].includes(kj[2]) && obj[1].includes(kj[3]) && obj[2].includes(kj[4])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("前三直选和值")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    if (obj[0].map(p => Number(p)).includes(kj[0] + kj[1] + kj[2])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("中三直选和值")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    if (obj[0].map(p => Number(p)).includes(kj[1] + kj[2] + kj[3])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("后三直选和值")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    if (obj[0].includes(kj[2] + kj[3] + kj[4])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("前三直选跨度")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    if (obj[0].includes(Math.abs(Math.max(kj[0], kj[1], kj[2]) - Math.min(kj[0], kj[1], kj[2])))) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("中三直选跨度")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    if (obj[0].includes(Math.abs(Math.max(kj[1], kj[2], kj[3]) - Math.min(kj[1], kj[2], kj[3])))) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("后三直选跨度")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    if (obj[0].includes(Math.max(kj[2], kj[3], kj[4]) - Math.min(kj[2], kj[3], kj[4]))) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("前三直选单式")) {
    let obj = JSON.parse(x.buydet).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    if (obj.includes(kj[0] + "" + kj[1] + "" + kj[2])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("中三直选单式")) {
    let obj = JSON.parse(x.buydet).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    if (obj.includes(kj[1] + "" + kj[2] + "" + kj[3])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("后三直选单式")) {
    let obj = JSON.parse(x.buydet).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    if (obj.includes(kj[2] + "" + kj[3] + "" + kj[4])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("前三组选组六")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj[0], kj);

    if (obj[0].includes(kj[0]) && obj[0].includes(kj[1]) && obj[0].includes(kj[2])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("中三组选组六")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj[0], kj);
    if (obj[0].includes(kj[1]) && obj[0].includes(kj[2]) && obj[0].includes(kj[3])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("后三组选组六")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj[0], kj);
    if (obj[0].includes(kj[2]) && obj[0].includes(kj[3]) && obj[0].includes(kj[4])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("前三组选组三")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj[0], kj);
    if (obj[0].includes(kj[0]) && obj[0].includes(kj[1]) && obj[0].includes(kj[2])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("中三组选组三")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj[0], kj);
    if (obj[0].includes(kj[1]) && obj[0].includes(kj[2]) && obj[0].includes(kj[3])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("后三组选组三")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj[0], kj);
    if (obj[0].includes(kj[2]) && obj[0].includes(kj[3]) && obj[0].includes(kj[4])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }

  if (x.playname.includes("前三组选单式")) {
    let obj = JSON.parse(x.buydet).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    let nm = fname(x.playname)
    if (kj[0] == kj[1] || kj[0] == kj[2] || kj[2] == kj[3]) {
      nm = "sxzxz3"
    }
    if (obj.includes(kj[0] + "" + kj[1] + "" + kj[2]) || obj.includes(kj[0] + "" + kj[2] + "" + kj[1]) || obj.includes(kj[1] + "" + kj[2] + "" + kj[0]) || obj.includes(kj[1] + "" + kj[0] + "" + kj[2]) || obj.includes(kj[2] + "" + kj[1] + "" + kj[0]) || obj.includes(kj[2] + "" + kj[0] + "" + kj[1])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${nm} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][nm] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][nm] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("中三组选单式")) {
    let obj = JSON.parse(x.buydet).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    let nm = fname(x.playname)
    if (kj[1] == kj[2] || kj[1] == kj[3] || kj[2] == kj[3]) {
      nm = "sxzxz3"
    }
    if (obj.includes(kj[3] + "" + kj[1] + "" + kj[2]) || obj.includes(kj[3] + "" + kj[2] + "" + kj[1]) || obj.includes(kj[1] + "" + kj[2] + "" + kj[3]) || obj.includes(kj[1] + "" + kj[3] + "" + kj[2]) || obj.includes(kj[2] + "" + kj[1] + "" + kj[3]) || obj.includes(kj[2] + "" + kj[3] + "" + kj[1])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${nm} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][nm] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][nm] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("后三组选单式")) {
    let obj = JSON.parse(x.buydet).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    let nm = fname(x.playname)
    if (kj[2] == kj[3] || kj[2] == kj[4] || kj[3] == kj[4]) {
      nm = "sxzxz3"
    }
    if (obj.includes(kj[2] + "" + kj[3] + "" + kj[4]) || obj.includes(kj[2] + "" + kj[4] + "" + kj[3]) || obj.includes(kj[3] + "" + kj[2] + "" + kj[4]) || obj.includes(kj[3] + "" + kj[4] + "" + kj[2]) || obj.includes(kj[4] + "" + kj[3] + "" + kj[2]) || obj.includes(kj[4] + "" + kj[2] + "" + kj[3])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${nm} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][nm] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][nm] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }

  if (x.playname.includes("前三组选和值")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj[0], kj);
    let nm = fname(x.playname)
    if (kj[0] == kj[1] || kj[0] == kj[2] || kj[1] == kj[2]) {
      nm = "sxzxz3"
    }
    if (obj[0].includes(kj[0] + kj[1] + kj[2])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${nm} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][nm] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][nm] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )

    }
  }
  if (x.playname.includes("中三组选和值")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj[0], kj);
    let nm = fname(x.playname)
    if (kj[1] == kj[2] || kj[1] == kj[3] || kj[2] == kj[3]) {
      nm = "sxzxz3"
    }
    if (obj[0].includes(kj[3] + kj[1] + kj[2])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${nm} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][nm] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][nm] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("后三组选和值")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj[0], kj);
    let nm = fname(x.playname)
    if (kj[2] == kj[3] || kj[2] == kj[4] || kj[3] == kj[4]) {
      nm = "sxzxz3"
    }
    if (obj[0].includes(kj[4] + kj[3] + kj[2])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${nm} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][nm] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][nm] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("前三一码不定位")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj[0], kj);
    if (obj[0].includes(kj[0]) || obj[0].includes(kj[1]) || obj[0].includes(kj[2])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("中三一码不定位")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj[0], kj);
    if (obj[0].includes(kj[1]) || obj[0].includes(kj[2]) || obj[0].includes(kj[3])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("后三一码不定位")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj[0], kj);
    if (obj[0].includes(kj[2]) || obj[0].includes(kj[3]) || obj[0].includes(kj[4])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("前三二码不定位")) {
    let obj = JSON.parse(x.userinput).data
    console.log(kj);

    kj = kj.slice(0, 3)
    console.log("obj:", obj[0], kj);
    let n = 0;
    for (let i = 0; i < obj[0].length; i++) {
      if (kj.includes(Number(obj[0][i]))) {
        n++
      }
    }
    if (n >= 2) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("中三二码不定位")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.slice(1, 3)
    console.log("obj:", obj[0], kj);
    let n = 0;
    for (let i = 0; i < obj[0].length; i++) {
      if (kj.includes(Number(obj[0][i]))) {
        n++
      }
    }
    if (n >= 2) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("后三二码不定位")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.slice(2, 3)
    console.log("obj:", obj[0], kj);
    let n = 0;
    for (let i = 0; i < obj[0].length; i++) {
      if (kj.includes(Number(obj[0][i]))) {
        n++
      }
    }
    if (n >= 2) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("四星直选复式")) {
    let obj = JSON.parse(x.userinput).data
    console.log(kj);
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    if (obj[0].includes(kj[0]) && obj[1].includes(kj[1]) && obj[2].includes(kj[2]) && obj[3].includes(kj[3])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("四星直选单式")) {
    let obj = JSON.parse(x.buydet).data
    console.log(kj);

    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    if (obj.includes(kj[0] + "" + kj[1] + "" + kj[2] + "" + kj[3])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("四星一码不定位")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t)).splice(0, 4)
    console.log("obj:", obj, kj);
    if (obj[0].includes(kj[0]) || obj[0].includes(kj[1]) || obj[0].includes(kj[2]) || obj[0].includes(kj[3])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("四星二码不定位")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t)).splice(1, 4)
    console.log("obj:", obj, kj);
    let n = 0
    for (let i = 0; i < obj[0].length; i++) {
      if (kj.includes(obj[0][i])) {
        n++
      }
    }
    if (n >= 2) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("五星直选复式")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    if (obj[0].includes(kj[0]) && obj[1].includes(kj[1]) && obj[2].includes(kj[2]) && obj[3].includes(kj[3]) && obj[4].includes(kj[4])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("五星直选单式")) {
    let obj = JSON.parse(x.buydet).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    if (obj.includes(kj[0] + "" + kj[1] + "" + kj[2] + "" + kj[3] + "" + kj[4])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("五星一码不定位")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    if (obj[0].includes(kj[0]) || obj[0].includes(kj[1]) || obj[0].includes(kj[2]) || obj[0].includes(kj[3]) || obj[0].includes(kj[4])) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }
  if (x.playname.includes("五星二码不定位")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    let n = 0
    for (let i = 0; i < obj[0].length; i++) {
      if (kj.includes(obj[0][i])) {
        n++
      }
    }
    if (n >= 2) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }

  if (x.playname.includes("五星三码不定位")) {
    let obj = JSON.parse(x.userinput).data
    kj = kj.split("").map(t => Number(t))
    console.log("obj:", obj, kj);
    let n = 0
    for (let i = 0; i < obj[0].length; i++) {
      if (kj.includes(obj[0][i])) {
        n++
      }
    }
    if (n >= 3) {
      db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj}" where username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      db.set(
        `select ${fname(x.playname)} from jjinfo where name="${x.playgame}";`,
        function (v) {
          console.log(v[0][fname(x.playname)] * x.playmode * x.playratel);
          db.set(
            `update userinfo set balance=balance+${v[0][fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
            function (z) {
            }
          )
        }
      )
    }
  }






}





io.on('connection', function (socket) {
  socket.on("logoin", function (x) {
    console.log(x);

    socket.emit(x.username, {
      type: "server",
      msg: "欢迎来到威尼斯娱乐城!正在为您接通人工客服!请稍后....."
    })
  })
  //定时发送数据
  setInterval(() => {
    if (t.time().h = 20 && t.time().m == 50 && t.time().s == 30) {
      db.ffc3dlottor(function (x) {
        db.set(
          `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
          function (m) {
            if (m.length > 0) {
              for (let i = 0; i < m.length; i++) {
                socket.emit(m[i].username, {
                  msg: "ok"
                })
              }
            }
          }
        )
        socket.emit('fc3d', {
          msg: x[0],
          code: 200,
          h: 21,
          m: t.time().m,
          s: t.time().s,
        });
      })
      db.ftcpl5lottor(function (x) {
        db.set(
          `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
          function (m) {
            if (m.length > 0) {
              for (let i = 0; i < m.length; i++) {
                socket.emit(m[i].username, {
                  msg: "ok"
                })
              }
            }
          }
        )
        socket.emit('tcpl5', {
          msg: x[0],
          code: 200,
          h: 21,
          m: t.time().m + 10,
          s: t.time().s,
        });
      })
    }
    //---------------gassc
    if (t.time().s == 10 && t.time().m % 5 == 0) {
      db.fgalottor(function (x) {
        db.set(
          `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
          function (m) {
            console.log(m.length + "条记录");
            if (m.length > 0) {
              for (let i = 0; i < m.length; i++) {
                socket.emit(m[i].username, {
                  msg: "kj"
                })
              }
            }
          }
        )
        socket.emit('gassc', {
          msg: x[0],
          code: 200,
          m: t.time().m,
          s: t.time().s,
        });
      })
    }
    //----------------cqssc
    if(t.time().h>=8&&t.time().m>=30){

    }
    if (t.time().s == 40 && (t.time().m - 10) % 20 == 3) {
      db.fcqlottor(function (x) {
        db.set(
          `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
          function (m) {
            if (m.length > 0) {
              for (let i = 0; i < m.length; i++) {
                socket.emit(m[i].username, {
                  msg: "ok"
                })
              }
            }
          }
        )
        socket.emit('cqssc', {
          msg: x[0],
          code: 200,
          m: t.time().m + 10,
          s: t.time().s,
        });
      })
      db.fynlottor(function (x) {
        db.set(
          `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
          function (m) {
            if (m.length > 0) {
              for (let i = 0; i < m.length; i++) {
                socket.emit(m[i].username, {
                  msg: "ok"
                })
              }
            }
          }
        )
        socket.emit('ynssc', {
          msg: x[0],
          code: 200,
          m: t.time().m + 10,
          s: t.time().s,
        });
      })
    }
    //-----------------tjssc
    if (t.time().s == 10 && t.time().m % 20 == 3) {
      db.fxjlottor(function (x) {
        db.set(
          `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
          function (m) {
            if (m.length > 0) {
              for (let i = 0; i < m.length; i++) {
                socket.emit(m[i].username, {
                  msg: "ok"
                })
              }
            }
          }
        )
        socket.emit('xjssc', {
          msg: x[0],
          code: 200,
          m: t.time().m,
          s: t.time().s,
        });
      })
      db.ftjlottor(function (x) {
        db.set(
          `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
          function (m) {
            if (m.length > 0) {
              for (let i = 0; i < m.length; i++) {
                socket.emit(m[i].username, {
                  msg: "ok"
                })
              }
            }
          }
        )
        socket.emit('tjssc', {
          msg: x[0],
          code: 200,
          m: t.time().m,
          s: t.time().s,
        });
      })
    }

  }, 1000)
  //----------------初始化发送数据
  socket.on('gassc', function (obj) {
    db.fgalottor(function (x) {
      socket.emit('gassc', {
        msg: x[0],
        code: 200,
        m: t.time().m,
        s: t.time().s,
      });
    })
  });
  socket.on('cqssc', function (obj) {
    db.fcqlottor(function (x) {
      socket.emit('cqssc', {
        msg: x[0],
        code: 200,
        m: t.time().m + 10,
        s: t.time().s,
      });
    })
  });
  socket.on('tjssc', function (obj) {
    db.ftjlottor(function (x) {
      socket.emit('tjssc', {
        msg: x[0],
        code: 200,
        m: t.time().m,
        s: t.time().s,
      });
    })
  });
  socket.on('xjssc', function (obj) {
    db.fxjlottor(function (x) {
      socket.emit('xjssc', {
        msg: x[0],
        code: 200,
        m: t.time().m,
        s: t.time().s,
      });
    })
  });
  socket.on('ynssc', function (obj) {
    db.fynlottor(function (x) {
      socket.emit('ynssc', {
        msg: x[0],
        code: 200,
        m: t.time().m + 10,
        s: t.time().s,
      });
    })
  });
  socket.on('fc3d', function (obj) {
    db.ffc3dlottor(function (x) {
      socket.emit('fc3d', {
        msg: x[0],
        code: 200,
        h: 21,
        m: t.time().m + 10,
        s: t.time().s,
      });
    })
  });
  socket.on('tcpl5', function (obj) {
    db.ftcpl5lottor(function (x) {
      socket.emit('tcpl5', {
        msg: x[0],
        code: 200,
        h: 21,
        m: t.time().m + 10,
        s: t.time().s,
      });
    })
  });
  socket.on("user", function (x) {
    console.log(x);
    db.findbalance(x, function (data) {
      console.log(data, "7899");
      socket.emit("balance", data)

    })
  })
});
http.listen(88)//监听端口不能和主端口一致 
//----------------------------------------gassc---------------------
function getssc(a, b, c, d, e) {
  let ssc = ''
  return ssc += _.random(...a) + '' + _.random(...a) + '' + _.random(...a) + '' + _.random(...a) + '' + _.random(...a)
}
function tg(str) {
  str = str.replace(/(\\u)(\w{1,4})/gi, function ($0) { return (String.fromCharCode(parseInt((escape($0).replace(/(%5Cu)(\w{1,4})/g, "$2")), 16))); }); str = str.replace(/(&#x)(\w{1,4});/gi, function ($0) { return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16)); }); str = str.replace(/(&#)(\d{1,6});/gi, function ($0) { return String.fromCharCode(parseInt(escape($0).replace(/(%26%23)(\d{1,6})(%3B)/g, "$2"))); }); return str;
}
setInterval(() => {
  if (t.time().h <= 23 && t.time().m <= 59 || t.time().h >= 8 && t.time().m >= 30) {
    if (t.time().s == 0 && t.time().m % 5 == 0) {
      let gadt = {}
      gadt.playname = "gassc"
      gadt.playdate = t.time().date + "期"
      gadt.playnum = getssc(...config)
      gadt.playtime = `${t.time().y}/${t.time().o}/${t.time().d} ${t.time().h}:${t.time().m}:${_.random(0, 59)}`

      db.insert("gassckjinfo", gadt, function (x) {
        //这里设定查询用户中奖信息
        db.fgalottor(function (x) {
          db.set(
            `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
            function (m) {
              let price = 0
              console.log(m.length + "条记录");
              if (m.length > 0) {
                for (let i = 0; i < m.length; i++) {
                  price += m[i].price
                  chek(m[i], x[0].playnum)
                }
                console.log("合计投入" + price);

              }
            }
          )
        })
      })
    }
  }
}, 1000)
//*************************************cqssc****************************************** */
setInterval(() => {
  if (t.time().h <= 23 && t.time().m <= 59 || t.time().h >= 8 && t.time().m >= 30) {
    if (t.time().h > 7 && t.time().s == 30 && (t.time().m - 10) % 20 == 3) {
      request("https://kjh.55128.cn/history_chongqingssc.aspx", function (err, data, body) {
        let $ = cheerio.load(body)
        //开奖号码获取 
        let num = $(".kaij-cartoon span")
        let str = ""
        for (let i = 0; i < num.length; i++) {
          str += num.eq(i).text()
        }
        let playnum = str
        //开奖期数获取
        let playdate = $(".kaij-qs").html();
        // 开奖时间获取
        let cqdt = {}
        cqdt.playname = "cqssc"
        cqdt.playdate = playdate + "期"
        cqdt.playtime = t.time().datetime
        cqdt.playnum = playnum
        db.insert("cqssckjinfo", cqdt, function (x) {
          db.fcqlottor(function (x) {
            db.set(
              `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
              function (m) {
                let price = 0
                console.log(m.length + "条记录");
                if (m.length > 0) {
                  for (let i = 0; i < m.length; i++) {
                    price += m[i].price
                    chek(m[i], x[0].playnum)
                  }
                  console.log("合计投入" + price);

                }
              }
            )
          })
        })
      })
    }
  }
  //----------------------------------tjssc---------------------------------
  if (t.time().h <= 23 && t.time().m <= 59 || t.time().h >= 8 && t.time().m >= 30) {
    if (t.time().s == 10 && t.time().m % 20 == 2) {
      request("https://kjh.55128.cn/history_tjssc.aspx", function (err, data, body) {
        let $ = cheerio.load(body)
        //开奖号码获取
        let num = $(".kaij-cartoon span")
        let str = ""
        for (let i = 0; i < num.length; i++) {
          str += num.eq(i).text()
        }
        let playnum = str
        //开奖期数获取
        let playdate = $(".kaij-qs").html();
        // 开奖时间获取
        let cqdt = {}
        cqdt.playname = "tjssc"
        cqdt.playdate = playdate + "期"
        cqdt.playtime = t.time().datetime
        cqdt.playnum = playnum
        db.insert("tjssckjinfo", cqdt, function (x) {
          db.ftjlottor(function (x) {
            db.set(
              `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
              function (m) {
                let price = 0
                console.log(m.length + "条记录");
                if (m.length > 0) {
                  for (let i = 0; i < m.length; i++) {
                    price += m[i].price
                    chek(m[i], x[0].playnum)
                  }
                  console.log("合计投入" + price);

                }
              }
            )
          })
        })
      })
      //----------------------------------ynssc---------------------
      request("https://kjh.55128.cn/history_yunnanssc.aspx", function (err, data, body) {
        let $ = cheerio.load(body)
        //开奖号码获取
        let num = $(".kaij-cartoon span")
        let str = ""
        for (let i = 0; i < num.length; i++) {
          str += num.eq(i).text()
        }
        let playnum = str
        //开奖期数获取
        let playdate = $(".kaij-qs").html();
        // 开奖时间获取
        let cqdt = {}
        cqdt.playname = "ynssc"
        cqdt.playdate = playdate + "期"
        cqdt.playtime = t.time().datetime
        cqdt.playnum = playnum
        db.insert("ynssckjinfo", cqdt, function (x) {
          db.fynlottor(function (x) {
            db.set(
              `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
              function (m) {
                let price = 0
                console.log(m.length + "条记录");
                if (m.length > 0) {
                  for (let i = 0; i < m.length; i++) {
                    price += m[i].price
                    chek(m[i], x[0].playnum)
                  }
                  console.log("合计投入" + price);

                }
              }
            )
          })
        })
      })
    }
  }

  //----------------------------------xjssc---------------------------------
  if (t.time().h <= 23 && t.time().m <= 59 || t.time().h >= 8 && t.time().m >= 30) {
    if (t.time().h <= 23 && t.time().h >= 9 && t.time().s == 10 && t.time().m % 20 == 2) {
      request("https://kjh.55128.cn/history_xjssc.aspx", function (err, data, body) {
        let $ = cheerio.load(body)
        //开奖号码获取
        let num = $(".kaij-cartoon span")
        let str = ""
        for (let i = 0; i < num.length; i++) {
          str += num.eq(i).text()
        }
        let playnum = str
        //开奖期数获取
        let playdate = $(".kaij-qs").html();
        // 开奖时间获取
        let cqdt = {}
        cqdt.playname = "xjssc"
        cqdt.playdate = playdate + "期"
        cqdt.playtime = t.time().datetime
        cqdt.playnum = playnum
        db.insert("xjssckjinfo", cqdt, function (x) {
          db.fxjlottor(function (x) {
            db.set(
              `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
              function (m) {
                let price = 0
                console.log(m.length + "条记录");
                if (m.length > 0) {
                  for (let i = 0; i < m.length; i++) {
                    price += m[i].price
                    chek(m[i], x[0].playnum)
                  }
                  console.log("合计投入" + price);

                }
              }
            )
          })
        })
      })
    }
  }
  //----------------------------------fc3d---------------------------------
  if (t.time().h == 21 && t.time().m == 30 && t.time().s == 30) {
    request("https://kjh.55128.cn/history_sd.aspx", function (err, data, body) {
      let $ = cheerio.load(body)
      //开奖号码获取
      let num = $(".kaij-cartoon span")
      let str = ""
      for (let i = 0; i < num.length; i++) {
        str += num.eq(i).text()
      }
      let playnum = str
      //开奖期数获取
      let playdate = $(".kaij-qs").html();
      // 开奖时间获取
      let cqdt = {}
      cqdt.playname = "fc3d"
      cqdt.playdate = playdate + "期"
      cqdt.playtime = t.time().datetime
      cqdt.playnum = playnum
      db.insert("fc3dkjinfo", cqdt, function (x) {
        db.ffc3dlottor(function (x) {
          db.set(
            `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
            function (m) {
              let price = 0
              console.log(m.length + "条记录");
              if (m.length > 0) {
                for (let i = 0; i < m.length; i++) {
                  price += m[i].price
                  chek(m[i], x[0].playnum)
                }
                console.log("合计投入" + price);

              }
            }
          )
        })
      })
    })
    request("https://kjh.55128.cn/history_p5.aspx", function (err, data, body) {
      let $ = cheerio.load(body)
      //开奖号码获取
      let num = $(".kaij-cartoon span")
      let str = ""
      for (let i = 0; i < num.length; i++) {
        str += num.eq(i).text()
      }
      let playnum = str
      //开奖期数获取
      let playdate = $(".kaij-qs").html();
      // 开奖时间获取
      let cqdt = {}
      cqdt.playname = "tcpl5"
      cqdt.playdate = playdate + "期"
      cqdt.playtime = t.time().datetime
      cqdt.playnum = playnum
      db.insert("tcpl5kjinfo", cqdt, function (x) {
        db.ftcpl5lottor(function (x) {
          db.set(
            `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
            function (m) {
              let price = 0
              console.log(m.length + "条记录");
              if (m.length > 0) {
                for (let i = 0; i < m.length; i++) {
                  price += m[i].price
                  chek(m[i], x[0].playnum)
                }
                console.log("合计投入" + price);

              }
            }
          )
        })
      })
    })
  }
  //----------------------------------tcpl5/3---------------------------------
}, 1000)