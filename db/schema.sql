### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE INSERT INTO cats (name) VALUES ('Molly');
INSERT INTO cats (name) VALUES ('Charlie');
INSERT INTO cats (name, sleepy) VALUES ('Poppy', true);
INSERT INTO cats (name, sleepy) VALUES ('Oscar', true);
INSERT INTO cats (name, sleepy) VALUES ('Smudge', true);
INSERT INTO cats (name) VALUES ('Daisy');

(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
