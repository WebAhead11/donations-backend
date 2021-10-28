const { error } = require("console");
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

function deleteDonation(id) {
  return db.query(`DELETE FROM donations WHERE id=$1`, [id]).catch((error) => {
    console.log(error);
  });
}

function updateDonation(donation) {
  return db
    .query(
      `UPDATE donations SET item_title=${donation.item_title},item_descriptions=${donation.item_description},photo=${donation.photo},category=${donation.category},area=${donation.area},city=${donation.city},email=${donation.email},phone=${donation.phone},delivery=${donation.delivery} WHERE id=${donation.id}`
    )
    .catch((error) => {
      console.log(error);
    });
}

function updateStatus(status, id) {
  return db.query(`UPDATE donations SET item_status=${status} WHERE id=${id}`).catch((error) => {
    console.log(error);
  });
}

function availableDeliItems() {
  return db.query(`SELECT COUNT item_title FROM donations WHERE item_status='available' AND item_status='delivered' `).catch((error) => {
    console.log(error);
  });
}

function deliveredItems() {
  return db.query(`SELECT COUNT item_title FROM donations WHERE item_status='delivered'`).catch((error) => {
    console.log(error);
  });
}

function last5() {
  return db
    .query(`SELECT item_title FROM donations WHERE item_status='available' order by id desc limit 5`)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = {
  addDonation,
  availableDeliItems,
  deliveredItems,
  last5,
  updateDonation,
  updateStatus,
  searchDonations,
  getAllDonations,
  getDonationByMail,
  deleteDonation,
};
