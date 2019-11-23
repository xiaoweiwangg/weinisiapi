let db = require("../module/db");
//日期时间处理模块
let time = require("../module/time");
//token模块
let token = require("../token/settoken");
let _ = require("underscore");
//全局路由中间件
exports.use = function(req, res, next) {
  console.log(req.ip);
  if (req.method.toLowerCase() == "post") {
    if (req.url != "/fuser" && req.url != "/inuser") {
      if (!req.headers.token) {
        res.sendStatus(401);
      } else {
        next();
      }
    } else {
      next();
    }
  } else {
    next();
  }
};
exports.fhistory = function(req, res) {
  console.log(req.query.item);
  db.set(
    `select * from ${req.query.item +
      "kjinfo"} where order by playtime desc limit 10;`,
    function(x) {
      console.log(x, ".........................................");

      res.json({ data: x });
    }
  );
};
//查询公告模块
exports.gonggao = function(req, res) {
  db.findgg(x => {
    res.json(x);
  });
};
//插入卡号模块
exports.incard = function(req, res) {
  db.set(
    `update userinfo set realname="${req.body.realname}",card="${req.body.card}",pwd="${req.body.pwd}" where name="${req.body.username}"`,
    x => {
      res.json(x);
    }
  );
};
//查询历史订单模块
exports.findhistory = function(req, res) {
  db.set(
    `select playgame,playname,playdate,buytime,buydet,userinput,price,iskj,iszk,kjnum,playmode,playratel from shopcar where username="${req.body.username}" and playgame!="niuniu" `,
    x => {
      res.json(x);
    }
  );
};
//查询活动模块
exports.active = function(req, res) {
  db.findactive(x => {
    res.json(x);
  });
};
//提现模块
exports.subcash = function(req, res) {
  console.log(req.body);

  db.set(
    `
    select * from userinfo where name="${req.body.username}";
    `,
    function(x) {
      console.log(x[0].balance < req.body.num);
      if (x[0].balance < req.body.num) {
        res.json({ msg: "余额不足" });
        return;
      }
      if (x[0].pwd != req.body.pwd) {
        res.json({ msg: "no" });
        return;
      } else {
        console.log(time.time().datetime);

        db.set(
          `
      insert into tixian(username,cashnum,time,card) values("${
        req.body.username
      }",${req.body.num},"${time.time().datetime}","${req.body.card}");
            `,
          function(x) {
            // res.json({ msg: "ok" })
          }
        );
        db.set(
          `
            update userinfo set balance=balance-${req.body.num} where name="${req.body.username}";
            `,
          function(x) {
            res.json({ msg: "ok" });
            sendmail(
              "737175602@qq.com",
              "收到一条提现申请",
              `用户名:${req.body.username},申请提现金额:${req.body.num}元,提现卡号:${req.body.card},请核对账单后完成用户提现!!!`
            );
            sendmail(
              "yu1244093688@163.com",
              "收到一条提现申请",
              `用户名:${req.body.username},申请提现金额:${req.body.num}元,提现卡号:${req.body.card},请核对账单后完成用户提现!!!`
            );
            sendmail(
              "350196753@qq.com",
              "收到一条提现申请",
              `用户名:${req.body.username},申请提现金额:${req.body.num}元,提现卡号:${req.body.card},请核对账单后完成用户提现!!!`
            );
            sendmail(
              "18322299421@139.com",
              "收到一条提现申请",
              `用户名:${req.body.username},申请提现金额:${req.body.num}元,提现卡号:${req.body.card},请核对账单后完成用户提现!!!`
            );
          }
        );
      }
    }
  );
};
exports.cash = function(req, res) {
  db.set(
    `select card from userinfo where name="${req.body.username}";`,
    function(x) {
      res.json(x);
    }
  );
};
// exports.download = function(req, res) {
//   res.download("/dist/vinisi.apk")
// };
exports.fallx = function(req, res) {
  db.set(
    `select xiaji from userinfo where name="${req.body.name}";`,
    function(x) {
      let arr=[]
      let per=x[0].xiaji.split(",")
      for(let i of per){
        console.log(i)
        db.set(
          `select name,balance from userinfo where name="${i}";`,
          function(b) {
            arr.push(b[0])
            if(arr.length==per.length){
              res.json({per:arr})
              console.log(arr);
            }
          }
        );
      }
    }
  );
};
//插入订单模块
exports.shopcar = function(req, res) {
  req.body.buytime = new Date().getTime() + "";
  req.body.buyday = new Date().getDate() - 0;
  console.log(req.body);

  db.findbalance(req.body, function(x) {
    if (req.body.price > Number(x[0].balance)) {
      res.json({ msg: "余额不足" });
    } else {
      db.inshop(req.body, function(t) {
        db.set(
          `update userinfo set balance=balance-${req.body.price} where name="${req.body.username}";`,
          function(v) {
            res.json({ msg: "ok" });
            db.set(
              `select name from userinfo where xiaji like "%${req.body.username}%"`,
              t => {
                db.set(
                  `select xiaji from userinfo where name="${t[0].name}"`,
                  w => {
                    console.log(
                      w[0].xiaji.split(",").includes(req.body.username),
                      "000000000000000***"
                    );
                    if (w[0].xiaji.split(",").includes(req.body.username)) {
                      db.set(
                        `update userinfo set balance=balance+${req.body.price *
                          0.02} where name="${t[0].name}";`,
                        o => {
                          console.log("代理奖金已发配");
                        }
                      );
                    }
                  }
                );
                // console.log(t[0],"daili");
              }
            );
          }
        );
      });
    }
  });
};
//插入用户信息模块
let str = "";
exports.inuser = function(req, res) {
  // if(req.body.code!=str.toLowerCase()){
  //     res.json({ msg: "codeno" })
  //     return
  // }
  let userinfo = req.body;
  userinfo.level = 1;
  userinfo.rigtime = time.time().datetime;
  userinfo.img = _.random(0, 28) + ".jpg";
  userinfo.xiaji = userinfo.name;
  // userinfo.tid=+""
  db.finduser(userinfo, function(x) {
    if (x.length > 0) {
      res.json({ msg: "no" });
      return;
    }
    db.inuser(userinfo, function(y) {
      console.log(userinfo);
      delete userinfo.password;
      userinfo.balance = 0;
      res.json({
        msg: "ok",
        token: token.settoken(userinfo.name, 3),
        userinfo: userinfo
      });
      db.set(`select name from userinfo where tid=${userinfo.tid};`, v => {
        console.log(v[0].name);
        db.set(
          `update userinfo set xiaji=CONCAT(xiaji,",${userinfo.name}") where name='${v[0].name}'`,
          function(m) {
            console.log(m);
            db.set(
              `update userinfo set tid="${_.random(1000000, 9999999) +
                Math.round(new Date()) +
                ""}" where name='${userinfo.name}'`,
              function(pm) {
                console.log(pm);
              }
            );
          }
        );
      });
      sendmail(
        "18322299421@139.com",
        "新用户注册提示",
        `用户名:${userinfo.name},刚才注册了,邀请码:${userinfo.tid}`
      );
      sendmail(
        "yu1244093688@163.com",
        "新用户注册提示",
        `用户名:${userinfo.name},刚才注册了,邀请码:${userinfo.tid}`
      );
      sendmail(
        "737175602@qq.com",
        "新用户注册提示",
        `用户名:${userinfo.name},刚才注册了,邀请码:${userinfo.tid}`
      );
      sendmail(
        "350196753@qq.com",
        "新用户注册提示",
        `用户名:${userinfo.name},刚才注册了,邀请码:${userinfo.tid}`
      );
    });
  });
};
//提现处理
exports.fyingkui = function(req, res) {
  console.log();
  db.set(
    `select SUM(price),SUM(jiangjin) from shopcar where username="${req.body.name}"`,
    x => {
      res.json(x[0]);
    }
  );
};
//二维una
var qr = require("qr-image");
// exports.cimg=function(req,res){
//   var qr_svg = qr.image('I love QR!', { type: 'png' });
//   qr_svg.pipe(res);
//   res.send(qr_svg)
// // var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
// }
//findcode
exports.fcode = function(req, res) {
  db.set(`select tid from userinfo where name="${req.body.name}"`, x => {
    console.log(x[0]);
    res.json(x[0]);
  });
};
exports.fid = function(req, res) {
  console.log("fid");
  console.log(req.query.tid);
  db.set(`select name from userinfo where tid="${req.query.tid}"`, x => {
    console.log(x.length, "个");
    console.log(x);
    res.json({ num: x.length });
  });
};

