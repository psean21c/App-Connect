-- ** How to run abc.sql file from DOS
-- $ psql -f school.sql -U postgres -p 5433


/******************
 1) 
******************/
-- connect to postgres (password: connect )
DOS> psql -U postgres -p 5433

-- drop schema if exists mycampus;
-- drop user if exists mycampus;

create role mycampus with login password 'mycampus';
ALTER role mycampus CREATEDB;
\q

/******************
 2) 
******************/
-- Login with mycampus
DOS> psql -d postgres -U mycampus -p 5433

-- # create database school;
-- # \c school
-- # create user mycampus login password 'mycampus';
-- # create schema mycampus authorization mycampus;
-- # \q


$ drop database if exists school; 
$ create database school;
$ \c school


drop table if exists room;

/******************
 3) 
******************/

-- note : Do not use wording 'description' because it's the reserved name
create table room (
    id serial primary key,
    cname text,
    cdescription text
);

insert into room(cname,cdescription) values
    ('ESL-3','TOEFL'),
    ('ESL-4','GMAT')
;
