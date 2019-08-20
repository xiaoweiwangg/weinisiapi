/*
Navicat MySQL Data Transfer

Source Server         : weinisi
Source Server Version : 80017
Source Host           : localhost:3306
Source Database       : weinisi

Target Server Type    : MYSQL
Target Server Version : 80017
File Encoding         : 65001

Date: 2019-08-20 13:33:34
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for active
-- ----------------------------
DROP TABLE IF EXISTS `active`;
CREATE TABLE `active` (
  `id` int(45) NOT NULL AUTO_INCREMENT,
  `cont` varchar(2000) NOT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of active
-- ----------------------------

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
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '820022期', '2019-08-20 11:31:00', '84611');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '820023期', '2019-08-20 11:52:00', '33551');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '820024期', '2019-08-20 12:12:00', '75230');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '820025期', '2019-08-20 12:31:00', '09515');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '820026期', '2019-08-20 12:52:00', '44551');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '820027期', '2019-08-20 13:13:00', '96527');

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
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820138期', '2019-08-20 11:30:47', '52579');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820139期', '2019-08-20 11:35:50', '08882');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820140期', '2019-08-20 11:40:01', '08874');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820141期', '2019-08-20 11:45:26', '64697');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820142期', '2019-08-20 11:50:55', '53703');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820143期', '2019-08-20 11:55:04', '10633');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820144期', '2019-08-20 12:00:41', '28293');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820145期', '2019-08-20 12:05:02', '57349');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820146期', '2019-08-20 12:10:16', '68705');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820147期', '2019-08-20 12:15:53', '14196');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820148期', '2019-08-20 12:20:18', '65765');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820149期', '2019-08-20 12:25:13', '97119');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820150期', '2019-08-20 12:30:16', '62671');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820151期', '2019-08-20 12:35:53', '77646');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820152期', '2019-08-20 12:40:34', '93182');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820153期', '2019-08-20 12:45:44', '67113');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820154期', '2019-08-20 12:50:15', '39099');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820155期', '2019-08-20 12:55:51', '41614');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820156期', '2019-08-20 13:00:06', '60530');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820157期', '2019-08-20 13:05:18', '24740');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820158期', '2019-08-20 13:10:31', '34365');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820159期', '2019-08-20 13:15:45', '88596');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820160期', '2019-08-20 13:20:23', '93884');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820161期', '2019-08-20 13:25:53', '73036');
INSERT INTO `gassckjinfo` VALUES ('gassc', '0820162期', '2019-08-20 13:30:10', '05273');

-- ----------------------------
-- Table structure for gonggao
-- ----------------------------
DROP TABLE IF EXISTS `gonggao`;
CREATE TABLE `gonggao` (
  `id` int(45) NOT NULL AUTO_INCREMENT,
  `cont` varchar(2000) NOT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gonggao
-- ----------------------------
INSERT INTO `gonggao` VALUES ('1', 'helo weinisi', '2019-08-20 11:44:50');

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
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `password` varchar(300) NOT NULL,
  `balance` double DEFAULT (0.00),
  `rigtime` datetime DEFAULT NULL,
  `level` int(10) NOT NULL,
  `phone` varchar(45) NOT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('8', 'wangerwei', '123', '0', '2019-08-20 12:38:26', '1', '18322299421');
INSERT INTO `userinfo` VALUES ('9', 'wangdawei', '123', '0', '2019-08-20 12:40:37', '1', '123');
INSERT INTO `userinfo` VALUES ('10', 'lihaimei', '123', '0', '2019-08-20 12:42:06', '1', 'dfsd');
