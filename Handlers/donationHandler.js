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
function getDonationByMail(req, res, next) {
  model
    .getDonationByMail(req.body.email)
    .then((donations) => {
      res.status(200).send(donations);
    })
    .catch(next);
}

function getDonationByMailArchive(req, res, next) {
  model
    .getDonationByMailArchive(req.body.email)
    .then((donations) => {
      res.status(200).send(donations);
    })
    .catch(next);
}

function deleteDonationHandler(req, res, next) {
  model
    .deleteDonation(req.body.id)
    .then(() => {
      res.status(303).redirect("/donation/:email");
    })
    .catch(next);
}

function updateDonationHandler(req, res, next) {
  model
    .updateDonation(req.body)
    .then(() => {
      res.status(200).send("");
    })
    .catch(next);
}

function last5Handler(req, res, next) {
  model
    .last5()
    .then((lastFiveRS) => {
      res.status(200).send(lastFiveRS);
    })
    .catch(next);
}

function deliveredItemsHandler(req, res, next) {
  model
    .deliveredItems()
    .then((delevredItemsRS) => {
      res.status(200).send(delevredItemsRS);
    })
    .catch(next);
}

function avaiableDeliItemsHandler(req, res, next) {
  model
    .availableDeliItems()
    .then((deleveredAndAvailableRS) => {
      res.status(200).send(deleveredAndAvailableRS);
    })
    .catch(next);
}

function countDonationsHandler(req, res, next) {
  model
    .countDonations(req.body.email)
    .then((donationsNum) => {
      res.status(200).send(donationsNum);
    })
    .catch(next);
}

function updateStatusHandler(req, res, next) {
  model
    .updateStatus(req.body.status, req.body.id)
    .then(() => {
      res.status(200).send("");
    })
    .catch(next);
}
module.exports = {
  addDonationHandler,
  updateStatusHandler,
  countDonationsHandler,
  updateDonationHandler,
  avaiableDeliItemsHandler,
  deliveredItemsHandler,
  deleteDonationHandler,
  getAllDonationsHandler,
  last5Handler,
  getDonationByMail,
  getDonationByMailArchive,
};
