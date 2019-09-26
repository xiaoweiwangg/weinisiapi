/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50645
Source Host           : localhost:3306
Source Database       : weinisi

Target Server Type    : MYSQL
Target Server Version : 50645
File Encoding         : 65001

Date: 2019-09-26 23:49:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for active
-- ----------------------------
DROP TABLE IF EXISTS `active`;
CREATE TABLE `active` (
  `id` int(45) NOT NULL AUTO_INCREMENT,
  `title` varchar(2000) NOT NULL,
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

-- ----------------------------
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

-- ----------------------------
-- Records of gassckjinfo
-- ----------------------------

-- ----------------------------
-- Table structure for gonggao
-- ----------------------------
DROP TABLE IF EXISTS `gonggao`;
CREATE TABLE `gonggao` (
  `id` int(45) NOT NULL AUTO_INCREMENT,
  `cont` varchar(2000) NOT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gonggao
-- ----------------------------
INSERT INTO `gonggao` VALUES ('1', '首充有好礼,大奖中不停...', '2019-08-29 19:06:23');
INSERT INTO `gonggao` VALUES ('2', '推荐自己的投注方案,照样赚不停', '2019-08-29 19:07:58');
INSERT INTO `gonggao` VALUES ('3', '注册就送免费体验金，流水两倍可体现', '2019-09-11 12:58:38');

-- ----------------------------
-- Table structure for jjinfo
-- ----------------------------
DROP TABLE IF EXISTS `jjinfo`;
CREATE TABLE `jjinfo` (
  `name` varchar(255) NOT NULL,
  `yxzhix` decimal(20,2) DEFAULT '19.60',
  `exzhx` decimal(20,2) DEFAULT '196.00',
  `exzx` decimal(20,2) DEFAULT '98.00',
  `sxzhx` decimal(20,2) DEFAULT '1960.00',
  `sxzxz6` decimal(20,2) DEFAULT '326.00',
  `sxzxz3` decimal(20,2) DEFAULT '653.00',
  `sx1mbdw` decimal(20,2) DEFAULT '7.23',
  `sx2mbdw` decimal(20,2) DEFAULT '36.29',
  `sixzhx` decimal(20,2) DEFAULT '19600.00',
  `six2mbdw` decimal(20,2) DEFAULT '20.12',
  `wxzhx` decimal(20,2) DEFAULT '196000.00',
  `wx1mbdw` decimal(20,2) DEFAULT '4.78',
  `wx2mbdw` decimal(20,2) DEFAULT '13.36',
  `wx3mbdw` decimal(20,2) DEFAULT '45.05',
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
INSERT INTO `jjinfo` VALUES ('fc3d', '17.60', '176.00', '88.00', '1760.00', '326.00', '653.00', '7.23', '36.29', '19600.00', '20.12', '196000.00', '4.78', '13.36', '45.05', '5.69');
INSERT INTO `jjinfo` VALUES ('tcpl5', '19.60', '196.00', '98.00', '1960.00', '326.00', '653.00', '7.23', '36.29', '19600.00', '20.12', '196000.00', '4.78', '13.36', '45.05', '5.69');
INSERT INTO `jjinfo` VALUES ('txffc', '19.60', '196.00', '98.00', '1960.00', '326.00', '653.00', '7.23', '36.29', '19600.00', '20.12', '196000.00', '4.78', '13.36', '45.05', '5.69');
INSERT INTO `jjinfo` VALUES ('bjkcssc', '19.60', '196.00', '98.00', '1960.00', '326.00', '653.00', '7.23', '36.29', '19600.00', '20.12', '196000.00', '4.78', '13.36', '45.05', '5.69');
INSERT INTO `jjinfo` VALUES ('wnspk10', '19.60', '196.00', '98.00', '1960.00', '326.00', '653.00', '7.23', '36.29', '19600.00', '20.12', '196000.00', '4.78', '13.36', '45.05', '5.69');

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
-- Table structure for nnkjinfo
-- ----------------------------
DROP TABLE IF EXISTS `nnkjinfo`;
CREATE TABLE `nnkjinfo` (
  `playname` varchar(45) NOT NULL,
  `playdate` varchar(45) NOT NULL,
  `playtime` datetime DEFAULT NULL,
  `playnum` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nnkjinfo
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
-- Table structure for rbkjinfo
-- ----------------------------
DROP TABLE IF EXISTS `rbkjinfo`;
CREATE TABLE `rbkjinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `playname` varchar(45) NOT NULL,
  `playdate` varchar(45) NOT NULL,
  `playtime` datetime DEFAULT NULL,
  `playnum` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=772 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rbkjinfo
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
  `username` varchar(255) NOT NULL,
  `playname` varchar(2000) NOT NULL,
  `playdate` varchar(255) DEFAULT NULL,
  `userinput` varchar(10000) DEFAULT NULL,
  `buytime` varchar(255) NOT NULL,
  `buydet` mediumtext NOT NULL,
  `iskj` tinyint(1) NOT NULL DEFAULT '0',
  `iszk` varchar(25) DEFAULT NULL,
  `kjnum` varchar(25) DEFAULT NULL,
  `price` float(255,2) NOT NULL DEFAULT '0.00',
  `playgame` varchar(255) NOT NULL,
  `playmode` float(255,2) NOT NULL DEFAULT '1.00',
  `playratel` float(255,2) NOT NULL DEFAULT '1.00',
  `jiangjin` float(255,2) DEFAULT '0.00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=409 DEFAULT CHARSET=utf8;

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

-- ----------------------------
-- Table structure for txffckjinfo
-- ----------------------------
DROP TABLE IF EXISTS `txffckjinfo`;
CREATE TABLE `txffckjinfo` (
  `playname` varchar(45) NOT NULL,
  `playdate` varchar(45) NOT NULL,
  `playtime` datetime DEFAULT NULL,
  `playnum` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of txffckjinfo
-- ----------------------------

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `password` varchar(300) NOT NULL,
  `balance` decimal(65,2) DEFAULT '39.90',
  `rigtime` datetime DEFAULT NULL,
  `level` int(10) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `realname` varchar(255) DEFAULT NULL,
  `pwd` varchar(255) DEFAULT NULL,
  `card` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('20', 'yoshi123456', '123456', '39.90', '2019-09-11 18:01:24', '1', '13800138000', null, null, null);
INSERT INTO `userinfo` VALUES ('21', 'yutiejin', '125411', '18309.70', '2019-09-11 18:20:50', '1', '13752367660', null, null, null);
INSERT INTO `userinfo` VALUES ('22', 'lihaimei', '123456', '0.01', '2019-09-11 18:51:09', '1', '13822299421', '李海梅', '123456', '6228480028617747572');
INSERT INTO `userinfo` VALUES ('23', 'yuningning', '123456', '6434.80', '2019-09-11 19:38:51', '1', '18002189898', null, null, null);

-- ----------------------------
-- Table structure for wnspk10kjinfo
-- ----------------------------
DROP TABLE IF EXISTS `wnspk10kjinfo`;
CREATE TABLE `wnspk10kjinfo` (
  `playname` varchar(45) NOT NULL,
  `playdate` varchar(45) NOT NULL,
  `playtime` datetime DEFAULT NULL,
  `playnum` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wnspk10kjinfo
-- ----------------------------

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
