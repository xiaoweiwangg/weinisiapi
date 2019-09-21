let request = require("request")
let cheerio = require("cheerio")
let _ = require('underscore')
let db = require("../module/db")
let t = require("../module/time")
let config = [[0, 9], [0, 9], [0, 9], [0, 9], [0, 9]]
let pkconfig = [[1, 10], [1, 10], [1, 10], [1, 10], [1, 10], [1, 10], [1, 10], [1, 10], [1, 10], [1, 10]]
let exp = require("express")
let app = exp()
let http = require("http").Server(app)
let io = require("socket.io")(http)
//ssc玩法
let game = require("./sscmethod")
//pk玩法
let pk = require("./pkgame")
//nn
let pnum = 0
let group = []

io.on('connection', function (socket) {
  // console.log("socketid:"+socket.id);

  group.push(socket.id)
  socket.on('add', function (obj) {
    for (let i = 0; i < group.length; i++) {
      io.to(group[i]).emit('move', {
        tz: obj.data
      })
    }
  });
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
    //---------------txffc
    if (t.time().s == 5 && t.time().m % 1 == 0) {
      db.ftxlottor(function (x) {
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
        socket.emit('txffc', {
          msg: x[0],
          code: 200,
          m: t.time().m,
          s: t.time().s,
        });
      })
      db.fwnspk10lottor(function (x) {
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
        socket.emit('wnspk10', {
          msg: x[0],
          code: 200,
          m: t.time().m,
          s: t.time().s,
        });
      })
    }
    // if ((t.time().s-20)%30==0 ) {
    //   db.fnnlottor(function (x) {
    //     db.set(
    //       `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
    //       function (m) {
    //         if (m.length > 0) {
    //           for (let i = 0; i < m.length; i++) {
    //             socket.emit(m[i].username, {
    //               msg: "ok"
    //             })
    //           }
    //         }
    //       }
    //     )
    //     socket.emit('niuniu', {
    //       msg: x[0],
    //       code: 200,
    //       m: t.time().m,
    //       s: t.time().s,
    //     });
    //   })
    // }
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
    if (t.time().s == 43 && (t.time().m - 10) % 20 == 5) {
      db.fbjkclottor(function (x) {
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
        socket.emit('bjkcssc', {
          msg: x[0],
          code: 200,
          m: t.time().m + 10,
          s: t.time().s,
        });
      })
    }
    if ((t.time().s - 15) % 30 == 0) {
      db.fnnlottor(function (x) {
        socket.emit('niuniu2', {
          msg: x[0],
          code: 200,
        });
      })
    }
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
  socket.on('qtniuniu', function (obj) {
    pnum--
    if (pnum < 0) {
      pnum = 0
    }
    for (let i = 0; i < group.length; i++) {
      io.to(group[i]).emit('qtniuniu', {
        pm: pnum
      })
    }
  })
  socket.on('niuniu', function (obj) {
    pnum++
    for (let i = 0; i < group.length; i++) {
      io.to(group[i]).emit('qtniuniu', {
        pm: pnum
      })
    }
    db.fnnlottor(function (x) {
      socket.emit('niuniu', {
        msg: x[0],
        code: 200,
        pm: pnum,
        m: t.time().m,
        s: t.time().s
      });
    })
  });

  // socket.on('niuniu2', function (obj) {

  // });
  socket.on('txffc', function (obj) {
    db.ftxlottor(function (x) {
      socket.emit('txffc', {
        msg: x[0],
        code: 200,
        m: t.time().m,
        s: t.time().s,
      });
    })
  });
  socket.on('wnspk10', function (obj) {
    db.fwnspk10lottor(function (x) {
      socket.emit('wnspk10', {
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
  socket.on('bjkcssc', function (obj) {
    db.fbjkclottor(function (x) {
      socket.emit('bjkcssc', {
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
//获取时时彩
function getssc(a, b, c, d, e) {
  let ssc = ''
  return ssc += _.random(...a) + '' + _.random(...b) + '' + _.random(...c) + '' + _.random(...d) + '' + _.random(...e)
}
//获取pk时时彩
function getpk10() {
  return _.shuffle(_.range(1, 11))
}
//获取牛牛
let puksize = _.range(1, 14)
let pukhua = _.range(0, 4)
let puklist = []
let puk = {}
for (let i = 0; i < pukhua.length; i++) {
  for (let h = 0; h < puksize.length; h++) {
    puklist.push({ num: puksize[h], hua: pukhua[i] })
  }
}
function getnn() {
  console.log();
  let nn = _.shuffle(puklist).slice(0, 20)
  k = 0
  for (let v = 0; v < nn.length; v++) {
    if (v % 5 == 0) {
      k++
    }
    nn[v].type = k - 1
  }
  return JSON.stringify(nn)
}
//转码Unicode 
function tg(str) {
  str = str.replace(/(\\u)(\w{1,4})/gi, function ($0) { return (String.fromCharCode(parseInt((escape($0).replace(/(%5Cu)(\w{1,4})/g, "$2")), 16))); }); str = str.replace(/(&#x)(\w{1,4});/gi, function ($0) { return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16)); }); str = str.replace(/(&#)(\d{1,6});/gi, function ($0) { return String.fromCharCode(parseInt(escape($0).replace(/(%26%23)(\d{1,6})(%3B)/g, "$2"))); }); return str;
}
//开奖集----------------------------------------
let jieguo = []
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
    if (
      r[i].map(x => (x > 10 ? 10 : x)).reduce((a, b) => a + b) % 10 ==
      0
    ) {
      n++;
      jarr.push(
        dif(j.map(x => x.num), r[i])
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
let size = [
  "z4",
  "whn",
  "shn",
  0,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
  "-1"
].reverse();
setInterval(() => {
  if ((t.time().s - 12) % 30 == 0) {
    let gadt = {} 
    gadt.playname = "niuniu"
    gadt.playdate = t.time().qdate + "期" 
    gadt.playnum = getnn() 
    gadt.playtime = `${t.time().y}/${t.time().o}/${t.time().d} ${t.time().h}:${t.time().m}:${t.time().s}`
    // db.set(`delete from nnkjinfo where id=${parseInt(gadt.playdate)-50}期;`,x=>{
    //   "删除完成"            
    // }) 
    db.insert("nnkjinfo", gadt, function (x) { 

      // 这里设定查询用户中奖信息
      // console.log();
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
      ]
      for (let i = 0; i < 4; i++) {
        nnme(JSON.parse(gadt.playnum).filter(x => x.type == arr[i]));

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
              if (hsize.indexOf(jieguo[i].maxhua) > hsize.indexOf(jieguo[3].maxhua)) {
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
      db.fnnlottor(function (l) {
        db.set(`
        select * from shopcar where playgame="niuniu" and playdate="${l[0].playdate}";`,
          function (b) {
            console.log(b,"+++++++++++++++++++++++++++++++++++++++++++++++++");
            let jj = 0
            if (b.length > 0) {
              let u = JSON.parse(b[0].buydet)
              for (let z = 0; z < u.length; z++) {
                for (let t = 0; t < u[z].length; t++) {
                  if (u[z][t].playnum > 0 && vs[z][t].iswin) {
                    console.log("zhongle.-----------------", u[z][t].playnum * 1.97 + "元");
                    jj += u[z][t].playnum * 1.97
                    db.set(`update shopcar set jiangjin=${jj}, iskj=1, iszk="已中奖",  kjnum='${JSON.stringify(vs)}' where buytime="${b[0].buytime}" and username="${b[0].username}" and playdate="${b[0].playdate}" and playgame="${b[0].playgame}" and playname="${b[0].playname}";`, (k) => { console.log(k) }); console.log("中了", b[0].playname, "00")
                    db.set(
                      `update userinfo set balance=balance+${jj} where name="${b[0].username}";`,
                      function (z) {
                        console.log(z, "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
                        db.findbalance(x, function (data) {
                          console.log(data, "7899");
                          socket.emit("balance", data)
                        })
                      }
                    )
                  }
                }

              }
            };

          }

        )
      })
      jieguo = []
    })
  }
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
                game.chek(m[i], x[0].playnum)
              }
              console.log("合计投入" + price);
            }
          }
        )
      })
    })
  }
  if (t.time().s == 0 && t.time().m % 1 == 0) {
    let gadt = {}
    gadt.playname = "txffc"
    gadt.playdate = t.time().fdate + "期"
    gadt.playnum = getssc(...config)
    gadt.playtime = `${t.time().y}/${t.time().o}/${t.time().d} ${t.time().h}:${t.time().m}:${_.random(0, 59)}`
    db.insert("txffckjinfo", gadt, function (x) {
      //这里设定查询用户中奖信息
      db.ftxlottor(function (x) {
        db.set(
          `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
          function (m) {
            let price = 0
            console.log(m.length + "条记录");
            if (m.length > 0) {
              for (let i = 0; i < m.length; i++) {
                price += m[i].price
                game.chek(m[i], x[0].playnum)
              }
              console.log("合计投入" + price);

            }
          }
        )
      })
    })
  }
  if (t.time().s == 0 && t.time().m % 1 == 0) {
    let gadt = {}
    gadt.playname = "wnspk10"
    gadt.playdate = t.time().fdate + "期"
    gadt.playnum = getpk10()
    gadt.playtime = `${t.time().y}/${t.time().o}/${t.time().d} ${t.time().h}:${t.time().m}:${_.random(0, 59)}`
    db.insert("wnspk10kjinfo", gadt, function (x) {
      //这里设定查询用户中奖信息
      db.fwnspk10lottor(function (x) {
        db.set(
          `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
          function (m) {
            let price = 0
            console.log(m.length + "条记录");
            if (m.length > 0) {
              for (let i = 0; i < m.length; i++) {
                price += m[i].price
                pk.chek(m[i], x[0].playnum)
              }
              console.log("合计投入" + price);

            }
          }
        )
      })
    })
  }
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
                  game.chek(m[i], x[0].playnum)
                }
                console.log("合计投入" + price);

              }
            }
          )
        })
      })
    })
  }
  //-------------------------------bjkc-------------------
  if (t.time().h > 7 && t.time().s == 20 && (t.time().m - 10) % 20 == 6) {
    request("https://kjh.55128.cn/history_bjpk10.aspx", function (err, data, body) {
      let $ = cheerio.load(body)
      //开奖号码获取 
      let num = $(".kaij-cartoon span")
      let str = []
      for (let i = 0; i < num.length; i++) {
        str.push(num.eq(i).text())
      }
      let playnum = str
      //开奖期数获取
      let playdate = $(".kaij-qs").html();
      // 开奖时间获取
      let cqdt = {}
      cqdt.playname = "bjkcssc"
      cqdt.playdate = playdate + "期"
      cqdt.playtime = t.time().datetime
      cqdt.playnum = playnum
      db.insert("bjkcssckjinfo", cqdt, function (x) {
        db.fbjkclottor(function (x) {
          db.set(
            `select * from shopcar where playgame="${x[0].playname}" AND playdate="${x[0].playdate}";`,
            function (m) {
              let price = 0
              console.log(m.length + "条记录");
              if (m.length > 0) {
                for (let i = 0; i < m.length; i++) {
                  price += m[i].price
                  pk.chek(m[i], x[0].playnum)
                }
                console.log("合计投入" + price);

              }
            }
          )
        })
      })
    })
  }
  //----------------------------------tjssc---------------------------------
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
                  game.chek(m[i], x[0].playnum)
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
                  game.chek(m[i], x[0].playnum)
                }
                console.log("合计投入" + price);

              }
            }
          )
        })
      })
    })
  }

  //----------------------------------xjssc---------------------------------
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
                  game.chek(m[i], x[0].playnum)
                }
                console.log("合计投入" + price);

              }
            }
          )
        })
      })
    })
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
                  game.chek(m[i], x[0].playnum)
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
                  game.chek(m[i], x[0].playnum)
                }
                console.log("合计投入" + price);

              }
            }
          )
        })
      })
    })
  }
}, 1000)