const model = require("../model/donations");

function searchDonationsHandler(req, res, next) {
  let category = req.body.category;
  let area = req.body.area.toUpperCase();
  let delivery = req.body.delivery;

  model
    .searchDonations(category, area, delivery)
    .then((donations) => {
      res.status(200).send(donations);
    })
    .catch(next);
}

module.exports = {
  searchDonationsHandler,
};
