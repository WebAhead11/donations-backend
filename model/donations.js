const path = require("path");
const db = require(path.join(__dirname, "..", "database", "connection"));

function getDonationByMail(mailDonation) {
  return db.query(`SELECT * FROM donation WHERE email=${mailDonation}`).then((result) => {
    return result.rows;
  });
}

function addDonation(newDonation) {
  const donationEntry = [
    newDonation.item_title,
    newDonation.item_description,
    newDonation.photo,
    newDonation.category,
    newDonation.area,
    newDonation.city,
    newDonation.email,
    newDonation.phone,
    newDonation.delivery,
    newDonation.item_status,
  ];

  return db
    .query(
      `INSERT INTO donations (item_title,item_descriptions,photo,category,area,city,email,phone,delivery,item_status) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING id`,
      donationEntry
    )
    .then((result) => {
      return result.rows[0];
    });
}

function getAllDonations() {
  return db.query(`SELECT * FROM donations`).then((result) => {
    return result.rows[0];
  });
}
function searchDonations(category, area, delivery) {
  return db.query(`SELECT * FROM donations WHERE category=$1 AND area=$2 AND delivery=$3 `, [category, area, delivery]).then((result) => {
    return result.rows;
  });
}

module.exports = { addDonation, searchDonations, getAllDonations, getDonationByMail };
