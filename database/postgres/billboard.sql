-- How to run billboard.sql
-- CMD> psql -f .\billboard.sql -U postgres -p 5433

drop database if exists billboard; 
create database billboard;
\c billboard

create table users (
    id int, -- serial (for auto-increment)
    username text,
    characters text
);

insert into users values
    (1,'wine','alchol made in grape'),
    (2,'coffee','hot made java'),
    (3,'juice','cool made in orange'),
    (4,'water','fresh in nature'),
    (5,'tea','English muffin');
