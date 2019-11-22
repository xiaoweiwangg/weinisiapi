/*
 Navicat MySQL Data Transfer

 Source Server         : 威尼斯
 Source Server Type    : MySQL
 Source Server Version : 80017
 Source Host           : localhost:3306
 Source Schema         : weinisi

 Target Server Type    : MySQL
 Target Server Version : 80017
 File Encoding         : 65001

 Date: 22/11/2019 13:58:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
BEGIN;
INSERT INTO `active` VALUES (1, '晋级奖励', '2019-08-29 19:34:49', '每晋升一个等级，都可以获得晋级奖励。');
INSERT INTO `active` VALUES (2, '每日嘉奖', '2019-08-20 19:35:41', '每日加奖在每日凌晨00:20后开放领取');
INSERT INTO `active` VALUES (3, '新会员/满月彩金', '2019-08-29 19:36:10', '—豪礼送不停·注册即送888元');
INSERT INTO `active` VALUES (4, '专职代理日进万金', '2019-08-28 19:36:40', '做专职代理日盈万金\r\n');
COMMIT;

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
BEGIN;
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '740632期', '2019-10-31 16:16:20', '3,8,5,7,6,9,10,1,2,4');
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '741569期', '2019-11-21 20:36:20', '7,2,3,9,8,4,5,6,10,1');
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '741572期', '2019-11-21 21:36:20', '2,5,6,3,9,8,7,10,4,1');
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '741573期', '2019-11-21 21:56:21', '5,2,8,3,1,9,7,4,6,10');
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '741579期', '2019-11-22 08:56:21', '9,7,1,2,3,10,4,8,6,5');
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '741579期', '2019-11-22 09:16:21', '9,7,1,2,3,10,4,8,6,5');
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '741580期', '2019-11-22 09:36:30', '8,4,1,10,9,5,7,6,3,2');
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '741581期', '2019-11-22 09:56:21', '1,2,5,6,4,3,9,8,10,7');
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '741582期', '2019-11-22 10:16:20', '4,7,2,6,8,5,3,9,10,1');
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '741583期', '2019-11-22 10:36:20', '3,7,10,4,9,1,8,6,2,5');
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '741584期', '2019-11-22 10:56:20', '7,3,1,8,6,10,5,9,2,4');
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '741585期', '2019-11-22 11:16:20', '9,8,4,1,7,6,10,3,2,5');
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '741586期', '2019-11-22 11:36:20', '1,6,2,4,10,8,7,5,3,9');
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '741587期', '2019-11-22 11:56:20', '4,7,3,9,8,1,6,5,2,10');
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '741590期', '2019-11-22 12:56:20', '5,9,10,3,8,2,7,6,1,4');
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '741591期', '2019-11-22 13:16:21', '4,9,10,3,8,5,2,1,6,7');
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '741592期', '2019-11-22 13:36:21', '4,7,3,6,2,9,1,5,10,8');
INSERT INTO `bjkcssckjinfo` VALUES ('bjkcssc', '741593期', '2019-11-22 13:56:21', '4,6,1,5,7,10,8,2,3,9');
COMMIT;

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
BEGIN;
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '190926059期', '2019-09-26 23:53:31', '58775');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '191121049期', '2019-11-21 20:33:50', '33120');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '191121051期', '2019-11-21 21:13:31', '88641');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '191121052期', '2019-11-21 21:33:31', '62402');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '191121053期', '2019-11-21 21:53:31', '01606');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '191122014期', '2019-11-22 09:13:30', '48923');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '191122016期', '2019-11-22 09:33:30', '54521');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '191122017期', '2019-11-22 09:53:31', '21834');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '191122018期', '2019-11-22 10:13:30', '24465');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '191122019期', '2019-11-22 10:33:30', '90314');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '191122020期', '2019-11-22 10:53:30', '82375');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '191122021期', '2019-11-22 11:13:30', '40936');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '191122022期', '2019-11-22 11:33:31', '28843');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '191122023期', '2019-11-22 11:53:30', '50035');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '191122026期', '2019-11-22 12:53:30', '06491');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '191122027期', '2019-11-22 13:13:31', '26939');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '191122028期', '2019-11-22 13:33:30', '29375');
INSERT INTO `cqssckjinfo` VALUES ('cqssc', '191122029期', '2019-11-22 13:53:30', '47931');
COMMIT;

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
BEGIN;
INSERT INTO `fc3dkjinfo` VALUES ('fc3d', '2019201', '2019-09-27 00:59:11', '000');
INSERT INTO `fc3dkjinfo` VALUES ('fc3d', '2019311期', '2019-11-21 21:30:30', '248');
COMMIT;

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
BEGIN;
INSERT INTO `gassckjinfo` VALUES ('gassc', '92713期', '2019-09-27 01:05:33', '64369');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1121247期', '2019-11-21 20:35:39', '96374');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1121248期', '2019-11-21 20:40:23', '40025');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1121249期', '2019-11-21 20:45:38', '98943');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1121250期', '2019-11-21 20:50:14', '38649');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1121253期', '2019-11-21 21:05:43', '59585');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1121254期', '2019-11-21 21:10:27', '87390');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1121255期', '2019-11-21 21:15:33', '55175');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1121256期', '2019-11-21 21:20:41', '47919');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1121257期', '2019-11-21 21:25:25', '19323');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1121258期', '2019-11-21 21:30:15', '00989');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1121259期', '2019-11-21 21:35:47', '47841');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1121260期', '2019-11-21 21:40:49', '54312');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1121261期', '2019-11-21 21:45:30', '30818');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1121262期', '2019-11-21 21:50:04', '27346');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1121263期', '2019-11-21 21:55:16', '84926');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122108期', '2019-11-22 09:00:41', '59020');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122109期', '2019-11-22 09:05:26', '20277');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122110期', '2019-11-22 09:10:33', '38516');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122111期', '2019-11-22 09:15:48', '55028');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122112期', '2019-11-22 09:20:44', '57495');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122113期', '2019-11-22 09:25:40', '84193');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122114期', '2019-11-22 09:30:24', '56674');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122115期', '2019-11-22 09:35:10', '48245');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122116期', '2019-11-22 09:40:02', '63186');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122117期', '2019-11-22 09:45:36', '58262');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122118期', '2019-11-22 09:50:55', '41497');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122119期', '2019-11-22 09:55:25', '10931');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122120期', '2019-11-22 10:00:22', '66682');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122121期', '2019-11-22 10:05:59', '30971');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122122期', '2019-11-22 10:10:09', '55940');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122123期', '2019-11-22 10:15:58', '97522');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122124期', '2019-11-22 10:20:24', '11395');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122125期', '2019-11-22 10:25:40', '22876');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122126期', '2019-11-22 10:30:55', '34625');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122127期', '2019-11-22 10:35:28', '64553');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122128期', '2019-11-22 10:40:41', '49089');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122129期', '2019-11-22 10:45:11', '10135');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122130期', '2019-11-22 10:50:49', '08124');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122131期', '2019-11-22 10:55:26', '65509');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122132期', '2019-11-22 11:00:14', '34937');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122133期', '2019-11-22 11:05:07', '59713');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122134期', '2019-11-22 11:10:42', '78650');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122135期', '2019-11-22 11:15:22', '06778');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122136期', '2019-11-22 11:20:48', '06948');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122137期', '2019-11-22 11:25:19', '22421');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122138期', '2019-11-22 11:30:59', '16901');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122139期', '2019-11-22 11:35:58', '65381');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122140期', '2019-11-22 11:40:48', '98388');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122141期', '2019-11-22 11:45:52', '61266');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122142期', '2019-11-22 11:50:57', '87650');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122144期', '2019-11-22 12:00:14', '93011');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122154期', '2019-11-22 12:50:35', '89796');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122155期', '2019-11-22 12:55:36', '83140');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122156期', '2019-11-22 13:00:49', '04856');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122157期', '2019-11-22 13:05:23', '12981');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122158期', '2019-11-22 13:10:16', '12284');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122159期', '2019-11-22 13:15:04', '37530');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122160期', '2019-11-22 13:20:25', '73805');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122161期', '2019-11-22 13:25:28', '30910');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122162期', '2019-11-22 13:30:19', '81438');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122163期', '2019-11-22 13:35:59', '83268');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122164期', '2019-11-22 13:40:51', '39168');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122165期', '2019-11-22 13:45:25', '89060');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122166期', '2019-11-22 13:50:11', '19622');
INSERT INTO `gassckjinfo` VALUES ('gassc', '1122167期', '2019-11-22 13:55:13', '08162');
COMMIT;

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
BEGIN;
INSERT INTO `gonggao` VALUES (1, '首充有好礼,大奖中不停', '2019-08-29 19:06:23', '首充有好礼，大奖赢不停，首次充值赠送充值金额的3%，无流水也可提现，仅限首充有效！');
INSERT INTO `gonggao` VALUES (2, '推荐自己的投注方案', '2019-08-29 19:07:58', '推荐功能即将上线，敬请期待');
INSERT INTO `gonggao` VALUES (3, '新用户注册立刻赠送', '2019-09-11 12:58:38', '新用户注册，首次充值，立刻获得高达39.9元的体验金，流水累计达200元即可提现。');
INSERT INTO `gonggao` VALUES (4, '用户入款第二日起', '2019-09-27 00:41:15', '每位会员入款之日第二天起，每天自动派发1.7%的入款利息。永久有效。。。。');
INSERT INTO `gonggao` VALUES (5, '棋牌游戏正式推出', '2019-09-27 00:43:02', '威尼斯娱乐正式推出棋牌新玩法，开奖速度快，赔率更高，玩法更新颖，愿您玩的开心');
COMMIT;

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
BEGIN;
INSERT INTO `jjinfo` VALUES ('gassc', 19.60, 196.00, 98.00, 1960.00, 326.00, 653.00, 7.23, 36.29, 19600.00, 20.12, 196000.00, 4.78, 13.36, 45.05, 5.69);
INSERT INTO `jjinfo` VALUES ('xjssc', 19.60, 196.00, 98.00, 1960.00, 326.00, 653.00, 7.23, 36.29, 19600.00, 20.12, 196000.00, 4.78, 13.36, 45.05, 5.69);
INSERT INTO `jjinfo` VALUES ('ynssc', 19.60, 196.00, 98.00, 1960.00, 326.00, 653.00, 7.23, 36.29, 19600.00, 20.12, 196000.00, 4.78, 13.36, 45.05, 5.69);
INSERT INTO `jjinfo` VALUES ('cqssc', 19.60, 196.00, 98.00, 1960.00, 326.00, 653.00, 7.23, 36.29, 19600.00, 20.12, 196000.00, 4.78, 13.36, 45.05, 5.69);
INSERT INTO `jjinfo` VALUES ('tjssc', 19.60, 196.00, 98.00, 1960.00, 326.00, 653.00, 7.23, 36.29, 19600.00, 20.12, 196000.00, 4.78, 13.36, 45.05, 5.69);
INSERT INTO `jjinfo` VALUES ('fc3d', 17.60, 176.00, 88.00, 1760.00, 326.00, 653.00, 7.23, 36.29, 19600.00, 20.12, 196000.00, 4.78, 13.36, 45.05, 5.69);
INSERT INTO `jjinfo` VALUES ('tcpl5', 19.60, 196.00, 98.00, 1960.00, 326.00, 653.00, 7.23, 36.29, 19600.00, 20.12, 196000.00, 4.78, 13.36, 45.05, 5.69);
INSERT INTO `jjinfo` VALUES ('txffc', 19.60, 196.00, 98.00, 1960.00, 326.00, 653.00, 7.23, 36.29, 19600.00, 20.12, 196000.00, 4.78, 13.36, 45.05, 5.69);
INSERT INTO `jjinfo` VALUES ('bjkcssc', 19.60, 196.00, 98.00, 1960.00, 326.00, 653.00, 7.23, 36.29, 19600.00, 20.12, 196000.00, 4.78, 13.36, 45.05, 5.69);
INSERT INTO `jjinfo` VALUES ('wnspk10', 19.60, 196.00, 98.00, 1960.00, 326.00, 653.00, 7.23, 36.29, 19600.00, 20.12, 196000.00, 4.78, 13.36, 45.05, 5.69);
COMMIT;

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
) ENGINE=InnoDB AUTO_INCREMENT=6472 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lhkjinfo
-- ----------------------------
BEGIN;
INSERT INTO `lhkjinfo` VALUES (1564, 'lhwar', '10311938期', '2019-10-31 16:08:42', '[{\"num\":4,\"hua\":0,\"type\":0},{\"num\":8,\"hua\":1,\"type\":1}]');

COMMIT;

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
BEGIN;
INSERT INTO `nnkjinfo` VALUES ('niuniu', '11161272期', '2019-11-16 10:35:42', '[{\"num\":11,\"hua\":0,\"type\":0},{\"num\":2,\"hua\":1,\"type\":0},{\"num\":11,\"hua\":1,\"type\":0},{\"num\":11,\"hua\":2,\"type\":0},{\"num\":2,\"hua\":2,\"type\":0},{\"num\":10,\"hua\":2,\"type\":1},{\"num\":13,\"hua\":1,\"type\":1},{\"num\":3,\"hua\":3,\"type\":1},{\"num\":13,\"hua\":3,\"type\":1},{\"num\":5,\"hua\":2,\"type\":1},{\"num\":1,\"hua\":0,\"type\":2},{\"num\":6,\"hua\":2,\"type\":2},{\"num\":1,\"hua\":1,\"type\":2},{\"num\":5,\"hua\":0,\"type\":2},{\"num\":1,\"hua\":3,\"type\":2},{\"num\":10,\"hua\":0,\"type\":3},{\"num\":8,\"hua\":0,\"type\":3},{\"num\":9,\"hua\":0,\"type\":3},{\"num\":12,\"hua\":0,\"type\":3},{\"num\":8,\"hua\":1,\"type\":3}]');

COMMIT;

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
) ENGINE=InnoDB AUTO_INCREMENT=6476 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rbkjinfo
-- ----------------------------
BEGIN;
INSERT INTO `rbkjinfo` VALUES (3228, 'rbwar', '11161272期', '2019-11-16 10:35:42', '[{\"num\":5,\"hua\":0,\"type\":0},{\"num\":8,\"hua\":2,\"type\":0},{\"num\":4,\"hua\":2,\"type\":0},{\"num\":11,\"hua\":0,\"type\":1},{\"num\":13,\"hua\":3,\"type\":1},{\"num\":6,\"hua\":3,\"type\":1}]');

COMMIT;

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
) ENGINE=InnoDB AUTO_INCREMENT=441 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shopcar
-- ----------------------------
BEGIN;
INSERT INTO `shopcar` VALUES (433, 'wangerwei', '一星直选复式', '1121619期', '{\"data\":[[0,1,2,3,4,5,6,7,9],[],[],[],[]]}', '1574302728397', '{\"data\":[[0,1,2,3,4,5,6,7,9],[],[],[],[]]}', 1, '已中奖', '58882', 504.00, 'txffc', 1.00, 28.00, 548.80, 21, 0.00);
INSERT INTO `shopcar` VALUES (434, 'wangerwei', '一星直选复式', '1121640期', '{\"data\":[[0],[],[],[],[]]}', '1574303987255', '{\"data\":[[0],[],[],[],[]]}', 1, '未中奖', '32388', 1000.00, 'txffc', 1.00, 500.00, 0.00, 21, 0.00);
INSERT INTO `shopcar` VALUES (435, 'yutiejin', '一星直选复式', '1121644期', '{\"data\":[[0,1,2,4,5,6,7,8,9],[],[],[],[]]}', '1574304224098', '{\"data\":[[0,1,2,4,5,6,7,8,9],[],[],[],[]]}', 1, '已中奖', '91306', 36.00, 'txffc', 1.00, 2.00, 39.20, 21, 0.00);
INSERT INTO `shopcar` VALUES (436, 'admin', '一星直选复式', '1121811期', '{\"data\":[[0,1,2,4,5,6,7,8,9],[],[],[],[]]}', '1574314216017', '{\"data\":[[0,1,2,4,5,6,7,8,9],[],[],[],[]]}', 1, '已中奖', '54157', 18.00, 'txffc', 1.00, 1.00, 19.60, 21, 0.00);
INSERT INTO `shopcar` VALUES (437, 'admin', '一星直选复式', '1121882期', '{\"data\":[[0,1,2,3,4,5,6,7,8],[],[],[],[]]}', '1574318501850', '{\"data\":[[0,1,2,3,4,5,6,7,8],[],[],[],[]]}', 1, '已中奖', '82577', 18.00, 'txffc', 1.00, 1.00, 19.60, 21, 0.00);
INSERT INTO `shopcar` VALUES (438, 'wangerwei', '一星直选复式', '11211320期', '{\"data\":[[0,1,2,4,5,6,7,8,9],[],[],[],[]]}', '1574346185902', '{\"data\":[[0,1,2,4,5,6,7,8,9],[],[],[],[]]}', 0, NULL, NULL, 18.00, 'txffc', 1.00, 1.00, 0.00, 21, 0.00);
INSERT INTO `shopcar` VALUES (439, 'wangerwei', '一星直选复式', '11211320期', '{\"data\":[[0,1,2,4,5,6,7,8,9],[],[],[],[]]}', '1574346188021', '{\"data\":[[0,1,2,4,5,6,7,8,9],[],[],[],[]]}', 0, NULL, NULL, 18.00, 'txffc', 1.00, 1.00, 0.00, 21, 0.00);
INSERT INTO `shopcar` VALUES (440, 'wangerwei', '一星直选复式', '1122563期', '{\"data\":[[0,1,2,4,5,6,7,8,9],[],[],[],[]]}', '1574385775785', '{\"data\":[[0,1,2,4,5,6,7,8,9],[],[],[],[]]}', 1, '已中奖', '98016', 1.80, 'txffc', 0.10, 1.00, 1.96, 22, 0.00);
COMMIT;

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
BEGIN;
INSERT INTO `tcpl5kjinfo` VALUES ('tcpl5', '201901', '2019-09-27 00:58:30', '00000');
INSERT INTO `tcpl5kjinfo` VALUES ('tcpl5', '2019311期', '2019-11-21 21:30:30', '11427');
COMMIT;

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
BEGIN;
INSERT INTO `tixian` VALUES ('admin', 0, '2019-11-21 10:15:12', '88888888888888888');
COMMIT;

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
BEGIN;
INSERT INTO `tjssckjinfo` VALUES ('tjssc', '190926042期', '2019-09-27 00:22:11', '43999');

COMMIT;

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
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
BEGIN;
INSERT INTO `userinfo` VALUES (44, 'admin', 'weinisi125411', 0.76, '2019-11-20 12:43:00', 0, '18888888888', 'weinisi', '125411', '888888888888888888888', '1.jpg', '88888888', 'admin,wangerwei,wangerwei', NULL);
INSERT INTO `userinfo` VALUES (62, 'wangerwei', 'wangerwei', 4.06, '2019-11-21 21:21:33', 1, '18322299421', 'wangerwie', NULL, NULL, '5.jpg', '1574351084936', 'wangerwei', NULL);
COMMIT;

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
BEGIN;
INSERT INTO `wnspk10kjinfo` VALUES ('wnspk10', '92763期', '2019-09-27 01:03:21', '3,8,6,7,10,5,2,4,9,1');
INSERT INTO `wnspk10kjinfo` VALUES ('wnspk10', '11211231期', '2019-11-21 20:31:03', '2,10,5,4,6,8,9,3,7,1');
INSERT INTO `wnspk10kjinfo` VALUES ('wnspk10', '11211232期', '2019-11-21 20:32:09', '5,9,6,3,2,7,10,8,1,4');
INSERT INTO `wnspk10kjinfo` VALUES ('wnspk10', '11211233期', '2019-11-21 20:33:32', '6,5,7,2,8,9,4,1,10,3');
INSERT INTO `wnspk10kjinfo` VALUES ('wnspk10', '11211234期', '2019-11-21 20:34:03', '6,10,3,1,5,2,4,8,7,9');
INSERT INTO `wnspk10kjinfo` VALUES ('wnspk10', '11211235期', '2019-11-21 20:35:24', '9,3,1,6,8,2,10,7,4,5');
INSERT INTO `wnspk10kjinfo` VALUES ('wnspk10', '11211236期', '2019-11-21 20:36:18', '1,2,9,7,8,10,6,5,4,3');
COMMIT;

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
BEGIN;
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '00001', '2019-09-27 00:23:52', '00000');
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19112116期', '2019-11-21 15:22:11', '83961');
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19112132期', '2019-11-21 20:42:12', '61365');
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19112133期', '2019-11-21 21:02:12', '73195');
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19112134期', '2019-11-21 21:22:13', '71781');
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19112135期', '2019-11-21 21:42:21', '98756');
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19112148期', '2019-11-22 09:02:11', '52637');
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19112148期', '2019-11-22 09:22:11', '52637');
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19112148期', '2019-11-22 09:42:11', '52637');
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19112148期', '2019-11-22 10:02:11', '52637');
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19112148期', '2019-11-22 10:22:11', '52637');
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19112202期', '2019-11-22 10:42:10', '29191');
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19112203期', '2019-11-22 11:02:10', '62405');
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19112204期', '2019-11-22 11:22:11', '15463');
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19112205期', '2019-11-22 11:42:10', '97877');
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19112209期', '2019-11-22 13:02:11', '46278');
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19112210期', '2019-11-22 13:22:11', '67910');
INSERT INTO `xjssckjinfo` VALUES ('xjssc', '19112211期', '2019-11-22 13:42:10', '56515');
COMMIT;

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
BEGIN;
INSERT INTO `ynssckjinfo` VALUES ('ynssc', '2019001', '2019-09-27 00:17:47', '00000');
INSERT INTO `ynssckjinfo` VALUES ('ynssc', '19112134期', '2019-11-21 21:02:11', '69171');
INSERT INTO `ynssckjinfo` VALUES ('ynssc', '19112135期', '2019-11-21 21:22:14', '96237');
INSERT INTO `ynssckjinfo` VALUES ('ynssc', '19112136期', '2019-11-21 21:42:10', '51565');
INSERT INTO `ynssckjinfo` VALUES ('ynssc', '19112136期', '2019-11-22 09:02:10', '51565');
INSERT INTO `ynssckjinfo` VALUES ('ynssc', '19112136期', '2019-11-22 09:22:12', '51565');
INSERT INTO `ynssckjinfo` VALUES ('ynssc', '19112136期', '2019-11-22 09:42:10', '51565');
INSERT INTO `ynssckjinfo` VALUES ('ynssc', '19112201期', '2019-11-22 10:02:11', '52774');
INSERT INTO `ynssckjinfo` VALUES ('ynssc', '19112202期', '2019-11-22 10:22:11', '28649');
INSERT INTO `ynssckjinfo` VALUES ('ynssc', '19112203期', '2019-11-22 10:42:10', '89805');
INSERT INTO `ynssckjinfo` VALUES ('ynssc', '19112204期', '2019-11-22 11:02:10', '20165');
INSERT INTO `ynssckjinfo` VALUES ('ynssc', '19112205期', '2019-11-22 11:22:10', '80939');
INSERT INTO `ynssckjinfo` VALUES ('ynssc', '19112206期', '2019-11-22 11:42:10', '53273');
INSERT INTO `ynssckjinfo` VALUES ('ynssc', '19112210期', '2019-11-22 13:02:11', '91644');
INSERT INTO `ynssckjinfo` VALUES ('ynssc', '19112211期', '2019-11-22 13:22:11', '00339');
INSERT INTO `ynssckjinfo` VALUES ('ynssc', '19112212期', '2019-11-22 13:42:11', '62092');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
