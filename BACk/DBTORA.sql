CREATE DATABASE  IF NOT EXISTS `semi_novos_tora` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `semi_novos_tora`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: semi_novos_tora
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL,
  `Login` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Login_UNIQUE` (`Login`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagem`
--

DROP TABLE IF EXISTS `imagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagem` (
  `IMAGEM_VEI` longblob,
  `VEICULO_id` int NOT NULL,
  KEY `fk_table3_VEICULO1_idx` (`VEICULO_id`),
  CONSTRAINT `fk_table3_VEICULO1` FOREIGN KEY (`VEICULO_id`) REFERENCES `veiculo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagem`
--

LOCK TABLES `imagem` WRITE;
/*!40000 ALTER TABLE `imagem` DISABLE KEYS */;
INSERT INTO `imagem` VALUES (_binary 'RIFFB9\0\0WEBPVP8 69\0\0{*ôô>m2•G$#\"&¦;˜\Ð\r‰gk·›]\ßW¾Ûº`*_øÊ¿……ˆ\ä–¾gÁ÷¯\Úûþ\Ç\Ò[š›‹¹­ô»…ùù£\î\îø\Þy\çò~;o§ÿ+þµÿñž”\Zü\Ëþ\Ùz\É\Òýªö•ô \êô7ó¨õ¦ÿG„mÿ»Ð\ÎÿÀ\í{\Ø[Ž¿©\î\Ý\Û?¹ü-g\Ã\Ë5<MþSb~^R®…Ž\Ùr\äo\ç#¶’_\Î\Çÿ/º–»\Ùô{}¦§\"av½\ÄP«‰T\àÑ©~\à.¼\×1‚GW1µ+\"œû\ì4¬\å(\Ô_ß²û„\å)ýB?>Zˆ”Nú~G»Üƒ‰\n³yX=œYñ­¸—¹eª±–S[Aü+A|\éG$\ê~Žpýƒódö±\è&\Õ\Ðó\Ë\å¿D¥ún\0P6\Ú4j87Áò\Û\èÅþô 2Hn–ð\ÍB9_}Ù§ÂŠ³)·(úh\âÏ¡\ìK\Õ\Ü}7:GnK­V‰FiW›\Þ\Z´\á\åDk\'v\'H³,\Ûò\æu©\â\éþÿj‰YCÑ™J°³\ã%U@\Ówû—ø\â\äP\ä¨)\r)——©ÀÀtžQòrBRRðƒ¥Žur°€ 5W¬Ô´¿e’EB_)\ä\ï;¥È—»\Ån\êZ\Í\Ö\è÷¿J†‘7r-ö\ë–D ÷­n¤7÷g\'|Ÿ5|°œTJ¾WHÏ™w\×C\Ñ\0Y}˜ý#\Õö\ÈUù$¹LÌ”RQÑ¼—ª±S\Ù\ÎØ°S¿\\h£\ëE>$Z#¼v:j\ÃÛ‚\\\ÂÇ€<-\"r÷%‚\Þo¨[Ž‚|Ak\èfžnM\å\r½>`¾‰†§p\î\ãn#\Ä\ì<SÁó…b\Ì½–“\Ï%uG\Ù\ß\Ú\Ç\îû£\ÍØ™\æw»¨E1üa\ê\àkz? ‹\Ö{ö\ÇrrFÂ‘\Ü#Œü5©»Ž\ë\íÀ\0\ËÊ¶‡!ò!2‘‘Â Õ®FŽ‡p¯žKü\ëPöxO\á\â\íJv ¯kó~Ö²2Nµd¦\ÑH¸¨’ø½\ê&\ç¨\ÕQ\ä \ÝÐ¢üÒ‹Ž\ìR_\Æ=¥÷ ¬Œ÷\ÈY\ÜM”b&4np(-M¡é¯¿ó\ÕK\êe6.„Ž\Ò*± ƒ‡·Œþ)/^|¢q¾d•	ò~d}­\ÊGÄ¬[[Ic\×\ny\Ý	»(\Ð*\ã³\ÒvX¾Y\à>ª)s\ÛÇ¾\ÖK\\k;›°3h\ÖuY&‹‘\ç\É^Aé°¶W\ÄKf9\çLMª„|:\È\Üõ¯8¾\Ë[ÁZŸå³¾\É’t\èV	´¦´`fSµe=”ÿüöÀd\æs\Í\æ\0PQÕ½\Ï\Ñ:ð\Ë*cý{©xb?Š¢š*l­;úf\ÔS.3=[\Åõ‘ùtB¦\Ü\r”IheŠZôñÒ‚v|-C¦‡<T\í\Ç\ßÐµ±v\ÏÅ˜ogf®_\Ëk»•b‹, n3d‹ %_IC\Ø@X\0¿5B\ÕbyQ‚\ÓIo\ç÷Y\Ñ\rY´.\ÑMz_\Þ2\r\êš;^‚BÝ‹\ÍHšð$5.½<\ìib\è„u˜z§t\Ç2†útƒ1öZN¼€Ç³µR·nŸ¥õ~Ug\ï\éfzQ8mmüÛ¶ò\èJ•Õ®T2r·c¥tm3­ºü\Ë\ç<0²ÀÀ/«\Èý\ãýª¹z\r\Èòz2œš\åek\ÆœSXs‰Ù’%Šc°-Rv)’3\Ú2¾CN		Ë„r\ÐK-ú¾RÚ»y­’¢ª|¤9»\Öù]¶\ìRR¯wM®¼\"|°e»_\r—|ø˜\Ñ;ñeC&÷\Ú\é\n\í\âqP\"N‹H|@û\Ï	c®_\'ž›°QTõÇ„_jÔ¾¢ÀŠ\êa)­–\"\\Z\0…q±8¤¯L<\\I\Ò\â_u\ã–-­]ÿ\Ú\Ù-&Pr®>o6K¦s‘\ËqC‰öŽ‹&\äÍ¬\å\Ðó\Þ\Ër\Þ<„-…R+\ãüs\áfI/5§\Êw\0\Ò\Z¬ ?À\á.¿M¸‹:¨V5mCR¦k)Oƒòf\é\Ý<ñ˜)€”\Î‘:\Æƒ,\Îõ\Þ\Ý\å\Ãðnù†$J*p\Þ&fx”—#\ÓRñ|û«G)\0e ¿\á3\ì\"u\Äc›ßŒ®”\àv\Z>(\Í\î-E\ç_=¯c\×\ÂvüðÏ|P€ \Î&?t‹@\ã13­œªÂøû¯>²P>þV\é\æS_‹8Gþº3x\ÔN\"Wkmòƒ}ú|j§ð\ÒZ¾•]`t%º\àHBn„®\É‡\ìü^¡®M`\Ö%”fE-0ow¿I\Ü®Ÿî®¤óë€•%’^fgÎ—*ö)€\å—u=­|¶’—÷Ñ´kÉƒ¯\Ù\å\Øy±&\Îö™i%\Ñþð¯º´\ÈÖ•\'5Ss=Kn\ë\æ}-\Ü\Ðs\àU¬¿vA\Ó\äh±\í½‰W/Kr\Ýl\ë\Í\Æ&C®’\Í<.\é^\Õ\Þ\â´\×\Èi¬\Ù\Ýúð<\Ì9^Š€¿°ÅªV3\'¢¬±À#\Ô9œOk|¶(”{µ‡\î?O­¨S—\ë!\ÈÂ¶\Å%ÛºG¤qJ¯ (øR½\Ý0u\Â&\'g˜\à¦ƒ\Ûô’+\Ì|n-_„~PE\Ò=•o|1Y\\\r¶Ìª£$Po4\Üúhs\î\Äó—Uˆi¦++?^Eÿ\Í]#r8•xõ…‘«`^d}x»\ÑfX[Œ\ï­Nƒ³·¿\Æ\í#{ñœ®øªÞ¦\åNº\ê„%±HhG­ªŽw}\n8\Þ>W*\Å\nôpNmcÂ»)\ÇmQØ¼\ÌA([½G•f\âlQú\Ý€‚tŒ?Jœ.T\Ò\Ý\ä;‚\Þ2`›{\Ûû.\r›ð5µÿ	\Ò\\u\æˆ‚ù®\Ï\Ìúd\á{Æ¿·O	\0ü\Ö{ù?N\àJ\0\Ù\í/ñik} <‡M\n\á\Ïh”4\Ëb\ÐG\"xJ\0ò$jÍ›\Þlü(\Ü¾D+\É:\äN7óJ\íƒl\ÂÃµ)\Ðo²„\Ê\Ã\"\Ë\Ý?6\Z¦»[\Ô\Ú%w\Ç\Ðo?tgDœL´2ºV·x§\Ü€lù¬/C\Ø`\×/$YA¨­\Ñu­Œ2|LõI*\è%1C”—0\Þ:þþ\Ò5pfŒ»#ôB°\Â²di\Ã>Ã‰—U\Z_‹«‚ –TÕ²M™ôÆ´±±8\élaŽ\í&!]³^q\Ý\èy\â¸)Ÿ0\Ì>n’S\æ[\Ã9\á¬\â&_AE ¶»÷ð#ý\n$Dº\àÔŒi4(\æKÚ \ÚV\â\Ë\áµóŸ¾.ˆb¨¦ŒghH…>NsWs”­-9\á\Í÷³-§¥mò\n!\ì•c³­Ì­9¼­\Î&ù! ^C¿þiÊ»§mB¬b§f—§Ç³V$&Qz›·<h\Â{s\ÌPN\àk\Ò\Ð\Æ\Î@¨}ñ\Î{c³¦\Í:\èþ®Á]!G)P’\Þ\ìŽ.|N\é.¬ªC‰h¦8\Ö+™zYE#Vý‘“òdü\Â\é1€\Z\åw#…@´\ã•€ˆ?À\ãM\èTW—V[¯\ä¼\æ\Æ\êˆvl\Å\"h\Ðò>¶·Qù\æŠ\Ò\Ç\Úð\ÈZsù\àNd \Ç&\×~0\â\×Xr-(\Z!a\åŒ_i .Q\"¾*P°W!OÀ5o\Í~‹º¶L\Â…¨B÷<¢LŠSZl\ã>j4g\Ð\Ò\á\Ørr”»¥¡Q¦C*Mµt§¸!ºt÷“/Nv\ë]Ž/:\Õ\Â\\\Í12õ{š‰kafq”\ãw)H\Ï.-§Q£_µU!\ÅiºtƒL‡•.\"aü\ïò»°‰Z“\Å\Ë	ý{©\é Ý²[o£4\æBð)Q/Ê«¾È¥œŽ›‹7 ¦ \êD{ñ9¹Qú»\Ü\×=	Ú„üPimò}›žWF—3P †³Nœ\\ªO\Þò^\Ä*\\(\ÊPxð¦žBaóò9²Y\Ð‚3\ìysõ`a\Ú5;¬%õ\æ‚p\Å\í\Øñ”2g¡\\pm”Ia‰¤¶¶5\é\ÉùŽ£\áž\á!¦y\Ùüfs}¿3ƒÊ¦‡\0öæ•œ³&\ç¯B±6,/SË¿Iú)nÒ•°úì¡¼\ÖGQ7<\Ã\Ý/@\äº:ðñ^(\'¿òU ˜g¦¢™<d’\r}ba“ƒž6NCy\Ä=ª\Âc3\Æå˜²‡Á?\ì¼\à\Û\Þ\"¶Dg m\Ö:¸Ÿou¡`Ã‡\Å<04ø\ÎGrób)jÚˆ%¿‹(\0þú‹5$^žñ‹—Fú8²]m.\à;ºþf1\n ©ö›¤0½:k§­*Uy<¡x\Ò\í\äb\â®\Æ*§ Ï‰ðr±>\Ý$tõ\ä¯KÁ3n®M¼Á\\í›«hC¤B\á·u\Åñ§-…ò‹x„’\åù`\é.¸F¾a‚ï—‚uL1s—È‘†MP\Z•Ü7™,³˜‹Š\ã¹\ï9\"\Óm\ã»÷½òrØ´½F}°b„•Q|†]—Jö·³ W@‰îŒ¯ø®\Î&\âl\è#,\ä2<¥gs`ûðµ÷INq´\æ&–\ë\Æ79y8\éUV\åN\éô¦\\\ë”\"\\\Ë\Û\'>€º_¯8„\É~ßªg3d\Õ\Õ(\Ù\ã$±G+\r\Øu\í¸X²ö{Ú›7À\ê\Ðñ\åÇ’\r\íÁG!¸,}0Ú¸xI|œl3\Í\Ï$OÛ ¦ýŸ\×\íW¦?	l§üx\"ph¹G)\â	\é\Ö,vW»4\ã\Å{\n`Ù¢œjG†®\Ç\Ùv /?°2óÀ\Ã\ãHžñ\×7’¤\ß,1ºž~™»d\Ó\rB\Ñ\ÔÆ·•·p\è\Z“€”\ï?û‚IÁ0 ÿ‘©S¯\æ\Å\'h°‡]¯]R\ÏH{\È!UŽ(\\{Rcb\É\Ê(\É\î\ä\Zdð(X\æ0fpõ’|¡\Ð¤R\\¼m0J\îž ¼\ì-QsB­UM.³Xª\Ë\ë\à\"Zk\ÅA\Éa\ëA* ·\Øs\Å\rˆ¬m¶Ÿyð0Zl9‰\ïCò\ì7tO\ë¸Û¿S Hlµ&*Ÿ™œy\ï2%ó†DÆ““†©V>ò\È\à5r¼¼’ög\ÊÃiõq\ã5°\\)Ü¼O\ÌI\àÀo¦u\ÜV€\n\î|®\ì\ÈA+\Ø\\g\ÕMœ<¶»?]\'’-\å‹5÷e)‰túQ…‚¶»gÉ¤\î¬Ä…zw?ø¿h?eÚ­ê’’‹®4R~oƒ\'	ý\î=\Zicþm¥ñl®ò\ì\Û”,s¡þ\ä\íPM;µš\Ëwƒú\Íô\Ñyñ““e\æ\È\í}à¾¿\Çu¤u#LÖ•˜ ¡\ëw‹«ð^þxŠ7“½m\Ü\Õj3DtVÖˆT\íWúvü¸À`¢\ï¯4M\ìKdô~<–ÿO=”\0\Î\nB­¯%‡ƒ£‡ö@W\"~ø\0\'ô\èƒƒ?\ïµ\Ô@À½7\n\é\ÎhF\Ù\ã\ZˆSd/\ÌžÁ‹½•\Ù!Kw\r)®\Ï~XCm\àvFòQ6–Ô³ZJyU«—×£!…õ\Æj‘c‹Ëk¯\Ð\ØÙ˜\Ö\Èg1H\0‘N›¹š\ëb\ÜqLB@\'9]¾ºÕ¿O‡&\ÉBžH\Ð®—”u,Ž´\\¿y\Ø˜–ð®Œ\'q<‚$\Ô\Óp\êžqˆº  Ìœõ¨J¬¥\äŽ\×B\ØFIú87 \ßW7‰5ó&‘À+_Œ~f1SDWo#\Ý\âOó×­;õˆgn2³\åe¢/ñ¼û¡ó³ø®Ji\â\áFi¬°£ý…‰\ÅpO,ök\Ìß¯ž–64=Ð˜Y\ßH¯‚¬ ®\Ó\0%,¯@~œ7°ƒP\æ3\Ê\"MD\\?­Š«>v\Öf—…¦\Z¨H\î¬\ÐB\ìðp\áWQ\Í\Ö\Æ\É\É\Ù\êx_\ç\Ê\äF\â\\\âô\Ñ\Äu·P\ì³\Óð»\'j]ÿ%U\Û)š\ê˜Õº\â\É7>\rœ\Ô<‹¥\Ã@C(y	÷¥\é\î|\â8\Ç*\ã%§CQ’S.\à\áhª\îÎ¼Ü±¤{\à\Ö\ël@º…pM®z\ß3\ï\0\Ðy z%L¬M\ÈB¦EóAš¤ž35¡ Rú\Èwƒ‘oA\ï%\Ü\å£l»ðA\ïaIg·Æ‚\Éõ\Æå—Ÿñó¨b·”‹\ÇY†úŸf\ÅO3?\é:&Þºn>¬j\ÇW×¾\ëô¯š==e.²$\Ý$I†¾\â_\×Q\'«žFc\Æ\ïm(ófnH\çÌ»(lñ—\ë\Øøx\å$veiAˆj\í.÷¶ÿ†6Á“úÓ”cN¢\ë’!@\á\ë\Ë\ÓKvÁ\èÓ¡\â¢\Ô\Õ\Z=‘$n!¡\ì\Ââ¸±<\ra[«ºz”AlŠ¦\âÝ‚yA¬ñNœ†µúVómõ}cðf4¹™¦\Ð4+&ž\ßJû	§X Ü™)ˆ´÷\îX¦ep	„‘¸{{¬$«Ž³.®ø`\Äû´\Ì\ë|4¡¿<D/\é\Ðt‡\Å\ß.pBò¡ceQ\ì\é|\È@?\Ñ®þ\ìõ›\Ë%‰\ã`;†·A½\ÆA¯¾‹À<u­öW5H)—-‰žA\×;Lü7$:ôn¢Q\n>\Ä\Øþ\rU¦X\×Àm	q:\×iBeZ}òÕ“ô°Vi(	•7“À\Ê\áÊ€º½\Ãlx3ñœ\Ä@Ç±{s1E£¼Ž\rœ¸D\Ô=÷{=\"$¦.vtŸ+\n\Ô3s|‹ñ \Ëm´(\ÏÙªd\î\"\ÙE‹\Ò\Þ23\äô\Â\"Š‚\Ð\çn!\Ï#z×—ç±ƒG¶*z;rý…\Û\Ç\ç>z\0«Â™(\ÚL\ÂTEó¯/v\çNO´\"¼›n_\äYuot„\Î_ó\Z\ra3‹q¯7\Øi„fŽ‚\"ŠzFþ+ºb\ÞÁÔ‰QAÝ¯®}=\ßInû¦Ðš–¶~õ¹.÷†h­\ê2\Ýn8$N­›ÕŽÁY²;\ïA5P\Ø÷$0\íI„;™I{]Ö™¤<_\\ö Š:°†\'è¨‡†\ã@\Ö\Õ\Õ}›Ã€M\Üð\r\rw\ç8º?Jº‹^ŠmX˜jEøhS\â>^5‹\Þ\Êyldb%û»LD]V÷\Èro}o1bl’-(€³Õ²…\'¹GJ‹Du9xPŒMxÉ‹ž”×­C¥2DRJ¥K¦n)4>HpÚ€\ÔS©äƒ®3\Ï\ÂI»1¼\íV“¹\á\"\Ê\é²ž)\ìï±ü:\ä\Ñg)2eõ\Û\Ñnü\ìœ¾ñ\ÅoHb½Rwºÿ6šo¥+y³ù\Ü\é@Ž;wý\Ì³öX¹\Î]=	1˜\ÒBšf\0f¡r®ö…\ØEÌ´¾¹¤²ˆð:–ž\Ñ\ÒÀ/€š-ò¹5»13BŠÓƒ\íô­\ËÊŸ\ÈT™)’h‘\ä\ágBµS«7e³[W÷‰\Ð\ÖV\ÊÌ­\ë\Å[\ËA0>sÑ´ ¥/³\Õ;¢fZ^Žöý@\0zý<HÀ3K\Âl% -šVYp\ÏÄ´?¦[¼Py4û‰\Äp„\ÚQL¹\á|õ\Ö\Æ)\ØlŽ÷\Ù47ÝŽSf¼@o\Þ,<»¦\á20ý•£ï›œô®\"\Õ|E1Í´¦\ÛW\n5V²#²ˆw²Õ£\â\×)ýÅŒ÷Žñ±4™Áô‹:?§þ\0\Ç\×\ÄP@“óºbœgi›µ)\ê¯o†Ô©XCo‰qGj\Z®¾\äP\" \Í<z\î¼\Ù>kEQ\Å\ä\Ú,ùv\ÇÑ·\ïö6±ˆKŸ \Â-\Òj\Ö8&YlE\ÉÕ›{xk­æº½8\ÂM‚\Ã\Û\"e\Ìr‡²a˜º.\Ë2©võo\ä!¿ò\Æ\ÂT¢/œ~\Ä†¬\à@s^\îL§·¤¾¢\ÚfK£þöCüWûòô +¡µw_ªe§j›9;ed–+\Û2D\Zþ{\ç ¿\èn•¼\Ö0\Ë\î,q€\È\ì\\\ìk\Z®¹0KÅ¡rS\Ç&If•&-\à€vgÀŸ:lÞš\Z¶)–8÷>\ÞM=\î\ì\É;¶K¾ô½Yô‡z‰€\èd\ÓZ\ÈGpóK{¨t\Z1\0¢S\Ù\àžBL2H\Ã]²°Â®\ÅJ-¦\åw\î¶˜@ö*\éQK¢_o½ó\É\Å\ÕB\Ë`a2jºT—#4”·ÿ[ßµÜ†m‰\Ä€d`Hc\æ›S}wX¼¤E#%\åÐ¦\Çùú\ÂIQ0(\Ï\Ü\×H\ÙE¦¤úÀ\é²ópmÙ¼~2ÿ°F\Èu\Îp›jƒ‡¨\æ:X\nml“‡\Êƒ‘:.w€«s—#*¦z.\Ï5;R;ÀN \n– b\êŽ›\à|1E\Â-$ý\êß›L\ÅT§\Ø(\íð\0%¤\Ý42N\ì\ï\Ç\ÔW—ii³\ÞC‚UµmŽ[®¶hÔ\ä\ÕO7[hµJÖ³•³\Ç@½#i\ä`\í¨ Jò\ÎóG\ÑG\æÁ2•Ø²\×!\Ão”+/^µm}»Äºý\ã\ÖOV\Ã::\äQÁa¿\Ü\Ù<Pó\á9™\'d\Ä9\Ôi\Ã\Ï£EŽgä“®P°ñµ¦lñU~{\Ù9†&¯)@½\ÙP`£N¢Ác9”L~p‚\çFyGB\Ñ?NúJÿœ§P¶L½J\Í;H\ÃB\Ï\Z\Ýr1Qd\á\èÃ²g\ì\Ôþ,t7¯nKÀH¿û\Üu^­9\æh€óŸ^‚.ói\r\Ä\êHŒ¼N]º^,\áT5’Ñ \î\ÊúY6¿5‰¥ŠýR\ê6$×€\r~˜wi\î9RJ”g>\è\r\"¶ÿ‚J{O	q¿zoQOo¨€s±\íQ¸Ã³\ÂMKZ+:óuÀ\èJ:Z@ÆŽ\é\åk\ÝÂ€Ù–\íÖ°\î;\Ã\äB\äü\Ì\ì…\ÝÁ\ê\è\ÛU÷/8o\Ôr4r;‚\ë¢ \Æ\rò Žw›\ç9Ò¦1Žr¹óD\ÒBh\ÎK6zkgÞ–þúóm\Ù\ÈZ‘vk‰\Ý{!œ\î»D~:¬ÀQŒ/\î\0f\Ô\æj[\ìû¸U“ª\çc™\à—8ýX›Y`öÄ»\0eœ:“V‹^*v°³h3R‹I\\˜Ì‡m\êBñ`Fu0b·\Ýÿ\è\Ö\ÓýcŸc%CrÃ¡Á\å\ïŠpŽR=‹ø8\äÉžûÄ½\×sRK\"ø‚A\ZÚ±D*b¬nñ@4#6„€,\'c’v*Ö¡§™ghl_L\Ï\Û{²ù\\\æ=®i\â1ppY·o¬n\Ä\n!Z´ƒ˜¿Sn#ü­Í”\ÉE{žú©ü¨eA¤´@¤ta\î©r\n‚9	\É\Û~9Zú“\èC\ä…ü7¤\Ð\ÈR¬‡¼A	)ó§tñ:¨n\Ã\'\'\Ý\Þ\è\0ºŠc‡ ¯š¸®¶7\ä¦\ÕQ¼xf[®0‡W¼\ï#Lf#aNñ\Î-\íž+õq9,œ\\±Ly·¸-1\ÕFÏžW8\í™{xþp…Á\Â\Û\ÔÈ„&\ê¶\Þd&>\çö\Ó^±Í)þS°§TÇ‡’½\Ô)ø”\ä@»\ÃX0:Wñ\Åb[WG±xS\å	\ÄxÉ–\ã\Ê\Å&pN0»Q[™e•Ò—û\Õñ2šn\â¦ùÏ»$› \ÎQ\áÒ©M []\r”ðE¿P†i\Ù[!¸\Þ§Á,¹võ6^O‘É€ò÷À\ìö\Âôó?6wùþ±<E\âbþŽsk…žxL­0;|x\Í3ð™\n\ÒÏ–\Ðþ>\ÑN\Ù}Çµ!CÀF5†Šf¸±ŸÔ‹,\Ú\Ü mp60®“ðbk°Hˆ:@±¼}Ñ—¿Jœ+\n\æ\Û9Mw\é‚X¿®f\ÍMrÃž\Åö½–²ù™\"¬VEò\Üý77›\r\æE}H29\ÃcŒ^½Tö`›«Pbû\Ñ\Ü\Ïg»¬€Wx6\ïØŠò§\é#\Ý5\Øs~€\Ê\é\Ç\â-œ¿\r \Ì=¨•L©\0ždeþ±Ó»±“%J@\îr$u^?ª¥S\Í\æ\0Tõí’´²\Ù5\Ü\ì8cö¿Že‚½i\ã›P°÷|/\'óÀE\ï™c„\"iŠw\0v\" ¡\ng‰š#\é¢4Uœ4@où)ø¦\à\ê! ‹,HmFß½O‹†$²*/š‘òk	\æ~Ez_K‘ŽÿMD†s¾M\ÆL3zV\×\ÞŒüŠ2’ûJ\ëv\ä3õ	š+ÿ£_^\'S€:9œ\è‡\ã\Þ\0ý&\Ñ\'›p2ƒ5gD!ø²\ëþ\í\'ÿJƒ%	÷;‡\Ü\ZN^úó¥h÷»\Ö\0š+HkE\Z!þ\è\n\×ø¤¼D\Û1ùô+Tis‰\ì\Ò!u)+?#\ß?N. 0™z‘2‰c\ä0$°\Zf\ÕC÷„5º\Å\Ú$››z\ÓÈŽ8›\Í2f\ëG=:vM®—Ó‰R.7­ \ÔX 4z\Äöm›þ<\ÚH\ì{¬\Æz6„<»Ca‚ƒfÿð\0~¸x4ËŒµ\ç\ÝÎ‹t+\Ô\Ùñ…}Å•wax\ëå¸˜Q3\Æþù\Þ\ÒÃ§S\ËPf\Ì4\ìyƒöª!\Â`’¡\Çô\Ã{\×\Ù)Dyï˜¦ü–\È5«-\Æ?;`\Ï5•6y¯\æG´\×g\ÛTWt\ä—<O\æd\Ü\Ì%öCõ\Ìý-\r®q\ÞÌŸ3‡\Þ\æg\Ñ÷½ö,|\\“\î›\Ï\'FØ‰\Ýð\Î_S\Û\è\Ë3Kjõ“¼eþ5~g™ &«ü*ÿ¼l\Çò°l3#\êm»öÎ•\î‘\Ñh†w²ˆ\é“V„§\Çû:¹/k‰±˜\à«(ƒ\'f\â\åµ\Òo•(#¹vôz±·o)Â©­?\ê\Íô¿„uÙˆÅ\ÏGª\Î*]\ÝAµ;£]L RÎŠXÃ”±€1£\Æ7u§¥§k/&šÄ¡r/\Î\Þ\ÃLCJh¿*\ÒY™@ûr\ÂBôN\è“a\çT\nÀ±²…G$\Ð.\ÇË“fHÁ½›—BwL•\ÍPi(¨NB\"ûGLºf\îÄ­\ç¨†Ÿ?5µ\ÈÉ—7›\é2=û#e»¾¿\ßû(Ž!\ì\Õñú/„S¶\Z?²Wk¶ƒ\ÙIžWÞ‰\Ôw´\\»À®#\ÃA@\î\ÖF(2Ê“96¡´?\ÞÌŸöBþ³.Ž\\c\n\í!¸›D`Ê¾Í‡Pœ\ç$\Í\êÚ‡¯=\0°õZq\Ñ),_t\à¾hž‘KÝ¯(7S\é÷jŠ~-mu“\Ø,ºr.o»‰vð‘°L.T…f\î\È\Ã\æA\ÅZ+¬ÿ@\îŒL]€>·‹sH/s¨;\ê‘o}4¾¾ºqRÕ–\Û\ÒtoÉ_\Ûf\ÍI\Ö7 šý\Ï.¦ò*\èY>ùƒZ]\Î\Ý2_*r®ü\î\î[e»…=fœ\èý(?²sJ\Ñ-\ìUº˜\Â\Í#õ´¸­8Ñ¢³W\Ïsöwž\äµ\×\ß*\Î\Ýf\Ê\á­\Ð\Ê\"rZ\Â8ŽŸi\é¬³L]òº¸3kuµ‚\æ&0¶`\ì\ÍagJfø\Õd»\ÓJV‹6€r\ZlüŸ{\ë\ÐU!¸Gu\Ò@k\Æ4YZ&P\Ô\Úkq·\Ô\×\ìýx-\ä™n|±ˆ6IÍ´–¿}V\ïv«¬9†Fa3\ë\ë	/ýqÿq\æ½[p\élo\'4\nŸ£ð*Á4”7Á’rž¡ý\ÛÜ‹\r-®\æÿøÖ w¸öR]\ï32x»4+„µ%\êX¥ü­\ÓZ°uF7–½A¹È¿\"{¯\ÐNUS-%°±^ÀGoô\Õò\ÕøŸ\ìúœ	0&±rÀó T¯V\0¬\ÇSJøY­[½øj\Ür\Î{Dh\ßt!p¿—•*\Ü#­þ\Ùh^icc\ájVQMú®—\ï}ÁÖºZ‘\ÂûòYýõÊ±—÷‡²y#ý¸Ì‡÷eM.\Þø±KÇ¼¶jò’*OV{\Â@õŽõ”%‚emQö? \Ñ\Å[¦;\Û\Åúˆ€…\å\Ç\ÚE\×g2¡­4o žwŸzŽ2_¤®:ý·\ípKQ! Kn[9\Û\â\"ù†/ß”W÷l½¼\ì¨,õ-»“\ÏI«¸“¸3ø\ÉÓ•\Â\àÀ´b€F„G¦ºf`Ýˆ\ãQ¢whÒ‰¬kÈŸ†^\å\Ó÷\Íjh…þ\è]ð@\æJ;M¡}=Ç²u\ï\Ý6®õ\0h›\ÔÔ„\Å%þ¼¡aƒ¯U¾\å{«{¡üœ^šª\ëC#±¬ôp\Õ½\ÔÆò\ã{üü\0(s[<­fÜ±w>/(7\Â\Ø-<}k\å‘n®º÷Jj.bwrz\çEYÀ8]ƒº\Z\Ï\äg\í¥Z\'à£™­óz\Â\\ùX.õ_t˜¸oHSe(\Ò@\Ù@¸\Ê:Á\íAP¸\ã-8°¥kSQô\Ò\ÝXü´vm¾\Å3¯\È0\ÄQH7[B7)’ŒWq8(Ö¥!±¿‡¾˜\î\Ê>û\Ä\ÐØ™K=Je»,^²ûü­¤\ÄT·­\ê\'\â\Ç_°Ð´\nŒ¸\æY’\Ø\Íe\ËM‘µˆ -»Ž\ê\ÉË\áv¢B÷Þ‰­\Ë¡«\\1¦[¬3Vª6˜A²•Ô¾–\Ó=\ê¹N\ÊûŠŸüE*\Í@GPœ\Üb‘ˆ¾„’]9u‘utœMt6ûÈ¿\Ù\æûr³ik<¸Õ““\ÛÀ\ÕÇ”{e¹ti;ÿs –¶ÿ6Ÿ_^j3ÿH“‡~_¨—Eÿ\n\ÆÂ®œã€ƒ\Øð»‚“—e7\ál(ÞÀÃ¾½ƒšþU£‘?%¢‚\Ùm\è5‘r\Ûp°DG²¡°s÷\é\ï{‚P*GxÏ­—bûZI,Ims—\Ô.ô$q7¸N/Tœ¡”Í¶NXB7ƒü\ï\Î\Z`¥\Ê“ú gú\'ŒX‹[<¨’d™4ÿUÇ\ÝÓ›4‰†K\è„ùVFcuw§ó§\Ã9B\ë¸>%\îœ3’.GQ1x5\Z\ãF\Ó3Ä‹°®\È\éòS<O\Z\îÔ•aÿ$\×\r£_2F\Îð#(±°‚N}	š\ï\Û\Û`\ß;\Ù5—¨T\ïù\ÑÓ¬Awk½&(\Ù\å\È\änŠL!i\Æ&\î†\Ç\"ú\Å¨ª/÷\ë\ÞN\êz_±¥/\æoÿE|\ï\Øaý\à´w~¥\É=\Ç&EI¬x¹™õHh\é\Î_A§i¸ù?= Xt¢_:K÷\n‘^²\Óo¨\î$¿\È2cw²|Êº‚“·nŠ§U…™ün\×U¢p\ê\È\Þ\ÃY}~uLÎ‡w‘^Ž…<\á˜x/\å0\Z^÷wPacäƒ†t\ëˆO.üsÆˆ†Ui7\îqXLH1Tñ—>\Ìe&|!üx½\Îœ¶­2£\ãªÄ²x\æø\Ò\è‘\çó$IQ/ÁYÃ¼ô÷½}¥KÔ¦‡\Í$]¬WCK\Ã\0÷Š\êô÷\î\n-z\Ím\Î:©„×­öD$¨:;Q\Ë#7ÿ\ël ÷\'§Ô¸n\ÇnÐ¸Wp¾g\\:ˆ”»\ì…[–5žœb\áL!\åÊ®ô¿óÎ³¡’$ñr\ï\ã_6\Â=*\ï\"/:¡Æ¤i}g‡Y*Ô©øX•!\Î\Þ9\ÍN„jº:†i^opCƒ\Ðž*»\ßûŠÊ¢—xP›‘}¼µ’œ¤óüw‡{€¤‹v\Ä[±s(\ÅOŽ\ï\r48ôü\àµ-û@d\ëùÅªW\ßWy\Þ#³ÀK–e¨	¸®$\Ò\Öx\ÖT‹˜Ý¯K9iö\Z`3Rv¶{\ä3¼’x\ê§E0ŸS‘ôWŒ|\Ùùî”™\Ýc¹To\Ê6dz\ê\ê\É\Ñ9P¬’ƒ\Z¥~ŠuUk\r\ßKTŠ$[uÀ\É\ï?\×B†\Ëžü–‰\Âh–\\\0´\Ô\éG\'p\r«\Î;Hn÷ž>)ŽÕ©\Ð\Ûý—L\rÂª4\ê½Dóµž û\ënkóø‡LD¤\àÌŠTó\Å\ZÃ¹k\îo\ç¡ÿG÷Â½Ž‡\ÒVCo!º.\å\r\ÉM_²ˆ\ìƒz¯¢½\Ä\î÷%\Âó8V¯K\Ï*½úH€ü\èbÞœ\Ù<\Ê&|€ú–Ÿ»Q°5\Û\æ\í9X\Ñ™&¸\Ï\ç\Ø\ì²È¥½‡\å\Ä<<•Z\Þ\Zz…\æ\áùS;\á¿ª\à\ß\ÑD¿¥¦¢\ÌÀ\'&a´\ç\Þ\Âhº\Ö\åiŠ>¬\Ñ\ÛcA\àR8·ø\Îã•Ÿ\Æqmº!ª‘Ùºb™\'\Óý\n\0ü#¥¸¬\\Úµ­‚Y–¿}Á\ê+ š„ÿ\0@‚\Ücùœz§—D÷ò¯!~\ì\0Føxn0d©¥w…²¡\ZH\Ú÷Ÿ\ÂõùK…q½aô‹i@úpò\ï\rYyr¥PRƒŒBÿ\Ø\îDüÁÈª\Êm\Ï\ZGÝ²Ö¼\Ù‚­\Í’¢‚\ÄN7\\™hB\'jÖ¨\nô3b\Ú2¥;š“f½¾R¹\×LbE$\È{2}[Aû;\"²<S¢\é~Û˜\Ç\á`õ?7\0o!\áhG\Ø@[mñ\Øqˆ^0//P\ÖÚ½:™¬²¥m]\Ä¾#‘–SñŒ«VJp…\È%Ÿ”žþ¯FW“xŠÀT\àF+\Ê\Éb\Ö`¿Ÿ\í0s°ª\ï\Öó;ý)›h$js\Þ\âø†\Ùi\àXO\è	“;Y$Dœ³‡\Î\Å|þ»198tX‡»Pik\É\êpª>¾N7´%\×D\ÎzI\ÒûøE\Ûþ:W\Å\ÄM!º	\Øò\Ó\Ë4ýT\Â:\ìT\ÔdË¡X¨¡ƒi\Å-\ëÄ§_\â0\Öú\àe÷l²l\n£ifñœ\ç\Ô?‰œAÁ”ö«k €…x@€‚ ø»Î£*_K.4œ_s\r­:Â‹¼›¶ƒ¬©sUUý`¾~»Àç„s)0IfR@W°HÙ‚HáŒ¦-™Š›3„L“\Óo5\ëyjSu7|M#\Ç\æšL•\Ù\äz\Ör‰Ã›5dNÀgj}[Q\n–_:y\íþn²¥£üZ\ßðÉ°\ÔóV—\\n\Úª$0`¥›\çu\èùq‡¿½Àn!Q¤+»-{\ã\È\Ü>¶\È\nH8]Q\áGÑ¦6ooDœ\Z.°ª‡R>:fõ\ìk½im¿\Ò\Ô“®!€[e°ö¢o-×»{\Ô$~}FC\ÍË™=C`ø ºa‘ûS\ÛDA<óž‚þL\'§.\Î	[AŒ\\u“#AV;òg<Ôx«¹\È|\Êw\n\"OaY«¥öW„;¤©LÑ«_c\è^\ïMt›)<õXŠ­±©€ySž(t×™•„\Z(\íOaxó\r±…cº)K|}|5ŒM-ûN©\Ðñ\Å\ËøóÀJq>¤,–œ\ÔO¶/efNX\â\Z\0Ô³Ž\Òq3 ³¤U|+\ÇO˜VVŠ\Ö\Ñ\Ö\×qA’vÑŽôx7L\è+¦\'Ÿñr}\Ïdú–GHa˜\Ê\\\ê&%Ì˜\Â>\ÞA\ã\æ¤’#Á¬œ+\Å18¶],)¸œQœ,’Ô¹\Ã\èæ)$»Tø\ZiºV\Í	øŒ:›´”\ÄDNÈ¥\ã Ä˜#K>¼H\î7»VR©q†^ÙŠ\ný\á \0«?ÛŠC\Æ\Üi„\Ä\äýÌ’G‰\rŠDÅ‚Ÿ4Ò²P\Ú\ë?g®£3v¹¸öô\Ý·6ù:3:\×{	\ÃPŒ%“U[ó¿ú‡_5J€B\á\ÊÛª„žô\ÄL£¨»\×\Ã#w\âB°Ey\Zp§x\ïs\ZÁ\ãÁS“\î–,\åy¯T%·\ËQ¹7>v\É`k»)i\ä=\îžùQ\ß\É	{{>6Ù³–¦ƒoópÚ¬vµ£\Óvò(\Çj‘UT\Í.\Ív—jî®§!™þ9\n\×F=,$\Ä\Ç\Ì\æ\Ã\äbx\ß(|]\æ•<\Êl³ôø:\Ç\Ú\ÇP\Û\È)@856€\ä°=•t;w0\r*VjU¡h\Þq²[C\'9\Ø\Ó\Ã^g\×4\×mR9_«ƒa¦U¿šŸ¾i´]¸È¬\ã¦\ãuòm›±\Ñ\Ü\Ñ\æ\ìÀe,„\ÇEˆH2K G·1\Ð(B3xÖ§\Øÿ•guY%´uÌžšµ\n\ÞygeD	ñ™–!V½\ÍN\á\Ä\n©\ÞB Ï´º\Ñ+}K<š&\ZL“¿\æ\æ¨ôž\èz8™\Ç.e³²¤\ÆN2¿ ,’MRyÓŽ‚4\nIp›´k\í4üOdm*\à1Z—º&}fß¸<\Í\ÃW6\n\á\Ä\Å\\\åü\ë+\ãe\çH\ä(¾\Ø!³‚t\é\Å\Ì‹\Ä\Éii\æºb’–-m²\Æ÷4LN~Y\îö·ÝŒxN3^¼…AŸžÛº\ÉDò\ÂAôo¡„~­\ç\\‚Œ\'L“9Žøh£2\')\ì%\Ù\É\Zf7\×\ß2fS\'-:ºq:oF\ï\ê\'ç’­|­=­\á2\Ú\ážmùÎu@£/*¢F)ùs\Ä\Íq¯cO\å›\æ«\Ì\êF\ïGô\É}\È\Ð™‘½º>¯\Ûÿ|ù,?‰Sr£Â¹z\åÅ‰¹Ù‰\ß3Ó§ð.ÇžòÔ›ùÿh\Í%µ)´ s\È\Óº\Ú\Ø¦¿\Éóhª6>\×\ÔoV‰\ÈtO½ºE?ä‚<(•Ç”X7\æ[l\ZÁ—\Ì`€I$=ñŒ\Ö\'\È\Ã\Æ\Ä\ÈlûHh¸\àº|‘[\îyçŸ¸õž\ëI}…ƒ‚†r¤ø\â\Ã\ìL8O ·\â·\Ðpõ7’º±Ðš¤f_\ß\ÔÈž_\Ù6 ÀTˆùhrF¥N\Ãi0?`wK5ôVŸrb-ö¿\ÕAüd\ÔS°¨›ªQvÞ \r¿\ÃX²\×DA\ÒA3ž½\×B¢Ž¶Õ”„ã¸‹ò6\Ù\\\\/­!¸Ö„Lkð :¦\Ébb\\þ9ñD+\Ù–Þº\0¿š@nxXó\ÌÈ«\ár?”žÎ©Œ\éM\'€\ØNwq\'Mw¥[zZ\æùB—¸Jõ«ˆGû“¤1\\ðÿ\Ähk¿ö`yA(U°\á1m·š\×\Ü\Z=t\ÉÇ®Šöº\Ô$\ÕþË£\Ý1\ïv®\Än‰:\áO\É+²©ŒQe£`©xˆzñ\Ýú <Az!~ñz2\ïzp·cv˜}†\Ä\Ú²\Ê\ÔQmxVk½\Ó\Ü\ÐÁ99¢\ß@×‚ô\Ì7ivšM¶%\ãZ.C*©\ßõ½²\Âþn¹·E@fMð÷\î“ô§$½:\Ö¶‰ªÙ®Ô±Ã¥f\Ç\0¸Ö°0\ÊDq½5Q){·YM/*2O\Ã\ãQ[¢\Ðõu\å\ï\á{-\í	N-o\ä\0©\Ôý¼6vgúŒ\ÜU\ê°z\"\"®³~qÚ•!K’;Â§d1	þ¶6\Ó¢÷ÿg²‚!„¾vû\â3\ì¸%±\ê§ ,\Ôn½\×r².¤E!õ„¯u½ôI»oŸ²Q±˜\ÖMr­%\æ\Í2´ZX…\"£8\Ëûzžu´©õ\æ;µ©1Æ†;\ã¢\á\ÅÈ­õ³\Í\Ú&žýÞ“Gð\ë‹\Ð4‰\áÌ¸&¹––Å–0bòþ\çÒ¦Å‚\îS\n¬&‘bª&\Ò\Ó{\Æhc\Çe”YRñ\Ìº&F\Æd©YK[‡¢\ÎJ0þ™4·±\ïN&\æ#~„ ûº\àOÔA\ß\Þª7­¯ž0º¿\ÉPþ<\é:„òýIb¶’»\Ã\Ý\Ûd\î=&‡\ê6\é€À±¬\Ñ\ÓH=?‹\çÛ•üö¯W/ÁG¶;“~K¡¼\"\ì\Ã9\â=P\É\ç«\Ú ‘÷‘F$g^\é9@–\Èd‡£•õX«¡	Š\îž@z$d\ã? x\Ð\Þ+·¨ü\ìs|´¯\Õ.#û\Âü\ÎÐ½¦]\\nŒK\Ç-—\Ø&¸{Òº\ØinY`ŒüN…8Ì¹5\çó“\Ìq¯ýN¹B4\ÃJ3C”A\0h\ã\í!\ÂüôoB=q”²¿#°¸nE;¹¼ø[†â–I\ë½Gf 4\í´\å@æœ‹^ðŠnpk‡GoS\Ò\ÎüU\è\Îû¿Cõ\î›c\Ô\çðw¼›OF”Žõ”ð¼Šm\Ï\ë#\Ê\Z\ì·•]-Õ†Vwª¿d{õg¡p\Ö0•[›-=«57izVÞ}@«=Ü½Ä“{¾°ò\çÚ´.g&\'Jf‰\n¥U®üû&”€}T\ß+¦’¬&—¾\ç\É)¹÷ðÌ—\ÅT\âüú”5T\"W\Î[R3_IUz\æ\â\ÐôyÜªÓJªq\ÐÖ©‚•\ä\Õ1;¢\ËkPv©\ßþ\ï=@š\î\Â\'„\ØN\ä#y¶q!Ž\à\í&\Þ\Ñhj\ÖÁ˜TQÜ¦ÀÓÇ´€\Æ7\Ä×˜9zkD¾}\Ê?—\Ã#\nÝ¼\î›f1\"1\ë”]žB~6#	Ze¡SgD\ÕMÿ™µ\Ç-¸#I·<\Ö ;Z`[ûÂ½‰\ÃDW²\×ZûjC¦&ü\Zà³™\ÂD‘øƒ7†r`O,~zœC~ÁL¾‚P‚U³.\ÆB¢ý[\ë¸©0Ã£ˆ-þ¯D\ä\Ä\Ó[\0\Å}+pñ™Uÿ\å\î:økx·\ÅIø„Â¯u|$\êÀ\ãé¿£ˆ±›“ªQ\êÂ£—=”\Þ8´jA>GÃ¬u\Ö\×™g\á@’Œ¦«\×\ÑÎ–_Qn\Ý\àS»P%—b÷\Å|>÷x\Ù\Â\Ìxü™`”aq‹­\ÉY\æÿü£\ÇBìš­HÁM{²£mƒù)°\ÖÜŽ[­t/²\ç|T÷™\Ü×ždŽN;-;e:\ÑB“q\Ór!xE4—.½‚\Ìö\r,ºV).\ï„:\'\ËIZDwöô^Ša\Äj\àº%VzB1\×P y€\ç›r”\"\'hYxq(…«T\"\Ý]E\nZ˜] g¸\æEi­”kA=…·¨:½J0@[N•’\ì¢]\Ì5\ØY6‘ñó\êl²G<P‘»……Þ¸²\Ñ>\å\è\ÌyŸðè‚Ÿ…ùm)N?8G’ûiwo\rS6µ5€üÒ¸½«\ÒC`Á;\ä“sGuM\à\Ähvt#T¢\àê®ˆ~¹Š\\hI4\Ëy;£\nŽ­^>…¤f=\éu\á^\ë}\Ó\åQƒû•>s\n‡>’²\ÈÀ&ŸÀH§°\Ø[®ø\Â{v¼|T\ç{¯ó¡\Õt´\Ý\íþÀð·gü(„¡ÿ¤Ë²Ò•Žý `ûO_\Î:ŠYPÖ sU,2úz?\æð\Ï[¡°\åf\ï­\Ã\\–\ÃxwCÖ¡\Ïu\Ûqü°˜¤\î\Â`)©\Z_Ú»*Ct\êÆ·EuV½/s\Å\Í;ìŠ ‰\'ý&ë€Œ~‹9\ÐUB!G°w<EŽ2¥C£C‘•ý“N˜\Û`¨bA\â´\Î3bñQñ®\Z,¹\Ú\çŸ\ßdƒÕqýw®W³\â“ñ\ÔkR´ï¹œP¯\Ä,aŽ\Ø1ºôù‚/P§\à…\á‡\Ò\ßK2\0»¥©ø¶<›\ä3Z¿\á\æ\Êdz4ýV-úš(ªa\'Z’<}k\ï¼”ùÓ±¸©ò$Ó’Qg)¶ü\Ë6»»Y©}µ¿?™ºñBA›û·\é\ã0\"ö·>\"\æÜ—C\Ð\ê\Ù	ÿ\Ê\äŒõi20–\è“¢\Õ\ÊhÏ\Âz.\Äih\Þo8¸Gó!úy,bm¼Aü¹—\â@\î—úù¯)²•\Æ\nØ‘ª8l\Ñ\ä\Ñ\ÔD\Î^+kz\×\r9ž\ÑY\ëyÆˆ´Ÿ\á?\"É¿1\êgµ¡‡\å”/k›\êØ²N¤¸,\å6\æ W¶U\0ˆ–@\ØH•Û“ù€¶l\nwL\é\ìa/K\ï7aVp¯Ä\È$ü½:bº…qŽk”J\Ür’û#h\è\æÆ•!¦Ö’£(x)…j,¹‰*\ßO¹žp\èø\Õ\"h\×\Î\Î\áKôüBnvEs5±ó2\èv°‘\ÎR~ˆ\Í\êÃ¹\Ê\ß\"m\ÓÞ˜Æ¶€)¶À\ì[­\Z¯’§SMt\Û	\æs\\õ—=r7ÿŸÊ©°\Êò2\ÈxÙ«ú Ì¶ÀŒ	\à\í};}‚\ÓEŒp£X\Ûu\ÅS_g	@«+ØµØ ø\í\æV…Ñ†½M\ÔrÿÖ’¡M\Zn@Hp±Ï‘Ì·›\ZÀ=æ¸§’q$›$Ç²¶,\\\æ\ë\ÎS¬ú\0\ï]J”óD\r]õk\Üm\"*s<7Jegp\è¾1Tg\É\ë°\ë\Øp²UÀ#û¬°ˆ\Û3\Þjûž´Ù›ŠÚ´Ÿ@Q\Þt@ÚˆQ@,›\ác\æP\ÕWT\æ.Åˆûƒf\Ê\Ò=\nhhCþ¨~°¶Žõ\Î·{7V÷2\Ö*ÿ?®10\Î\ÂºH4kI¨\0OFukÕ’/{3+eTÿò–,°²SR¤‚1÷×‚qÙu…Ê‚TÈ¹]‚’0½^òs/D—k4jÉšðQ\î¾…\Çcsý”\r\ßpr\ÝdS3\ÜY‚tE´ð\Ç<AeÕ¨G‘4\Ì\\>\ä¬@k¿\Ø¢lºEJ/Z\Üø\r\Ûú^Z0[J`Í»\Ö“ùÎ‹]Q›1:ÿ•LŠÜ»·\Ü.‡‡…ÁG—y\ë\Öc\äúI:¢FŸzñoa]_(4\ØÀ\ìN\êg\"€»kr|¤\ÜJ@q·)\ï\à^\ÝDû\ä\ÝM	ø³ 9ñDÕ•S\Æ>ñ\ìïŠ“? ·ô+¢Wqr>59ð-!¯b˜‰\í\Þ\ì¦\ØU\çý	·\à˜\ìbjU˜@Q.\èþª#c+HHr.´™\Ò6/µq™\âõ\\\Ô1ü&*{I\ÎBA\Ó\Í\È:*šKõ\ãý¹¨m„Ù«‰À®,2•>\ä>X²\ÐÿIED„=‡\\1\Ë2œ\ã«¼)\ã\ï(²žF…\Ä|bŽ®2c~ º\ÚR\0!?_.7\ßÀ\0\0\0',158),(_binary 'RIFFtX\0\0WEBPVP8 hX\0\0\Ðþ*ôô>m2•G¤\"«§$òk\Ép\r‰ihH	=\È\Û#o€h!zTÿ\àa±­“l\Ì_\ÐF{~L\Ä\×B9ü7—ŸnY(¹}[8-ý\0?€€³ùo“ß˜vGù¿\\v%\íw\ï¶s»\ÅýsÄ²\r~÷Ì¾ÿ¼Mþýç›—)\'\ãýC¿¨ÿµõ‡ÿ£Í§ì¾£]4}*nœ±÷§Ò´òX}ª?š.\ÔuÔ³&\Öù\çN~Ž£u\ÍI\Ç\ç/\ë\ÃY9=,Á\Îa|I‰†Šþ\ß\ëzUò\Ð=\'Ž‡‡_š„nú\Ìw‘+œÿIü\\@žoþ_ˆ\æ+õ?¡¸@Sœ\Ä)\Ï6	Ý´£\äQ\ÄÞ„Ö¾\r6\Äô()ƒ9Q\ÍC½ûUö\Ð+U¡¼l\åB\ÑÐ³¼¯p¦\ÃØ¦¢\r\Öf°ûlVùOó2q\Ì\Ò\Ö0T)(ƒaŽ\ÔmJ\ÉCr`x\ì²6\éúñl·=t‹‹ÄžÁ:}˜\ê\ï3‚qþ:\çù\î\ë\ìR&$Ta@ú§=1,\Ç6L\Ýn\n³“³R\ßG©…ÿ³\ÑØiJ}¾“¯\Ê&J–L	p\rH cµ-¯\é\ÏW´ž|`ñ&ð0§T¶®Ã°\ë*\áZ_XQ—õ)‚;L\êl²\ßn	\Z\è\×K0\Ù8e\È÷ù\Õup_ö.zý\Ò].\à°þß¼£3šü`*ùË‰þ“\Ê\Ò\Ë2n¿ýTDb÷o¢UFnCˆŠÁY¬ÿøAB\çõ\Â4ŽùÕ·D¥\Õ,\Ò\Z\ÒÁ>E½\Ï\ë9\è›MT\Å\\€C\â\ä§\ÏJ\ÔÀ´F!Ú‰\Í>£C`\ãmºxœE¦T\êYK\ÌÖ£¯ò‚‰ï¦®6\î\ÛQ”Li2\nt\ácªre^#—AÀ’ºzoYÌ²>ZD\Ê8\'N\Îù\ÏIj©¡œÕ·±„&(4\åU…s>\È/wl¯\ÐÀ£\ÝOŒ\r™ –31O»òV\ÚÕ„.uƒZ5\Þh{ÖŒ°µ?–½˜\Ä\åù¦dß¶;\Ñ\í\Z\îto\0ªgÖ®\ä¹@ý&Å¾hhŒ‹\ÝÊ›\äwø­˜v\Ëó“›ŠZ‡U“\ç¡{rk\Èp³„N ÿ\È1ù<÷U‚™Eÿõ\âôý\Û~„ó‚»\ë_d6\Ä~Pi\ÎûoN§&•ô®D\ã\"À—)¸ý\ärrTqW€³\nf%\Ã:\0a%XÁ§¬”‘˜÷†Z,Yx\Æ\ÅAsg©°û\Zs¶\È\á\Í{\Z•mŒ\0mEb,d\00€žœVT¦|·\×?C©U\Ù\ï:I`2¨+Í‘«ðøÇ©\ÊÄ—X³\Éy\Ï\ç}q\Ò\Æ9ôa\0úFþ\Ìósf³V˜öþ°`\Þ\Õý`+\É#°3\×ú¬ Ý’Á¼5õ–¨ut4[Š¤\å›r°B¢Hz\Õ\ÃÀaEO®ö®–ü¤ÁM^\ê\ßW6YwZ[ü\ÞK·Î‚ù!d\ì÷|·&§t1O3§@¶°F/\ì‰yk#\ß\É¡&±‰§\ÖG}G\Ð0å¸ô\ÝSd‘\0^†Ú’­‰ù€’W\ß[®7¨­î¦‡¢§!V\0µ‰>AÀ{4\Þ99\Ô\\>\'\ê¶\Ð\î¹n½µe½\Ê)\ï³R\Û1‘u§\Ò\n\Î\Èa½\Ðùd9\×)®\Ûkv}ñ\Úö”¸‰JNkük\ZBs®\Î\×=U©po[¢9:™Yc&\Ì,fzŽÈ—-\ÕQ¨\ÚÍ\\\"¬k\\?ô_,\'…4\×ò\áò”°\àO´’1ðõ\Õ5›t&x\Ò3 -\á³Yö8\è\×@“C©\Ñ\Ç9ŠXO\ÝwŒ6¤#ÿ\Ò\Ã|H\àµÙŸ*D \Ê7Z<—@ö\ì:\Ëj\0°{ó  \Í^_HôiSpž¶÷Z›ª…Œ)ù>,}!\È\ÏÕ‰™Öœ78Q\ä:®úX½¯g}\ÏJRµò”\Ö\×3\ÜñMŸ©‘pÜ°±fÆ‘ûW\Ê\Ô\\H\â\ÚýT\ÆýKJp®>’tM€}úH±<xqN\Ù\á‡l\Ù\æ™t%%Ö¯\Çy\ÄFS\Èl4\Ó|#p½‚?ZKª\ØyG}\Ó\Ü\ÓOƒ\Ýs=	¨Mû\ê{:`¿u4¢™°/Tþ1`o|]ê¼P8¨\×\èþý¼W<M¦C¢õ\Ì\ï@t0%\â¢89=¯\áš<¬e/¡\íE‡(\Zô1‰†=\ï\Âh›\îòI›(s}œ© \×L	\ê\ãP°½‰?q,\ãû\Ú\Ä=”7;\Ú/(\ÙJ(’4A®‰3eN€»þð!\î#yÿ¸\ëOÄ™b]¶X®OûŠž˜k­\í¢JeR«\Ç!l!uFmLGù‚\Ä\'\Ã\Ù\ì\ÇO\èyTð\ÌYð¨\Ê[O\Þ%hÜ™u%X\'É&\ÜÇ¸\äŒjŠžDût¼ûüAÜŽ’\r_\ïxB3“¡o®H/ˆ#»³O _¼ŸL§›é™‹…t\Ùh™²ß³ü\ra\Ý\È\äUÃ„k2ó®\è\ËG&Iß”\áN&þ«±¯„ú<:\'ÀT!\ã\É&¦%¾´7”¢\nð~4ù_9¬`œ1,ô@À\î@\Ç2Jx›ƒù\Â\0f«k\×J7¹Å†Gÿae\ÒF-\ÃaBÚ»4÷Ñ’ažÑŽ^ÿó³¯†\å²w+~RÚƒj…8} \ÔB­V—ýì¯‚r{ñ²Í¯±´;-ñF\ÊNÇ»CÝ˜\ác\Â\Ì\×ò¡\â.SsÔ›9¾„Ï”d’“/ð_¿\Èa\Ó(à¯‡w\ëü\ÖN± …Z	0QŽedZô–y{\Ò\"†Gv°š#¤U³W\êÝ™nþ‰£\Í\Ì4¥Â¹ýz\î\îY_«’™TÁY¾¿°%Š}ÿcEò\Ø^D›O‹\"(³ŠË‡\"X£\Þ\Ï!C¤\Ì\Ï÷ô\áTÅžk«¼u£,\áû\Î\É\Â8À\ãø#EöB;ˆE\Â9>Øol«K3\Ë\ÙÏ©m\ßLˆ€n•¬:\Û:Öª–d4	¤\Ús\ÛR\Ê`¸¦bB¶&\Ì\Õ\0i˜\r«\ëH\Ë\Í ”xa||YDÏ¬\Ó%£ÁFOž‡\è—j­O’\×]ù\n²’œ=\Ð;¿3%¶ò\â\èc4ª%º‰ý\ã;€ž0¤`p}\ÔQ\Ê\rz?ô´O_\ÇË…M8 ¡n\ïF5 K?\ÆÚ¯Qm€´ý3Š[˜þ\ÖTÿ\ç–?ú\ÍaJC…·³£ \ï\Þg\å_§‡H¬¬9[@…Dz&\é\í¦¶ü3‚vò*b¢\ãÌ‚˜\0i+_	,­y\çF—°:µ‰\Ý\Çý‰œ\Þ\r4vfT:®I\Ósz°tµø¤#S\Ú\É\Îb$mXÿ\Ê}-±µ:6ˆ»_žúbl@Ç,4y‰b²^Ð‹£“6«]\ïŸ\í\ì-P™\0q•ñ\ÔWŒ}õµ¬8„lój/NJ3¢	ADÜ¯\é<\'Ù\"ô\Õ\ë\åmR\å[Û°\nùªˆap¡»ö$\Å\nýB³Ô­Bˆ3F¡€¿õ÷?°zQð\Ê(G&;˜8\r‰PŸ…f2žb{\Æ\Ê4p$%\Þ?…Yÿ‘Ed?Í˜\ê(lõ=3€zk÷ùE\æØ°\Ò>þs´%%~‘\Z\'ai<\îU¦>·ž­@e®g\ÐAæ“±—l\ãI\ÄYj‘QN2/š=¼­\ë\Z€\'9pA\èò0r\ÖIs\Å\é\\û‘4‘o$;\ìn}©\rûv_¥R²y©8\Õ\0T\â\æ_u½·hŸÊ¬xz\ß%°\Õ]\ìc\"e7\Ô=\ÚG\èúpün)\\GYs„1-¼l\å÷Ž\ãŠ\ç!\Ì\Ãd¯ü€l¤¶$‡\Ôô¸\ßa\Z¹\àQQ	ü¿ð\èÑ•ùS[v†j*1,¯\Ç\å*\æ™JÅ¹þ¨\Ç\ï\çÃ¹= ‹—£\ì\ÅûM´>\Ógüÿ\ä3Mÿô»q¾D<¿¸\äM	W‡³\Ë)O„UÈ¨\Ú\\\rbJ\ï¦¹¢1€“\Ý^g(5ø^\Ü\íqor*óü§…\Ìüc¦0#½q]hùBº_#ü\0vˆX“’Ö˜=ÁIoù\à¶[öøX$\Zô·\Ýô²PZÏ´\\õy¾¬:\ï¨S\èžYŠ·ÿ\ÄX\Ñ2\ë\'|a\äòJù¸-¡Ñ \âA2q\Û,ý@@~“ÆŸuoW¥\Þq¦\Øm\ÅL>\ZCœ\Î5>z¹SD\í„\Z]·ÿ‡ÿü\ZsPÿóÉ³vôõ\'û8\Ê&dj9J\å\ßEŽkÉ‡c ­PñòÄŽw(¬\Êô\àU-\Ç\Æ\ëŸa¬y{}Ü¹ÿ«×“\ÊFq÷³\n\Æu(::…l\íótzzŸ	7ý§x³õýX¿`\rºL½%v\0|Lš?Rø#I*o% \ÍZ\î\Å_‡\ç\ïû\ß\âyR/iŸÿ«G\Ïÿÿ\ìP{Æ©nä¢™¸“\î-6k•xúóV[p½\ï;\ï­ý^\ÔÚ¾Šy\Ò\É=XUµ7\ï¸Y\ë\Ì\ëa+\Ç=\ÇDøž¾£÷¹òÿÄˆ~ST‹T\é8”\ì`œ(²¨÷‚vÙ”øtÿö\åc1\çœ4N+öŽ\'´b\ä\ÄýóÍ·	O§\Û\é\ãkœYT –øÄ‘³8\å\×À5þ¶R\ê\Õ\Ó\Â^xkÙ“)\Âò\Ó)`#sÓ‹\Ãi\ÍFõ*}û¾:—š”°L¼\Å\Z±\ÈE#9Œ†.\ÒZD\"›jª@\'?(Á\Ä\Ê\å¸£g™€J\Ã\Ï*\Û3Cð\Ûm{T\ê;<oZ2÷\ïóS®\Çd+òŸÅ£B¯»NÝ›6_p\Ì\îÁ­\Ì\'ð\Ô=l—À§¾E“P\éU\nÿ3»tbD¡‹9Gªß†š\ê\Ï8ü6Q_V¤ñÝ¢×‘$†”0¨1Æ”kNog\ÊM\èl4˜\n±\ØÖ“¥ÍšF\ßEƒ\n+-PIÿ\Õ\Ñ\ÏB¡÷Á<rŸxŽ2Sº¹Ÿ U’¬¥ú•dC,•‚\ìE\Ð*ñ»w\Ï\æ\Ä\Ã$\Ç\î]d\È\é\Ö\Ël\Ù&kæ”¦/Ç£\Ç¡}†¾6;\é¿F%N\Å\æ¦˜¹)\ÚèŽ³pd°~³{Ã^\Úh3¢7\áinJh¼£\ÈFó˜Emþ=£ºµLÁm,\çÍ·!z¬“ü¬\È]ZGÏ¢¯70O31/v[–%ºK9wS©„OŠ6\Ñ\ì\ßó—\Z1b]´eU9ðZÂŽ¾AíšŒ\\dƒÿ’j1\ÒjG¶\Z)“7 p0`q¢5)…\á÷\ï¯?­f`\å\çdrL5e°†o”\ÞSþgƒ•€\"\Þ0\Ý\"\í\è\Í5§BV}ó\ì£w8\ì\"@JZ–A\"ûÿE¸œ¥2Ÿy*ed\ãw£\Úuó`©œŠË4¬\ÒS\Ä\åp[o(gS8\Ê[¢1\×\í,¼\ä¾,\ZYNº`´\ëù,g¢´z]\ê\àd\îgG\"D`S~Éµ%‹…\ÏôóP÷‹@ö\ZN®\'\0‰\È7a›r…H»K–™1#\ÉÊÛ®r2\Î2ð\é¹[u TÂ—ù.\ÞD¡9ù\àÿ\Ï\ã6” J:\â\ëz¬ó\í”À¶–w¤hC»lƒ³÷ž\Ât$¹-ou¨ñb}]q1ü4(A&ªÀ§£v!‚‚‹\îõ’k\Ö\Ä¾òöAóO|\Ì4\ìw¶\ÜÝªò˜Ë–\ØD\è§ûT\âdúIœ\Þg¸‡°#o­\ê¥\íG\Ô{\è\Ä\Î£§·Ÿ6\èu…U\Ó|g\áxù±ý=Ý­ô3+\"Úž{B\Ø)tª\Ò\'ž\0\0þ²¿o…zq³\ÇdF`¿©œ\Ê\Ñ¶_­\îº‡¿®Í¸\ê³Aÿù\ÌF/ÿ\ì\ÄÜ“\\cý¾\Æ#›ù\âCcš\Ì|›‹\Â<hô\Ã‡/ v™R¼Æ¿¥_\ÙG¦¾Q$\éÃŒD\Ä\ÏóùHæ±†\è­U\Ìq\'	~\ï\'”¤wúk\Òý\Ã7\âƒ<\Ó\çñ\Üq¯\ÍË„\ÐñLlòePÊ®Í‰…°„Æ½mð•\á´\èn=~¡V=˜w·@\Ò‹\ÈG9˜\ß[``H\"‚\Ë*»­H=|3\ÞYÑ´Xú§Ü¤t™#3»\"}ªþ³Ì¯•0\Zn\à•eL÷öŽ\0\Ðu\×\Â-\É\Ëc9™(\Û5B|6œ¬õ\ÄkMmuBˆ‡\Ó:\ÎR\ÔG(J\ëwÀZ\îm<}¢\'\çkL‡.ð÷žm\ÚQ<q\×\Ím\ró~…Y5\ÉE«µúc \r\áƒ%J}\Å\Ïú\ZCE~6£\ï,h\ÅkCµ¤òp€\ÅO\Z[\êL·DK{ŒýB¡b²°bÍƒ‘Ô€õ/Iž!„òÁUê’…\ë\èM¡Œº\à>²^\ÝZx vK\â…OR\rJ\×\Ä\ß\Ù\Ù3>\í_\ÈHg­±ùƒ\Þ\Ú\î#óz4’û?\éA³\à—ó.\Ä\0GFŸ!¬º\à§m9\"¦s\ÔS\Æ\ïm¤#\Ò³ë¢˜\î(º`Äpñ4Àø…\Z¿Cªƒ¼OM‚ô…i:t\æÀ\ë\Â)–a|8ù*Z.\Þ4où(\Ñy«2\0=‚—07g\Z¨¦Å½´¼ªÀ¹@Ùs¾\Ög!_ÇŒ ^~u¨ý\è´wQB=p¦´0ƒ>oD\Ê\çëµ…)Ir\ê¾óo;a&zµÿvÀŽA?ö\án\Í\àþQ®ðš\Ô-¯\êEg—\íZ‹Àõ—\ã\Øú“Ñ¡ý\â\ÜIõ_L\à\éq¬\î€õ\ÈxJ\ÖY?óø´Êºn¢\Þ\Ç\ÃeqF\Ø\É\ì\Æ4#r\È6$½¾\ßoß’±(\Ø°0\Ì‹\é\ÃT!-\n\ÏXB#\Þ\Û’ý‰œ ô,hY’º	)*™\ê&\Ê•þgDQŸµKEt+e\ÓuC÷°¯\Å\Ëx?›J´1N\\yô@¾„].ÕŒ´\çX2P¨\Ë\È\Îhóú¿\'²a/aJ7|)¶=¥@Ñž†Rh!õÍª«ý®\Ðq©\Ô\Ùd’ÿÿN^Yóeoñ•!utŸ†zyõð\'–œ\ëÿö{¥‰¯º¦\"lõ¥3€I–‰š\ÝÜ†:ð\Ñ0º\ìVªÓ¨—À˜\Ðmijs\0&µ\ä\ßam\ëÏ„	“#Žÿ‰«W|’~Ž\áôOsg¸üÛ­¡1ó·¥\Â\Ñ1\Úk\à¨Ÿj•®=f“… \âøðß‰´±\Ê\ëG&,!j\ç\Ð\é	­½¿J†\ãK\íQ\Çð¬&®òL\é}´\Ò\àŒ¥\Øn—/V\\\î€\ì¡/Æ‹\Ü)´§$‡Skÿ%(Å†\Ì=JiP¼b\ßWÃ«`ßb­§\ì\áo\Zj)YŽy©\nw´uü„\0¶,•:\Z¥0,V0g\ÙÐ‹A¬I\È\Ö6\ËµŽ(ótÇ \n§\Ï\Æ\r.D•»\ÇÀGóÌ³o¶nml5:\"x9C£ª€|S4¸\Ñ_™\Þ8ò²q¼üO¤Ÿ /Žü\Ã\Ü\ÚZe1\Î<ñöd\ßˆf)o<rtvŽ\Å&\Ä&ð\Ô\ÃøT\Z¤‡\ä\ç\Ç\å3U\'*! ?fTg(\Ó\ÇS\æ\ÑH3÷ñ\Ãð1‘[a¹ò\á”\ìh\í\0\Înž‘r1ø\ê\ÄF“Q!;œ\"\0*a¬c¶\Ôôƒk\ê\ÖÁ*€ó+\åÜ”\æZ)d~U\ß\â—\Ý&P‘\Ú;ûKÓ´\Â„lº|Ã³¶[c\ÈHÊ§®(7ýaËµ›H·9ß¥Ñ\Ê,\ÅFœŒxÌ™b L\ÇõÑ¨h¯\'út‹8‰º\Í\'¹E’¥»)\å 9­a>õ,~9˜„¨vŒ\å„ _L\ÉÕ©2\n¶;»Q¯\'‰˜”6\ÈQT\ã6†q\ê´m‘ŠÅ£“G«33\ìò‹®û ¼\ÏÂ¤b\Ë\Ý@1\âMZ<Ù¡CŠ%Jspþ\Éôƒ\à‹+#\"c\å2 aÂº¯?¹\ïrU	›©œF\ZùÈ‚+hM\Ùf£µI\àú±;¹<d¬:v’½\Ôð¹|D‚=ÓžÀ|•\Ü[žÉ¨c¿{V4\ãûª\\ó”%a~‹\ë P&g2‡O	ÿ¡\\d´ýŽ\Â\ÞR­Wõ‘~B\Ìb7¦¦\Í\é´\æÙ¨¼·¹\à\×s¦‡o³\ßs\n¾E¼[:£C)!\ë¡\ÃË¬À\ÝV\ìvzŠ×¿N97[þh\Z*\í`«¶„_\"™N~®‰\È\Ú-4´¨\äŠøGY{ùœ­dŠµ ÁE\ZTB\ä*³M w\ÂxCö‰\Âg¼\Õ,·€ŽðÙ£Ì¡{*’T\ÃÄŽ\0I\Ì2-\ÆA?[¢‡·+nµM\×\ÜÃ§ºµB˜\ß\Ça´nz \à\êˆ%3\äBOy¿\è|\n¸Ižp…õ\År\ïf½Ux¶^ñ³õ\Ìúô!£=&v\Ò\ÐÐ¼]_U1q*^§…Ì¬vli=wy‚@9\"¿õüƒ°C\ê=\åù\îûuVëž™	NPy0Vî¿¶$\Ð\Ô\ï$|`\Â\Ìrð¢0(y Ç\Çµ¬¿–FI°‚ò\\½\íg®yc±‚1\ÇI©ø¶\"Q96V—À½8K ½\ÓÌ§\é\Ûøž]­?_E6…ù@%÷Ànö\ä\Z¯‹p\×\Ç5Ÿ\å`ˆ:g}\ÕUW6™\à™¥¸‹°\n\ÕRv6\í›Ð«\Ès§\æ@€—Zz\Ú0Œ¤|Fø´V³U²{\ÞP\ÈYö\Z†—n´ÿßŽrw%\ÑÒ‰\áˆ\ÑK—U¬c\å1š\Åüy\íu%\\%\Ó\ï«5­\é€Ì¦\Û\á\Æ²(‡Œ7\Ýc¥ý\È\Ð.Z\áþ°2ÁV-—|\Ìm„‘…\Ý„ýì•ƒK\å´œ\Ã\í\Ù\Ë^=§/\á\à4\æ \æÁ1„A‹>\å©ô`\ÖÏ´aŽXþa\íZT[EÚƒ\Ãõ/#K,\âX Š\×ðH’U½?þË·e*±ý‘õ¢IYJŠH\ÓT’ÑŸƒ&\0\æ\"»f\"\à½8i$[yòa\ä<:§\í\Ü	x\è\ß}·—¨¥aXùy\ÎÁ¾zò\ÕS‡J\Û0\Öò~?ðøóñi.Ž#ü+:·\ÌJ0oð­c¼?‹ŠRž%@™,„ù\í¤|>Ò±\ë\Ú\è)Ÿ¶N÷W€·#\Ã`µ© —uZ=eC\"\×T€\ë\ÆI\"SPHV·\n ö[l”¾\"Sa d\ã®Â­}\ÓJ°\"ˆƒý\å-#bCc]Ÿ@[ÔS\Ã0÷Á\Ú\"Õœ\ë\á[[–\ê)š\Çe78\Ø\Ð\î\ÑCù\çuEšj\rÔ¶˜c\é\Ù\Ùqa\n\Û>¯oR\à§j\Êu\"v A~\é¤¦1\êkF\Çw­\Ëð\ËCž\á\ÛÕ»9ª£Z¡ù\ìz§\Ò\ï\Å\áX|\×\à~Ü–\Ö\Ù\éS\ršR–33{\'\Ó`?s4O”šû¾#%{t€Ô¹¡\n›0‚\Çi—0‰ý\áŸ\àÁôHMhHq\Ì\æšÈ½bR½¯¤€Sø\Ðû\Ê‘\ÞE²\Û<Z\"­A\çÅ¥R\ÔA42=Íœ\ê§˜,}\Î$|~l¨\í\Èyõ¬Í®\Z\\¨³F«›¯(7mÿ£µP6Cî©Ÿ?\Èôr€Ñ–\\6Ô§\Óö\â)˜Ž3§™\Ühý\îxXrNÜ¿ÿ\ÇüJ\Þ\Å\é\ÌþWWˆ§6‹SW±\áõo±½d\0\ß•\æ\Ú\ÐD\Ý&2l0¢Ê¶+‡ƒ=!/\Ä\çLIŸ=Ÿ’g\åk\è²\è`½‘\Â]]‹5!B_\Ú6÷…–(€XS¨yMüt\Åkž†ö\È{úÿWXy\ß\Ût¤ò\í­TR*‹Ÿ×š®\n°	\ÈK@>¶€\ÜÀ–P\Â_+ª\Ï<D÷S¢\ÓAMz.ñý…2VVnT,ò\Þ4>C9w¶òž…½ø3¿P]\è\Æ\áQªÙ•ü¥ª\ÝU«¯O\nj‚÷c j]Y\Óñ\ê¶ýeˆ\êÿ?4M¾}¾“øgTx†[†BT³1oF%\ãiJhGE PW1vSwc‚\âùc”\Ç\Å\Å?P¥\Í\å6ó¤fdXß‚ß²\Ü=tXp§\Ì;\n8Ú¤®Ë²þQ¶~ë†³ðýÐ.`-ZÄ¥\Ça§[º¼o‚¶´\åN‘\ç¯\0®À®s>¼+“D\Æk;Œ2‡\íwEIlÿ„@–¡ÃŒƒ\Êö,šK\Ö;ñQAŠP\Ö$\Ò&V\ÕEÅ™\Ô\'\Ë\n_$À”‘\æU\ÄW\Ã\\²h\Ögp$\\ˆž\Z¢\Õ\îµt\é)8gù½ˆ°=j@º\Ë=\é\Ñô™\í Gõ\ÔE\ä!$\îePxóª\Ê2\ÍþûZ\Âù;\áÁß´©&™\î<\'_a5§*­¤\çyø‚§g66ß§CN›®‘‹\È\Â\Úôh>~ƒ¹XS1¾\Ï\ÒF\\p\Õ\ái\ê \Ð0\Å0%÷\ëÁ\ç™y“zÐ–ó~üX5¢c­~\'bx§‘|M\â\ít¢(\ÏDd÷¥¾a¿\ëx§O\Ñ`ñSXfNK!wØªñ¡Á\Ü-\ÅÝºd9•—\Úw.oŽ?ðs\Ð^”¼-¾Z‚\ãªr\0¶8 ¥CBMX´!\Ý‡-³R!\×L“SN ³S,\Ù\Æ\Ê\É÷$}LO\é-}¢>®Šc¨\Ò\"r†€úó\Ì\áˆ\Èo)2K?\È/½PV?+.+Ý‚’®\Ém*7t‡ý\Ô?Å¿|10	O°J\ÞñQ™\ÍbA~(1¶žX\Ï\ÉB2/\ÚÀ„I\×q¬xö4\Íz3û°!i¯/)sX¹•\ìGiS^dŠ‹Or4 ©Â‰*æ½‡s«\ÞU¶\ÆË“µÀ¬/p¤! 	u·8ÇœXQ¦\Zñ“QôPz” º\á\ÜE©—„Ló–]K\nB]°#\ÚMŽþ>\ÇZV˜49{«\çMFF\Ôv6\ß\r\ÒeŽ;w\r>Œ[mÜ»~£\×(¸ ôq›p”j\Ðe™Ì‘q™mÿýs×“\È}–<\Ê%ô[Oh^¹6 ¢Éªõ\nš\Å[þ\'~©\Ð)(\r>…	ñdžþš\àt{@G£gþõò¢ð€»Žzš•ò·¼\"\Í\\“[mDƒ®\í\ë÷K•\Ú;—UUõ-\ë„õú\r(\Ü|¿B¼]3c\rz•uò\ão3RW\í|sò¯dûsE\×\äJ\Ë#\Ù%þS*ð\r{“ˆ5\r4–¼m~.ñ¥YfVó)÷\ßU\ç‚·4AAs|Ž<PžüˆDµ LQÅ‹^\Ìi\ÒþTÁ8?u\ßpÁ™sXŽ“´`\Å_\0û(¡ÿ=P$´s\Î5M/õ(_\Ö@\Z\ìžS¸ž¿Œ\ÆÍª@‰ŠÂµoF\Õz\ä”=\éó!»\ãJZN²\ÍRk‡ª·‹+»ôm]‘\ážÚŒrT=)E£er\ÈT¸«É¹÷P¾S(\Å`\Û&Pm°\ÙVœT3Et.oò‚ž#\àM’\ØÄ¾o\Z?¯\ãÈœ\ËW¸\Ö%c¦;\ÆV¶×ª\èo€±˜¢²\Ú^\Ýw7¼	¸™\Í7¨\ÄKDû5$X”óó¿ú6\Ê\ì\Û)a8U^<@¨™i\Ók¥7­\ã\Å\Í_Í¯©K‰L=A³\Õ\Ñ./R/\Zˆ/¶”\Þ°´‹\Ônm—\ìß©Jo•‹\Ñw\é\Ø\Öa%\Ò»\äUS÷\äQ”bô\Ö/-\æ8&\nŽ1b0\ÊÍ›³˜ûfR\ÑôŒbT,\ï§|\Úo\ç\í\ÖW\Ï\îXÿ‘>-¼\Æmsý†º\Ä^\î\áú\ë\r\Ô–=)¸\Ò\ë/k¢sÀQ6\0,”L\ß\\Zby?@A´˜AA±\r–\ãl2²jûý\Ä†ž<\Ø\Å\ê\\˜\è\ÃA5‰þn\Ø¹‘l\ÉNHõv\ì+¾b\á¯x·ò}aªy60_·±/¥\áXt\ZÄ»K&\0dJA\ì®(u±µ\Å\'þûG¥\0j,,Œ™\í¶÷\ÈÍ·\É\ïŸZhœ\0¶ø\Ò;\ë\Ïõ%O^Óšðú(\\?Þ²rhð´¼:\ØK„™‚dª\à­¥[#d˜\Æ\\v\Î9µ4\Ä]•#œÝ³“/·k0`\Úø›x ‹ \"q¹a«&(x.À~DlHšd**7KlS$SÁ¨¹\È™s	õõ_\0¦<G‚–“Y{\Û[[£\É\Î÷+7*ðF\Íý‘óz —$k<|t\'g-“e\ËH¢•*µ<ü\å\Õ‹8s÷\è¯)+x(r}¾ù’Æ¨;E§Ö‘Z˜\ì5)“˜\n\È\\ú†ñ¯z\n•ð\è¿\Éõÿ\Åmñ/~Qøž4\ÖAéµŒ@\Ä\Z\Ç\Ü3L_¼É¡Ó‹2‘ñ	b½fF>¤\Ëx\×\Ê†O\Û<ºŒÿ[¥\ïwC}©›)€5; Ï«Î‚‡°Œ\Ä\Æl!a\Û–{+…Ph\Í&3:5žÀCr7ƒ>Y^\Ô\ËÁŒ“\0˜\'Ÿ,f6ˆ?K*/g•2†‚™;´=+7\Ñ\ß·”\Æ\Z°\æªQ‘Q\ëG\Ô\îEtm	\Æk aZ¸>rZÄ¿Q\íy2\Ó+Z\Z“:½œRÿ\ãEŠŠ0J±!ó@\à™xB€q£«)\îÝ–=ZÔºEi\Þ\á\èv‹\á´$RqðÂ§0ƒ¢ÿH\ÏMV­1´”;ž`«y-8\0\Öä¯¨\Û1\Ò7œ|¾	4\\©\É6(vúÿ¢zÕ¸÷\æ\Ïm\nˆú´\Ê(\0o@V!÷ròm,¸\Â\È\ê#¹‚ºP¸Ê˜žÙ”{³`d=\Ä\Ã\Í}ý£Tª\ÙVbGýdz”JtË¶=4…xZÿùr¯Ÿ½’Õ›M ø\Ãh1ò\\ºU3<YRò–wY\reÀ¦0‰Mœÿ\Õ(]	A\"\êŒ°&\ÑG\â,\í\æ’>¯bdñ$h\\\ÍÊŽON=GA\"GX\Í{º‚«$V¼k-\ÃÉƒIüý\ì>þ„†t²ØºN\î?,\å—$	È°h)v$&Ài0o\Ø²\ê\äjù\Óný§—@#fo\ÂÎ¿–vP\×\Ò\ÔF;[gŒ/ü¨U’H\Ð\Û\ØKš”Ê®\ÞÁô««ÿ\ç€/y¯û³¦ß¡U(\ÕD m–ö	\ËööCpÉˆ\Í\Þ\Å?\'\ÂLYù…9$`¾rÏ´–“]D~	\Ï\ì9\'Aþ\ã¸\"	ey•õÇ§\íJôt¶óDa¸º¯×”_2i$Š\àCvZzÚ©\Ý|Ì°Tú)®\×[”\\Q†-[w\àx°\Þ}OVD\0|\\R:N:D\èô^gMºBœ %h°\Äu94p\Úö9pš6®/\ì•m2R³UU5SÁWS%3˜9\Ò\Z\ÔE³_v@‘P^+VI\Ñ=ho\0€KÈ´V\Zð*|ƒIË»\ä\â^_\Ò!\Ç\á5ô\ÍÁ\Ü#Š¹¨ ¿\0”\Ï. E\Û-)o6_!ò\ÅO“”YòE¹\é\å™—=®\î¯v¸¶\ìÁÅ¿FµV—všG¦O$€õG\Õ(«j;Ã£üÍŠ<\Õ¿\r&‡\Ò\×aD_\Å3?\">XtaG¨~g\î\ÖC\è`m\è\Ö<S	\âÄ€¿¬:VGmñ-4‘ž¯hž^š55.I’5Àýl\â\Ýô¨77Q”ÿ°¨É¼Ÿ\n\È]@…Všn+v,-’2þi5$9ò=ô•·ƒ3Õ¤{‹G\çˆ\Þ\çk÷h\ÆÞ’÷¿d*1\Ñ7´,ðqa˜\å†\Ä\ë„M\È\Ô\ÌP}ü‘¦T\Ù\Å\\{o,}ê¯±&3Ÿ<S¯:8ž·›¬{(Jò¿º\Û\îD4Nz|À\Ç_\Òº^kiýÿ	ØZ!\éŠNu\Ê?A\Ü\r[õb\Í0Ÿÿ?\Õ0CRHº,û\0s+0¼*œl\Ò\n«Ê¦“¹\Ò\ìõópº/U\á\Ü9[ú‹þŸ/¼\ë\è^q\ëp,B‚‹€À\'%\Ó4«H<ø3‡h\Ï÷Gœ‡Ä¥\Õ\Ï[ŠT\ãˆy3K×ƒ!ý\Ñ.¡+c\Ç4\ÃzÑ³a\Ï\'¡dU\Ë;\Ï0X.·*¾S&}cŽ‰™£/—.n•¶¥=\Ú,§\Åa6ç­µ,kS\à‡§Ñ™#’BD\0l\å:¼¦~\"·\rwð6\ì&\ÜÀ6¸ziGþZ“-\ä\Ç7Þš9¶öŠ\ã\×.*mL\ê\ãLNôIJ\È™‘%WZ•\Å\áü	 Ÿ	M³h²\'2N¡Š\Z-Œ^ƒ\àA†0]d\nK‹2s\áÁ¹H>%þ\ã\è¨ß›ú¯\ê×\\È¹\Ö\×?W*\áþrb˜\éŠÑ¸C \×	ý8`aß¯q\Þ\ä—°\Âw\Î+Bû ˆ}… ¹d_G²\"õ¿\ï¼\Î_¹ŸI\rø)g\Ò\Õ+a\ì\ÞuN$£Z\ÈõP`Nœ¥Uo·)OÈ¬uÉ™<\Z\ä>¥>û\ìK\Ö\rCö(£,Pü­\Ê8/WIG>B@Áð>›)\à¬\é“\Z\Íz\Ê]×©;\î\çŠ	f\Ô\'üÉž†s\Ô{\0\Ö5†ó\îg‰½h·:Ÿù¨89®}[U3\Þ\Õ\Ãó§ 3¼ÀWBúYƒ\×…3Áuq\ßùfÜ‚$\Ô_NýSò€\Â\éòñD+ª‰±ºÔž\rGS8¸\Ð\Î\æ\Ä*6IÕ¹†E\à—Võ\íù%\Ùýhf,Aw –Ú­7¢ºlµQ›SU3=<Ž\çP·0:\ÕgiO·;H\Zú¤Ge(#\Ö\"˜ó½X\n‘”K0\ì—\éUXŸ¸I…ˆV‘3f\á.S:±ü¸4I>\ëb\Õ!dU^XW	&<\Êð\Ìúl6­\ÆJ§/<FXý\Ù@ú\ç‘C\ê 5.a\îÀ¬ñ\êyc\é3 }§4jŽj1b if˜V¬\ætvx\évlŠ­n5\Üðßœ\äðTÃ¼\Ï[6^f\Ôñofðö^2‡v\à…E§5c8S¨-™S)\î²7iè²‘²\Ø]@ª@ŽU\â\Ø\á;\Õ\'2W^‹*G=óbY©õ}\Ü÷ý‘”™ø¹‡\æ1øÿ9W\ê76\âŽdþM†i\×i„„{=\Ð~K‘M>\à\ÙL\Ü\Öm<LœbÞ¶auúStB%Í‘h:Â»T\á­c7&J±Á¾\r\Z¿Vü).šrIðr´¾\"dIó\ë~\0©km&¸\ãõ\Ì*¨Lœ³ˆ\Ì\Í3\Õ\ÕP]}>\"©µt\Ãpœ@Ñ«“*)\Ô0e?\é\ì<\Û\áN|\é…\Ú\Ë\ß\"\ÅX\ÚFvO |²qÃT‚#AE¥\Ô\ÊÆ±Va4žÈŒ÷}\È-&‘\×UW\ØuS\Ì$j\Ñ}\Ìl\Ê.‹w–\àjCÄ‘Hea\Õ~\Ò¿e\Ã\Ã[þI7–E7]4û\r¤\ÖÄŠ§\Ç\çE\í?\'\ßÂ°\ÃÛˆ”ó8øT²\r”]Á…fR\ê¯V\Í\Û\08žª!uä°¦\ZÞ½@g´|ÁÚ™¥b;±\0+•6\ÐfŽó¶œ	B„†|\í~WK½[28“s\Þ\æÀ*¦ª‘˜‰d\î¼Ù˜j5FZ€\Û\Äq\Ô\Ãñ\ÅGc´\Ù]`	Áµ{\'P{$”9¿Ë»\à$cp}\ã\ÝÁ\ÊB/ž\Õô©|&ØŠ\Úw¡(ž”dR\Ã÷!—}=¨5PØ©Ÿwmˆþg.LFù8\Äòw5L\Ó\Ù\"žl[K\Öyù¯}µ€œˆ	d›+s2¦¡5f{\0¸üªƒ;\ÐNˆG§ü·\ä\â+‡Š·²\\¦ö\Ó\íJ\ÛÄ°]‰„©‰u\ZR™\ï	˜OÆ¾$<K\Ë\ÏW\Ç6ü{F:cF\åB<DŸÁ\"*¤÷ò\ÏVm×–ÿ\é&ˆ;\é—ü\"a]”€»4…PE7\0Ä€‘\Ò_=ñ’X·o#Ÿ\Ö\Õ\ß²\0l\Ø\à\å\Ä$tœž»‰f\ßg\ä>O¾þ\ÕJÀeV{Ï³ÁKŒ;¸/\íÎ X@R°\àMR\ÌY\æiöe\î2\Ä\áS/MÙ…&&\àš&ofqD‰\\Ü™!<µ\ã…\écGDŒú¥Ó‹|I÷o9\ébðô+Ž–\ÑÄ¢–„•µ\ç2õÈŽUVþTF‚òÞº%ø`º\à\'\îü[Í™ù~(*F\Ò\rw\ë¼\àk±‹\Û/\Ô[þ·Š\\\Å\Þx¿ƒ?QV\06‡\Ý²<\'rš¾®	X?Ÿr.Ê£²\ã\Z-j6 \ã\r¸/7TO\äÊ®U\Ï\\±yzK•…\0ËûY–kO¾Ò¾cí™”\à\'\ä?³› |üh¹\ÎC%„y\nò•35Eú\Ô\í-;\îŠZ{4A\Õ82¢6¬ õ¿\ÈÄ§+\Ï,r_ež\È\Ö|wÔ¤\ÅpÑ®\Ðf\\zb¬³­0÷Ghž\í\0ù€\rfÔ‹\ÕT\Ï!Ú›Ã™:›nJŠ¤S(w®¼€«|ýoŒ\\9\ZftöÂ¨¨ý®H\î:\á\ÂP1LóG\íÁš©\×m#µ›þ3;\'\"?\"\ÕË™¶64\Èu¼ójiú\ÒK‡¸Ì°ª-š\Äú0ºRu\Ö\Ä%¤\Ç1©\é÷c$,gd,»Y\ÚV¶Ÿ\í\æ–K¥<=s;\ï44²e1\êžI¿|¯:Að\røü[}ô3Jp\êV¶\éÞ¥ó\\šð…7†÷\Ø\ÖÐ«+¨x\Ó<-< ƒÂ§#n‡\ÝA>\É\Â\é!?®l¦\"\ß«ˆž;\nš89\Ô6½\"\á7»y\Ä\ßFu^´·\ÏP	2½#CˆönJ\ä9|´¿²l\Âñ\×i†e\Ð\ì#Á+ù\Ä\Èfu·¼vð	\äˆ3¡«@	¡ŸŠ6l\Ä\Èu\0\ØÌš46h\ÒÀ\Õ~\Õe\á\×}Y\n÷\×:lr¡£(€C7\êJa£\ç‚cM«¹—`~\èü,5JWSv»e³r:ø‚ñ˜­\Â4´\åñxPA ™³ZQù\îeA‰T#\Ýctv\ÒB¹/m´Š\'I°=F\\¡£•óhQ\\Ú»6!¾\â\ê‰\Í\ê\"\á\ÄL†!ŒV,§™\ÄhòW^SxC™·©xŒ€W¸ñö×´šq\Ô\æ\ÝYøl\ïóš\"B5œV¯‘-\Óõ÷†*¹%º\r“O˜‡k\ß\é™Cy\Ø\ï\0\\ô\ïÊbµ€ê³»!Tœ\ëŽwrUj\ÄKœôFzþf±:\É/¥˜ª}€Q‰\"#3ŠÅ•\Ðó+p?wô8\Ì\ßúH¼æµº8ygO¥Xe\ÐV\í—,RV,)H­˜¦{FÍ”\Zô\ß\â_ NÃ•ý1žÁµñWh\Ã?C\ê½\nhL\Éô†ú\á®þ&–9\ÅÍŸ&Mx\Ç\ÛVc“y\è\è\È0ñ¤\îw©Yó|7Š\é\Ú6…2~‚ù\ç\â_U¶†\Ã8¢M\ê\ái\n–Ž\Ö\"ý}òvM¤\Å\'ûZ{l8JŸ_\ÒÎ¼¬¼\Î\åY\å•\ÖJ’\Ük6Á	{üƒsí‚¤¢\Í<#o\æC<¼U> l\Ðaª˜¬ÿ\ÕkP\"duˆ9\Ò¥v	¯T8s\çU°#lˆh\Çöó\Ì:u!¸ü\ãÆš\\ø1µIŒˆh \Ä\Ö9\ïX5Ý²‚§ù\Ý\ê\ís»•ù`wŸLÓ‚h´ž¥,·D?\Þ;µµo\íÍ¬À\"aHzün\é@k^ú\ïv;\Ù_­ˆ½\ÈFjÈµ—\ÈN\à[Iñ9\Í!;T¹†\Ù$:¾ºr\ìôŒ\ÓCnf(”­\Ùø\ÞÔƒ,£\Ö:cz¤ø›rñgš¤•õ¸÷ßµ\Ï?\éõlÃ›,\Å_\\Ø¦9¯\Ä<ðÓ»´¦\r¥\Æ\ÐJi\Çz|5Ó‘In&·ú-¤=:ZG¡÷\ÛP±\ä]\ß\Óð!qG>¸\Õ\Æ@	™_/%·XR¢¬ýþoE½\n\Þ6:o£=u‹h\Æ@Â§Œÿ4kŠ\é-O9ˆQ&ˆ5K\î\Ï4\áˆ\íR¤l\ä\Ï~\Ö‚±\Ü\ÔðH½Ý±d»ª\Ç\ÑP›6*VhN\Ø:8\Æ\î/[u~%\ç<§X.)!‹\0‹–D°N¢8$“/ucN\ëaS\ßóË†A·ÜŸt˜dl\×üšuRYšCp¢ñ×—x\Ô}\Ý\Ó\Ó$ñ¯K«û\Ô))xŸ¥Ø­\Ñ\ã//F%T\íÁt\åœPK\Õ|ðp]\Û)†>s-8,grpË¢›F\áò+\É$P\Ù÷§Ð«°…|D7·NÁ( ¤‚¡ySà§¬\îH\É,ŠŸ\Î23#˜•Ðš)=G$\çW\Õmô>æ¨£ºÿ™\Ôk\Z:\×\à\âK\0	bµ÷\ÜLp?\'šœ˜·TrºA?6¡„…v’âŽ»ö\â\Âs@ø~—qZ\ê^\"µ+™Ï¶h\íÁ\ì#\ã\è9¹¤£wö3\å2Üœ{u©	a[\îTý‰¬2\×Iyù\Ø\äR\ÜËµö°Zh³Ýšˆñ´\êhYb1f\ÚÐ½qG/\Û˜øI\äc{\ÍBÞ¦tx®=œks\èz\Ãy^0/\Úøö¾3{tH\ßG¥\Ê\Ú\Ò[¿™\Êc 2\ÐGD\ä&zÅ—…À\")j\Í.újõ*8jSµ8‡¸G\Z¥n\é5‰\ê¦Z«ü\ì¾s$<-­\Øbš\î¢×†²±;¯\æ8f\ÓW€!\Ê\ÕG›\í3–›»\å›gdBš((/P9)<`M•\ÒR²\È@Q\Ã4\ÂÃˆ#Ô»–5 S\Û´\×\ë¨\ä}w®\êù\Ñ\ã\ÒûÀ™\Î$#1y„fÀTŠS ˆ8,%XK|øû\Û[«i=ž\"j‡¸^=÷\æ{\Ñ\Â\Þs±9Š^¯FL\Î98/Êž\ãþ\ï\çN\énYL„¡ös®”´ûA\Í\Íqz{§Uqs?! d‚M¹Gò¹­\Ü\í<†§\Ô@ûÍ¦·û\Ðhø®\È(œû\ÊT\ÄoVû!³%\Ì.À\Þ:5e@Ú–]<\ØÙœk”C>¿­=\Å\ÜÛ€ºòA±”d[0°\è-oV,—Ì¬9›RZ÷\çJbz¤\ß)6„\ïDÐ–¡Fù£¡kÔœ\\øô¬y\È\Ñf^¤š¾\ëK$ƒ\Ä@S?S5¡\Ýñ*_wGª~Ÿþ“\0¤OÁLhÿe@—Ýª-\ÃJK\ÌG„CD\îÿ\r©`ˆ\Æþ^˜m<‡\æ¬a,k5¶·}7\Ö\Ú=\ë\ÇD–\Ä\ï\ìI‹\Ý\Z•†\Ñ?ˆ,´£3N.©;‹\Ç\Îó%R¾®\Ù\ã\è>Tµ‹$es\Ý¾\íý_,i\Ë>1vÿ$)©j\ßtos•l\ç_Ÿ`\Õ#\0Ù¯Î‹\æt?\ê\Ã^\çŒ/S¶C“§¦ûk—M\ê\í²¨ð\ê |[\ä3l\'›Áü¥X\è#g9?Šb=LÁ»#\ï)²²¥<oýöuš.¨\îhb¨#øW•œ\ÒI4ó\"±\Õñ\çeœöŽV¿“Ã»\åø\Õ\È\ê“X!ñ’\Ù/iPÛ²±Œ5%1#\âðý=gG¹­”²þ«\ßþF1ZH…\Å\Ó\Ó+\ãý\\øŒ§,Ì¬(ùDµ\Ã<ù\ë;#«›¡ÇšÁ³GÀ‡a .t\àÃ™Ä¿ó´Ÿ|VÀC˜þŽÒ–û€«\r^Sw\ÐÖÀ\ßÒ ¼Á\Ï¼\í´c“\ìð0£ \"\ÔAy¯;Œ\Ï{“\è\å\0®aÁc\Õdî—»„žw\êþ3­£SM\ï\É\Ý\Í\îžbnt8ŒP\\!ë¥€*£|\É]!ý§²‚\ç¹\Ëc™\Å\àöª\î{\ãño\çñó\Ë\'˜9%QŸøÜ¤\r.<™#\ê×‘\ÉB~]¹÷.šøÒ±¥ý\n:\Ù\äW\Â2/\Þ.ð.ð\íÚ‡ÿ˜Ê€h·\ã–=Y»Œt¯š\ã\ÃYdüi·ÀbtóA>f\Ñ\Ê$ðµÒª%\"\é\Ü-sóKMöÄ³\Ä,k\Ö>3G\Î*\æ}\Êÿå€£\Â=(\ÅsBNLS\'\ã\Ñ?vö\ä3\"!Œ¨Ú†\â\âþ\î%÷Å™Mb›ý˜‘*ùß³F\ë”^nÌ¡=W³~Wù~è„Ÿüq5@y\"nqKd¦Š\Õ\Ô^\Ýt¯\Óù\î\ïV´>‹ð]ñ\Ò\ÔwzÈ¡¨• fµQ,Wý¯\æy²C\Ô\Ñ$\ÔÕ®\Ò1{D‘&‰_K\Èü\Ü\ìò\Øt½v\ï\Ë=³\äbIn\ÈLN’(ß»×¬ùöÀ–\Ù*]÷ò®H•&ˆ£wq_ï¤Z*B`v) ô/`—\Ü\è¢O>.¾ö·\×Uô/$üWB*\é°-9.\ã\ÏÞ”\íõy³ +· ’\Ãû/ N3“ûa\Û4òƒŸCýBI]JŠ§1\Z°	uX%­¹\ë®Ë»{síˆ³•“ø4\r¿ö}ñ\ç\ÜFS¶?º\È,}Ç¶Gf|³\ßò9°;ð£k†ˆ{®$\Äõ\ß#\0\0\ëT$(o™ÿdMv\ÍU¹•\Ìt’)Ÿ…\"A\ÉV¼¯+F˜žŠ­®??\äªHzÀS\Ú{\è¾Ta\Ï÷\Ã:Š\æ\ádÿCj•”3\ß\Ü\Ã!Zk\ÆFôÀ\\#\çu³eL\"–t\É+O\êQ\ã¦u\å\á#\Ö&\\\ÅjI;*‹óJyÃ¨¥÷š`!_@\èDOl²	w¯,\ÎR\Í$‡f¬­\ï\Út ¬±£QYŠ€ÿp%Q¬!ˆ,?\æ\Ç\íÙ‹Á¹ˆÎ•“ñy \Ýj\èk‡M:§ñd u”óÃ›[ü$\Ì\ë\\¼\æ.~ˆœx5r\"U3s?÷GlF\ß\Ñ8)`\Æ&8±¿±D%O–B\"Œ£{kv\èz\íŠEfšg=.Ðª‹\ä\Í\îŠûn\ÇV\ìY\Ò5\Æ<LÖ¿C#öSóA^ö$8|ü³†î‚»*þw½°*\'¤M )y{wñ\Ò¯¸h\n&Yvv\Î\Ï+\â\n\Ý\îõ\ÉfL©vG\Ú\Ñ]ºøÕ¸¹ˆš$‹G\Ô0\Ï(uªZ£M\Åv4\ZÁ¦lŒ\";>$H5\èM¹Î‘	\Â§˜´¿”\Ñ5rBs\ìM\Ê!ušŒ£c›öÍ¯\ïa@\'ö\Ê×¥@\äIs¼\Ë7g\Õ.\Ö\×ù¨\È°woX®LZ·¦£³†~\Ð\Î¤\nq\Î?©l^\n5\Ûm\á¯r*…}d#±SJ\çX@ø\È&‰+\Ûv¢§?;÷ÀWùúg¢\ç3.\àYD6_³c¼\Ñ!ö\Ð\â\â	\ÈH\äµ\Ì^ò\×\\­\ä‡\ZøGrR«K+tqªY”r*³Ð‰	\Ê\Ñ\ç:\ÕŠq-/ôœ¡¡N^¤\0Ë™òúÈ‡\æn\'ô)[7B¤,\ãƒ\n§<<š\Å)|>eý\ÚD-\Ê\ÂE\ãû\Í\Ï\Å+\ÏDp}\Ù\êikoŒ\ç¤üofnAó\ßR€4Ê›wùô†\r\ï\êù«*n›[.\Þe(y=Q\Ð*6µûºuŸJr\"\Î`‰-ƒC2Tµ\ÜPŠ®#`¤vn\Å(J† \ÖM—|\á™	+\Ö1_\ìK\éa—^3}¡µ×ªGe¨¬\é\Ö\á&˜EOi(>)ûKZš\ßñK¡¨µ#·ñA”?.#\ÕWCÿŽ·n˜‰]\Î}F¯\æ4\ì™Z‘[~­\è1ª‡\Ïõx\éˆ?@\Ûæ“’;\r¸F\î\å\â\ï\×|óñzÑ­¤f2\ÂXúq\è“/¿l,˜µ:\ÐiA¿\\¸ót{‰:\'ðÇ—\àK¯\Ü\Ñ \ÏA‡_›—\×IÕ„\ä\Ý%\ÔHûŽ&˜u±®Æ£\Â=vA\Í\Ç\Ñ\Ä}k€	\ã›\×jTÆ¥ÙŽ™{\Ã\ç\âÂ‰>Xº”\Î7\äó·\èÐ¹g[Ÿì€¤Ú³„.\Ö×Œ#r‘8›PIkwc\Ë\Èóø_¹5„-\Ðû­\å}&\ÅW@/X\Øò4Oid7a½Š²Q¨,h¸sv÷\àx\Ò\\¾H¨·xu¿\ákøO”!\æ#D_—3Ð¥h~0\Û\Ý‚÷VÝ¾qÖ»†©sÚ”VYÌ­\í\É`\Õ\àþ$™P>ó¼bÿK+e\\~²³j€5ü}\ïŠÿ\n&•~l²q]Q\ÆEV8²l\Ói¡•¯\Æ\éñ¿\ã[œ\â\æ³;…f\áG\nt\ç¨/±òˆ\nwÀ\á2Œr\ã—1VNNÿª!\rù5ˆ€’\Éû·\Ýt¤øÚ¯J…\"\'\Ò \â\æ2ü\ìH]$w¨\'ml‡—‹æ´‚¡5@F~5v	‹H«6\è\éNÁ—\Ñ+WOiÿ²Œp	Q©gbñ$­õª\n(=œ\ß\ï15\Öl¹\î\Ù|Z«\éJ\ëS(4©½u­\"H­>¹,…I¦\Îo\É\ØDŒGjÛ¯ª\Ê×3c,uW»™ð\ì}}O\Ó.9¿$’\ëM¿Z‹[ŒT®Ë‘F–OP\×k\Ã[š9Í‹\Ì\ï,—ï´½*.¸/\È™\Â\í°Jþ5½›¬\äU|aD\Ê÷\ìm€„\ï\Ä‡\à³>ƒ}I§+?Ø¨Í¨­l{\Ì\È\n\à\É@#0ž¼gŽ]…[”ACÓÚ˜\È)\Ç\Þ+\"€>Où–F™¡¨˜Nkk¾C\\Å¿V’¿¥Y\ÄbT˜ž‰ P“\ê!\Ù\ëUòóNi‘\Þþ¬g—ê¶¸cn7\ê¶Bô<Zf\ß~aÁp\æg²3Ž_\Ðs¨[†D­FS\0PÄˆ%P9\ìÓŠ\Î!Uþ\éxÿ\æ,\á‰°\ß^þ\î\Éþ#f\Ë6 3}\îFÔ‚Wqˆ\ZRÀ\ÊÄ´g<a`øG-\äU~\ß\Ì)¯m%\Ñn7\Ów\ÇH7\r°u@3\ë6]7\Ôu¿\É$5A|¡\nHÜ°I\âc\Îb\á§þ*\ß%€\ï\à\ç\ß².MðF´YÞ¥/þ(‚\Úþ†úFð{\ê©D6jm°Å¹\àÐ­œó°—œ)kN’S\0kneµ±a7pm=§\áŒü’\Ý\í½\Î<OG#®‘Ÿþ-ŽLVm¸YV`w²\î“IÔ¦K\ä\èfYfx¶|yô¤ô>R\ê,ÎˆI:JXf1=\Ã*V\Ï\ÝQ©›ž\Òs¼s\nÞ‰v©ö€:á¯¦Y\ÆÅ¹Š¨¼û:b(q^1\Î/YZ5\ÒFIže\Ñ]þ)r ,9,Š=ŒN\\NŠ+µWÜ\éŠ\ï?dös,\êŽöª\ÝS\Ëw6ª‹,òòVI=\È]PõZÛ¾\Ï18HC@(ýt4T›‹*øT3go–v¥Í¼\ç%ó·…—\ßÿ¯)ú¸ôO³’÷s¸\ÄÝ©¾\Í\ÃÎ#G*+}#¯C\Õ/+ó±(lT©ñˆD\ïM›\çŽÛŠ=\ÇN¶¹I[z“h\Õ¶C7ŒW%>œÍ©ž£8ô\ÒGw°Ü®V}%		RY–«(\rY/Š°¦Ž–Ä’>žÏ—À\ÙSñ™Û’€—¿»XñwŠ!\àÔ¸õŽ|§¶’¡Ü´\Ãù?´‹õXD\êðÂœ‹\×÷?MAJ\ã²F‡xBj8‘p?|u5Äµn\ì²t\çn²Ÿ6&J\ì–Ô‰Tü‚°r¶²®…\ÛÙ‡6 \ë¿/”t¾Lý55\n¬Fðy;.\Þú±dkY`AÜ°H%\ã½M×”a†ÿ\Ü\ÐÂ‚\Ñ\Ìüo;wg¦.r\Õ\æúts22(£‡U¥.Á\Òd7?›pRL³=ü6Z’…9ß¾\\§‡*\é\Ý„;$œq„¯Áô[\êÀ}““5¢qW\Í2š\r~\Ø\åˆ\'&Æ„ó±¬\ì\Õ\à\ß\É>n°\Ø$5ò€\å=½\\hA]¾<*¨œt[bEV*\á\'\È8SVjŠüJP¨º„zO›X\Ñ\ì<0\ß\rh1LŸ	¾ß¾XRfb?†o2»¡š¹ =®-‘å£­,w”LG\ÞùzNH–\è‡õ&IBQLô\Ò\æz\0V¥\Û®Y=79µu£»j;K¢†H\ê\Ô\'š¢heºþÞ»\nÙ­½]c´Œ#\é\çA_zŠR¾rc\ÏbÁ‰Òº!ÇŠ(\Ýjº ¼j?k;ˆ~q·\Ûÿn·š@T8×…CC(‘ª\ëD¾\Ø} Þe<I\Æü¯\é»Dó:*C\Îù!\åÀ1\Zo[\èwp¦@ƒ#*6g\ìK\Ó\ÅÀ\Ô\êj\ÙÍ›_\çn\Z*þ\"\×‹K‘Ó\ßK\Ùt_ÇFþÜ¥¼\æn2\Ù†„\Ù5L\ÝÉžå„z¾\Î\Öð\ÃË¤Ss\ÚZwr³E\"\É(Ù\Ý\0–ß¶\ÜV\Ó{c·,\rqºŽbdEX\Ö\ä4A—LS¶I\ÈÀ\ÅAó¢Ù€V\ãg\Ã\ëùö&÷s\é3ü/Œ¾ \ËS\Ç)ˆ„®“€\Ã\\@B\ê\ØÑªÛ’I\ÖE0y\r\ì\Ô9!/¬\í\\„PƒEg\æ\Ö0Ö{\É	(\ãO\Öõ<\Í]¯ó¾¾´\' –7³{ˆ¹\ì‡6H‚\Ò¨¡J\ëD\Äs¿\\qy\è&‚¿/-±*>T\Ý\åÉ³òøR-bü¢M%ôSþ&’ƒ\æ-9\Í3j\êYCTb\ìä…·\é‡\Û(K\ÍH,}|¶_©:ZB\åš~Fúý%‰¤\èŽf¦\Þ\Ò “\"\Ònô4\ÎÔ¶”‰‹\ÝR\ê®\ç&\ã²\á½M\ä™\êC­­#\âý±ú\Ñ\Ò{E¨\×Mˆ«þ	”ý ‹V\ÃKÃ—R:H;~5`q&”·öV>\à„ôJz&l\n”\ÔO­Q\Òô;o.\Õ²\î©(…2±l¹. \ër\Ì\'\Z\çûšl+üy]£Ÿ_3Mq‰<\Ûw³1‰Ý±u‚ø\Z©§\ä0A(\ä<‘\Ï\Ì}Ï‹Ì‹(v[\";ªE\è\â\\š°\ï²T\Í` 4\ØìšŠ™«¤w–øž\á\Ûm	uw¾\Ì\n\ÓÂ¨°J\åk\Ø\Ñl?jÙ¤Wÿ\Z¨Î¯\ÂI¥˜¶÷Ï“&=\ì‚Ç¯øEKŸT÷\'}s}\ïMo\ØCÚ¥Mf‰\î/‡õ\Ñü£œŠk,¤\Þ-t.»\è%Hð\ÄógJ‚º\ÍvL[¶Ž\×\Î\Å\\ö\ÊP\rAA\Õ\ä\ì¦$\î.–\èMg¨f6<……}\ËK\å²N\î~·“¶@\ãö;\ï¿\æ\ÌQñ\ÊÇŽ!X[k®!\Ò1b£4¯|/—csç‰¾Ž±¹w±,3=\îg…1\ÊG/\\&\Ý\é\Å\Ê|\ávŸ…o¿†\íT\é²\Ív—\å7 !d›€M\è\ã\ìZ‚˜H¹\ïü¸©Ý­\á{À:¸™ü–r\è“\\\âvA¹\Ë\î\à¶9Íš~\Ã^ž\Â5\æü8¬\Ó=ðª°ÿ¢‚\05\"|urž”av_HZ\Z¸ƒgôQ…§V\Ø(Šó \æ_<\ëFŽi•øþ®i2Ÿ¦TŠ\Ñw\ã\Ì\â\ëwAXf\ïðõb™nŒºb\ÂBý\n~\å¯\è(Pÿµt™£ð\Æ5P\ÃÒµüµ\nƒ-4½1\Èp3–Á“˜\ìÀ!t·p4Inð‹2‹«[Ì’\\¯\Î\ÜýTÁ´rÆ‚U\r“\Ü9\ìT­\â¥8\È\Õn\Ý.Œ¾F‘ù\ê\Ø.Mjö$d@ýu¸	g˜q~—O¹@º¤5\ê\ÕxôB«ùYiFCr¥n\Ø_\ë\áª/\"¶ÿ,\ÄúxÈŠ\ÜÂ’‹\ÎbÆaƒI%\ãþ‘¼³g“ ùžñ\ÇuN\årñ\npµ}>+ÈšÀ,\Êzñ°\Û,\Ð\Ú\Ð\Ç\ÃO\Çe½O:5hs\Ö\ëžÝ·¦*u·^¾8Œj]%4ù 0fK\ë]2÷¬ü€æ‰²$K¢S\è\'¨DJò£\â-¼y4gˆþFM“Us\èvÀJðð~\åÝœ‰\éK(\Ê\ÚK)‰Aš8hˆ\à§,Ú¦fÓ†\É^}¬t¿}\Ën^p\\\É>@\Ýd\Îg_\Þ\ê/ÿq½ž/qeAŸ \çÇ¯Á:§\Ì$\Ü{\Çú/9yZ;¶™\\zŽ?Vpþ	sM¢Lû\ÔA\ÔERï°…¯òõ2š\ëph[XÿWþAö½Œx\Ä\ë&”¶«\Ö\Ùma\åÃƒ„­ bøi÷ k\ç‚à§©Y&\Æ\ÏbGYmõ§\Ôc\â…P F³×®^6Ê†	óŽgõü¦…ºº=d¥„“6é˜’.,kFi˜\é‘5ã£½“\n\Ãk×ºLgX\é\Ü9²º™{„¿nÆ©™\rˆ\nÇ±\Ç(.Ö¬£_¨ùƒ´žŽv˜¥>»¯3{H\Ï;L<ÿÒ\Ò4\àF=»\ÆÛ©ÏŒg#\Ë%<\n©\Ó¼\á\\U»Œiñ]üò‚yp`\çö\ç;‚£,&D~úf©kV8)\î\î–\Å\Ðl	¦¨®\"†§—&\Ã\'E\å\ÞE\Í©¡³<\ÝÎ…•¦,PPk\ë\ë¨\îþ\ßp18#É˜@h<öDŸ,“%hd\çu\Ù\Ù$^\Ø\êKŸ]?ˆ Žurš¨˜_KöYR%`¾\áôfžõ¯3\ß~MmÂžN\Ù/›qî´„f\ãÅ¹@ÿ1¤#\Âò7»\ìn}\Ö8š\Ë ª= ¯oÁ-£÷DoƒR¥]#¬À5>ô\ÅI{U$cŠzu„š;0C\Z3F|¦„©Œ4³j4ù‹\ènA¥‰,5š\í\ë±ð´c7•#9(\Ûk|€5\Ñ8Aµ\ëR‡¾>Œ¡b¸\Ðz‡³^ý\ÃX\×b›\Z\ÌÁ‹|\áGü¢+`¡\çT‡lJ—pÁC‰%§‹\Â Ç¢úq†\Úe\Äi.!\í\Ø!ùS9ª“q,§i–>6Á\ØÉ¬ð’°öK§\ÅþFü>m±S”’°?¿Ô½#BA€C‰KðŽ\ÜÈº,Á\Èf†\Ò\æ9­­šLkƒ–\Ói3\ØuG›„g\ÐPƒ^8\Ä&é¶±ðY®«0\ÑT\ç¦aû6˜W©\Îä©¥¨óu»\ìM°vÉ¶ù½\'`‹™ù¶«©sô¡\Ã~ö`»ŒJ\Ú\È\ÜW\ßuÈŠƒ	L¦q’\ÕQXO\ä½÷\Þtˆ1—-Ë§zø¼\ìB`/þhRtùÿl\ìurv\â?J Q)Ï º)c ˆI ¿#hj•QšB\í¯Hy\ä‰\á\áN²Uklpfõ4nzÑ‰i:\Ñ5©\'1c:\Ç¦û;üý–*¼xj\í+n9\ÜX€\ê\Ï\ÊyðzMø(\ê„&F4H5ƒ\Ô\à\æ~a\ìO˜—/\ä\Â\ä\ïaš€ÿ¾ò¦\Ì	ü\'\Ç(\ÙÀ$¦	.õŠc²r\"ú\ê¡\\,mb”\0ýV8\Öó\Öó\Ûú\Å{òŽ­òc”Ë­ø\Ã\ÓŒ´÷³P\ìþšÃ¥¢ÂŠÈ·Q½+¹˜§ž\Å.bº—ûº¿i\Ú5y9K¤\Â#÷\Ä\Ì\Æh²*\0¾a—\Zaw“\Ý\î\Êr\å¤\rQc’>ü\Ñ@]BD‹;4\ãû1«‚¥f¡}L¶¡ShÁ\Î\à{\"\îUI<\Ñ\"œ\Ý-‘|‹Q=k¸\âÝ†z•°Ù»£§Ç Ü£µ3:…\æ8[:‘\0•Š.9	\Ý<\ÄþŠkb·s#\ÌT\à\"}†\Ïq\Æøz\"ý\Çº®³\Û\'y©\Ñ\ß\ÚŽùMýn®·œlvS\ç\ÐO[s”<¿\ÞIsbJ`\îa• š\ÅTm<lP	8\ÒwJ—f¡P	YÀžqwóU±¸·\ïŽ3²¨w\×vgzK0Z\"cXõ¤•IÒ“¨´<knô\ÌWôØ€1ø\n\â\"\Ú5\"¸E?œkÄ·5^\êX\Ú6&\×\Ä?\ì-§\î\å\äHOû“j·1RYmu=©\'&eŒ6¹¼kýµ46k\Ç#=\Ó{&l·T\Ã\Ög—±0\ê~\×\Å\ÃbyMl³2ƒJ\ãûÏ€W5˜§Ù¥\Æ\Ñ\äÌ›“~±Onh\áWnL\Ãoøµ\ÍÀ\Ü2M7yi½öUô…ðQ+ÿ\"øn\Ô(\ÝqT˜\îÈ°Yµ‹šV5N´Ç¹ J¢\ÆbW9\Ì\Ãó>¼\è¾)Ic\"§R\Ç|(\Z\æDŽþÑ¿ˆ\0¦Tgÿ\Þ-\à\äýj;\ÍB;\Öñ\é]’¬jù°\Äcl\É,ù±lYX®\î«d”;\Úä‹£7lw™\êùEÿ‹\ëp\ÞW\rP˜\ÃB—¼j5	•q\Ù\ç\ÛcóZ1šj.\Û?¡\äƒvÅ‘X¶\æú‚,Ÿpn}l\à8ja?|\ÓyB\æ†\å)$õ\Ü`ó\Âr…\ÇBò\ßÞ»	\ç\Ôq\ÜË¯ˆ6\ÇÈº\Øö3û?ƒ´\Ï>À\Â÷i\Í9¢^å¬SŠ>…õ5$CX\ëqž\ÎóÈ½#\Äo`TrŽˆ\Ý0Y\å{ƒ\Ü\ÜT»	l0O\"ó*úa/\é…}3Åœ2†>ô¯.\Ùv>­\ÙLD\'•›¬½5@É‹¬û\Î[5\Ù\Éõ:\èA\Æõ\è\Øwn)]\Ù\Ø\é\Ñ(\Ã<á¾ˆ\áR±](¼s\ÅN+V¾h3*¤ê®”iUc\ÌÞ ´¥[TTøq‰€ÎŒŠ!´â®Ÿ{\Ø¢$&.ŽmTûalË‚e–\ÎaH\Úegò)}\ãY\ÇO¹ŽB_\î]\Ò÷2_wõBQ«™ËŽDgóýü­\Ûq\ïwò„7Éˆ\Ø\"!õ+ƒ\ï4¡ªPÕ§8iÿUU£6\×66¡N”\î2%Q¾6\àqýÀ\Þ 1°§rc])¡þ»3‡mˆÐ°¥\Éz±	b\"šø@va\Å\"v\í\Ü\æ\ê÷¶x\Ü,û¢e‡çƒ—\Ó\Ü\'f®\Zý\ÊdA‰\Å4CMT\ÐG\Õh˜Ž&yÒ \ÈMíš§L\äN¨,±€i\0#Ÿ0¯\Ñe‚7¤5„\Ì=SÊŽµt´Lƒ?\Þ\'Tc\rŸÆ¯ \Ø;™ž\ï`wDl¸©Z(\çe\Ôk\íP\ÃùŸ\×\Ç\ë\ÌÇª’‰¶¡IZ-\â#`·wA…v½ w¨ryAX\Z­\É_ rÁYü‘ “\Ü\Þ2ƒÀx>ªÐ°š\Û\Úðœdö\ï%¤¶ô‚j\Ü \äsk\êÀ¿/3ª3\Ðr3\ãKú±\Ñ\äÂ€Z¸±T;\Ùø8\î\Ìv8\Åý]]A\Åx,†‰±­ðª÷\á!\Õ\ÈPi›\"´‚fÀ0–|8m§Àø(;‚»o\èi6²lóI /\Ë,\ÜW5h¶(¦J»<\é\ç\àÿÀ¿!\Ô\ÞZ¼mb-8\Ó\n\"Z?.\ä6“ EgYœ­.2º\É?Zt\Zû\à›±\".[\Ë\ç3 \'v/¾Ž\â\Ö4u`\"C›\×\áx\ê9ÁD±\"\Þ\ß_\Ãù5a’y©&†Àˆ¨\Ò3¢\Í6³Ó¶uC5¶•~]\Þý.%€C\Ñ\ÂM\Æm÷ˆ\Î>¼{e\Þ\í]“\Þxe.x^ÍI\åñ‚/[†Š5a¤þ| ¢k™¸ñ7F\áU¸¾R=ù\Æ\è\åR²NoBw¼j‰)3’&\ë‹\ÅÒŽž“\Õ˜sð-R|ø¦‰€\nû`»¦ôqL\Ç\0¶	@\Ä\ÈB_\ÌaŽXD2Ý£¯Z¬®\Ó\î).šQ‚qšb\ç¸\ëu6O®‹6\Ý-cEqõ\É\êhÚœyõ*GÎ¦\"^c\é>y\'*\ã9Ÿt¸n5\"\ÙÝ±\ßzM\Z˜¶*‚ö¤öxÁáŽ©7B\Â\Ø.ZTC\Ðjµ}\èúh|rf\à\é›Xšr\Ä\ÇT·€X÷‰r\æõ\äJbþâ£žx‡9\n¢oö›»\'\Û\ì„e»!\ï\Íh^:©M\é\\\"N\ä\Æ>MùÆ£xþ}\ë`Õ\Ãp–|r¸\Ä\Í\'À]&š\"B+\Ùû`\'µ§&\ÕöK \Ò#³XŽ\ÇA	žCË r;D\ÇE„ ½\î\ëÊŒP6÷\'·x\Çq\Â+³® Lðwû\ÇS3…¤ù\Ó,€Hö¯’‹«4º¯h®c&Yv6u§V\ì†ß»ŠÉŸ\è\é»LºP¶=“—o—Sú†‰¥ñ\Ñ`žp‘ú_B¬R3„V\ê\0¹´:¿\ß_o²”ZõS„H\ãRpE\Í\Ù\â-ú\ÑV~+½—6Í“oAw\Æ\ÒÞ¦\ßõ\Ôrmi\Ø+‘¶i\ÏaX†n‘\Ä\Ýi\Ä\îA>07\Ú%Gn¦Zª÷pe\'lZ–\Ù\é\Ü>ø\Üu\0™fM^r\Ðµ øt•\î6·R\Ô‡0\Ä°ó.üG¿\Ìp½FºŠS½ð{mõÿÿ7º¸ºôõ^Á\ÑugŒ\ÈLƒ\Øô5–3‹¸î®®U\Ç\ï\n)/«ô*k\âº\'õøá¼¤yšn±{¤\Ã>€^\Öj(ˆ(Q–\ÎÁ\×?Ìš¾\ÆÁ¡µ=m´ü\ÏÞŸl\Ïú\â}3Œƒ\Ì\Âö:‰2ž%Gäš—ü‡WŠ\×t·S\èx™>»ºŽp.Q¾®	ÿ\'°žF‚©»À¹\Z\Ón\ÉÄ¯Z\Ã\î(\è]Á.o:lÔ„ ¾\Ñ\îRw‰ó‹6\Ë_<$0FŒ•YN<·‡r\Ñ À\ß\Ô;D!³9\ÃH8^yG¥ý\æY\Ög\"\Ði\Ð“lS\Ûx\êM‹i\èxõTRd\Ä%cTñöòE<f\í\r¢‹\Ö\ä{[±uºü²3¢8¦u¤ž4?\å”ig˜?ý2ˆ¯\Äl°ñ*\Ï?ý÷òi\æIœ¢\Ø:8\à#£\Û(prªC£I•7\ÝL%rt%\ê‰;ë”c¾\ÖR5(-Án\Î1À\Ê8ú˜\È}û$\Z¦Ó³<\Ç\ÕU,µ•j0ülÖ‹ó\×[\ç ,µ\é\Åg.\ïùd2\ÅÑº\ÞW´½M\Úe/sš?	\É\ï\æA((%P	ˆ¦\\ùS;šÙ²+\ï[LK(\ïô¿kR\Ü¹Í£1ú\ÚY&iýEµ\ÉV\Ð\Þ\É÷À,}ð=÷\Ó\ã!\Ô\Æ\Ò÷•te\ZÛ¯¯{Šžþ9¢\'2\âcq\â=òA’Qó\Ç¶³Iz\Æ\Ê<)]W„N|É¡fU\åµEn«:Qb5rtxñ\á¬Ó‚\Æ\Ã \0±^K`\Âc\âd*“¤€0À_a\ëû·¹‰\ämù QE—\Â”3©ì‡˜|\Ô\Å\ß\ã(1¿oSQ \ÐK\ç[\ß\ç\ì\Â\Äk6\Øú§pG\ÓG\rP:;9s„ªzg\Ç/?\Æ\×?\×7v ®\Íe€ú\Ï(hl§¾~Yx)iS\n¤‹§,\Ã\Ã &)P\ïÚ¢\Ë(¹òJnð|\Z\×Á\å5#o>vñ…¹-¼Ip#´\ÈÍ‰ŽX	l}Ä¥\ßwE¿\Íkÿ•ŽzšÇ«r²\Õ;÷_Xeú«²\Ë-–<¬€3		4nØ€\Ë\ÕFq\æu\ç\Ò\î—\ì\ã8npx^•‘-ø`¯G\rE‘\Äsð¨sõ›žþs=¸·u7\áÉ±ª´YI\Ì-<3œ{NÅˆ\ÏÙ’\Ò±gy\Zs\Çq>Užü¨9bM˜ª:3D¹º\Ü1\é_¥†p\Ê_3À\ÓÆ\ë\Ï/É·+F=\\0‘³	­‹¤l\ã\rðùùþ\ÅP\ÉÖ¡x\Ð\×}C`{¶N¿‹\ÅºÀ{µ\ä¬.l±\ÇÁ‡ab\ÆW>	Y\ÜpOªdðU4\Þ\";¥NbHtb8;\Î kþ>ÇEZÊ¤\Ò\èñ”i–¢»•v™VQ¨\'µ‡\Æ#\"6ˆ5T)†œ\ä<¡±\Z|‡¼JOy\ØÀa\ÈR¯•%¸A‘Ž-\Ý%\Ö¹z˜\'·“[s@`M–\Úqi\ÞIe†?W\í=YOŒ[¥¨…\ÕÒ¥—£ZV\Í1$\Ã\Z–\î\Ãú\âõ0„\Êóú_;)™ƒb4õun^˜.Eûb\rb|@( \Ð\ìø =—fÔŒ`Q\íq\æ6v\Üz…\Ä@A\àeÂœ›½i@2©\ÐP\×\ëÝ€„}Ÿ«ù\î\×3€möü”(†%‹g!E>]¬\Í\Ûg[\ÑD/þóûŽ¡\ä‚_@ 7“«tVOD\Û\Õ2iNwQU±9‘\ì\è\á%Á¢\ì¯)oI6£*Ko\Ë3r‘(Qh,œ\Ûn·\ÞD0b@*\ê¹\æ!\Îÿ\Î\æªÖ 2‡\0€S\0\0\0',158);
/*!40000 ALTER TABLE `imagem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `informacoes`
--

DROP TABLE IF EXISTS `informacoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `informacoes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `PRECO_VEI` int NOT NULL,
  `POTENCIA_VEI` tinyint NOT NULL,
  `TORQUE_VEI` float NOT NULL,
  `KM_VEI` float NOT NULL,
  `CABINE_VEI` varchar(45) NOT NULL,
  `REL_DIFERENCIAL_VEI` float NOT NULL,
  `TIP_SUSPENSAO_VEI` varchar(45) NOT NULL,
  `ENT_EIXO_VEI` float NOT NULL,
  `CAP_COMBUSTIVEL_VEI` float NOT NULL,
  `OPC_VEI` mediumtext,
  `INF_VEI` mediumtext,
  `VEICULO_id` int NOT NULL,
  `IMG_PRIN_VEI` longblob NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_INFORMACOES_VEICULO1_idx` (`VEICULO_id`),
  CONSTRAINT `fk_INFORMACOES_VEICULO1` FOREIGN KEY (`VEICULO_id`) REFERENCES `veiculo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `informacoes`
--

LOCK TABLES `informacoes` WRITE;
/*!40000 ALTER TABLE `informacoes` DISABLE KEYS */;
INSERT INTO `informacoes` VALUES (104,410,20,12,300,'234kskdfskdfm',32,'H31',3,21,'H1','H1',158,'');
/*!40000 ALTER TABLE `informacoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proprietario`
--

DROP TABLE IF EXISTS `proprietario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proprietario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `PROPRIETARIO_VEI` varchar(45) NOT NULL,
  `TELEFONE_VEI` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=258 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proprietario`
--

LOCK TABLES `proprietario` WRITE;
/*!40000 ALTER TABLE `proprietario` DISABLE KEYS */;
INSERT INTO `proprietario` VALUES (250,'Kaique','31993328321'),(252,'Kaique','31993328321'),(254,'Kaique','31993328321'),(257,'Kaique','31993328321');
/*!40000 ALTER TABLE `proprietario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `veiculo`
--

DROP TABLE IF EXISTS `veiculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `veiculo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `PLACA_VEI` varchar(7) NOT NULL,
  `CHASSI_VEI` varchar(60) NOT NULL,
  `ANO_VEI` year NOT NULL,
  `COR_VEI` varchar(15) DEFAULT NULL,
  `MODELO_VEI` varchar(15) NOT NULL,
  `CRV_VEI` int DEFAULT NULL,
  `RENAVAM_VEI` int DEFAULT NULL,
  `OBS_VEI` varchar(45) DEFAULT NULL,
  `STATUS_VEI` tinyint DEFAULT '1',
  `PROPRIETARIO_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `PLACA_VEI_UNIQUE` (`PLACA_VEI`),
  UNIQUE KEY `CHASSI_VEI_UNIQUE` (`CHASSI_VEI`),
  KEY `fk_VEICULO_PROPRIETARIO_idx` (`PROPRIETARIO_id`),
  CONSTRAINT `fk_VEICULO_PROPRIETARIO` FOREIGN KEY (`PROPRIETARIO_id`) REFERENCES `proprietario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=163 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `veiculo`
--

LOCK TABLES `veiculo` WRITE;
/*!40000 ALTER TABLE `veiculo` DISABLE KEYS */;
INSERT INTO `veiculo` VALUES (158,'HA1231','ASKA3KWJAS1113',2001,'AZUL','SCANIA',8766,3368,'Muito novo',1,250);
/*!40000 ALTER TABLE `veiculo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'semi_novos_tora'
--

--
-- Dumping routines for database 'semi_novos_tora'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-01 20:06:03
