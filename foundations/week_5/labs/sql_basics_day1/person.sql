CREATE TABLE person (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  age INTEGER NOT NULL, 
  height INTEGER NOT NULL, 
  city VARCHAR(20) NOT NULL,
  favorite_color VARCHAR(20) NOT NULL
);

INSERT INTO person (name, age, height, city, favorite_color) 
VALUES ('Alex', 30, 165, 'Keller', 'red'),
	   ('Lukas', 25, 175, 'Dallas', 'blue'),
       ('Kelvin', 29, 175, 'Dallas', 'black'),
       ('Troy', 45, 170, 'Dallas', 'white'),
       ('Kaeden', 20, 185, 'Bountiful', 'red');

SELECT * FROM person 
ORDER BY height DESC;

SELECT * FROM person 
ORDER BY height ASC;

SELECT * FROM person
ORDER BY age DESC;

SELECT * FROM person
WHERE age > 20;

SELECT * FROM person
WHERE age = 18;

SELECT * FROM person
WHERE age < 20 AND age > 30;

SELECT * FROM person
WHERE age <> 27;

SELECT * FROM person
WHERE favorite_color <> 'red';

SELECT * FROM person
WHERE favorite_color <> 'red' AND favorite_color <> 'blue';

SELECT * FROM person
WHERE favorite_color = 'orange' OR favorite_color = 'green';

SELECT * FROM person
WHERE favorite_color IN ('orange', 'green', 'blue');

SELECT * FROM person
WHERE favorite_color IN ('yellow', 'purple');