/*
Navicat MySQL Data Transfer

Source Server         : weinisi
Source Server Version : 80017
Source Host           : localhost:3306
Source Database       : weinisi

Target Server Type    : MYSQL
Target Server Version : 80017
File Encoding         : 65001

Date: 2019-09-02 21:32:23
*/

SET FOREIGN_KEY_CHECKS=0;
create database if not exists weinisi character set "utf8";
use weinisi;
-- ----------------------------
-- Table structure for active
-- ----------------------------
DROP TABLE IF EXISTS `active`;
CREATE TABLE `active` (
  `id` int(45) NOT NULL AUTO_INCREMENT,
  `title` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` datetime DEFAULT NULL,
  `detail` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of active
-- ----------------------------
INSERT INTO `active` VALUES ('1', '晋级奖励', '2019-08-29 19:34:49', '每晋升一个等级，都可以获得晋级奖励。');
INSERT INTO `active` VALUES ('2', '每日嘉奖', '2019-08-20 19:35:41', '每日加奖在每日凌晨00:20后开放领取');
INSERT INTO `active` VALUES ('3', '新会员/满月彩金', '2019-08-29 19:36:10', '—豪礼送不停·注册即送888元');
INSERT INTO `active` VALUES ('4', '专职代理日进万金', '2019-08-28 19:36:40', '做专职代理日盈万金\r\n');

-- ----------------------------
-- Table structure for bjkcssckjinfo
-- ----------------------------
DROP TABLE IF EXISTS `bjkcssckjinfo`;
CREATE TABLE `bjkcssckjinfo` (
  `playname` varchar(45) NOT NULL,
  `playdate` varchar(45) NOT NULL,
  `playtime` datetime DEFAULT NULL,
  `playnum` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `wnspk10kjinfo`;
CREATE TABLE `wnspk10kjinfo` (
  `playname` varchar(45) NOT NULL,
  `playdate` varchar(45) NOT NULL,
  `playtime` datetime DEFAULT NULL,
  `playnum` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
----------------------------
-- Records of bjkcssckjinfo
-- ----------------------------

-- ----------------------------
-- Table structure for cqssckjinfo
-- ----------------------------
DROP TABLE IF EXISTS `cqssckjinfo`;
CREATE TABLE `cqssckjinfo` (
  `playname` varchar(45) NOT NULL,
  `playdate` varchar(45) NOT NULL,
  `playtime` datetime DEFAULT NULL,
  `playnum` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cqssckjinfo
-- ----------------------------
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '190901054期', '2019-09-01 22:13:31', '93364');

-- ----------------------------
-- Table structure for fc3dkjinfo
-- ----------------------------
DROP TABLE IF EXISTS `fc3dkjinfo`;
CREATE TABLE `fc3dkjinfo` (
  `playname` varchar(45) NOT NULL,
  `playdate` varchar(45) NOT NULL,
  `playtime` datetime DEFAULT NULL,
  `playnum` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fc3dkjinfo
-- ----------------------------
INSERT INTO `fc3dkjinfo` VALUES ('fc3d', '2019234期', '2019-08-29 21:51:00', '340');

-- ----------------------------
-- Table structure for gassckjinfo
-- ----------------------------
DROP TABLE IF EXISTS `gassckjinfo`;
CREATE TABLE `gassckjinfo` (
  `playname` varchar(45) NOT NULL,
  `playdate` varchar(45) NOT NULL,
  `playtime` datetime DEFAULT NULL,
  `playnum` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
DROP TABLE IF EXISTS `txffckjinfo`;
CREATE TABLE `txffckjinfo` (
  `playname` varchar(45) NOT NULL,
  `playdate` varchar(45) NOT NULL,
  `playtime` datetime DEFAULT NULL,
  `playnum` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
DROP TABLE IF EXISTS `nnkjinfo`;
CREATE TABLE `nnkjinfo` (
  `playname` varchar(45) NOT NULL,
  `playdate` varchar(45) NOT NULL,
  `playtime` datetime DEFAULT NULL,
  `playnum` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of gassckjinfo
-- ----------------------------
INSERT INTO `gassckjinfo` VALUES ('gassc', '91267期', '2019-09-01 22:15:09', '39284');
INSERT INTO `gassckjinfo` VALUES ('gassc', '91268期', '2019-09-01 22:20:36', '39582');

-- ----------------------------
-- Table structure for gonggao
-- ----------------------------
DROP TABLE IF EXISTS `gonggao`;
CREATE TABLE `gonggao` (
  `id` int(45) NOT NULL AUTO_INCREMENT,
  `cont` varchar(2000) NOT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gonggao
-- ----------------------------
INSERT INTO `gonggao` VALUES ('1', '首充有好礼,大奖中不停...', '2019-08-29 19:06:23');
INSERT INTO `gonggao` VALUES ('2', '推荐自己的投注方案,照样赚不停', '2019-08-29 19:07:58');

-- ----------------------------
-- Table structure for jjinfo
-- ----------------------------
DROP TABLE IF EXISTS `jjinfo`;
CREATE TABLE `jjinfo` (
  `name` varchar(255) NOT NULL,
  `yxzhix` decimal(20,2) DEFAULT "19.60",
  `exzhx` decimal(20,2) DEFAULT "196.00",
  `exzx` decimal(20,2) DEFAULT "98.00",
  `sxzhx` decimal(20,2) DEFAULT "1960.00",
  `sxzxz6` decimal(20,2) DEFAULT "326.00",
  `sxzxz3` decimal(20,2) DEFAULT "653.00",
  `sx1mbdw` decimal(20,2) DEFAULT "7.23",
  `sx2mbdw` decimal(20,2) DEFAULT "36.29",
  `sixzhx` decimal(20,2) DEFAULT "19600.00",
  `six2mbdw` decimal(20,2) DEFAULT "20.12",
  `wxzhx` decimal(20,2) DEFAULT "196000.00",
  `wx1mbdw` decimal(20,2) DEFAULT "4.78",
  `wx2mbdw` decimal(20,2) DEFAULT "13.36",
  `wx3mbdw` decimal(20,2) DEFAULT "45.05",
  `six1mbdw` decimal(20,2) DEFAULT '5.69'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jjinfo
-- ----------------------------
INSERT INTO `jjinfo` VALUES ('gassc', '19.60', '196.00', '98.00', '1960.00', '326.00', '653.00', '7.23', '36.29', '19600.00', '20.12', '196000.00', '4.78', '13.36', '45.05', '5.69');
INSERT INTO `jjinfo` VALUES ('xjssc', '19.60', '196.00', '98.00', '1960.00', '326.00', '653.00', '7.23', '36.29', '19600.00', '20.12', '196000.00', '4.78', '13.36', '45.05', '5.69');
INSERT INTO `jjinfo` VALUES ('ynssc', '19.60', '196.00', '98.00', '1960.00', '326.00', '653.00', '7.23', '36.29', '19600.00', '20.12', '196000.00', '4.78', '13.36', '45.05', '5.69');
INSERT INTO `jjinfo` VALUES ('cqssc', '19.60', '196.00', '98.00', '1960.00', '326.00', '653.00', '7.23', '36.29', '19600.00', '20.12', '196000.00', '4.78', '13.36', '45.05', '5.69');
INSERT INTO `jjinfo` VALUES ('tjssc', '19.60', '196.00', '98.00', '1960.00', '326.00', '653.00', '7.23', '36.29', '19600.00', '20.12', '196000.00', '4.78', '13.36', '45.05', '5.69');
INSERT INTO `jjinfo` VALUES ('fc3d', '19.60', '196.00', '98.00', '1960.00', '326.00', '653.00', '7.23', '36.29', '19600.00', '20.12', '196000.00', '4.78', '13.36', '45.05', '5.69');
INSERT INTO `jjinfo` VALUES ('tcpl5', '19.60', '196.00', '98.00', '1960.00', '326.00', '653.00', '7.23', '36.29', '19600.00', '20.12', '196000.00', '4.78', '13.36', '45.05', '5.69');

-- ----------------------------
-- Table structure for levelchld
-- ----------------------------
DROP TABLE IF EXISTS `levelchld`;
CREATE TABLE `levelchld` (
  `name` varchar(45) NOT NULL,
  `list` varchar(1000) DEFAULT NULL,
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of levelchld
-- ----------------------------

-- ----------------------------
-- Table structure for playhistory
-- ----------------------------
DROP TABLE IF EXISTS `playhistory`;
CREATE TABLE `playhistory` (
  `name` varchar(45) NOT NULL,
  `playname` varchar(45) NOT NULL,
  `playdate` varchar(45) NOT NULL,
  `playtime` datetime DEFAULT NULL,
  `gamecont` varchar(5000) DEFAULT NULL,
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of playhistory
-- ----------------------------

-- ----------------------------
-- Table structure for record
-- ----------------------------
DROP TABLE IF EXISTS `record`;
CREATE TABLE `record` (
  `name` varchar(45) NOT NULL,
  `history` varchar(45) DEFAULT NULL,
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of record
-- ----------------------------

-- ----------------------------
-- Table structure for shopcar
-- ----------------------------
DROP TABLE IF EXISTS `shopcar`;
CREATE TABLE `shopcar` (
  `id` int(45) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `playname` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `playdate` varchar(255) DEFAULT NULL,
  `userinput` varchar(10000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `buytime` varchar(255) NOT NULL,
  `buydet` mediumtext NOT NULL,
  `iskj` tinyint(1) NOT NULL DEFAULT '0',
  `iszk` varchar(25),
  `kjnum` varchar(2500),
  `price` float(255,2) NOT NULL DEFAULT '0.00',
  `playgame` varchar(255) NOT NULL,
  `playmode` float(255,2) NOT NULL DEFAULT '1.00',
  `playratel` float(255,2) NOT NULL DEFAULT '1',
  `jiangjin` float(255,2) DEFAULT '0.00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=272 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shopcar
-- ----------------------------

-- ----------------------------
-- Table structure for tcpl5kjinfo
-- ----------------------------
DROP TABLE IF EXISTS `tcpl5kjinfo`;
CREATE TABLE `tcpl5kjinfo` (
  `playname` varchar(45) NOT NULL,
  `playdate` varchar(45) NOT NULL,
  `playtime` datetime DEFAULT NULL,
  `playnum` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tcpl5kjinfo
-- ----------------------------
INSERT INTO `tcpl5kjinfo` VALUES ('tcpl5', '2019234 ', '2019-08-29 22:50:58', '24560');

-- ----------------------------
-- Table structure for tjssckjinfo
-- ----------------------------
DROP TABLE IF EXISTS `tjssckjinfo`;
CREATE TABLE `tjssckjinfo` (
  `playname` varchar(45) NOT NULL,
  `playdate` varchar(45) NOT NULL,
  `playtime` datetime DEFAULT NULL,
  `playnum` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tjssckjinfo
-- ----------------------------
INSERT INTO `tjssckjinfo` VALUES ('tjssc', '190901040期', '2019-09-01 22:22:11', '24708');

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `password` varchar(300) NOT NULL,
  `balance` decimal(65,2) DEFAULT '39.00',
  `rigtime` datetime DEFAULT NULL,
  `level` int(10) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `realname` varchar(255),
  `pwd` varchar(255) ,
  `card` varchar(255) ,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('1', 'wangerwei', '123', '10158.00', '2019-08-20 19:50:44', '1', '18322299421');
INSERT INTO `userinfo` VALUES ('5', 'wangsanwei', '123456', '0.00', '2019-08-29 19:10:31', '1', '18322299441');
INSERT INTO `userinfo` VALUES ('6', 'yutiejin', '123', '0.00', '2019-08-29 19:55:44', '1', '18322299421');
INSERT INTO `userinfo` VALUES ('10', 'wangdawei', '123', '999999919.00', '2019-08-29 22:20:50', '1', '18322299421');

-- ----------------------------
-- Table structure for xjssckjinfo
-- ----------------------------
DROP TABLE IF EXISTS `xjssckjinfo`;
CREATE TABLE `xjssckjinfo` (
  `playname` varchar(45) NOT NULL,
  `playdate` varchar(45) NOT NULL,
  `playtime` datetime DEFAULT NULL,
  `playnum` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xjssckjinfo
-- ----------------------------
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19090137期', '2019-09-01 22:22:11', '80944');

-- ----------------------------
-- Table structure for ynssckjinfo
-- ----------------------------
DROP TABLE IF EXISTS `ynssckjinfo`;
CREATE TABLE `ynssckjinfo` (
  `playname` varchar(45) NOT NULL,
  `playdate` varchar(45) NOT NULL,
  `playtime` datetime DEFAULT NULL,
  `playnum` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ynssckjinfo
-- ----------------------------
INSERT INTO `ynssckjinfo` VALUES ('ynssc', '19090136期', '2019-09-01 22:22:13', '36129');
