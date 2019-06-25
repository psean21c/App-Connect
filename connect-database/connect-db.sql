-- ** How to run abc.sql file from DOS
-- $ psql -f school.sql -U postgres -p 5433


/************************************
 1) Connect DB + Create Schema
************************************/
-- connect to postgres (password: connect )
DOS> psql -U postgres -p 5433


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
$ \c school


drop table if exists students;

/************************************
 3) 
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

insert into students(firstname,lastname, country) values
    ('Simon','Park', 'South Korea'),
    ('Cindy','Kwon', 'North Korea')
;