//代理
exports.findxiaji = function(req, res) {
  console.log(req.body.name);
  db.set(`select * from userinfo where name="${req.body.name}";`, x => {
    console.log();
    let arr = x[0].xiaji.split(",");
    let arrs = [];
    let touzhu = [];
    let tixian = [];
    let tz = 0;
    let jj = 0;
    let tx = 0;

    for (i in arr) {
      db.set(
        `select SUM(price),SUM(jiangjin) from shopcar where username="${arr[i]}"`,
        v => {
          db.set(`select cashnum from tixian where username="${arr[i]}"`, x => {
            if (x.length < 1) {
              return;
            }
            tixian.push(x[0]);
            if (tixian.length == arr.length) {
              for (let t of tixian.values()) {
                tx += t["cashnum"];
              }
            }
          });
          touzhu.push(v[0]);
          if (touzhu.length == arr.length) {
            for (let m of touzhu.values()) {
              tz += m["SUM(price)"] - 0;
              jj += m["SUM(jiangjin)"] - 0;
            }
          }
          db.set(
            `select name,balance from userinfo where name="${arr[i]}"`,
            v => {
              arrs.push(v[0]);

              if (arrs.length == arr.length) {
                let m = 0;
                for (let b of arrs.values()) {
                  if(!b.balance){
                    m += b.balance - 0;
                  }
                }
                setTimeout(() => {
                  res.json({ sum: m, tz: tz, jj: jj, pl: arr.length, tx: tx });
                }, 1000);
              }
            }
          );
        }
      );
    }
  });
};
//用户登录模块
exports.fuser = function(req, res) {
  let userinfo = req.body;
  db.fuser(userinfo, function(x) {
    userinfo.name = userinfo.username;
    if (x.length >= 1) {
      let usermsg = {};
      db.finduser(userinfo, function(x) {
        usermsg.userinfo = x[0];
        usermsg.token = token.settoken(usermsg.userinfo.name, 3);
        usermsg.msg = "ok";
        res.json(usermsg);
      });
    } else {
      res.json({ msg: "no" });
    }
  });
};
//查询牛牛模块
let jieguo = [];
function nnme(j) {
  let jg = {};
  //校验最大单牌
  jg.maxnum = _.sortBy(j, x => x.num)[4].num;
  //校验最大花色
  jg.maxhua = _.sortBy(j, x => x.num)[4].hua;
  //校验四炸
  for (let i in _(j.map(x => x.num)).countBy()) {
    if (_(j.map(x => x.num)).countBy()[i] == 4) {
      //校验四炸的值
      jg.z4k = i;
    }
  }
  jg.maxleng = Math.max(...Object.values(_(j.map(x => x.num)).countBy()));
  //校验五花牛
  let whn = 0;
  let wh = j.map(x => x.num);
  for (let m = 0; m < wh.length; m++) {
    if (wh[m] > 10) {
      whn++;
    }
  }
  if (whn == 5) {
    jg.whn = 5;
  } else if (whn == 4) {
    jg.shn = 4;
  }
  //校验牛n
  let arr = j;
  let arr2 = j;
  let arr3 = j;
  let res = [];
  let num = "";
  for (let i = 0; i < arr.length; i++) {
    for (let c = 0; c < arr2.length; c++) {
      for (let d = 0; d < arr3.length; d++) {
        if (i != c && i != d && c != d) {
          res.push(
            [arr[i].num, arr2[c].num, arr3[d].num]
              .sort((a, b) => a - b)
              .join(",")
          );
        }
      }
    }
  }

  let r = [...new Set(res)].map(x => x.split(",").map(v => v - 0));
  // console.log(r);
  let n = 0;
  let jarr = [];
  for (let i in r) {
    if (r[i].map(x => (x > 10 ? 10 : x)).reduce((a, b) => a + b) % 10 == 0) {
      n++;
      jarr.push(
        dif(
          j.map(x => x.num),
          r[i]
        )
          .map(v => (v > 10 ? 10 : v))
          .reduce((a, b) => a + b) % 10
      );
    }
  }
  if (n > 0) {
    jg.niu = Math.max(...jarr);
  } else {
    jg.niu = "-1";
  }

  if (jg.shn == 4) {
    jg.niu = "shn";
  }
  if (jg.whn == 5) {
    jg.niu = "whn";
  }
  if (jg.maxleng == 4) {
    jg.niu = "z4";
  }
  jieguo.push(jg);
}
function dif(a, b) {
  for (let i = 0; i < 3; i++) {
    a.splice(a.indexOf(b[i]), 1);
  }
  return a;
}
let size = ["z4", "whn", "shn", 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, "-1"].reverse();
exports.fniuniu = function(req, res) {
  db.fnnlottor(function(x) {
    console.log("niuniushi", x);
    res.json({ data: x, s: time.time().s });
    // 这里设定查询用户中奖信息
    let arr = [1, 2, 3, 0];
    let vs = [
      //对局列表
      [
        { type: 0, playnum: 0, iswin: false },
        { type: 1, playnum: 0, iswin: false }
      ],
      [
        { type: 0, playnum: 0, iswin: false },
        { type: 2, playnum: 0, iswin: false }
      ],
      [
        { type: 0, playnum: 0, iswin: false },
        { type: 3, playnum: 0, iswin: false }
      ]
    ];
    for (let i = 0; i < 4; i++) {
      nnme(JSON.parse(x[0].playnum).filter(x => x.type == arr[i]));
    }
    for (let i = 0; i < 3; i++) {
      if (size.indexOf(jieguo[i].niu) == size.indexOf(jieguo[3].niu)) {
        if (jieguo[i].niu == "z4") {
          if (jieguo[i].z4k != jieguo[3].z4k) {
            if (jieguo[i].z4k > jieguo[3].z4k) {
              vs[i][1].iswin = true;
            } else {
              vs[i][0].iswin = true;
            }
          } else {
            let hsize = [1, 0, 2, 3].reverse();
            if (hsize.indexOf(jieguo[i].z4k) > hsize.indexOf(jieguo[3].z4k)) {
              vs[i][1].iswin = true;
            } else {
              vs[i][0].iswin = true;
            }
          }
        } else {
          if (jieguo[i].maxnum != jieguo[3].maxnum) {
            if (jieguo[i].maxnum > jieguo[3].maxnum) {
              vs[i][1].iswin = true;
            } else {
              vs[i][0].iswin = true;
            }
          } else {
            let hsize = [1, 0, 2, 3].reverse();
            if (
              hsize.indexOf(jieguo[i].maxhua) > hsize.indexOf(jieguo[3].maxhua)
            ) {
              vs[i][1].iswin = true;
            } else {
              vs[i][0].iswin = true;
            }
          }
        }
      } else {
        if (size.indexOf(jieguo[i].niu) > size.indexOf(jieguo[3].niu)) {
          vs[i][1].iswin = true;
        } else {
          vs[i][0].iswin = true;
        }
      }
    }
    db.fnnlottor(l => {
      db.set(
        `
          select * from shopcar where playgame="niuniu" and playdate="${l[0].playdate}";`,
        b => {
          let jj = 0;
          if (b.length > 0) {
            for (let n = 0; n < b.length; n++) {
              let u = JSON.parse(b[n].buydet);
              for (let z = 0; z < u.length; z++) {
                for (let t = 0; t < u[z].length; t++) {
                  if (u[z][t].playnum > 0 && vs[z][t].iswin) {
                    console.log(
                      "zhongle.-----------------",
                      u[z][t].playnum * 1.97 + "元"
                    );
                    jj += u[z][t].playnum * 1.97;
                    db.set(
                      `update shopcar set jiangjin=${jj}, iskj=1, iszk="已中奖",  kjnum='${JSON.stringify(
                        vs
                      )}' where buytime="${b[0].buytime}" and username="${
                        b[0].username
                      }" and playdate="${b[0].playdate}" and playgame="${
                        b[0].playgame
                      }" and playname="${b[0].playname}";`,
                      k => {
                        console.log(k);
                      }
                    );
                    console.log("中了", b[0].playname, "00");
                    db.set(
                      `update userinfo set balance=balance+${jj} where name="${b[0].username}";`,
                      z => {
                        console.log(z, "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
                      }
                    );
                  }
                }
              }
            }
          }
        }
      );
    });
    jieguo = [];
  });
};
//查询红黑大战mo
let rbjieguo = [];
function rbme(j) {
  let s = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];
  let guize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];
  let jg = {};
  //校验最大单牌
  jg.maxnum = _.sortBy(j, x => s.indexOf(x.num))[2].num;
  jg.niu = "danzhang";
  //校验最大花色
  jg.maxhua = _.sortBy(j, x => s.indexOf(x.num))[2].hua;
  //校验baozi
  for (let i in _(j.map(x => x.num)).countBy()) {
    if (_(j.map(x => x.num)).countBy()[i] == 2) {
      //校验duizi的值
      jg.duizi = i;
      jg.niu = "duizi";
    }
    if (_(j.map(x => x.num)).countBy()[i] == 3) {
      //校验baozi的值
      jg.niu = "baozi";
      jg.baozi = i;
    }
  }
  jg.maxleng = Math.max(...Object.values(_(j.map(x => x.num)).countBy()));
  if (jg.maxleng == 3) {
    jg.niu = "baozi";
  }
  //校验顺子
  if (
    guize.indexOf(_.sortBy(j, x => x.num)[0]) + 1 ==
      guize.indexOf(_.sortBy(j, x => x.num)[1]) &&
    guize.indexOf(_.sortBy(j, x => x.num)[1]) + 1 ==
      guize.indexOf(_.sortBy(j, x => x.num)[2])
  ) {
    jg.niu = "shunzi";
    jg.shunzi = _.sortBy(j, x => x.num)[2];
  }
  //校验同花
  if (j[0].hua == j[1].hua && j[1].hua == j[2].hua) {
    jg.niu = "jinhua";
  }
  //校验同花顺
  if (jg.shunzi && jg.jinhua) {
    jg.niu = "jinshun";
  }
  rbjieguo.push(jg);
}
exports.frbwar = function(req, res) {
  db.frblottor(function(y) {
    res.json({ data: y, s: time.time().s });
    for (let i = 0; i < 2; i++) {
      rbme(JSON.parse(y[0].playnum).filter(x => x.type == i));
    }
    let winlist = [
      { iswin: false, playnum: 0 },
      { iswin: false, playnum: 0 },
      { iswin: false, playnum: 0 }
    ];
    let s = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];
    let size = [
      "baozi",
      "jinshun",
      "jinhua",
      "shunzi",
      "duizi",
      "danzhang"
    ].reverse();
    //校验同牌
    if (rbjieguo[0].niu == rbjieguo[1].niu) {
      if (s.indexOf(rbjieguo[0].maxnum) > s.indexOf(rbjieguo[1].maxnum)) {
        winlist[0].iswin = true;
        console.log("iswin", "1");
      } else {
        winlist[1].iswin = true;
        console.log("iswin", "2");
      }
      if (rbjieguo[0].maxnum == rbjieguo[1].maxnum) {
        let hsize = [1, 0, 2, 3].reverse();
        if (
          hsize.indexOf(rbjieguo[0].maxhua) > hsize.indexOf(rbjieguo[1].maxhua)
        ) {
          winlist[0].iswin = true;
          console.log("iswin", "3");
        } else {
          winlist[1].iswin = true;
          console.log("iswin", "4");
        }
      }
    } else {
      if (size.indexOf(rbjieguo[0].niu) > size.indexOf(rbjieguo[1].niu)) {
        winlist[0].iswin = true;
        console.log("iswin", "5");
      } else {
        winlist[1].iswin = true;
        console.log("iswin", "6");
      }
    }
    if (winlist[0].iswin && size.indexOf(rbjieguo[0].niu) != 0) {
      console.log("rluck");
      winlist[2].iswin = true;
    }
    if (winlist[1].iswin && size.indexOf(rbjieguo[1].niu) != 0) {
      console.log("bluck");
      winlist[2].iswin = true;
    }
    console.log(winlist);
    rbjieguo = [];
    db.set(
      `
          select * from shopcar where playgame="rbwar" and playdate="${y[0].playdate}";`,
      b => {
        console.log(b, "+++++++++++++++++++++++++++++++++++++++++++++++++");
        let jj = 0;
        if (b.length > 0) {
          for (let n = 0; n < b.length; n++) {
            let u = JSON.parse(b[n].buydet);
            console.log(u);
            for (let r = 0; r < u.length; r++) {
              if (u[r].playnum > 0 && winlist[r].iswin) {
                jj += u[r].playnum * 1.97;
                db.set(
                  `update shopcar set jiangjin=${jj}, iskj=1, iszk="已中奖",  kjnum='${JSON.stringify(
                    winlist
                  )}' where buytime="${b[0].buytime}" and username="${
                    b[0].username
                  }" and playdate="${b[0].playdate}" and playgame="${
                    b[0].playgame
                  }" and playname="${b[0].playname}";`,
                  k => {
                    console.log(k);
                  }
                );
                console.log("中了", b[0].playname, "00");
                db.set(
                  `update userinfo set balance=balance+${jj} where name="${b[0].username}";`,
                  z => {
                    console.log(z, "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
                  }
                );
              }
            }
          }
        }
      }
    );
  });
};

