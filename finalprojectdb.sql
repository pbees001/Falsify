-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: localhost    Database: web_project
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2016_06_01_000001_create_oauth_auth_codes_table',2),(5,'2016_06_01_000002_create_oauth_access_tokens_table',2),(6,'2016_06_01_000003_create_oauth_refresh_tokens_table',2),(7,'2016_06_01_000004_create_oauth_clients_table',2),(8,'2016_06_01_000005_create_oauth_personal_access_clients_table',2),(9,'2021_12_04_171042_add_survey_to_users_table',3);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `client_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_access_tokens`
--

LOCK TABLES `oauth_access_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
INSERT INTO `oauth_access_tokens` VALUES ('12c47724064a873fcaa0f3970a4aca00bb141eda83164ece0038f74990954697492a010ec62a35a0',15,1,'MyApp','[]',0,'2021-11-28 08:37:14','2021-11-28 08:37:14','2022-11-28 03:37:14'),('22223034abb7b668560d9ea31b310f28d19942d359cc3c0e0918ed1e88d9e1bbeeef5fb1a2a6c64a',13,1,'MyApp','[]',0,'2021-11-27 13:08:20','2021-11-27 13:08:20','2022-11-27 08:08:20'),('242f577a57f80f95b507378e27545e7ac836b0b671de2c1a1076b6e0be00ed6fe28bd268ffbe61ab',13,1,'MyApp','[]',0,'2021-11-27 13:07:18','2021-11-27 13:07:18','2022-11-27 08:07:18'),('311d037411987e35558e891cc44d677aa1222fc52b99aa3f566caeb60afb3435b8e5687e4e6b9e80',12,1,'MyApp','[]',0,'2021-11-27 12:39:43','2021-11-27 12:39:43','2022-11-27 07:39:43'),('3206edbb78f0c271aa4fddc09ba7c2b1a83e54c1f39c196db80235568b875042c7bcb07513231944',14,1,'MyApp','[]',0,'2021-11-27 13:57:45','2021-11-27 13:57:45','2022-11-27 08:57:45'),('5c474ed882ad4325351025345fe95e942f227264571177418d10e32e12d012384285b18c32e66e4a',13,1,'MyApp','[]',0,'2021-11-27 13:08:47','2021-11-27 13:08:47','2022-11-27 08:08:47'),('5db8ff4a9ade269a78670e671e8a21d58fff38f765ba5b85fee15ddf35cf38a47c60658742f69a9b',1,1,'MyApp','[]',0,'2021-12-06 02:08:56','2021-12-06 02:08:56','2022-12-05 21:08:56'),('5f7ef63c618c782fb979d7cc76e5e4597056c7e2562f6539f033f614c808f579a04a785239e59052',1,1,'MyApp','[]',0,'2021-12-06 04:03:25','2021-12-06 04:03:25','2022-12-05 23:03:25'),('7bf8ab2cc97f0c3d5552a38458140270b4d8d12aa14d3f6aac1a04ffa66b08fb477ec3721ee27e3f',1,1,'MyApp','[]',0,'2021-12-06 03:41:50','2021-12-06 03:41:50','2022-12-05 22:41:50'),('8642e76d94af9671d8e5c7dfdd7a5ae91a0a724e7fbaa700ee2f558a9d181b7a31f7e99cb9145623',10,1,'MyApp','[]',0,'2021-11-27 12:34:47','2021-11-27 12:34:47','2022-11-27 07:34:47'),('a5f54ac4868fada53cad64db9f8b4bc91eb8c58a0fd255d21432e86fcf4e71884f17a8920b6f876c',13,1,'MyApp','[]',0,'2021-11-27 12:40:36','2021-11-27 12:40:36','2022-11-27 07:40:36'),('a66c60da138deb184058e61ca483dd5b67b20f5986193ddf2839b8805c66944fa8a0c551bf525a76',13,1,'MyApp','[]',0,'2021-11-27 12:50:40','2021-11-27 12:50:40','2022-11-27 07:50:40'),('a7f861b8ea47e3a4dad455dbd60a4b8519b51d9adf3602a7b838c16275014d0ecc3f1fe669278e21',15,1,'MyApp','[]',0,'2021-11-28 08:28:46','2021-11-28 08:28:46','2022-11-28 03:28:46'),('bd6bac8ba011f9b5c44f45af48da0ccb023cfeedf4004b1159a7c211332c26478906860d3079b687',1,1,'MyApp','[]',0,'2021-12-06 04:20:38','2021-12-06 04:20:38','2022-12-05 23:20:38'),('d7caf1f684ca9af1d52ecca80f80ccbffb44708a28bdd7edf1a6cc17299ab1b3b0e33d0dffc7d001',13,1,'MyApp','[]',0,'2021-11-27 12:41:08','2021-11-27 12:41:08','2022-11-27 07:41:08');
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `client_id` bigint unsigned NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_codes_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_auth_codes`
--

LOCK TABLES `oauth_auth_codes` WRITE;
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_clients` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_clients`
--

