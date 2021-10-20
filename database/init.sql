BEGIN;

DROP TABLE IF EXISTS donations CASCADE;

CREATE TABLE donations (
  id SERIAL PRIMARY KEY,
  Item-title VARCHAR(255) NOT NULL,
  Item-descriptions VARCHAR(255),
  Photo VARCHAR(255) ,
  Category VARCHAR(255) NOT NULL,
  Area VARCHAR(255) NOT NULL,
  City VARCHAR(255) NOT NULL,
  E-mail VARCHAR(255) NOT NULL,
  Phone VARCHAR(255),NOT NULL,
  Delivery varchar(255) NOT NULL,
  item-status varchar(255) NOT NULL,
);


INSERT INTO donations (Item-title,Item-descriptions, Photo, Category, Area,City,E-mail,Phone, Delivery,item-status) VALUES
('T-shirt POLO','size XXL white color','','CLOTHES', 'NORTH','Haifa','mario.saliba98@gmail.com','0543198210', 'yes','available'),
('T-shirt NAUTICA','size XL GREEN color','','CLOTHES', 'NORTH','Nazareth','mario.saliba98@gmail.com','0543198210', 'yes','available'),
('T-shirt NIKE','size L BLUE color','','CLOTHES', 'CENTER','Tel-Aviv','mario.saliba98@gmail.com','0543198210', 'yes','available'),
('T-shirt ADIDAS','size M RED color','','CLOTHES', 'CENTER','Tel-Aviv','mario.saliba98@gmail.com','0543198210', 'yes','delivered'),
('T-shirt JOUVANI','size S BLACK color','','CLOTHES', 'SOUTH','Eilat','mario.saliba98@gmail.com','0543198210', 'yes','delivered'),
('T-shirt GUCCI','size XS YELLOW color','','CLOTHES', 'SOUTH','Eilat','mario.saliba98@gmail.com','0543198210', 'no','delivered'),
('T-shirt SELECT','size XXS PINK color','','CLOTHES', 'SOUTH','Eilat','mario.saliba98@gmail.com','0543198210', 'no','delivered'),
('Hover','','','elec-devices', 'NORTH','NAHARIYA','mario.saliba98@gmail.com','0543198210', 'no','deleted'),
('Oven','','','elec-devices', 'NORTH','NAHARIYA','mario.saliba98@gmail.com','0543198210', 'no','deleted'),
('Iron','','','elec-devices', 'NORTH','Tel-Aviv','mario.saliba98@gmail.com','0543198210', 'no','deleted'),
('Laptop','','','elec-devices', 'NORTH','Tel-Aviv','mario.saliba98@gmail.com','0543198210', 'yes','available'),
('TV','','','elec-devices', 'CENTER','Natanya','mario.saliba98@gmail.com','0543198210', 'yes','available'),
('Sofa','','','furni', 'CENTER','HERZLIYA','mario.saliba98@gmail.com','0543198210', 'yes','available'),
('Clock','','','furni', 'CENTER','HERZLIYA','mario.saliba98@gmail.com','0543198210', 'yes','available'),
('Carpet','','','furni', 'SOUTH','Ber-sheva','mario.saliba98@gmail.com','0543198210', 'yes','available'),

COMMIT;