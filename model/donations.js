const path = require("path");
const db = require(path.join(__dirname, "..", "database", "connection"));

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

module.exports = { addDonation, getAllDonations };
