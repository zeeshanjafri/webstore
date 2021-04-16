-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.23 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for ecommerce
CREATE DATABASE IF NOT EXISTS `ecommerce` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ecommerce`;

-- Dumping structure for function ecommerce.Check_product_stock
DELIMITER //
CREATE FUNCTION `Check_product_stock`(
	`product_name` TEXT
) RETURNS int
    READS SQL DATA
BEGIN

DECLARE product_stock INT;

SELECT stock INTO product_stock
FROM products
WHERE name LIKE product_name;

RETURN product_stock;

END//
DELIMITER ;

-- Dumping structure for table ecommerce.customers
CREATE TABLE IF NOT EXISTS `customers` (
  `customerID` int NOT NULL,
  `last_name` text NOT NULL,
  `first_name` text NOT NULL,
  `address` text NOT NULL,
  `postal` text NOT NULL,
  `balance` float NOT NULL COMMENT 'balance of money user has',
  `login` text NOT NULL COMMENT 'customer login username',
  `password` text NOT NULL COMMENT 'customer password',
  PRIMARY KEY (`customerID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table ecommerce.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `orderID` int NOT NULL AUTO_INCREMENT,
  `amount` int NOT NULL,
  `orderCustomerID` int NOT NULL COMMENT 'customerID of order',
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `productID` int NOT NULL COMMENT 'productID link to products',
  `invoiceAmount` int DEFAULT NULL,
  PRIMARY KEY (`orderID`),
  KEY `FKOrder_Product` (`productID`),
  KEY `FKOrder_Customer` (`orderCustomerID`),
  CONSTRAINT `FKOrder_Customer` FOREIGN KEY (`orderCustomerID`) REFERENCES `customers` (`customerID`),
  CONSTRAINT `FKOrder_Product` FOREIGN KEY (`productID`) REFERENCES `products` (`productID`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for view ecommerce.order_product_customer_view
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `order_product_customer_view` (
	`orderID` INT NOT NULL,
	`name` MEDIUMTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`amount` INT NOT NULL,
	`first_name` TEXT(65535) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`last_name` TEXT(65535) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`invoiceAmount` INT NULL
) ENGINE=MyISAM;

-- Dumping structure for table ecommerce.products
CREATE TABLE IF NOT EXISTS `products` (
  `productID` int NOT NULL,
  `name` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `price` int NOT NULL,
  `stock` int NOT NULL,
  `categoryID` int NOT NULL COMMENT 'Id to group into food category',
  PRIMARY KEY (`productID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table ecommerce.shipping_method
CREATE TABLE IF NOT EXISTS `shipping_method` (
  `orderID` int NOT NULL,
  `shippingID` int NOT NULL,
  `company` text NOT NULL COMMENT 'shipping company',
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'shipping date',
  `charges` int NOT NULL COMMENT 'additional shipping charges',
  PRIMARY KEY (`orderID`,`shippingID`) USING BTREE,
... (185 lines left)