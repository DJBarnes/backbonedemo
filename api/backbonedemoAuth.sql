-- phpMyAdmin SQL Dump
-- version 3.5.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 18, 2013 at 06:51 PM
-- Server version: 5.5.29
-- PHP Version: 5.4.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `backbonedemo`
--

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
            (4, 'Markers', 'Markers for dry erase board', 12),
            (5, 'Paper Clips', 'Office Max Paper Clips', 56),
            (6, 'Staples', 'Stanley Staples', 78),
            (7, 'Post-it', 'Post-it notes colored', 9);

            -- --------------------------------------------------------

            --
            -- Table structure for table `users`
            --

            DROP TABLE IF EXISTS `users`;
            CREATE TABLE IF NOT EXISTS `users` (
                `id` int(6) NOT NULL AUTO_INCREMENT,
                  `username` varchar(20) NOT NULL,
                    `password` varchar(32) NOT NULL,
                      PRIMARY KEY (`id`)
                      ) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

                      --
                      -- Dumping data for table `users`
                      --

                      INSERT INTO `users` (`id`, `username`, `password`) VALUES
                      (1, 'kvcc', '5f4dcc3b5aa765d61d8327deb882cf99');