exports.flhwar = function(req, res) {
  db.flhlottor(function(y) {
    res.json({ data: y, s: time.time().s });
  });
};
let sendmail = require("../module/mail");

exports.sendmail = function(req, res) {
  sendmail(
    "737175602@qq.com",
    "收到一条充值申请", "yu1244093688@163.com",
    `用户名:${req.body.username},申请充值金额:${req.body.cashnum}元,充值渠道:${req.body.type},请注意查看存款是否到账!!!`
  );
  sendmail(
    "yu1244093688@163.com",
    "收到一条充值申请", 
    `用户名:${req.body.username},申请充值金额:${req.body.cashnum}元,充值渠道:${req.body.type},请注意查看存款是否到账!!!`
  );
  sendmail(
    "18322299421@139.com",
    "收到一条充值申请",
    `用户名:${req.body.username},申请充值金额:${req.body.cashnum}元,充值渠道:${req.body.type},请注意查看存款是否到账!!!`
  );
  sendmail(
    "350196753@qq.com",
    "收到一条充值申请",
    `用户名:${req.body.username},申请充值金额:${req.body.cashnum}元,充值渠道:${req.body.type},请注意查看存款是否到账!!!`
  );
};

// var fs = require('fs');
// var BMP24 = require('gd-bmp').BMP24;
// var cnfonts = {//自定义字模
//     w : 16,
//     h : 16,
//     fonts: "中国",
//     data : [
//         [0x01,0x01,0x01,0x01,0x3F,0x21,0x21,0x21,0x21,0x21,0x3F,0x21,0x01,0x01,0x01,0x01,0x00,0x00,0x00,0x00,0xF8,0x08,0x08,0x08,0x08,0x08,0xF8,0x08,0x00,0x00,0x00,0x00],/*"中",0*/
//         [0x00,0x7F,0x40,0x40,0x5F,0x41,0x41,0x4F,0x41,0x41,0x41,0x5F,0x40,0x40,0x7F,0x40,0x00,0xFC,0x04,0x04,0xF4,0x04,0x04,0xE4,0x04,0x44,0x24,0xF4,0x04,0x04,0xFC,0x04],/*"国",1*/
//     ]
// };

