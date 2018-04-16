/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : lefeng

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-04-16 21:07:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for brand
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `imgs` varchar(255) NOT NULL,
  `zhe` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of brand
-- ----------------------------
INSERT INTO `brand` VALUES ('1', 'http://b.appsimg.com/upload/hhcapps/2018/03/29/3/hhc1522319599355tbp3.jpg', '折上8折', '特卖-欧莱雅护肤');
INSERT INTO `brand` VALUES ('2', 'http://b.appsimg.com/upload/hhcapps/2018/03/29/2/hhc1522319540740tjd6.jpg', '1件6折 2件5折', '特卖-里美');
INSERT INTO `brand` VALUES ('3', 'http://b.appsimg.com/upload/hhcapps/2018/04/09/104/hhc1523270794693bf9l.jpg', '折上5折', '折上5折-Larastyle');
INSERT INTO `brand` VALUES ('4', 'http://b.appsimg.com/upload/hhcapps/2018/04/08/170/hhc1523173519606a3e4.jpg', '折上8折', '特卖-韩束');
INSERT INTO `brand` VALUES ('5', 'http://b.appsimg.com/upload/hhcapps/2018/03/29/185/hhc1522315930883u6mx.jpg', '折上8折', '特卖-欧诗漫');
INSERT INTO `brand` VALUES ('6', 'http://b.appsimg.com/upload/hhcapps/2018/04/09/179/hhc1523268235578gqpe.jpg', '折上5折', '折上5折-花印');
INSERT INTO `brand` VALUES ('7', 'http://b.appsimg.com/upload/hhcapps/2018/03/29/9/hhc15223169279392l2y.jpg', '1件6折 2件5折', '特卖-魔法医生');
INSERT INTO `brand` VALUES ('8', 'http://b.appsimg.com/upload/hhcapps/2018/04/08/158/hhc1523175749367funy.jpg', '折上8折', '特卖-一叶子');
INSERT INTO `brand` VALUES ('9', 'http://b.appsimg.com/upload/hhcapps/2018/03/29/28/hhc1522309492954hrqi.jpg', '折上9折', '特卖-贝德玛');
INSERT INTO `brand` VALUES ('10', 'http://b.appsimg.com/upload/hhcapps/2018/04/09/9/hhc1523268262790emud.jpg', '折上5折', '折上5折-PF79');
INSERT INTO `brand` VALUES ('11', 'http://b.appsimg.com/upload/hhcapps/2018/03/29/88/hhc15223153271519eaz.jpg', '折上8折', '特卖-御泥坊');
INSERT INTO `brand` VALUES ('12', 'http://b.appsimg.com/upload/hhcapps/2018/03/29/53/hhc1522315216725529c.jpg', '折上8折', '特卖-珀莱雅');
INSERT INTO `brand` VALUES ('13', 'http://b.appsimg.com/upload/hhcapps/2018/03/29/142/hhc15223152761650mm1.jpg', '折上8折', '特卖-丸美');
INSERT INTO `brand` VALUES ('14', 'http://b.appsimg.com/upload/hhcapps/2018/04/09/48/hhc1523242433850mzrv.jpg', '1件6折 2件5折', '特卖-丽得姿');
INSERT INTO `brand` VALUES ('15', 'http://b.appsimg.com/upload/hhcapps/2018/03/29/138/hhc1522315527120dkqg.jpg', '1件6折 2件5折', '特卖-母婴-袋鼠妈妈');
INSERT INTO `brand` VALUES ('16', 'http://b.appsimg.com/upload/hhcapps/2018/03/29/62/hhc1522315405265tcd2.jpg', '折上8折', '特卖-姬芮');
INSERT INTO `brand` VALUES ('17', 'http://b.appsimg.com/upload/hhcapps/2018/03/29/33/hhc15223093109500a48.jpg', '折上8折', '特卖-膜法世家');
INSERT INTO `brand` VALUES ('18', 'http://b.appsimg.com/upload/hhcapps/2018/04/09/186/hhc1523270830619zioi.jpg', '折上5折', '折上5折-佩佩');
INSERT INTO `brand` VALUES ('19', 'http://b.appsimg.com/upload/hhcapps/2018/03/29/48/hhc1522316887091k31g.jpg', '折上5折', '特卖-珍珂儿');
INSERT INTO `brand` VALUES ('20', 'http://b.appsimg.com/upload/hhcapps/2018/03/29/183/hhc1522315639440atoz.jpg', '折上8折', '特卖-芙丽芳丝');

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `imgs` varchar(255) DEFAULT NULL,
  `discount` varchar(255) DEFAULT NULL,
  `priced` varchar(255) DEFAULT NULL,
  `addtime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=100 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('3', '熊猫动物面膜25ml*10片', '99.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdc/330/273/7930915237186273330/0/8809237828362-5.jpg', '4.3折', '￥229.00', '2018-04-16 15:30:20');

-- ----------------------------
-- Table structure for cookie
-- ----------------------------
DROP TABLE IF EXISTS `cookie`;
CREATE TABLE `cookie` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `id0` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cookie
-- ----------------------------
INSERT INTO `cookie` VALUES ('5', '15876595047', '1');

-- ----------------------------
-- Table structure for datalist
-- ----------------------------
DROP TABLE IF EXISTS `datalist`;
CREATE TABLE `datalist` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `qty` int(11) NOT NULL DEFAULT '1',
  `imgs` varchar(255) NOT NULL,
  `discount` varchar(255) NOT NULL,
  `priced` decimal(10,2) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `add_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of datalist
