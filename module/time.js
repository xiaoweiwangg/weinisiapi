exports.time=function(){
  let d = {}
  let date = new Date()
  d.y=date.getFullYear()
  d.o=date.getMonth()+1
  d.d=date.getDate()
  d.h = date.getHours()
  d.date =  (date.getMonth()+1)+""+(date.getDate())+Math.ceil(date.getHours() * 12 + date.getMinutes() / 5)
  d.fdate =  (date.getMonth()+1)+""+(date.getDate())+Math.ceil(date.getHours() * 60 + date.getMinutes() / 1)
  d.qdate =  (date.getMonth()+1)+""+(date.getDate())+Math.ceil(date.getHours() * 120 + date.getMinutes() * 2+ date.getSeconds() / 30)
  d.m = date.getMinutes()
  d.s = date.getSeconds()
  d.datetime=`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}/  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  return d
} 