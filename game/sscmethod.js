let name=require("./fname")
let db=require("../module/db")
exports.chek=function(x, kj) {
    console.log(x);
    if (x.playname.includes("一星直选复式")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
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
      console.log(x.userinput, "---------***********");
      if (n == 0) {
        db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "00")
      } else {
        db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "00")
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
    if (x.playname.includes("前二直选复式")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log(obj, kj);
      let n = 0;
      if (obj[0].includes(kj[0]) && obj[1].includes(kj[1])) {
        n++
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel * n},iszk="已中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "01")
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
    if (x.playname.includes("后二直选复式")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      let n = 0;
      if (obj[0].includes(kj[3]) && obj[1].includes(kj[4])) {
        n++
        db.set(`update shopcar set iskj=1, iszk="已中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "02")
        db.set(
          function (v) {
            db.set(`update shopcar set iskj=1, jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel * n},iszk="已中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "01")
            console.log(v[0][name.fname(x.playname)] * x.playmode * x.playratel * n);
            db.set(
              `update userinfo set balance=balance+${v[0][name.fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
              function (z) {
                console.log(z);
              }
            )
          }
        )
      } else {
        db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("未中", x.playname, "09"); return;
      }
    }
    if (x.playname.includes("后二") && x.playname.includes("直选和值")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      let n = 0;
      console.log(obj, kj);
      if (obj[0].includes(kj[3] + kj[4])) {
        n++
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel * n},iszk="已中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "01")
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
    if (x.playname.includes("前二") && x.playname.includes("直选和值")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log(obj, kj);
      if (obj[0].includes((kj[0] + kj[1]))) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel}, kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "04")
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
    if (x.playname.includes("前二") && x.playname.includes("直选跨度")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log(obj, kj);
      if (obj[0].includes(Math.abs(kj[0] - kj[1]))) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel}, kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "05")
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
    if (x.playname.includes("后二") && x.playname.includes("直选跨度")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log(obj, kj);
      if (obj[0].includes(Math.abs(kj[3] - kj[4]))) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},iszk="已中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "05")
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
    if (x.playname.includes("前二直选单式")) {
      let obj = JSON.parse(x.buydet).data
      kj = kj.split("").map(t => Number(t))
      console.log(obj, kj);
      if (obj.includes((kj[0] + "" + kj[1]))) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel}, kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "06")
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
    if (x.playname.includes("前二组选单式")) {
      let obj = JSON.parse(x.buydet).data
      kj = kj.split("").map(t => Number(t))
      console.log(obj, kj);
      if (obj.includes(kj[0] + "" + kj[1]) || obj.includes(kj[1] + "" + kj[0])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖",  jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "07")
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
    if (x.playname.includes("后二直选单式")) {
      let obj = JSON.parse(x.buydet).data
      kj = kj.split("").map(t => Number(t))
      console.log(obj, kj);
      if (obj.includes(kj[3] + "" + kj[4])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel} ,kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "08")
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
    if (x.playname.includes("后二组选单式")) {
      let obj = JSON.parse(x.buydet).data
      kj = kj.split("").map(t => Number(t))
      console.log(obj, kj);
      if (obj.includes(kj[3] + "" + kj[4]) || obj.includes(kj[4] + "" + kj[3])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel}, kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "07")
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
  
    if (x.playname.includes("前二组选复式")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj[0], kj);
      if (kj[0] != kj[1] && obj[0].includes(kj[0]) && obj[0].includes(kj[1])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("后二组选复式")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj[0], kj);
      if (kj[3] != kj[4] && obj[0].includes(kj[3]) && obj[0].includes(kj[4])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("前二组选和值")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj[0], kj);
      if (kj[0] != kj[1] && obj[0].map(u => Number(u)).includes((kj[0] + kj[1]))) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("后二组选和值")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj[0], kj);
      if (kj[3] != kj[4] && obj[0].map(u => Number(u)).includes((kj[3] + kj[4]))) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("前三直选复式")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (obj[0].includes(kj[0]) && obj[1].includes(kj[1]) && obj[2].includes(kj[2])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("中三直选复式")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (obj[0].includes(kj[1]) && obj[1].includes(kj[2]) && obj[2].includes(kj[3])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
  
    if (x.playname.includes("后三直选复式")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (obj[0].includes(kj[2]) && obj[1].includes(kj[3]) && obj[2].includes(kj[4])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("前三直选和值")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (obj[0].map(p => Number(p)).includes(kj[0] + kj[1] + kj[2])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("中三直选和值")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (obj[0].map(p => Number(p)).includes(kj[1] + kj[2] + kj[3])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("后三直选和值")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (obj[0].includes(kj[2] + kj[3] + kj[4])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("前三直选跨度")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (obj[0].includes(Math.abs(Math.max(kj[0], kj[1], kj[2]) - Math.min(kj[0], kj[1], kj[2])))) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("中三直选跨度")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (obj[0].includes(Math.abs(Math.max(kj[1], kj[2], kj[3]) - Math.min(kj[1], kj[2], kj[3])))) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("后三直选跨度")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (obj[0].includes(Math.max(kj[2], kj[3], kj[4]) - Math.min(kj[2], kj[3], kj[4]))) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("前三直选单式")) {
      let obj = JSON.parse(x.buydet).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (obj.includes(kj[0] + "" + kj[1] + "" + kj[2])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("中三直选单式")) {
      let obj = JSON.parse(x.buydet).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (obj.includes(kj[1] + "" + kj[2] + "" + kj[3])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("后三直选单式")) {
      let obj = JSON.parse(x.buydet).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (obj.includes(kj[2] + "" + kj[3] + "" + kj[4])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("前三组选组六")) {
      let obj = JSON.parse(x.buydet).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (kj[0] == kj[1] || kj[0] == kj[2] || kj[1] == kj[2]) {
        console.log("zusan");
        db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("未中", x.playname, "09"); return;
      } else {
        let kj0 = kj[0] + "" + kj[1] + "" + kj[2]
        let kj1 = kj[0] + "" + kj[2] + "" + kj[1]
        let kj2 = kj[1] + "" + kj[0] + "" + kj[2]
        let kj3 = kj[1] + "" + kj[2] + "" + kj[0]
        let kj4 = kj[2] + "" + kj[0] + "" + kj[1]
        let kj5 = kj[2] + "" + kj[1] + "" + kj[0]
        if (obj.includes(kj0) || obj.includes(kj1) || obj.includes(kj2) || obj.includes(kj3) || obj.includes(kj4) || obj.includes(kj5)) {
          console.log("hahha");
          db.set(
            `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
            function (v) {
              db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    }
    if (x.playname.includes("中三组选组六")) {
      let obj = JSON.parse(x.buydet).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (kj[1] == kj[2] || kj[1] == kj[3] || kj[3] == kj[2]) {
        console.log("zusan");
        db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("未中", x.playname, "09"); return;
      } else {
        let kj0 = kj[3] + "" + kj[1] + "" + kj[2]
        let kj1 = kj[3] + "" + kj[2] + "" + kj[1]
        let kj2 = kj[1] + "" + kj[3] + "" + kj[2]
        let kj3 = kj[1] + "" + kj[2] + "" + kj[3]
        let kj4 = kj[2] + "" + kj[3] + "" + kj[1]
        let kj5 = kj[2] + "" + kj[1] + "" + kj[3]
        if (obj.includes(kj0) || obj.includes(kj1) || obj.includes(kj2) || obj.includes(kj3) || obj.includes(kj4) || obj.includes(kj5)) {
          console.log("hahha");
          db.set(
            `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
            function (v) {
              db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    }
    if (x.playname.includes("后三组选组六")) {
      let obj = JSON.parse(x.buydet).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (kj[2] == kj[3] || kj[2] == kj[4] || kj[3] == kj[4]) {
        console.log("zusan");
        db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("未中", x.playname, "09"); return;
      } else {
        let kj0 = kj[4] + "" + kj[3] + "" + kj[2]
        let kj1 = kj[4] + "" + kj[2] + "" + kj[3]
        let kj2 = kj[2] + "" + kj[3] + "" + kj[3]
        let kj3 = kj[2] + "" + kj[4] + "" + kj[3]
        let kj4 = kj[2] + "" + kj[3] + "" + kj[4]
        let kj5 = kj[2] + "" + kj[4] + "" + kj[3]
        if (obj.includes(kj0) || obj.includes(kj1) || obj.includes(kj2) || obj.includes(kj3) || obj.includes(kj4) || obj.includes(kj5)) {
          console.log("hahha");
          db.set(
            `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
            function (v) {
              db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    }
    if (x.playname.includes("前三组选组三")) {
      let obj = JSON.parse(x.buydet).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (kj[0] == kj[1] || kj[0] == kj[2] || kj[1] == kj[2]) {
        console.log("zusan");
        let kj0 = kj[0] + "" + kj[1] + "" + kj[2]
        let kj1 = kj[0] + "" + kj[2] + "" + kj[1]
        let kj2 = kj[1] + "" + kj[0] + "" + kj[2]
        let kj3 = kj[1] + "" + kj[2] + "" + kj[0]
        let kj4 = kj[2] + "" + kj[0] + "" + kj[1]
        let kj5 = kj[2] + "" + kj[1] + "" + kj[0]
        if (obj.includes(kj0) || obj.includes(kj1) || obj.includes(kj2) || obj.includes(kj3) || obj.includes(kj4) || obj.includes(kj5)) {
          console.log("hahha");
          db.set(
            `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
            function (v) {
              db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
      } else {
        db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("未中", x.playname, "09"); return;
      }
    }
    if (x.playname.includes("中三组选组三")) {
      let obj = JSON.parse(x.buydet).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (kj[1] == kj[2] || kj[1] == kj[3] || kj[3] == kj[2]) {
        console.log("zusan");
        let kj0 = kj[3] + "" + kj[1] + "" + kj[2]
        let kj1 = kj[3] + "" + kj[2] + "" + kj[1]
        let kj2 = kj[1] + "" + kj[3] + "" + kj[2]
        let kj3 = kj[1] + "" + kj[2] + "" + kj[3]
        let kj4 = kj[2] + "" + kj[3] + "" + kj[1]
        let kj5 = kj[2] + "" + kj[1] + "" + kj[3]
        if (obj.includes(kj0) || obj.includes(kj1) || obj.includes(kj2) || obj.includes(kj3) || obj.includes(kj4) || obj.includes(kj5)) {
          console.log("hahha");
          db.set(
            `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
            function (v) {
              db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
      } else {
        db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("未中", x.playname, "09"); return;
      }
    }
    if (x.playname.includes("后三组选组三")) {
      let obj = JSON.parse(x.buydet).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (kj[2] == kj[3] || kj[2] == kj[4] || kj[3] == kj[4]) {
        console.log("zusan");
        let kj0 = kj[4] + "" + kj[3] + "" + kj[2]
        let kj1 = kj[4] + "" + kj[2] + "" + kj[3]
        let kj2 = kj[2] + "" + kj[3] + "" + kj[3]
        let kj3 = kj[2] + "" + kj[4] + "" + kj[3]
        let kj4 = kj[2] + "" + kj[3] + "" + kj[4]
        let kj5 = kj[2] + "" + kj[4] + "" + kj[3]
        console.log(kj, kj1, kj2, kj3, kj4, kj5);
  
        if (obj.includes(kj0) || obj.includes(kj1) || obj.includes(kj2) || obj.includes(kj3) || obj.includes(kj4) || obj.includes(kj5)) {
          console.log("hahha");
          db.set(
            `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
            function (v) {
              db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
      } else {
        db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("未中", x.playname, "09"); return;
      }
    }
  
    if (x.playname.includes("前三组选单式")) {
      let obj = JSON.parse(x.buydet).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      let nm = name.fname(x.playname)
      if (kj[0] == kj[1] || kj[0] == kj[2] || kj[2] == kj[3]) {
        nm = "sxzxz3"
      }
      if (obj.includes(kj[0] + "" + kj[1] + "" + kj[2]) || obj.includes(kj[0] + "" + kj[2] + "" + kj[1]) || obj.includes(kj[1] + "" + kj[2] + "" + kj[0]) || obj.includes(kj[1] + "" + kj[0] + "" + kj[2]) || obj.includes(kj[2] + "" + kj[1] + "" + kj[0]) || obj.includes(kj[2] + "" + kj[0] + "" + kj[1])) {
        db.set(
          `select ${nm} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
            console.log(v[0][nm] * x.playmode * x.playratel);
            db.set(
              `update userinfo set balance=balance+${v[0][nm] * x.playmode * x.playratel} where name="${x.username}";`,
              function (z) {
              }
            )
          }
        )
      } else {
        db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("未中", x.playname, "09"); return;
      }
    }
    if (x.playname.includes("中三组选单式")) {
      let obj = JSON.parse(x.buydet).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      let nm = name.fname(x.playname)
      if (kj[1] == kj[2] || kj[1] == kj[3] || kj[2] == kj[3]) {
        nm = "sxzxz3"
      }
      if (obj.includes(kj[3] + "" + kj[1] + "" + kj[2]) || obj.includes(kj[3] + "" + kj[2] + "" + kj[1]) || obj.includes(kj[1] + "" + kj[2] + "" + kj[3]) || obj.includes(kj[1] + "" + kj[3] + "" + kj[2]) || obj.includes(kj[2] + "" + kj[1] + "" + kj[3]) || obj.includes(kj[2] + "" + kj[3] + "" + kj[1])) {
        db.set(
          `select ${nm} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
            console.log(v[0][nm] * x.playmode * x.playratel);
            db.set(
              `update userinfo set balance=balance+${v[0][nm] * x.playmode * x.playratel} where name="${x.username}";`,
              function (z) {
              }
            )
          }
        )
      } else {
        db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("未中", x.playname, "09"); return;
      }
    }
    if (x.playname.includes("后三组选单式")) {
      let obj = JSON.parse(x.buydet).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      let nm = name.fname(x.playname)
      if (kj[2] == kj[3] || kj[2] == kj[4] || kj[3] == kj[4]) {
        nm = "sxzxz3"
      }
      if (obj.includes(kj[2] + "" + kj[3] + "" + kj[4]) || obj.includes(kj[2] + "" + kj[4] + "" + kj[3]) || obj.includes(kj[3] + "" + kj[2] + "" + kj[4]) || obj.includes(kj[3] + "" + kj[4] + "" + kj[2]) || obj.includes(kj[4] + "" + kj[3] + "" + kj[2]) || obj.includes(kj[4] + "" + kj[2] + "" + kj[3])) {
        db.set(
          `select ${nm} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
            console.log(v[0][nm] * x.playmode * x.playratel);
            db.set(
              `update userinfo set balance=balance+${v[0][nm] * x.playmode * x.playratel} where name="${x.username}";`,
              function (z) {
              }
            )
          }
        )
      } else {
        db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("未中", x.playname, "09"); return;
      }
    }
  
    if (x.playname.includes("前三组选和值")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj[0], kj);
      let nm = name.fname(x.playname)
      if (kj[0] == kj[1] || kj[0] == kj[2] || kj[1] == kj[2]) {
        nm = "sxzxz3"
      }
      if (obj[0].includes(kj[0] + kj[1] + kj[2])) {
        db.set(
          `select ${nm} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
            console.log(v[0][nm] * x.playmode * x.playratel);
            db.set(
              `update userinfo set balance=balance+${v[0][nm] * x.playmode * x.playratel} where name="${x.username}";`,
              function (z) {
              }
            )
          }
        )
  
      } else {
        db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("未中", x.playname, "09"); return;
      }
    }
    if (x.playname.includes("中三组选和值")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj[0], kj);
      let nm = name.fname(x.playname)
      if (kj[1] == kj[2] || kj[1] == kj[3] || kj[2] == kj[3]) {
        nm = "sxzxz3"
      }
      if (obj[0].includes(kj[3] + kj[1] + kj[2])) {
        db.set(
          `select ${nm} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
            console.log(v[0][nm] * x.playmode * x.playratel);
            db.set(
              `update userinfo set balance=balance+${v[0][nm] * x.playmode * x.playratel} where name="${x.username}";`,
              function (z) {
              }
            )
          }
        )
      } else {
        db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("未中", x.playname, "09"); return;
      }
    }
    if (x.playname.includes("后三组选和值")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj[0], kj);
      let nm = name.fname(x.playname)
      if (kj[2] == kj[3] || kj[2] == kj[4] || kj[3] == kj[4]) {
        nm = "sxzxz3"
      }
      if (obj[0].includes(kj[4] + kj[3] + kj[2])) {
        db.set(
          `select ${nm} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
            console.log(v[0][nm] * x.playmode * x.playratel);
            db.set(
              `update userinfo set balance=balance+${v[0][nm] * x.playmode * x.playratel} where name="${x.username}";`,
              function (z) {
              }
            )
          }
        )
      } else {
        db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("未中", x.playname, "09"); return;
      }
    }
    if (x.playname.includes("前三一码不定位")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj[0], kj);
      if (obj[0].includes(kj[0]) || obj[0].includes(kj[1]) || obj[0].includes(kj[2])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("中三一码不定位")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj[0], kj);
      if (obj[0].includes(kj[1]) || obj[0].includes(kj[2]) || obj[0].includes(kj[3])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("后三一码不定位")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj[0], kj);
      if (obj[0].includes(kj[2]) || obj[0].includes(kj[3]) || obj[0].includes(kj[4])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("前三二码不定位")) {
      let obj = JSON.parse(x.userinput).data
      console.log(kj);
      let wkj = kj
      kj = kj.slice(0, 3)
      console.log("obj:", obj[0], kj);
      let n = 0;
      for (let i = 0; i < obj[0].length; i++) {
        if (kj.includes(Number(obj[0][i]))) {
          n++
        }
      }
      if (n >= 2) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
            console.log(v[0][name.fname(x.playname)] * x.playmode * x.playratel);
            db.set(
              `update userinfo set balance=balance+${v[0][name.fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
              function (z) {
              }
            )
          }
        )
      } else if (n < 2) {
        db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${wkj}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      }
    }
    if (x.playname.includes("中三二码不定位")) {
      let obj = JSON.parse(x.userinput).data
      let wkj = kj
      kj = kj.slice(1, 4)
      console.log("obj:", obj[0], kj);
      let n = 0;
      for (let i = 0; i < obj[0].length; i++) {
        if (kj.includes(Number(obj[0][i]))) {
          n++
        }
      }
      if (n >= 2) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
            console.log(v[0][name.fname(x.playname)] * x.playmode * x.playratel);
            db.set(
              `update userinfo set balance=balance+${v[0][name.fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
              function (z) {
              }
            )
          }
        )
      } else if (n < 2) {
        db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${wkj}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      }
    }
    if (x.playname.includes("后三二码不定位")) {
      let obj = JSON.parse(x.userinput).data
      let wkj = kj
      kj = kj.slice(2)
      console.log("obj:", obj[0], kj);
      let n = 0;
      for (let i = 0; i < obj[0].length; i++) {
        if (kj.includes(obj[0][i] + "")) {
          n++
        }
      }
      if (n >= 2) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
            console.log(v[0][name.fname(x.playname)] * x.playmode * x.playratel);
            db.set(
              `update userinfo set balance=balance+${v[0][name.fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
              function (z) {
              }
            )
          }
        )
      } else if (n < 2) {
        db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${wkj}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
      }
    }
    if (x.playname.includes("四星直选复式")) {
      let obj = JSON.parse(x.userinput).data
      console.log(kj);
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (obj[0].includes(kj[0]) && obj[1].includes(kj[1]) && obj[2].includes(kj[2]) && obj[3].includes(kj[3])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("四星直选单式")) {
      let obj = JSON.parse(x.buydet).data
      console.log(kj);
  
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (obj.includes(kj[0] + "" + kj[1] + "" + kj[2] + "" + kj[3])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("四星一码不定位")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t)).slice(0, 4)
      console.log("obj:", obj, kj);
      if (obj[0].includes(kj[0]) || obj[0].includes(kj[1]) || obj[0].includes(kj[2]) || obj[0].includes(kj[3])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("四星二码不定位")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t)).slice(1, 4)
      console.log("obj:", obj, kj);
      let n = 0
      for (let i = 0; i < obj[0].length; i++) {
        if (kj.includes(obj[0][i])) {
          n++
        }
      }
      if (n >= 2) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("五星直选复式")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (obj[0].includes(kj[0]) && obj[1].includes(kj[1]) && obj[2].includes(kj[2]) && obj[3].includes(kj[3]) && obj[4].includes(kj[4])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("五星直选单式")) {
      let obj = JSON.parse(x.buydet).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (obj.includes(kj[0] + "" + kj[1] + "" + kj[2] + "" + kj[3] + "" + kj[4])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
    if (x.playname.includes("五星一码不定位")) {
      let obj = JSON.parse(x.userinput).data
      kj = kj.split("").map(t => Number(t))
      console.log("obj:", obj, kj);
      if (obj[0].includes(kj[0]) || obj[0].includes(kj[1]) || obj[0].includes(kj[2]) || obj[0].includes(kj[3]) || obj[0].includes(kj[4])) {
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
            console.log(v[0][name.fname(x.playname)] * x.playmode * x.playratel);
            db.set(
              `update userinfo set balance=balance+${v[0][name.fname(x.playname)] * x.playmode * x.playratel} where name="${x.username}";`,
              function (z) {
              }
            )
          }
        )
      } else if (n < 2) {
        db.set(`update shopcar set iskj=1, iszk="未中奖",  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("未中", x.playname, "09"); return;
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
        db.set(
          `select ${name.fname(x.playname)} from jjinfo where name="${x.playgame}";`,
          function (v) {
            db.set(`update shopcar set iskj=1, iszk="已中奖", jiangjin=${v[0][name.fname(x.playname)] * x.playmode * x.playratel},  kjnum="${kj.join('')}" where  buytime="${x.buytime}" and username="${x.username}" and playdate="${x.playdate}" and playgame="${x.playgame}" and playname="${x.playname}";`, (k) => { console.log(k) }); console.log("中了", x.playname, "09")
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
  
  
  
  
  
  
  }
  
  