CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  person_id INTEGER NOT NULL,
  product_name VARCHAR(120) NOT NULL,
  product_price FLOAT NOT NULL,
  quantity INTEGER NOT NULL
);

INSERT INTO orders (person_id, product_name, product_price, quantity)
VALUES (1, 'Fender Stratocaster', 999.99, 1),
	   (1, 'Fender Precision Bass', 799.99, 1),
       (2, 'Aguilar Tone Hammer Pedal', 299.99, 1),
       (3, 'Gibson Les Paul Guitar', 1289.99, 1),
       (3, 'Big Sky Pedal', 649.99, 1);

SELECT * FROM orders;

SELECT COUNT(quantity) FROM orders;

SELECT SUM(product_price) FROM orders;

SELECT SUM(product_price) FROM orders
WHERE person_id = 3;