LOCK TABLES `oauth_clients` WRITE;
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
INSERT INTO `oauth_clients` VALUES (1,NULL,'Falsify Personal Access Client','pPmBThuDQ6LS4fjNtB8UVgXtRqEI1ZPaPoFRFPdD',NULL,'http://localhost',1,0,0,'2021-11-27 12:14:11','2021-11-27 12:14:11'),(2,NULL,'Falsify Password Grant Client','1T4vXkx9mUMFg7HV4THTQlaO1k2HGo3zcJcGIDG4','users','http://localhost',0,1,0,'2021-11-27 12:14:11','2021-11-27 12:14:11');
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `client_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_personal_access_clients`
--

LOCK TABLES `oauth_personal_access_clients` WRITE;
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
INSERT INTO `oauth_personal_access_clients` VALUES (1,1,'2021-11-27 12:14:11','2021-11-27 12:14:11');
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_refresh_tokens`
--

LOCK TABLES `oauth_refresh_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `admin_verified` tinyint(1) NOT NULL DEFAULT '0',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `survey` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'prims','bpriyatham.usapp@gmail.com','2021-10-04 09:06:52',1,'$2y$10$UkSH5WoIXobpksCZk2rlmucuyVpNdLWLZ4NuZhJv3AcMck02wrW2m','qerRUGniM7PIY5nmI45MC7h3tdJfEuN34DNCcRkZ6i2CMcy2w72lUp7G3Bn9','2021-10-04 09:01:51','2021-10-04 09:06:52','              18-1121314253;2-1221334354;36-1121314152;34-00000;34-00000;34-00000;34-00000;34-00000;31-00000;34-00000;34-00000;34-00000;22-00000;22-1121324253;'),(2,'admin','admin@gmail.com','2021-10-04 09:07:52',1,'$2y$10$INB8KlD3aeob4arybBd/RO4Tiyd//84iIEpnfhQMS4JT6FMxWZlCq',NULL,'2021-10-04 09:05:01','2021-10-04 09:05:01',''),(3,'asdf','asdf@example.com',NULL,1,'$2y$10$EyikNdnIwuQf37RV32CaCOss6DoPI6WqToHri8c3XddOCMBitsEj6',NULL,'2021-10-05 02:28:14','2021-10-05 02:28:14',''),(4,'zxcv','zxcv@example.com',NULL,1,'$2y$10$1TpQ1F./rnirxCuIC5pfp.F9SsjOwVz.B8IvpW9vbpLl.nUliMVSK',NULL,'2021-10-05 02:28:48','2021-10-05 02:28:48',''),(5,'qwer','qwer@example.com',NULL,1,'$2y$10$c0VUIy/FKqIJYeNEbe6AvOZzoQIAhN.NnrNQ9swfnZxYf8n4cn8ii',NULL,'2021-10-05 02:29:11','2021-10-05 02:29:11',''),(9,'Priyatham Beesipogu','pbees001@odu.edu','2021-10-05 08:45:44',1,'$2y$10$9OG.RNJT3gY8PLe7s1AAreZsyV10lmfRYnZ.nEKsQsEQaqjO4nJMa','KIFZzz3ahATVTA56XsowBPZfSrIhekIOG6uiSso3Wdn50XG1N52BHvnvt8Od','2021-10-05 08:42:30','2021-12-05 10:15:00','                     34-00000;34-00000;22-00000;22-1121334152;22-1121334152;34-00000;34-00000;34-00000;34-00000;22-00000;5-00000;5-1121334352;34-00000;34-00000;22-00000;25-00000;25-00000;34-00000;34-1121314151;48-00000;48-1121324152;'),(10,'qweasd','qweasd@example.com',NULL,0,'$2y$10$UXwpHkl.axk9XFPDz7Ptr.1AoGM8VoIm.ruSmYAMfcF2Kzrcntso.',NULL,'2021-11-27 12:34:47','2021-11-27 12:34:47',''),(12,'qweasdf','qweasdf@example.com',NULL,0,'$2y$10$DI8Xs/8i1ba9w.bLC5aFTurGnKeuFggH8AQVdYZix/q5kHhh8nVUG',NULL,'2021-11-27 12:39:43','2021-11-27 12:39:43',''),(13,'qwerasdf','qwerasdf@example.com',NULL,0,'$2y$10$r4DLu8D4ig..3qlQ2bEKYey1yfqevqxkA46tyVz7tY6nMlTtWkouu',NULL,'2021-11-27 12:40:36','2021-11-27 12:40:36',''),(14,'asdfzxcv','asdfzxcv@example.com',NULL,0,'$2y$10$fdL.m2ucvYY9TPFuWPjbBOqFOcyAP9wzsxa9P4Zv0WykUgOZ9MTlK',NULL,'2021-11-27 13:57:45','2021-11-27 13:57:45',''),(15,'ram','ram@example.com',NULL,0,'$2y$10$lk.4YZ5G5A45PpQ566GobOKu134Z5RN0YW579x6e1VUjS4DsKgE9C',NULL,'2021-11-28 08:28:46','2021-11-28 08:28:46','');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-09 16:12:58
