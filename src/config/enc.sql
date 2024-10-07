-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 07, 2024 at 12:31 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `enc`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `recovery_phrase` text NOT NULL,
  `password` varchar(255) NOT NULL,
  `secret_recovery_phrase` text NOT NULL,
  `lock_pin` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `recovery_phrase`, `password`, `secret_recovery_phrase`, `lock_pin`) VALUES
(7, 'DEMO', '', '$2b$10$hYuWxXfh.KBWjkbo8Pi9R.la7ZgjxDE73Jn3C4ONEZVB9JA.BwHSq', 'salak bilimbi passionfruit langsat soursop bilberry bush tomato tangerine passionfruit onion blueberry marzipan youngberry lemon sweet potato turmeric habanero banana pepper ginger coconut fig white sapote yam endive', NULL),
(8, 'cherry lychee bignay cacao chokeberry loquat kumquat green chili shallot salmonberry pineapple salak sweet potato white pepper macadamia satsuma cloudberry apricot gooseberry salak cumin millet jungle jalapeño vanilla', '', '$2b$10$DsR3xvetft.STjXRMMaLhezhqcSTSLYXt.JT1ps0TN65VCInQ50Bm', 'cherry lychee bignay cacao chokeberry loquat kumquat green chili shallot salmonberry pineapple salak sweet potato white pepper macadamia satsuma cloudberry apricot gooseberry salak cumin millet jungle jalapeño vanilla', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
