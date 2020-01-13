-- PURPOSE: We define the structure of our sql database here
-- This file is merely the schema for the database
-- To build this out, you'll have to run the following in the terminal (but not within mysql (?))
-- mysql -u <username> -p <schema.sql;
-- All this line does, is invoke the sql code within the schema file (you could copy and paste this all into mysql if you wanted to, this just makes it easier)

-- Make sure to draw out the database correctly before writing this out

-- STEP 1: NAME & DEFINE THE DATABASE
-- ---------------------------------------------------------------------------------------------------------------------------
-- Simply just run the following functions for the name of your database

-- DROP DATABSE IF EXISTS ball: this will automatically drop the entire database
--      whenever this file is rerun so that there won't ever be any conflicts happening
-- CREATE DATABASE ball: this will actually create the database with that name
-- USE ball;: set the current database in use as ball


DROP DATABASE IF EXISTS ball;
CREATE DATABASE ball;

USE ball;


-- STEP 2: NAME & DEFINE THE TABLES
-- ---------------------------------------------------------------------------------------------------------------------------
-- DROP TABLE IF EXISTS tennis;: same reason as the drop database, to clear it out before re-running to avoid conflicts
-- CREATE TABLE tennis(): here we define the columns of each table and their properties,
--        Make sure to know what each of these does...

DROP TABLE IF EXISTS tennis;

CREATE TABLE tennis (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  item_name VARCHAR(255) NOT NULL,
  amount INT NOT NULL
)