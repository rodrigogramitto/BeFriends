-- DROP DATABASE IF EXISTS befriends;
-- CREATE DATABASE befriends;
-- \c befriends;

-- DROP TABLE IF EXISTS userinfo;
-- DROP TABLE IF EXISTS hobbies;
-- DROP TABLE IF EXISTS pictures;
-- DROP TABLE IF EXISTS friend;
-- DROP TABLE IF EXISTS message;
-- DROP TABLE IF EXISTS direct;
-- DROP TABLE IF EXISTS circle;
-- DROP TABLE IF EXISTS usercircle;
DROP TABLE IF EXISTS events;

CREATE TABLE userinfo (
  id serial PRIMARY KEY,
  firstName varchar,
  lastName varchar,
  username varchar,
  email varchar,
  birthday bigint,
  location varchar,
  profile_pic varchar,
  banner_pic varchar,
  latitude numeric,
  longitude numeric
);

CREATE TABLE hobbies (
  id serial PRIMARY KEY,
  user_id int,
  hobby varchar,
  FOREIGN KEY (user_id) REFERENCES userinfo (id)
);

CREATE TABLE pictures (
  id serial PRIMARY KEY,
  user_id int,
  url varchar,
  caption varchar,
  FOREIGN KEY (user_id) REFERENCES userinfo (id)
);

CREATE TABLE friend (
  id serial PRIMARY KEY,
  user_id int ,
  friend_user_id int,
  FOREIGN KEY (friend_user_id) REFERENCES userinfo (id)
);

CREATE TABLE direct (
  id serial PRIMARY KEY,
  user_id1 int,
  user_id2 int,
  FOREIGN KEY (user_id1) REFERENCES userinfo (id),
  FOREIGN KEY (user_id2) REFERENCES userinfo (id)
);

CREATE TABLE circle (
  id serial PRIMARY KEY,
  name varchar
);

CREATE TABLE usercircle (
  id serial PRIMARY KEY,
  user_id int,
  circle_id int,
  FOREIGN KEY (user_id) REFERENCES userinfo (id),
  FOREIGN KEY (circle_id) REFERENCES circle (id)
);

CREATE TABLE message (
  id serial PRIMARY KEY,
  circle_chat_id int,
  direct_chat_id int,
  user_id int,
  message varchar,
  date bigint,
  FOREIGN KEY (user_id) REFERENCES userinfo (id),
  FOREIGN KEY (direct_chat_id) REFERENCES direct (id),
  FOREIGN KEY (circle_chat_id) REFERENCES usercircle (id)
);

CREATE TABLE events (
  id serial PRIMARY KEY,
  name varchar,
  start_date bigint,
  end_date bigint,
  circle_id int,
  FOREIGN KEY (circle_id) REFERENCES circle (id)
);


