const model = require("../model/donations");

function addDonationHandler(req, res, next) {
  const newDonation = req.body;
  model
    .addDonation(newDonation)
    .then((newDonation) => {
      res.status(201).send(newDonation);
    })
    .catch(next);
}
function getAllDonationsHandler(req, res, next) {
  model
    .getAllDonations()
    .then((allDonations) => {
      res.status(200).send(allDonations);
    })
    .catch(next);
}

module.exports = {
  addDonationHandler,
  getAllDonationsHandler,
};
