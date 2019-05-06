/** MySQL Script
***************************************************************************/
create table users(id int(11) unsigned auto_increment primary key not null,
  username varchar(25) not null,
  passwd varchar(25) not null,
  email varchar(25) not null );
