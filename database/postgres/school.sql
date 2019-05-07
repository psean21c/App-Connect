-- ** How to run
-- $ psql -f school.sql -U postgres -p 5433

-- connect to postgres (password: connect123 )
-- $ psql -U postgres -p 5433
-- # create database school;
-- # \c school
-- # create user campus1 login password 'campus1';
-- # create schema campus1 authorization campus1;
-- # \q

drop database if exists school; 
create database school;
\c school

drop schema if exists campus1;
drop user if exists campus1;

create user campus1 login password 'campus1';
create schema campus1 authorization campus1;
\q