-- ----------------------------
INSERT INTO `datalist` VALUES ('1', '丸美丸美 MARUBI 深肌保湿面膜双盒装 套装', '48.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2018/02/05/28/ca0058ecacef4ccf90ea5635bb9e5345-5.jpg', '1.9', '258.00', '1-2折', '2018-04-14 10:52:08');
INSERT INTO `datalist` VALUES ('2', '所望所望somang 牛奶身体乳沐浴露美白滋润套装 沐浴套装', '119.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/12/07/197/8826891398154a27824cfa727d1e7fc1-5.jpg', '5.7', '210.00', '5-6折', '2018-04-11 09:19:57');
INSERT INTO `datalist` VALUES ('3', '熊猫动物面膜25ml*10片', '99.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdc/330/273/7930915237186273330/0/8809237828362-5.jpg', '4.3', '229.00', '4-5折', '2018-04-11 09:20:48');
INSERT INTO `datalist` VALUES ('4', '奥洛菲奥洛菲OLEVA 水漾滢润保湿补水面膜25片 滋润', '59.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2018/01/10/185/887373c275344d9f98054618b281e8d7-5.jpg', '2.4', '250.00', '2-3折', '2018-04-11 09:21:36');
INSERT INTO `datalist` VALUES ('5', '袋鼠妈妈袋鼠妈妈孕妇护肤品孕妇化妆品孕期水嫩滋养护手霜（滋润双手细腻光滑）', '23.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/605138/2017/0110/126/72a0a014-3654-44cc-a895-f7c03e3e81b9.jpg', '4.8', '48.00', '4-5折', '2018-04-11 09:22:38');
INSERT INTO `datalist` VALUES ('6', '里美牛油果倍润手膏', '16.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/05/17/188/d0906716863d44f090fd49fc5370c828-5.jpg', '3.8', '42.00', '3-4折', '2018-04-11 09:23:39');
INSERT INTO `datalist` VALUES ('7', '欧莱雅欧莱雅复颜抗皱紧致滋润乳液110ml 滋润保湿 乳液', '205.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/09/18/190/0ff989fd-aa10-4a68-8448-bda253d56edb.jpg', '8.5', '240.00', '8-9折', '2018-04-11 09:25:10');
INSERT INTO `datalist` VALUES ('8', '韩后韩后 保湿防晒露SPF30 80g  隔离防晒 太阳蛋', '49.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2018/01/12/82/36daf7e1c131468eb5eefcd944266085-5.jpg', '2.5', '198.00', '2-3折', '2018-04-11 09:25:52');
INSERT INTO `datalist` VALUES ('9', '欧舒丹欧舒丹L\'OCCITANE甜蜜樱花润手霜30ml 保湿 滋润', '72.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdc/813/686/2546504114304686813/22/3253581286128-5.jpg', '8.5', '85.00', '8-9折', '2018-04-11 17:03:00');
INSERT INTO `datalist` VALUES ('10', '佰草集佰草集（HERBORIST）水凝明眸套装 眼霜 淡化细纹 眼霜套装', '179.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/04/186/730b592f58324b61893748f1db85722f-5.jpg', '6.4', '279.00', '6-7折', '2018-04-11 17:05:03');
INSERT INTO `datalist` VALUES ('11', '李医生李医生 DOCTOR LI 李士嫩肤去角质凝露  温和不伤肤', '39.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2018/03/23/35/d8e1536d-ed4b-4f65-b28f-df5e23e07580.jpg', '2.5', '159.00', '2-3折', '2018-04-11 09:32:30');
INSERT INTO `datalist` VALUES ('12', '曼秀雷敦曼秀雷敦 新碧户外骄阳防晒喷雾SPF35PA+++ 200ml', '119.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/11/14/26/d4520bab7905429fbc634de405e6eecd-5.jpg', '8.5', '140.00', '8-9折', '2018-04-11 09:33:07');
INSERT INTO `datalist` VALUES ('13', '小迷糊小迷糊水漾无瑕气垫粉凝霜15g（送替芯1个）遮瑕', '119.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2018/02/23/74/c1867ea793354b029582e97631b72c93-5.jpg', '4.0', '299.00', '3-4折', '2018-04-11 09:34:09');
INSERT INTO `datalist` VALUES ('14', '丸美丸美 MARUBI 弹力蛋白凝时紧致鲜养面膜6片/盒（买一送一） 套装 其他颜色', '279.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2018/01/17/86/9d6b2eac7b284733bfb0aa6adb0cbc9f-5.jpg', '4.0', '676.00', '3-4折', '2018-04-11 09:34:50');
INSERT INTO `datalist` VALUES ('15', '舒客舒客 双效护理套盒（唯品会专供）十件套 牙刷牙膏套装', '79.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2018/02/27/133/ab09eead486241df88bdf2bfd7b0f552-5.jpg', '7.2', '109.00', '7-8折', '2018-04-11 09:35:28');
INSERT INTO `datalist` VALUES ('16', '亲润孕妇护肤品化妆品胶原紧致眼部走珠精华露 其它颜色', '69.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/110094/2017/0603/27/2169cb87-b05c-45fa-b338-0418786d442e_t.jpg', '3.7', '188.00', '3-4折', '2018-04-11 09:36:22');
INSERT INTO `datalist` VALUES ('17', '水之蔻水之蔻Water Come 莹肌保湿爽肤水120ml 爽肤水', '45.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdc/752/506/1028022848066506752/1/6944874300191-5.jpg', '6.5', '69.00', '6-7折', '2018-04-11 09:37:02');
INSERT INTO `datalist` VALUES ('18', '妙思乐【法国进口】婴儿宝宝抚触按摩油 110ml （好吸收）', '78.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/10/17/2/a9d62657-4f33-4c26-a632-3897bc6aecb9.jpg', '6.6', '118.00', '6-7折', '2018-04-11 09:37:51');
INSERT INTO `datalist` VALUES ('19', '施华蔻施华蔻 水凝胶原修护洗发套装（水凝胶原修护洗发水400ml+润发乳400ml+营养水150ml） 洗护套装', '187.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/11/07/123/c54e9f09ca9244369bed3f7047e59755-5.jpg', '10.0', '187.00', '9-10折', '2018-04-11 09:38:42');
INSERT INTO `datalist` VALUES ('20', '丸美丸美 MARUBI 双效角质清净凝胶75g 细致毛孔 去角质', '55.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/09/12/44/4c46dfe4fefd449da6907fcbfd408701-5.jpg', '5.0', '110.00', '4-5折', '2018-04-11 09:39:35');
INSERT INTO `datalist` VALUES ('21', '人鱼之水健康持久指甲油 玛莎拉红微薰套装 红色', '108.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/02/34/bcb89963be0948f8802d1f63e217d09b-5.jpg', '5.5', '198.00', '5-6折', '2018-04-11 09:40:24');
INSERT INTO `datalist` VALUES ('22', '哈罗闪哈罗闪婴儿柔护润肤乳200ml', '62.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/106800/2017/0621/15/a516151e-722a-422d-ad28-680be8e00d44.jpg', '7.0', '89.00', '6-7折', '2018-04-11 09:41:01');
INSERT INTO `datalist` VALUES ('23', '锐度锐度男士控油补水保湿三件套  洗面奶 补水 控油  保湿 男士护肤套装', '99.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/05/26/141/15557bb9-b1c8-493c-ad8d-717b368adfe2.jpg', '3.8', '259.00', '3-4折', '2018-04-11 09:41:25');
INSERT INTO `datalist` VALUES ('24', '汇美舍汇美舍Pretty Valley 玫瑰水润纯露220ml 爽肤水 喷雾', '58.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/02/198/58accc2c80d545768892eaff6616f283-5.jpg', '5.9', '98.00', '5-6折', '2018-04-11 09:41:58');
INSERT INTO `datalist` VALUES ('25', '高姿高姿COGI 雪耳源萃全面深补水套装 护肤套装 补水 保湿', '199.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/24/90/7487a2f4-d3d2-47b9-9277-724a3da2c025.jpg', '5.6', '358.00', '5-6折', '2018-04-11 09:42:28');
INSERT INTO `datalist` VALUES ('26', '康蜜儿康蜜儿kamill 洋甘菊 沁肤舒缓护手霜 100ml 护手霜 温和舒缓', '88.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/09/22/129/143db18c747144a2be84584a4883d6fa-5.jpg', '7.5', '118.00', '7-8折', '2018-04-11 09:42:58');
INSERT INTO `datalist` VALUES ('27', '雪肌精新透明感CP礼盒', '610.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/18/114/0d40c254c5e545d2970b2c5b8efe2184-5.jpg', '7.5', '816.00', '7-8折', '2018-04-11 09:43:26');
INSERT INTO `datalist` VALUES ('28', '羽西羽西灵芝生机明星水套装 调理肤质 滋润补水 祛黄焕活', '220.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2016/11/02/178/28b5888138914fa08eaff5fd34a2dea7-5.jpg', '5.1', '433.00', '5-6折', '2018-04-11 09:44:06');
INSERT INTO `datalist` VALUES ('29', '欧珀莱欧珀莱 AUPRES 时光锁紧致塑颜系列滋润型面部护肤套装 护肤套装 提拉紧致', '450.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdc/988/641/236515502473641988/4/010101131700-5.jpg', '7.2', '624.00', '7-8折', '2018-04-11 09:44:33');
INSERT INTO `datalist` VALUES ('30', '花酿花酿 肌慧冰爽防晒补水喷雾组合', '69.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/06/08/50/a6761b91fe5c45a0a7825f6d4cb3f699-5.jpg', '2.5', '276.00', '2-3折', '2018-04-11 09:45:17');
INSERT INTO `datalist` VALUES ('31', '珍珂儿日本蛋清米酵素衡净去角质凝胶100g', '35.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdc/363/596/76919055242596363/1/6957475232921-5.jpg', '2.5', '138.00', '2-3折', '2018-04-11 09:45:45');
INSERT INTO `datalist` VALUES ('32', '韩束黑石榴净润初露120ml 护肤水 爽肤水  补水修护 控油', '85.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2018/01/15/119/1a1e01c31a254e6395dea505109fee95-5.jpg', '6.5', '130.00', '6-7折', '2018-04-11 09:46:13');
INSERT INTO `datalist` VALUES ('33', '阿芙大马士革玫瑰喷雾补水纯露 125ml 爽肤水 化妆水 柔肤水 定妆水', '99.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/11/21/7/8dba9d462b554d15bb2933393397a9eb-5.jpg', '6.3', '158.00', '6-7折', '2018-04-11 09:47:03');
INSERT INTO `datalist` VALUES ('34', '即魅怦然心动修颜气垫CC霜(02水光白)10g', '32.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdc/113/850/1379585176885850113/5/6957475221406-5.jpg', '1.6', '198.00', '1-2折', '2018-04-11 09:47:46');
INSERT INTO `datalist` VALUES ('35', '韩束巨补水墨菊保湿洁面乳120ml 洗面奶 清洁 保湿', '89.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/12/19/69/345246186e404ff1ba5efc967bea85fc-5.jpg', '5.6', '159.00', '5-6折', '2018-04-11 09:48:17');
INSERT INTO `datalist` VALUES ('36', '雪肌精新透明感CP礼盒', '610.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/18/114/0d40c254c5e545d2970b2c5b8efe2184-5.jpg', '7.5', '816.00', '7-8折', '2018-04-11 09:48:50');
INSERT INTO `datalist` VALUES ('37', '羽西羽西灵芝生机明星水套装 调理肤质 滋润补水 祛黄焕活', '220.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2016/11/02/178/28b5888138914fa08eaff5fd34a2dea7-5.jpg', '5.1', '433.00', '5-6折', '2018-04-11 09:49:16');
INSERT INTO `datalist` VALUES ('38', 'LarastyleLarastyle 化妆小套刷 限量版', '69.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/09/26/187/bc941db4ebd046c498dfe285e6bc83db-5.jpg', '4.1', '168.00', '4-5折', '2018-04-11 09:51:44');
INSERT INTO `datalist` VALUES ('39', 'LarastyleLarastyle芭比猫眼妆套组', '69.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2018/01/23/122/443573ab-103e-449e-8e33-1fbb71c526bd.jpg', '2.2', '316.00', '2-3折', '2018-04-11 09:52:20');
INSERT INTO `datalist` VALUES ('40', 'LarastyleLarastyle 黑色套刷 12支', '98.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/31/9/86bb664a-d2a8-405b-b1e6-bd0371ce8238.jpg', '2.7', '368.00', '2-3折', '2018-04-11 09:53:00');
INSERT INTO `datalist` VALUES ('41', 'LarastyleLarastyle控痘补水蚕丝面膜套装 18片装 保湿', '89.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/11/184/b0499079-55c6-4eef-9f28-c66d16da2106.jpg', '3.0', '296.00', '2-3折', '2018-04-11 09:53:42');
INSERT INTO `datalist` VALUES ('42', '佩佩佩佩瞬间浓密睫毛膏', '59.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/14/62/45651280-6408-4ca0-ab17-3857665166a5.jpg', '3.5', '168.00', '3-4折', '2018-04-11 09:54:43');
INSERT INTO `datalist` VALUES ('43', '佩佩水润亮采丝柔隔离乳(紫色) 遮瑕', '69.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/10/09/156/a80c1b34-1fe2-43a1-a151-c22a367902ed.jpg', '4.1', '168.00', '4-5折', '2018-04-11 09:55:24');
INSERT INTO `datalist` VALUES ('44', '佩佩清爽无暇透肌BB霜（带海棉头）自然色', '69.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/15/115/a4d2799d-63f7-433b-b9f2-60d1018f6c6e.jpg', '3.5', '198.00', '3-4折', '2018-04-11 09:55:57');
INSERT INTO `datalist` VALUES ('45', '佩佩佩佩双头持久塑形眉笔（深棕色）05', '39.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/10/11/3/3c6539fc-ed92-40e1-ab99-2d371b6d47b1.jpg', '4.0', '98.00', '3-4折', '2018-04-11 09:56:54');
INSERT INTO `datalist` VALUES ('46', '佩佩酷感幻变口红套装10支 锁色持久滋润保湿', '99.00', '1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/12/05/144/7cdc5536-78eb-4911-beb4-b05dfedee0f8.jpg', '5.0', '198.00', '4-5折', '2018-04-11 09:57:24');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'asdasd', '202cb962ac59075b964b07152d234b70', '2018-04-09 10:02:54');
INSERT INTO `user` VALUES ('2', '15876595044', '202cb962ac59075b964b07152d234b70', '2018-04-09 10:30:49');
INSERT INTO `user` VALUES ('3', '15876595040', 'e10adc3949ba59abbe56e057f20f883e', '2018-04-09 10:32:40');
INSERT INTO `user` VALUES ('4', '15876595041', 'e10adc3949ba59abbe56e057f20f883e', '2018-04-09 14:24:07');
INSERT INTO `user` VALUES ('5', '15876595042', 'e10adc3949ba59abbe56e057f20f883e', '2018-04-09 14:28:04');
INSERT INTO `user` VALUES ('6', '15876595043', 'e10adc3949ba59abbe56e057f20f883e', '2018-04-09 15:38:19');
INSERT INTO `user` VALUES ('7', '15876595045', 'e10adc3949ba59abbe56e057f20f883e', '2018-04-10 10:00:47');
INSERT INTO `user` VALUES ('8', '15876595046', 'e10adc3949ba59abbe56e057f20f883e', '2018-04-10 10:04:45');
INSERT INTO `user` VALUES ('9', '15876595047', 'e10adc3949ba59abbe56e057f20f883e', '2018-04-16 19:28:57');
SET FOREIGN_KEY_CHECKS=1;
