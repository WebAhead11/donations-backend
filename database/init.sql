BEGIN;

DROP TABLE IF EXISTS donations,users CASCADE;

CREATE TABLE donations (
  id SERIAL PRIMARY KEY,
  item_title VARCHAR(255) NOT NULL,
  item_descriptions VARCHAR(255),
  photo VARCHAR(255) ,
  category VARCHAR(255) NOT NULL,
  area VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  delivery varchar(255) NOT NULL,
  item_status varchar(255) NOT NULL
);



INSERT INTO donations (item_title,item_descriptions, photo, category, area,city,email,phone, delivery,item_status) VALUES
('T-shirt POLO','size XXL white color','','clothes', 'NORTH','Haifa','mario.saliba98@gmail.com','0543198210', 'yes','available'),
('T-shirt NAUTICA','size XL GREEN color','','clothes', 'NORTH','Nazareth','mario.saliba98@gmail.com','0543198210', 'yes','available'),
('T-shirt NIKE','size L BLUE color','','clothes', 'CENTER','Tel-Aviv','mario.saliba98@gmail.com','0543198210', 'yes','available'),
('T-shirt ADIDAS','size M RED color','','clothes', 'CENTER','Tel-Aviv','mario.saliba98@gmail.com','0543198210', 'yes','delivered'),
('T-shirt JOUVANI','size S BLACK color','','clothes', 'SOUTH','Eilat','mario.saliba98@gmail.com','0543198210', 'yes','delivered'),
('T-shirt GUCCI','size XS YELLOW color','','clothes', 'SOUTH','Eilat','mario.saliba98@gmail.com','0543198210', 'no','delivered'),
('T-shirt SELECT','size XXS PINK color','','clothes', 'SOUTH','Eilat','mario.saliba98@gmail.com','0543198210', 'no','delivered'),
('Hover','','','elec-devices', 'NORTH','NAHARIYA','mario.saliba98@gmail.com','0543198210', 'no','deleted'),
('Oven','','','elec-devices', 'NORTH','NAHARIYA','mario.saliba98@gmail.com','0543198210', 'no','deleted'),
('Iron','','','elec-devices', 'NORTH','Tel-Aviv','mario.saliba98@gmail.com','0543198210', 'no','deleted'),
('Laptop','','','elec-devices', 'NORTH','Tel-Aviv','mario.saliba98@gmail.com','0543198210', 'yes','available'),
('TV','','','elec-devices', 'CENTER','Natanya','mario.saliba98@gmail.com','0543198210', 'yes','available'),
('Sofa','','','furni', 'CENTER','HERZLIYA','mario.saliba98@gmail.com','0543198210', 'yes','available'),
('Clock','','','furni', 'CENTER','HERZLIYA','mario.saliba98@gmail.com','0543198210', 'yes','available'),
('Carpet','','','furni', 'SOUTH','Ber-sheva','mario.saliba98@gmail.com','0543198210', 'yes','available');

COMMIT;