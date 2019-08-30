create database if not exists weinisi character set "utf8";
use weinisi;

create table if not exists userinfo(
  uid int auto_increment key,
  name varchar(45) not null unique,
  password varchar(300) not null ,
  balance float(45) Default(0.00),
  rigtime datetime,
  level int(10) not null,
  phone varchar(45) not null
) engine=innodb charset=utf8;

create table if not exists playhistory(
  name varchar(45)  not null unique,
  playname varchar(45) not null,
  playdate varchar(45) not null,
  playtime datetime,
  gamecont varchar(5000)
) engine=innodb charset=utf8;

create table if not exists levelchld(
  name varchar(45)  not null unique,
  list varchar(1000)
) engine=innodb charset=utf8;

create table if not exists record(
  name varchar(45)  not null unique,
  history varchar(45)
) engine=innodb charset=utf8; 

create table if not exists gassckjinfo(
  playname varchar(45) not null,
  playdate varchar(45) not null,
  playtime datetime ,
  playnum varchar(45)
)engine=innodb charset=utf8;

create table if not exists xjssckjinfo(
  playname varchar(45) not null,
  playdate varchar(45) not null,
  playtime datetime ,
  playnum varchar(45)
)engine=innodb charset=utf8;

create table if not exists ynssckjinfo(
  playname varchar(45) not null,
  playdate varchar(45) not null,
  playtime datetime ,
  playnum varchar(45)
)engine=innodb charset=utf8;

create table if not exists fc3dkjinfo(
  playname varchar(45) not null,
  playdate varchar(45) not null,
  playtime datetime ,
  playnum varchar(45)
)engine=innodb charset=utf8;

create table if not exists tcpl5kjinfo(
  playname varchar(45) not null,
  playdate varchar(45) not null,
  playtime datetime ,
  playnum varchar(45)
)engine=innodb charset=utf8;

create table if not exists cqssckjinfo(
  playname varchar(45) not null,
  playdate varchar(45) not null,
  playtime datetime ,
  playnum varchar(45)
)engine=innodb charset=utf8;

create table if not exists tjssckjinfo(
  playname varchar(45) not null,
  playdate varchar(45) not null,
  playtime datetime ,
  playnum varchar(45)
)engine=innodb charset=utf8;

create table if not exists bjkcssckjinfo(
  playname varchar(45) not null,
  playdate varchar(45) not null,
  playtime datetime ,
  playnum varchar(45)
)engine=innodb charset=utf8;

create table if not exists gonggao(
  id int(45) auto_increment key,
  cont varchar(2000) not null,
  time datetime
)engine=innodb charset=utf8;

create table if not exists shopcar(
  id int(45) auto_increment key,
  username varchar(255) not null,
  playgame varchar(255) not null,
  playname varchar(255) not null,
  playdate varchar(255) not null,
  userinput varchar(255) not null,
  buytime datetime,
  buydet text(500000) not null,
  price float(255) Default(0.00),
  iskj tinyint(1) not null
)engine=innodb charset=utf8;

create table if not exists active(
  id int(45) auto_increment key,
  title varchar(2000) not null,
  time datetime,
  detail text(10000) 
)engine=innodb charset=utf8;

