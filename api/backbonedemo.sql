-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2013 at 11:04 PM
-- Server version: 5.5.24
-- PHP Version: 5.3.15

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `backbonedemo`
--
DROP DATABASE IF EXISTS `backbonedemo`;
CREATE DATABASE `backbonedemo` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `backbonedemo`;

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
CREATE TABLE IF NOT EXISTS `item` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) DEFAULT NULL,
  `description` varchar(55) DEFAULT NULL,
  `quantity` int(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`id`, `name`, `description`, `quantity`) VALUES
(1, 'Paper', 'It''s Paper Yo!', 13),
(2, 'Pens', 'Pens to write with', 25),
(3, 'Pencils', 'Pencils to write with', 6),
(4, 'Markers', 'Markers for dry erase board', 11),
(5, 'Paper Clips', 'Office Max Paper Clips', 56),
(6, 'Staples', 'Stanley Staples', 78),
(7, 'Post-it', 'Post-it notes colored', 9);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
