let mysql = require("mysql")
let config = {
  user: "root",
  host: "localhost",
  password: "Hebeihdwew2014",
  database: "weinisi"
}
//-------------------------------查询公告通知
exports.findgg = function (fn) {
  let connext = mysql.createConnection(config)
  connext.query("select * from gonggao;", (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}
//======================插入彩票数据
exports.insert = function (tb,data, fn) {
  let connext = mysql.createConnection(config)
  sql = `
  insert into ${tb}(playname,playdate,playtime,playnum)
  values("${data.playname}","${data.playdate}","${data.playtime}","${data.playnum}");
  `;
  connext.query(sql, (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}

//-------------------------插入公告通知
exports.gg=function(tb,data, fn) {
  let connext = mysql.createConnection(config)
  sql = `
  insert into ${tb}(cont,time)
  values("${data.cont}","${data.time}");
  `;
  connext.query(sql, (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}

//---------------------------插入用户数据
exports.inuser=function(data,fn){
  let connext = mysql.createConnection(config)
  sql = `
  insert into userinfo(name,password,rigtime,level,phone)
  values("${data.username}","${data.password}","${data.rigtime}","${data.level}","${data.phone}");
  `;
  connext.query(sql, (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}
//******************** *****/查询用户数据
exports.finduser=function(data,fn){
  let connext = mysql.createConnection(config)
  sql = `
  select name,rigtime,level,phone,balance from userinfo where name="${data.username}";
  `;
  connext.query(sql, (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}
//******************************************************* */查询用户名和密码
exports.fuser=function(data,fn){
  let connext = mysql.createConnection(config)
  sql = `
  select name,phone from userinfo where name="${data.username}" and password="${data.password}";
  `;
  connext.query(sql, (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}