let request = require("request");
let cheerio = require("cheerio");
let _ = require("underscore");
let db = require("../module/db");
let t = require("../module/time");
let config = [
  [0, 9],
  [0, 9],
  [0, 9],
  [0, 9],
  [0, 9]
];
let pkconfig = [
  [1, 10],
  [1, 10],
  [1, 10],
  [1, 10],
  [1, 10],
  [1, 10],
  [1, 10],
  [1, 10],
  [1, 10],
  [1, 10]
];
let exp = require("express");
let app = exp();
let http = require("http").Server(app);
let io = require("socket.io")(http);
//ssc玩法
let game = require("./sscmethod");
//pk玩法
let pk = require("./pkgame");
//nn
let pnum = 0;
let group = [];

io.on("connection", function(socket) {
  // console.log("socketid:"+socket.id);

  group.push(socket.id);
  socket.on("add", function(obj) {
    for (let i = 0; i < group.length; i++) {
      io.to(group[i]).emit("move", {
        tz: obj.data
      });
    }
  });
  socket.on("logoin", function(x) {
    console.log(x);
    socket.emit(x.username, {
      type: "server",
      msg:
        "欢迎来到威尼斯娱乐城!目前在线客服繁忙,请添加客服QQ1226579671,将有专线客服为您提供服务。"
    });
  });
  //定时发送数据
  setInterval(() => {
      if ((t.time().h = 20 && t.time().m == 50 && t.time().s == 30)) {
        db.ffc3dlottor(function(x) {
          db.set(
            `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
            function(m) {
              if (m.length > 0) {
                for (let i = 0; i < m.length; i++) {
                  socket.emit(m[i].username, {
                    msg: "ok"
                  });
                }
              }
            }
          );
          socket.emit("fc3d", {
            msg: x[0],
            code: 200,
            h: 21,
            m: t.time().m,
            s: t.time().s
          });
        });
        db.ftcpl5lottor(function(x) {
          db.set(
            `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
            function(m) {
              if (m.length > 0) {
                for (let i = 0; i < m.length; i++) {
                  socket.emit(m[i].username, {
                    msg: "ok"
                  });
                }
              }
            }
          );
          socket.emit("tcpl5", {
            msg: x[0],
            code: 200,
            h: 21,
            m: t.time().m + 10,
            s: t.time().s
          });
        });
      }

      //---------------gassc
      if (t.time().s == 10 && t.time().m % 5 == 0) {
        db.fgalottor(function(x) {
          db.set(
            `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
            function(m) {
              console.log(m.length + "条记录");
              if (m.length > 0) {
                for (let i = 0; i < m.length; i++) {
                  socket.emit(m[i].username, {
                    msg: "kj"
                  });
                }
              }
            }
          );
          socket.emit("gassc", {
            msg: x[0],
            code: 200,
            m: t.time().m,
            s: t.time().s
          });
        });
      }
      //---------------txffc
      if (t.time().s == 5 && t.time().m % 1 == 0) {
        db.ftxlottor(function(x) {
          db.set(
            `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
            function(m) {
              console.log(m.length + "条记录");
              if (m.length > 0) {
                for (let i = 0; i < m.length; i++) {
                  socket.emit(m[i].username, {
                    msg: "kj"
                  });
                }
              }
            }
          );
          socket.emit("txffc", {
            msg: x[0],
            code: 200,
            m: t.time().m,
            s: t.time().s
          });
        });
        db.fwnspk10lottor(function(x) {
          db.set(
            `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
            function(m) {
              console.log(m.length + "条记录");
              if (m.length > 0) {
                for (let i = 0; i < m.length; i++) {
                  socket.emit(m[i].username, {
                    msg: "kj"
                  });
                }
              }
            }
          );
          socket.emit("wnspk10", {
            msg: x[0],
            code: 200,
            m: t.time().m,
            s: t.time().s
          });
        });
      }
       if (t.time().s == 40 && (t.time().m - 10) % 20 == 3) {
        db.fcqlottor(function(x) {
          db.set(
            `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
            function(m) {
              if (m.length > 0) {
                for (let i = 0; i < m.length; i++) {
                  socket.emit(m[i].username, {
                    msg: "ok"
                  });
                }
              }
            }
          );
          socket.emit("cqssc", {
            msg: x[0],
            code: 200,
            m: t.time().m + 10,
            s: t.time().s
          });
        });

        db.fynlottor(function(x) {
          db.set(
            `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
            function(m) {
              if (m.length > 0) {
                for (let i = 0; i < m.length; i++) {
                  socket.emit(m[i].username, {
                    msg: "ok"
                  });
                }
              }
            }
          );
          socket.emit("ynssc", {
            msg: x[0],
            code: 200,
            m: t.time().m + 10,
            s: t.time().s
          });
        });
      if (t.time().s == 43 && (t.time().m - 10) % 20 == 5) {
        db.fbjkclottor(function(x) {
          console.log(x, "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-");

          db.set(
            `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
            function(m) {
              if (m.length > 0) {
                for (let i = 0; i < m.length; i++) {
                  socket.emit(m[i].username, {
                    msg: "ok"
                  });
                }
              }
            }
          );
          socket.emit("bjkcssc", {
            msg: x[0],
            code: 200,
            m: t.time().m + 10,
            s: t.time().s
          });
        });
      }
      if ((t.time().s - 15) % 30 == 0) {
        db.frblottor(function(x) {
          socket.emit("rb2", {
            msg: x[0],
            code: 200
          });
        });
      }
      if (t.time().s == 10 && t.time().m % 20 == 3) {
        db.fxjlottor(function(x) {
          db.set(
            `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
            function(m) {
              if (m.length > 0) {
                for (let i = 0; i < m.length; i++) {
                  socket.emit(m[i].username, {
                    msg: "ok"
                  });
                }
              }
            }
          );
          socket.emit("xjssc", {
            msg: x[0],
            code: 200,
            m: t.time().m,
            s: t.time().s
          });
        });
        db.ftjlottor(function(x) {
          db.set(
            `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
            function(m) {
              if (m.length > 0) {
                for (let i = 0; i < m.length; i++) {
                  socket.emit(m[i].username, {
                    msg: "ok"
                  });
                }
              }
            }
          );
          socket.emit("tjssc", {
            msg: x[0],
            code: 200,
            m: t.time().m,
            s: t.time().s
          });
        });
      }
    }
  }, 1000);
  //----------------初始化发送数据
  socket.on("gassc", function(obj) {
    db.fgalottor(function(x) {
      socket.emit("gassc", {
        msg: x[0],
        code: 200,
        m: t.time().m,
        s: t.time().s
      });
    });
  });
  socket.on("qtrbwar", function(obj) {
    socket.emit("qtniuniu", {
      pm: group.length
    });
  });
  socket.on("txffc", function(obj) {
    db.ftxlottor(function(x) {
      socket.emit("txffc", {
        msg: x[0],
        code: 200,
        m: t.time().m,
        s: t.time().s
      });
    });
  });
  socket.on("wnspk10", function(obj) {
    db.fwnspk10lottor(function(x) {
      socket.emit("wnspk10", {
        msg: x[0],
        code: 200,
        m: t.time().m,
        s: t.time().s
      });
    });
  });
  socket.on("cqssc", function(obj) {
    db.fcqlottor(function(x) {
      socket.emit("cqssc", {
        msg: x[0],
        code: 200,
        m: t.time().m + 10,
        s: t.time().s
      });
    });
  });
  socket.on("bjkcssc", function(obj) {
    db.fbjkclottor(function(x) {
      socket.emit("bjkcssc", {
        msg: x[0],
        code: 200,
        m: t.time().m + 10,
        s: t.time().s
      });
    });
  });
  socket.on("tjssc", function(obj) {
    db.ftjlottor(function(x) {
      socket.emit("tjssc", {
        msg: x[0],
        code: 200,
        m: t.time().m,
        s: t.time().s
      });
    });
  });
  socket.on("xjssc", function(obj) {
    db.fxjlottor(function(x) {
      socket.emit("xjssc", {
        msg: x[0],
        code: 200,
        m: t.time().m,
        s: t.time().s
      });
    });
  });
  socket.on("ynssc", function(obj) {
    db.fynlottor(function(x) {
      socket.emit("ynssc", {
        msg: x[0],
        code: 200,
        m: t.time().m + 10,
        s: t.time().s
      });
    });
  });
  socket.on("fc3d", function(obj) {
    db.ffc3dlottor(function(x) {
      socket.emit("fc3d", {
        msg: x[0],
        code: 200,
        h: 21,
        m: t.time().m + 10,
        s: t.time().s
      });
    });
  });
  socket.on("tcpl5", function(obj) {
    db.ftcpl5lottor(function(x) {
      socket.emit("tcpl5", {
        msg: x[0],
        code: 200,
        h: 21,
        m: t.time().m + 10,
        s: t.time().s
      });
    });
  });
  socket.on("user", function(x) {
    console.log(x);
    db.findbalance(x, function(data) {
      console.log(data, "7899");
      socket.emit("balance", data);
    });
  });
  socket.on("tb", function(x) {
    console.log(x);
    if (x.pri > 0) {
      db.set(
        `update userinfo set balance=balance+${x.pri} where name="${x.username}";`,
        z => {
          console.log("成功");
          db.findbalance(x, function(data) {
            console.log(data, "7899");
            socket.emit("balance", data);
          });
        }
      );
    }
  });
});
http.listen(88); //监听端口不能和主端口一致
//获取时时彩
function getssc(a, b, c, d, e) {
  let ssc = "";
  return (ssc +=
    _.random(...a) +
    "" +
    _.random(...b) +
    "" +
    _.random(...c) +
    "" +
    _.random(...d) +
    "" +
    _.random(...e));
}
//获取pk时时彩
function getpk10() {
  return _.shuffle(_.range(1, 11));
}
//获取牛牛
let puksize = _.range(1, 14);
let pukhua = _.range(0, 4);
let puklist = [];
let puk = {};
for (let i = 0; i < pukhua.length; i++) {
  for (let h = 0; h < puksize.length; h++) {
    puklist.push({ num: puksize[h], hua: pukhua[i] });
  }
}
function getlh() {
  let nn = _.shuffle(puklist).slice(0, 2);
  nn[0].type = 0;
  nn[1].type = 1;
  return JSON.stringify(nn);
}
function getnn() {
  let nn = _.shuffle(_.shuffle(_.shuffle(puklist).slice(0, 20)));
  k = 0;
  for (let v = 0; v < nn.length; v++) {
    if (v % 5 == 0) {
      k++;
    }
    nn[v].type = k - 1;
  }
  return JSON.stringify(nn);
}
function getrb() {
  let nn =  _.shuffle(_.shuffle(puklist).slice(0, 6));
  k = 0;
  for (let v = 0; v < nn.length; v++) {
    if (v % 3 == 0) {
      k++;
    }
    nn[v].type = k - 1;
  }
  return JSON.stringify(nn);
}
//转码Unicode
function tg(str) {
  str = str.replace(/(\\u)(\w{1,4})/gi, function($0) {
    return String.fromCharCode(
      parseInt(escape($0).replace(/(%5Cu)(\w{1,4})/g, "$2"), 16)
    );
  });
  str = str.replace(/(&#x)(\w{1,4});/gi, function($0) {
    return String.fromCharCode(
      parseInt(escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16)
    );
  });
  str = str.replace(/(&#)(\d{1,6});/gi, function($0) {
    return String.fromCharCode(
      parseInt(escape($0).replace(/(%26%23)(\d{1,6})(%3B)/g, "$2"))
    );
  });
  return str;
}
//开奖集----------------------------------------
setInterval(() => {
    if ((t.time().s - 12) % 30 == 0) {
      let gadt = {};
      gadt.playname = "niuniu";
      gadt.playdate = t.time().qdate + "期";
      gadt.playnum = getnn();
      gadt.playtime = `${t.time().y}/${t.time().o}/${t.time().d} ${
        t.time().h
      }:${t.time().m}:${t.time().s}`;
      db.insert("nnkjinfo", gadt, function(x) {});
    }
    if ((t.time().s - 12) % 30 == 0) {
      let gadt = {};
      gadt.playname = "rbwar";
      gadt.playdate = t.time().qdate + "期";
      gadt.playnum = getrb();
      gadt.playtime = `${t.time().y}/${t.time().o}/${t.time().d} ${
        t.time().h
      }:${t.time().m}:${t.time().s}`;
      db.insert("rbkjinfo", gadt, function(x) {});
    }
    if ((t.time().s - 12) % 30 == 0) {
      let gadt = {};
      gadt.playname = "lhwar";
      gadt.playdate = t.time().qdate + "期";
      gadt.playnum = getlh();
      gadt.playtime = `${t.time().y}/${t.time().o}/${t.time().d} ${
        t.time().h
      }:${t.time().m}:${t.time().s}`;
      db.insert("lhkjinfo", gadt, function(x) {});
    }
    if (t.time().s == 0 && t.time().m % 5 == 0) {
      let gadt = {};
      gadt.playname = "gassc";
      gadt.playdate = t.time().date + "期";
      gadt.playnum = getssc(...config);
      gadt.playtime = `${t.time().y}/${t.time().o}/${t.time().d} ${
        t.time().h
      }:${t.time().m}:${_.random(0, 59)}`;
      db.insert("gassckjinfo", gadt, function(x) {
        //这里设定查询用户中奖信息
        db.fgalottor(function(x) {
          db.set(
            `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
            function(m) {
              let price = 0;
              console.log(m.length + "条记录");
              if (m.length > 0) {
                for (let i = 0; i < m.length; i++) {
                  price += m[i].price;
                  game.chek(m[i], x[0].playnum);
                }
                console.log("合计投入" + price);
              }
            }
          );
        });
      });
    }
    if (t.time().s == 0 && t.time().m % 1 == 0) {
      let gadt = {};
      gadt.playname = "txffc";
      gadt.playdate = t.time().fdate + "期";
      gadt.playnum = getssc(...config);
      gadt.playtime = `${t.time().y}/${t.time().o}/${t.time().d} ${
        t.time().h
      }:${t.time().m}:${_.random(0, 59)}`;
      db.insert("txffckjinfo", gadt, function(x) {
        //这里设定查询用户中奖信息
        db.ftxlottor(function(x) {
          db.set(
            `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
            function(m) {
              let price = 0;
              console.log(m.length + "条记录");
              if (m.length > 0) {
                for (let i = 0; i < m.length; i++) {
                  price += m[i].price;
                  game.chek(m[i], x[0].playnum);
                }
                console.log("合计投入" + price);
              }
            }
          );
        });
      });
    }
    if (t.time().s == 0 && t.time().m % 1 == 0) {
      let gadt = {};
      gadt.playname = "wnspk10";
      gadt.playdate = t.time().fdate + "期";
      gadt.playnum = getpk10();
      gadt.playtime = `${t.time().y}/${t.time().o}/${t.time().d} ${
        t.time().h
      }:${t.time().m}:${_.random(0, 59)}`;
      db.insert("wnspk10kjinfo", gadt, function(x) {
        //这里设定查询用户中奖信息
        db.fwnspk10lottor(function(x) {
          db.set(
            `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
            function(m) {
              let price = 0;
              console.log(m.length + "条记录");
              if (m.length > 0) {
                for (let i = 0; i < m.length; i++) {
                  price += m[i].price;
                  pk.chek(m[i], x[0].playnum);
                }
                console.log("合计投入" + price);
              }
            }
          );
        });
      });
    }
    if (t.time().h > 7 && t.time().s == 30 && (t.time().m - 10) % 20 == 3) {
      request("https://kjh.55128.cn/history_chongqingssc.aspx", function(
        err,
        data,
        body
      ) {
        let $ = cheerio.load(body);
        //开奖号码获取
        let num = $(".kaij-cartoon span");
        let str = "";
        for (let i = 0; i < num.length; i++) {
          str += num.eq(i).text();
        }
        let playnum = str;
        //开奖期数获取
        let playdate = $(".kaij-qs").html();
        // 开奖时间获取
        let cqdt = {};
        cqdt.playname = "cqssc";
        cqdt.playdate = playdate + "期";
        cqdt.playtime = t.time().datetime;
        cqdt.playnum = playnum;
        db.insert("cqssckjinfo", cqdt, function(x) {
          db.fcqlottor(function(x) {
            db.set(
              `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
              function(m) {
                let price = 0;
                console.log(m.length + "条记录");
                if (m.length > 0) {
                  for (let i = 0; i < m.length; i++) {
                    price += m[i].price;
                    game.chek(m[i], x[0].playnum);
                  }
                  console.log("合计投入" + price);
                }
              }
            );
          });
        });
      });
    }
    //-------------------------------bjkc-------------------
    if (t.time().h > 7 && t.time().s == 20 && (t.time().m - 10) % 20 == 6) {
      request("https://kjh.55128.cn/history_bjpk10.aspx", function(
        err,
        data,
        body
      ) {
        let $ = cheerio.load(body);
        //开奖号码获取
        let num = $(".kaij-cartoon span");
        let str = [];
        for (let i = 0; i < num.length; i++) {
          str.push(num.eq(i).text());
        }
        let playnum = str;
        //开奖期数获取
        let playdate = $(".kaij-qs").html();
        // 开奖时间获取
        let cqdt = {};
        cqdt.playname = "bjkcssc";
        cqdt.playdate = playdate + "期";
        cqdt.playtime = t.time().datetime;
        cqdt.playnum = playnum;
        db.insert("bjkcssckjinfo", cqdt, function(x) {
          db.fbjkclottor(function(x) {
            db.set(
              `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
              function(m) {
                let price = 0;
                console.log(m.length + "条记录");
                if (m.length > 0) {
                  for (let i = 0; i < m.length; i++) {
                    price += m[i].price;
                    pk.chek(m[i], x[0].playnum);
                  }
                  console.log("合计投入" + price);
                }
              }
            );
          });
        });
      });
    }
    //----------------------------------tjssc---------------------------------
    if (t.time().s == 10 && t.time().m % 20 == 2) {
      request("https://kjh.55128.cn/history_tjssc.aspx", function(
        err,
        data,
        body
      ) {
        let $ = cheerio.load(body);
        //开奖号码获取
        let num = $(".kaij-cartoon span");
        let str = "";
        for (let i = 0; i < num.length; i++) {
          str += num.eq(i).text();
        }
        let playnum = str;
        //开奖期数获取
        let playdate = $(".kaij-qs").html();
        // 开奖时间获取
        let cqdt = {};
        cqdt.playname = "tjssc";
        cqdt.playdate = playdate + "期";
        cqdt.playtime = t.time().datetime;
        cqdt.playnum = playnum;
        db.insert("tjssckjinfo", cqdt, function(x) {
          db.ftjlottor(function(x) {
            db.set(
              `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
              function(m) {
                let price = 0;
                console.log(m.length + "条记录");
                if (m.length > 0) {
                  for (let i = 0; i < m.length; i++) {
                    price += m[i].price;
                    game.chek(m[i], x[0].playnum);
                  }
                  console.log("合计投入" + price);
                }
              }
            );
          });
        });
      });
      //----------------------------------ynssc---------------------
      request("https://kjh.55128.cn/history_yunnanssc.aspx", function(
        err,
        data,
        body
      ) {
        let $ = cheerio.load(body);
        //开奖号码获取
        let num = $(".kaij-cartoon span");
        let str = "";
        for (let i = 0; i < num.length; i++) {
          str += num.eq(i).text();
        }
        let playnum = str;
        //开奖期数获取
        let playdate = $(".kaij-qs").html();
        // 开奖时间获取
        let cqdt = {};
        cqdt.playname = "ynssc";
        cqdt.playdate = playdate + "期";
        cqdt.playtime = t.time().datetime;
        cqdt.playnum = playnum;
        db.insert("ynssckjinfo", cqdt, function(x) {
          db.fynlottor(function(x) {
            db.set(
              `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
              function(m) {
                let price = 0;
                console.log(m.length + "条记录");
                if (m.length > 0) {
                  for (let i = 0; i < m.length; i++) {
                    price += m[i].price;
                    game.chek(m[i], x[0].playnum);
                  }
                  console.log("合计投入" + price);
                }
              }
            );
          });
        });
      });
    }

    //----------------------------------xjssc---------------------------------
    if (
      t.time().h <= 23 &&
      t.time().h >= 9 &&
      t.time().s == 10 &&
      t.time().m % 20 == 2
    ) {
      request("https://kjh.55128.cn/history_xjssc.aspx", function(
        err,
        data,
        body
      ) {
        let $ = cheerio.load(body);
        //开奖号码获取
        let num = $(".kaij-cartoon span");
        let str = "";
        for (let i = 0; i < num.length; i++) {
          str += num.eq(i).text();
        }
        let playnum = str;
        //开奖期数获取
        let playdate = $(".kaij-qs").html();
        // 开奖时间获取
        let cqdt = {};
        cqdt.playname = "xjssc";
        cqdt.playdate = playdate + "期";
        cqdt.playtime = t.time().datetime;
        cqdt.playnum = playnum;
        db.insert("xjssckjinfo", cqdt, function(x) {
          db.fxjlottor(function(x) {
            db.set(
              `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
              function(m) {
                let price = 0;
                console.log(m.length + "条记录");
                if (m.length > 0) {
                  for (let i = 0; i < m.length; i++) {
                    price += m[i].price;
                    game.chek(m[i], x[0].playnum);
                  }
                  console.log("合计投入" + price);
                }
              }
            );
          });
        });
      });
    }
    //----------------------------------fc3d---------------------------------
    if (t.time().h == 21 && t.time().m == 30 && t.time().s == 30) {
      request("https://kjh.55128.cn/history_sd.aspx", function(
        err,
        data,
        body
      ) {
        let $ = cheerio.load(body);
        //开奖号码获取
        let num = $(".kaij-cartoon span");
        let str = "";
        for (let i = 0; i < num.length; i++) {
          str += num.eq(i).text();
        }
        let playnum = str;
        //开奖期数获取
        let playdate = $(".kaij-qs").html();
        // 开奖时间获取
        let cqdt = {};
        cqdt.playname = "fc3d";
        cqdt.playdate = playdate + "期";
        cqdt.playtime = t.time().datetime;
        cqdt.playnum = playnum;
        db.insert("fc3dkjinfo", cqdt, function(x) {
          db.ffc3dlottor(function(x) {
            db.set(
              `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
              function(m) {
                let price = 0;
                console.log(m.length + "条记录");
                if (m.length > 0) {
                  for (let i = 0; i < m.length; i++) {
                    price += m[i].price;
                    game.chek(m[i], x[0].playnum);
                  }
                  console.log("合计投入" + price);
                }
              }
            );
          });
        });
      });
      request("https://kjh.55128.cn/history_p5.aspx", function(
        err,
        data,
        body
      ) {
        let $ = cheerio.load(body);
        //开奖号码获取
        let num = $(".kaij-cartoon span");
        let str = "";
        for (let i = 0; i < num.length; i++) {
          str += num.eq(i).text();
        }
        let playnum = str;
        //开奖期数获取
        let playdate = $(".kaij-qs").html();
        // 开奖时间获取
        let cqdt = {};
        cqdt.playname = "tcpl5";
        cqdt.playdate = playdate + "期";
        cqdt.playtime = t.time().datetime;
        cqdt.playnum = playnum;
        db.insert("tcpl5kjinfo", cqdt, function(x) {
          db.ftcpl5lottor(function(x) {
            db.set(
              `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
              function(m) {
                let price = 0;
                console.log(m.length + "条记录");
                if (m.length > 0) {
                  for (let i = 0; i < m.length; i++) {
                    price += m[i].price;
                    game.chek(m[i], x[0].playnum);
                  }
                  console.log("合计投入" + price);
                }
              }
            );
          });
        });
      });
    }
}, 1000);
