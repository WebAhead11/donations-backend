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
  let queryStr = `SELECT * FROM donations WHERE delivery=$1`;
  const valueArr = [delivery];
  if (category != "") {
    valueArr.push(category);
    queryStr += ` AND category=$2`;
  }
  if (area != "") {
    valueArr.push(area);
    if (category != "") {
      queryStr += ` AND area=$3`;
    } else {
      queryStr += ` AND area=$2`;
    }
  }
  return db.query(queryStr, valueArr).then((result) => {
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
      `UPDATE donations SET item_title=$1,item_descriptions=$2,photo=$3,category=$4,area=$5,city=$6,email=$7,phone=$8,delivery=$9 WHERE id=$10`,
      [
        donation.item_title,
        donation.item_description,
        donation.photo,
        donation.category,
        donation.area,
        donation.city,
        donation.email,
        donation.phone,
        donation.delivery,
        donation.id,
      ]
    )
    .catch((error) => {
      console.log(error);
    });
}

function updateStatus(status, id) {
  return db.query(`UPDATE donations SET item_status=$1 WHERE id=$2`, [status, id]).catch((error) => {
    console.log(error);
  });
}

function availableDeliItems() {
  return db.query(`SELECT COUNT(item_title) as count FROM donations WHERE item_status='available' OR item_status='delivered' `).catch((error) => {
    console.log(error);
  });
}

function deliveredItems() {
  return db.query(`SELECT COUNT(item_title) as count FROM donations WHERE item_status='delivered'`).catch((error) => {
    console.log(error);
  });
}

function last5() {
  return db.query(`SELECT item_title FROM donations WHERE item_status='available' order by id desc limit 5`).catch((error) => {
    console.log(error);
  });
}

function countDonations(email) {
  return db
    .query(`SELECT COUNT(item_title) as count FROM donations WHERE email=$1`, [email])
    .then((result) => {
      return result.rows[0].count;
    })
    .catch((error) => {
      console.log(error);
    });
}
function countSearchDonations(category, area, delivery) {
  let queryStr = `SELECT COUNT(item_title) as count FROM donations WHERE delivery=$1`;
  const valueArr = [delivery];
  if (category != "") {
    valueArr.push(category);
    queryStr += ` AND category=$2`;
  }
  if (area != "") {
    valueArr.push(area);
    if (category != "") {
      queryStr += ` AND area=$3`;
    } else {
      queryStr += ` AND area=$2`;
    }
  }
  return db.query(queryStr, valueArr).then((result) => {
    return result.rows[0].count;
  });
}

module.exports = {
  addDonation,
  countDonations,
  countSearchDonations,
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
