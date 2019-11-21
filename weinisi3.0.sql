/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50645
Source Host           : localhost:3306
Source Database       : weinisi

Target Server Type    : MYSQL
Target Server Version : 50645
File Encoding         : 65001

Date: 2019-11-21 16:04:26
*/

SET FOREIGN_KEY_CHECKS=0;
CREATE Database if not exists weinisi CHARSET "utf8";
use weinisi
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
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '740632期', '2019-10-31 16:16:20', '3,8,5,7,6,9,10,1,2,4');

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
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '190926059期', '2019-09-26 23:53:31', '58775');

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
INSERT INTO `fc3dkjinfo` VALUES ('fc3d', '2019201', '2019-09-27 00:59:11', '000');

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
INSERT INTO `gassckjinfo` VALUES ('gassc', '92713期', '2019-09-27 01:05:33', '64369');

-- ----------------------------
-- Table structure for gonggao
-- ----------------------------
DROP TABLE IF EXISTS `gonggao`;
CREATE TABLE `gonggao` (
  `id` int(45) NOT NULL AUTO_INCREMENT,
  `cont` varchar(2000) NOT NULL,
  `time` datetime DEFAULT NULL,
  `content` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gonggao
-- ----------------------------
INSERT INTO `gonggao` VALUES ('1', '首充有好礼,大奖中不停', '2019-08-29 19:06:23', '首充有好礼，大奖赢不停，首次充值赠送充值金额的3%，无流水也可提现，仅限首充有效！');
INSERT INTO `gonggao` VALUES ('2', '推荐自己的投注方案', '2019-08-29 19:07:58', '推荐功能即将上线，敬请期待');
INSERT INTO `gonggao` VALUES ('3', '新用户注册立刻赠送', '2019-09-11 12:58:38', '新用户注册，首次充值，立刻获得高达39.9元的体验金，流水累计达200元即可提现。');
INSERT INTO `gonggao` VALUES ('4', '用户入款第二日起', '2019-09-27 00:41:15', '每位会员入款之日第二天起，每天自动派发1.7%的入款利息。永久有效。。。。');
INSERT INTO `gonggao` VALUES ('5', '棋牌游戏正式推出', '2019-09-27 00:43:02', '威尼斯娱乐正式推出棋牌新玩法，开奖速度快，赔率更高，玩法更新颖，愿您玩的开心');

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
-- Table structure for lhkjinfo
-- ----------------------------
DROP TABLE IF EXISTS `lhkjinfo`;
CREATE TABLE `lhkjinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `playname` varchar(45) NOT NULL,
  `playdate` varchar(45) NOT NULL,
  `playtime` datetime DEFAULT NULL,
  `playnum` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5792 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lhkjinfo
-- ----------------------------
INSERT INTO `lhkjinfo` VALUES ('1564', 'lhwar', '10311938期', '2019-10-31 16:08:42', '[{\"num\":4,\"hua\":0,\"type\":0},{\"num\":8,\"hua\":1,\"type\":1}]');


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
INSERT INTO `nnkjinfo` VALUES ('niuniu', '11161272期', '2019-11-16 10:35:42', '[{\"num\":11,\"hua\":0,\"type\":0},{\"num\":2,\"hua\":1,\"type\":0},{\"num\":11,\"hua\":1,\"type\":0},{\"num\":11,\"hua\":2,\"type\":0},{\"num\":2,\"hua\":2,\"type\":0},{\"num\":10,\"hua\":2,\"type\":1},{\"num\":13,\"hua\":1,\"type\":1},{\"num\":3,\"hua\":3,\"type\":1},{\"num\":13,\"hua\":3,\"type\":1},{\"num\":5,\"hua\":2,\"type\":1},{\"num\":1,\"hua\":0,\"type\":2},{\"num\":6,\"hua\":2,\"type\":2},{\"num\":1,\"hua\":1,\"type\":2},{\"num\":5,\"hua\":0,\"type\":2},{\"num\":1,\"hua\":3,\"type\":2},{\"num\":10,\"hua\":0,\"type\":3},{\"num\":8,\"hua\":0,\"type\":3},{\"num\":9,\"hua\":0,\"type\":3},{\"num\":12,\"hua\":0,\"type\":3},{\"num\":8,\"hua\":1,\"type\":3}]');

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
) ENGINE=InnoDB AUTO_INCREMENT=5796 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rbkjinfo
-- ----------------------------
INSERT INTO `rbkjinfo` VALUES ('3228', 'rbwar', '11161272期', '2019-11-16 10:35:42', '[{\"num\":5,\"hua\":0,\"type\":0},{\"num\":8,\"hua\":2,\"type\":0},{\"num\":4,\"hua\":2,\"type\":0},{\"num\":11,\"hua\":0,\"type\":1},{\"num\":13,\"hua\":3,\"type\":1},{\"num\":6,\"hua\":3,\"type\":1}]');

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
  `kjnum` varchar(1000) DEFAULT NULL,
  `price` float(255,2) NOT NULL DEFAULT '0.00',
  `playgame` varchar(255) NOT NULL,
  `playmode` float(255,2) NOT NULL DEFAULT '1.00',
  `playratel` float(255,2) NOT NULL DEFAULT '1.00',
  `jiangjin` float(255,2) DEFAULT '0.00',
  `buyday` int(5) NOT NULL,
  `yingkui` float(255,2) NOT NULL DEFAULT '0.00' COMMENT '盈亏',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=438 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shopcar
-- ----------------------------
INSERT INTO `shopcar` VALUES ('433', 'wangerwei', '一星直选复式', '1121619期', '{\"data\":[[0,1,2,3,4,5,6,7,9],[],[],[],[]]}', '1574302728397', '{\"data\":[[0,1,2,3,4,5,6,7,9],[],[],[],[]]}', '1', '已中奖', '58882', '504.00', 'txffc', '1.00', '28.00', '548.80', '21', '0.00');
INSERT INTO `shopcar` VALUES ('434', 'wangerwei', '一星直选复式', '1121640期', '{\"data\":[[0],[],[],[],[]]}', '1574303987255', '{\"data\":[[0],[],[],[],[]]}', '1', '未中奖', '32388', '1000.00', 'txffc', '1.00', '500.00', '0.00', '21', '0.00');
INSERT INTO `shopcar` VALUES ('435', 'yutiejin', '一星直选复式', '1121644期', '{\"data\":[[0,1,2,4,5,6,7,8,9],[],[],[],[]]}', '1574304224098', '{\"data\":[[0,1,2,4,5,6,7,8,9],[],[],[],[]]}', '1', '已中奖', '91306', '36.00', 'txffc', '1.00', '2.00', '39.20', '21', '0.00');
INSERT INTO `shopcar` VALUES ('436', 'admin', '一星直选复式', '1121811期', '{\"data\":[[0,1,2,4,5,6,7,8,9],[],[],[],[]]}', '1574314216017', '{\"data\":[[0,1,2,4,5,6,7,8,9],[],[],[],[]]}', '1', '已中奖', '54157', '18.00', 'txffc', '1.00', '1.00', '19.60', '21', '0.00');
INSERT INTO `shopcar` VALUES ('437', 'admin', '一星直选复式', '1121882期', '{\"data\":[[0,1,2,3,4,5,6,7,8],[],[],[],[]]}', '1574318501850', '{\"data\":[[0,1,2,3,4,5,6,7,8],[],[],[],[]]}', '1', '已中奖', '82577', '18.00', 'txffc', '1.00', '1.00', '19.60', '21', '0.00');

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
INSERT INTO `tcpl5kjinfo` VALUES ('tcpl5', '201901', '2019-09-27 00:58:30', '00000');

-- ----------------------------
-- Table structure for tixian
-- ----------------------------
DROP TABLE IF EXISTS `tixian`;
CREATE TABLE `tixian` (
  `username` varchar(255) NOT NULL,
  `cashnum` float NOT NULL,
  `time` datetime NOT NULL,
  `card` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tixian
-- ----------------------------
INSERT INTO `tixian` VALUES ('admin', '0', '2019-11-21 10:15:12', '88888888888888888');

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
INSERT INTO `tjssckjinfo` VALUES ('tjssc', '190926042期', '2019-09-27 00:22:11', '43999');

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
INSERT INTO `txffckjinfo` VALUES ('txffc', '92763期', '2019-09-27 01:03:35', '09780');

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
  `img` varchar(255) NOT NULL,
  `tid` varchar(255) DEFAULT NULL,
  `xiaji` varchar(255) DEFAULT NULL,
  `stid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('44', 'admin', 'weinisi125411', '0.00', '2019-11-20 12:43:00', '0', '18888888888', 'weinisi', '125411', '888888888888888888888', '1.jpg', '88888888', 'admin,wangerwei', null);

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
INSERT INTO `wnspk10kjinfo` VALUES ('wnspk10', '92763期', '2019-09-27 01:03:21', '3,8,6,7,10,5,2,4,9,1');

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
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '00001', '2019-09-27 00:23:52', '00000');
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19112116期', '2019-11-21 15:22:11', '83961');

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
INSERT INTO `ynssckjinfo` VALUES ('ynssc', '2019001', '2019-09-27 00:17:47', '00000');
