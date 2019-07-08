-- ** How to run abc.sql file from DOS
-- $ psql -f school.sql -U postgres -p 5433


/************************************
 1) Connect DB + Create Schema
************************************/
-- connect to postgres (password: connect )
DOS> psql -U postgres -p 5433

-- drop schema if exists mycampus;
-- drop user if exists mycampus;

-- # create user mycampus login password 'mycampus';
-- # create schema mycampus authorization mycampus;

create role mycampus with login password 'mycampus';
ALTER role mycampus CREATEDB;
\q

/************************************
 2) Login with Schema(mycampus) + Create DB
************************************/
-- Login with mycampus
DOS> psql -d postgres -U mycampus -p 5433

$ drop database if exists school; 
$ create database school;
-- change to school database
$ \c school


drop table if exists students;

/************************************
 3) Create Table / insert data
************************************/

-- note : Do not use wording 'description' because it's the reserved name
create table students (
    id serial primary key,
    firstname text,
    lastname text,
    country text,
    dob text,
    comment text
);

insert into students(firstname,lastname,country) values
    ('Simon','Park','Canada')
;

/************************************
4) Basic command line
************************************/
-- To view help for SQL commands, type \h
-- To view information about the current database connection, type \conninfo
-- To list the database's tables and their respective owners, type \dt
-- To list all of the tables, views, and sequences in the database, type \z
-- To exit the psql program, type \q
