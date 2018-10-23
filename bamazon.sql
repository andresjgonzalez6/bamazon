CREATE DATABASE bamazon_db; 

USE bamazon_db;

SELECT * FROM products;

CREATE TABLE products(
  item_id INTEGER AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price INTEGER,
  stock_quantity INTEGER,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Phone', 'Electronics', 500.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('TV', 'Electronics', 1000.00, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Computer', 'Electronics', 1800.00, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Blender', 'Kitchen', 60.00, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Bowl', 'Kitchen', 10.00, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Spoon', 'Kitchen', 3.00, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Hat', 'Apparel', 25.00, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Pants', 'Apparel', 80.00, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Shirt', 'Apparel', 25.00, 750);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Boots', 'Apparel', 150.00, 10);