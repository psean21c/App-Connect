-- ** How to run
-- password : campus1

-- -- 1)  Run the command line
-- $ psql -U campus1 -d institute1 -p5433
-- institute1=>

-- -- 2) call the file
-- $ psql -f institute2.sql -U campus1 -d institute1 -p5433

drop table if exists classes;

create table classes (
    id serial primary key,
    cname text,
    cdescription text
);

-- insert into classes values
--     (1,'ESL-1','Sitcom'),
--     (2,'ESL-2','Speaking');

insert into classes(cname,cdescription) values
    ('ESL-3','TOEFL'),
    ('ESL-4','GMAT');

-- How to show detalis for table list & schema
-- # \d
-- # \d {table_name}
-- # \d+ {table_name}

