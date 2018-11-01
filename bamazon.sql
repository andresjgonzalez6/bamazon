CREATE DATABASE bamazon_db; 

USE bamazon_db;

SELECT * FROM products;

CREATE TABLE products(
  item_id INTEGER,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price INTEGER,
  stock_quantity INTEGER
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
values (0, 'Phone', 'Electronics', 500.00, 30);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
values (1, 'Television', 'Electronics', 1000.00, 60);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
values (2, 'Computer', 'Electronics', 1800.00, 8);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
values (3, 'Blender', 'Kitchen', 60.00, 80);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
values (4, 'Bowl', 'Kitchen', 10.00, 300);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
values (5, 'Spoon', 'Kitchen', 3.00, 1000);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
values (6, 'Hat', 'Apparel', 25.00, 70);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
values (7, 'Pants', 'Apparel', 80.00, 200);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
values (8, 'Shirt', 'Apparel', 25.00, 750);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
values (9, 'Boots', 'Apparel', 150.00, 10);