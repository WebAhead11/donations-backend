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
  const email = req.params.email;
  model
    .getDonationByMail(email)
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
      res.status(303).redirect("/donation/:email");
    })
    .catch(next);
}

function last5Handler(req, res, next) {
  res.send(model.last5()).catch(next);
}

function deliveredItemsHandler(req, res, next) {
  res.send(model.deliveredItems()).catch(next);
}

function avaiableDeliItemsHandler(req, res, next) {
  res.send(model.availableDeliItems).catch(next);
}
module.exports = {
  addDonationHandler,
  updateDonationHandler,
  avaiableDeliItemsHandler,
  deliveredItemsHandler,
  deleteDonationHandler,
  getAllDonationsHandler,
  last5Handler,
  getDonationByMail,
};
