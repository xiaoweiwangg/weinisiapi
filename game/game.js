let request = require("request")
let cheerio = require("cheerio")
let _ = require('underscore')
let db = require("../module/db")
let t = require("../module/time")
let config = [[0, 9], [0, 9], [0, 9], [0, 9], [0, 9]]

//socket.io
let exp = require("express")
let app = exp()
let http = require("http").Server(app)
let io = require("socket.io")(http)
io.on('connection', function (socket) {
  //定时发送数据
  setInterval(() => {
    //---------------gassc
    if (t.time().s == 10 && t.time().m % 5 == 0) {
      db.fgalottor(function (x) {
        socket.emit('gassc', {
          msg: x[0],
          code: 200
        });
        socket.emit('timer', {
          m: t.time().m,
          s: t.time().s,
        });
      })
    }
    //----------------cqssc
  if (t.time().s == 40 && (t.time().m - 10) % 20 == 3) {
    db.fcqlottor(function (x) {
      socket.emit('cqssc', {
        msg: x[0],
        code: 200
      });
      socket.emit('timer', {
        m: t.time().m+10,
        s: t.time().s,
      });
    })
  }
  }, 1000)
  //-----------------tjssc
  if (t.time().h<=23&&t.time().h>=9&&t.time().s == 20 && t.time().m  % 20 == 2) {
    socket.on('xjssc', function (obj) {
      socket.emit('timer', {
        kj: {js:20,jm:2},
        m: t.time().m,
        s: t.time().s,
      });
      db.fxjlottor(function (x) {
        socket.emit('xjssc', {
          msg: x[0],
          code: 200
        });
      })
    });
    socket.on('tjssc', function (obj) {
      socket.emit('timer', {
        m: t.time().m,
        s: t.time().s,
      });
      db.ftjlottor(function (x) {
        socket.emit('tjssc', {
          msg: x[0],
          code: 200
        });
      })
    });
  }
  //----------------初始化发送数据
  socket.on('gassc', function (obj) {
    socket.emit('timer', {
      m: t.time().m,
      s: t.time().s,
    });
    db.fgalottor(function (x) {
      socket.emit('gassc', {
        msg: x[0],
        code: 200
      });
    })
  });
  socket.on('cqssc', function (obj) {
    socket.emit('timer', {
      m: t.time().m + 10,
      s: t.time().s,
    });
    db.fcqlottor(function (x) {
      socket.emit('cqssc', {
        msg: x[0],
        code: 200
      });
    })
  });
  socket.on('tjssc', function (obj) {
    socket.emit('timer', {
      m: t.time().m,
      s: t.time().s,
    });
    db.ftjlottor(function (x) {
      socket.emit('tjssc', {
        msg: x[0],
        code: 200
      });
    })
  });
  socket.on('xjssc', function (obj) {
    socket.emit('timer', {
      m: t.time().m,
      s: t.time().s,
    });
    db.fxjlottor(function (x) {
      socket.emit('xjssc', {
        msg: x[0],
        code: 200
      });
    })
  });
});
http.listen(8090)//监听端口不能和主端口一致 
//----------------------------------------gassc---------------------
function getssc(a, b, c, d, e) {
  let ssc = ''
  return ssc += _.random(...a) + '' + _.random(...a) + '' + _.random(...a) + '' + _.random(...a) + '' + _.random(...a)
}

function tg(str) {
  str = str.replace(/(\\u)(\w{1,4})/gi, function ($0) { return (String.fromCharCode(parseInt((escape($0).replace(/(%5Cu)(\w{1,4})/g, "$2")), 16))); }); str = str.replace(/(&#x)(\w{1,4});/gi, function ($0) { return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16)); }); str = str.replace(/(&#)(\d{1,6});/gi, function ($0) { return String.fromCharCode(parseInt(escape($0).replace(/(%26%23)(\d{1,6})(%3B)/g, "$2"))); }); return str;
}
setInterval(() => {
  if (t.time().s == 0 && t.time().m % 5 == 0) {
    let gadt = {}
    gadt.playname = "gassc"
    gadt.playdate = t.time().date + "期"
    gadt.playnum = getssc(...config)
    gadt.playtime = `${t.time().y}/${t.time().o}/${t.time().d} ${t.time().h}:${t.time().m}:${_.random(0, 59)}`

    db.insert("gassckjinfo", gadt, function (x) {
      //这里设定查询用户中奖信息

    })
  }
}, 1000)
//*************************************cqssc****************************************** */
setInterval(() => {
  if (t.time().h>7&&t.time().s == 30 && (t.time().m - 10) % 20 == 3) {
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
        console.log(x);
      })
    })
  }
  //----------------------------------tjssc---------------------------------
  if (t.time().h<=23&&t.time().h>=9&&t.time().s == 10 && t.time().m  % 20 == 2) {
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
        console.log(x);
      })
    })
  }
  //----------------------------------xjssc---------------------------------
  if (t.time().h<=23&&t.time().h>=9&&t.time().s == 10 && t.time().m  % 20 == 2) {
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
        console.log(x);
      })
    })
  }
}, 1000)