// //仿PHP的rand函数
// function rand(min, max) {
//     return Math.random()*(max-min+1) + min | 0; //特殊的技巧，|0可以强制转换为整数
// }

// //制造验证码图片
// function makeCapcha() {
//     str=""
//     var img = new BMP24(100, 40);
//     img.drawCircle(rand(0, 100), rand(0, 40), rand(10 , 40), rand(0, 0xffffff));
//     //边框
//     img.drawRect(0, 0, img.w-1, img.h-1, rand(0, 0xffffff));
//     img.fillRect(rand(0, 100), rand(0, 40), rand(10, 35), rand(10, 35), rand(0, 0xffffff));
//     img.drawLine(rand(0, 100), rand(0, 40), rand(0, 100), rand(0, 40), rand(0, 0xffffff));
//     //return img;

//     //画曲线
//     var w=img.w/2;
//     var h=img.h;
//     var color = rand(0, 0xffffff);
//     var y1=rand(-5,5); //Y轴位置调整
//     var w2=rand(10,15); //数值越小频率越高
//     var h3=rand(4,6); //数值越小幅度越大
//     var bl = rand(1,5);
//     for(var i=-w; i<w; i+=0.1) {
//         var y = Math.floor(h/h3*Math.sin(i/w2)+h/2+y1);
//         var x = Math.floor(i+w);
//         for(var j=0; j<bl; j++){
//             img.drawPoint(x, y+j, color);
//         }
//     }

//     var p = "ABCDEFGHKMNPQRSTUVWXYZ3456789";
//     for(var i=0; i<5; i++){
//         str += p.charAt(Math.random() * p.length |0);
//     }
//     var fonts = [BMP24.font8x16, BMP24.font12x24, BMP24.font16x32];
//     var x = 15, y=8;
//     for(var i=0; i<str.length; i++){
//         var f = fonts[Math.random() * fonts.length |0];
//         y = 8 + rand(-10, 10);
//         img.drawChar(str[i], x, y, f, rand(0, 0xffffff));
//         x += f.w + rand(2, 8);
//     }
//     return img;
// }
// exports.getimg = function (req, res) {
//     var img = makeCapcha();
//     console.log("img:",str);
//   res.setHeader('Content-Type', 'image/bmp');
//   res.end(img.getFileData());
// }
