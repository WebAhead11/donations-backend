// const db = require("../database/connection");
import db from "../database/connection.js";

function insertData(req, res, next) {
  let data = req.body;
  let itemTitle = data.itemTitle;
  let itemDescription = data.itemDescription;
  let photo = data.photo;
  let category = data.category;
  let area = data.area;
  let city = data.city;
  let email = data.email;
  let phone = data.phone;
  let delivery = data.delivery;

  db.query("INSERT INTO donations (itemTitle,itemDescription,photo,category,area,city,email,phone,delivery) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)", [
    itemTitle,
    itemDescription,
    photo,
    category,
    area,
    city,
    email,
    phone,
    delivery,
  ])
    .then((res) => {
      console.log(res.rows);
    })
    .catch(next);
  //   res.status(204).send("everything is ok");
}

export default insertData;
