-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: 43.200.235.85    Database: airlines
-- ------------------------------------------------------
-- Server version	5.7.39-0ubuntu0.18.04.2

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
-- Table structure for table `airportList`
--

DROP TABLE IF EXISTS `airportList`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `airportList` (
  `name` varchar(20) NOT NULL,
  `code` varchar(20) NOT NULL,
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_d52230a317707d8545b19abd64` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `airportList`
--

LOCK TABLES `airportList` WRITE;
/*!40000 ALTER TABLE `airportList` DISABLE KEYS */;
INSERT INTO `airportList` VALUES ('제주','CJU',1),('인천','ICN',2),('부산','PUS',3),('광주','KWJ',4),('방콕','BKK',5),('세부','CEB',6),('하노이','HAN',7),('오사카','KIX',8),('하얼빈','HRB',9),('웨이하이','WEH',10),('홍콩','HKG',11);
/*!40000 ALTER TABLE `airportList` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookList`
--

DROP TABLE IF EXISTS `bookList`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookList` (
  `flight_uuid` varchar(45) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`flight_uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookList`
--

LOCK TABLES `bookList` WRITE;
/*!40000 ALTER TABLE `bookList` DISABLE KEYS */;
/*!40000 ALTER TABLE `bookList` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flightList`
--

DROP TABLE IF EXISTS `flightList`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flightList` (
  `uuid` varchar(50) NOT NULL,
  `departure` varchar(45) DEFAULT NULL,
  `destination` varchar(45) DEFAULT NULL,
  `departure_times` varchar(45) DEFAULT NULL,
  `arrival_times` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flightList`
--

LOCK TABLES `flightList` WRITE;
/*!40000 ALTER TABLE `flightList` DISABLE KEYS */;
INSERT INTO `flightList` VALUES ('af6fa55c-da65-47dd-af23-578fd7a40bed','ICN','BKK','2021-12-02T12:00:00','2021-12-03T12:00:00'),('af6fa55c-da65-47dd-af23-578fdba40bed','ICN','CJU','2021-12-02T12:00:00','2021-12-03T12:00:00'),('af6fa55c-da65-47dd-af23-578fdba40bod','ICN','CJU','2021-12-02T12:00:00','2021-12-03T12:00:00'),('af6fa55c-da65-47dd-af23-578fdba40byd','ICN','PUS','2021-12-03T12:00:00','2021-12-03T12:00:00'),('af6fa55c-da65-47dd-af23-578fdba41bed','CJU','ICN','2021-12-03T12:00:00','2021-12-03T12:00:00'),('af6fa55c-da65-47dd-af23-578fdba42bed','CJU','ICN','2021-12-03T12:00:00','2021-12-04T12:00:00'),('af6fa55c-da65-47dd-af23-578fdba44bed','ICN','CJU','2021-12-03T12:00:00','2021-12-03T12:00:00'),('af6fa55c-da65-47dd-af23-578fdba48bed','ICN','CJU','2021-12-03T12:00:00','2021-12-04T12:00:00'),('af6fa55c-da65-47dd-af23-578fdba50bed','CJU','ICN','2021-12-02T12:00:00','2021-12-03T12:00:00'),('af6fa55c-da65-47dd-af23-578fdba99bed','ICN','CJU','2021-12-02T11:00:00','2021-12-04T15:00:00'),('af6fa55c-da65-47dd-af23-578fdbr40bed','ICN','CJU','2021-12-03T12:00:00','2021-12-04T12:00:00');
/*!40000 ALTER TABLE `flightList` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-20 19:17:14
