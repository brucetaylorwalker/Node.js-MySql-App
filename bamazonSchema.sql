DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)

);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vintage Lego Truck", "toys/games", 5.49, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Truck crane", "heavy equipment", 21500.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wheelchair elevator", "health/beauty", 1500.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("2007 Liberty XL2", "aviation", 89000.49, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Food truck", "business", 35000.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Christmas doll", "toys/games", 50.99, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Japenese tea cups", "household", 6.49, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vintage German Erzgebirge", "collectibles", 45.49, 1);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Persian rug", "collectibles", 475.99, 25);
