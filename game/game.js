let request = require("request")
let cheerio = require("cheerio")
let _ = require('underscore')
let db=require("../module/db")
let t=require("../module/time")
let config = [[0, 9], [0, 9], [0, 9], [0, 9], [0, 9]]
function getssc(a, b, c, d, e) {
  let ssc = ''
  return ssc += _.random(...a) + '' + _.random(...a) + '' + _.random(...a) + '' + _.random(...a) + '' + _.random(...a)
}

function tg(str) {
  str = str.replace(/(\\u)(\w{1,4})/gi, function ($0) { return (String.fromCharCode(parseInt((escape($0).replace(/(%5Cu)(\w{1,4})/g, "$2")), 16))); }); str = str.replace(/(&#x)(\w{1,4});/gi, function ($0) { return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16)); }); str = str.replace(/(&#)(\d{1,6});/gi, function ($0) { return String.fromCharCode(parseInt(escape($0).replace(/(%26%23)(\d{1,6})(%3B)/g, "$2"))); }); return str;
}
setInterval(() => {
  if (t.time().s == 0 && t.time().m % 5 == 0) {
    let gadt={}
    gadt.playname="gassc"
    gadt.playdate=t.time().date+"期"
    gadt.playnum=getssc(...config)
    gadt.playtime=`${t.time().y}/${t.time().o}/${t.time().d} ${t.time().h}:${t.time().m}:${_.random(0,59)}`
    console.log(gadt)
    db.insert("gassckjinfo",gadt,function(x){
      console.log(x);
    })
  }
}, 1000)
//******************************************************************************* */
setInterval(() => {
  if (t.time().s == 40 && (t.time().m-10) % 20 == 4) {
    request("https://kjh.55128.cn/history_chongqingssc.aspx", function (err, data, body) {
      let $ = cheerio.load(body)
      let playtime = $("#table tr td").html()
      let playdate = $("#table tr td").eq(1).html()
      let $1 = cheerio.load($("#table tr td").eq(2).html())
      let playnum = ""
      for (let i = 0; i < 5; i++) {
        playnum += $1("span").eq(i).html()
      }
      let cqdt = {}
      cqdt.playname = "cqssc"
      cqdt.playdate = playdate + "期"
      cqdt.playtime = playtime
      cqdt.playnum = playnum
      db.insert("cqssckjinfo",cqdt, function (x) {
        console.log(x);
      })
    })
  }
}, 1000)