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
//-------------------------------查询活动通知
exports.findactive = function (fn) {
  let connext = mysql.createConnection(config)
  connext.query("select * from active;", (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}
//-------------------------------查询用户余额
exports.findbalance = function (data,fn) {
  let connext = mysql.createConnection(config)
  connext.query(`select balance from userinfo where name='${data.username}';`, (err, data, fled) => {
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
  values("${data.playname}","${data.playdate}","${data.playtime}",'${data.playnum}');
  `;
  connext.query(sql, (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}
//======================查询最新彩票数据
exports.fgalottor = function (fn) {
  let connext = mysql.createConnection(config)
  sql = `
  select * from gassckjinfo where playtime=(select max(playtime) from gassckjinfo);
  `;
  connext.query(sql, (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}
exports.ftxlottor = function (fn) {
  let connext = mysql.createConnection(config)
  sql = `
  select * from txffckjinfo where playtime=(select max(playtime) from txffckjinfo);
  `;
  connext.query(sql, (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}
exports.fcqlottor = function (fn) {
  let connext = mysql.createConnection(config)
  sql = `
  select * from cqssckjinfo where playtime=(select max(playtime) from cqssckjinfo);
  `;
  connext.query(sql, (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}
exports.fnnlottor = function (fn) {
  let connext = mysql.createConnection(config)
  sql = `
  select * from nnkjinfo where playtime=(select max(playtime) from nnkjinfo);
  `;
  connext.query(sql, (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}
exports.fbjkclottor = function (fn) {
  let connext = mysql.createConnection(config) 
  sql = `
  select * from bjkcssckjinfo where playtime=(select max(playtime) from bjkcssckjinfo);
  `;
  connext.query(sql, (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}
exports.fwnspk10lottor = function (fn) {
  let connext = mysql.createConnection(config) 
  sql = `
  select * from wnspk10kjinfo where playtime=(select max(playtime) from wnspk10kjinfo);
  `;
  connext.query(sql, (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}
exports.ftjlottor = function (fn) {
  let connext = mysql.createConnection(config)
  sql = `
  select * from tjssckjinfo where playtime=(select max(playtime) from tjssckjinfo);
  `;
  connext.query(sql, (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}
exports.fxjlottor = function (fn) {
  let connext = mysql.createConnection(config)
  sql = `
  select * from xjssckjinfo where playtime=(select max(playtime) from xjssckjinfo);
  `;
  connext.query(sql, (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}
exports.fynlottor = function (fn) {
  let connext = mysql.createConnection(config)
  sql = `
  select * from ynssckjinfo where playtime=(select max(playtime) from ynssckjinfo);
  `;
  connext.query(sql, (err, data, fled) => {
    // if (err) { throw err }
    fn(data)
  })
  connext.end()
}
exports.ffc3dlottor = function (fn) {
  let connext = mysql.createConnection(config)
  sql = `
  select * from fc3dkjinfo where playtime=(select max(playtime) from fc3dkjinfo);
  `;
  connext.query(sql, (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}
exports.ftcpl5lottor = function (fn) {
  let connext = mysql.createConnection(config)
  sql = `
  select * from tcpl5kjinfo where playtime=(select max(playtime) from tcpl5kjinfo);
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

//---------------------------插入用户订单数据
exports.inshop=function(data,fn){
  let connext = mysql.createConnection(config)
  sql = `
  insert into shopcar(username,playgame,playname,playdate,userinput,buytime,buydet,price,iskj,playmode,playratel)
  values("${data.username}","${data.playgame}","${data.playname}","${data.playdate}",'${data.userinput}',"${data.buytime}",'${data.buydet}',"${data.price}","${data.iskj}","${data.playmode}","${data.playratel}");
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
  values("${data.name}","${data.password}","${data.rigtime}","${data.level}","${data.phone}");
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
  select name,rigtime,level,phone,balance from userinfo where name="${data.name}";
  `;
  connext.query(sql, (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}
//******************************************************* */查询用户名和密码
exports.fuser=function(data,fn){
  console.log(data,"1010");
  
  let connext = mysql.createConnection(config)
  sql = `
  select name,phone from userinfo where name="${data.username}" and password="${data.password}";
  `;
  connext.query(sql, (err, data, fled) => {
    if (err) { throw err }
    fn(data)
    console.log(data,"2020");
    
  })
  connext.end()
}
//-----------------常用操作封装
exports.set=function(sq,fn){
  let connext = mysql.createConnection(config)
  connext.query(sq, (err, data, fled) => {
    if (err) { throw err }
    fn(data)
  })
  connext.end()
}