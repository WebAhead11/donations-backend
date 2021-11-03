const express = require("express");
const cors = require("cors");
const handlers = require("./Handlers/donationHandler.js");
const searchHandler = require("./Handlers/searchItem.js");
const server = express();
server.use(express.json());
server.use(cors());
server.get("/", (req, res) => {
  res.send("BATATATA");
});
server.get("/allDonations", handlers.getAllDonationsHandler);
server.post("/addItem", handlers.addDonationHandler);
server.post("/donation", handlers.getDonationByMail);
server.post("/donationArchive", handlers.getDonationByMailArchive);
server.post("/searchDonations", searchHandler.searchDonationsHandler);
server.post("/updateDonation", handlers.updateDonationHandler);
// server.delete("/dleteDonation", handlers.deleteDonationHandler);
server.get("/latestItems", handlers.last5Handler);
server.get("/deliveredItems", handlers.deliveredItemsHandler);
server.get("/totalDonations", handlers.avaiableDeliItemsHandler);
server.post("/donationsNumber", handlers.countDonationsHandler);
server.post("/updateStatus", handlers.updateStatusHandler);
server.post(
  "/searchDonationsNumber",
  searchHandler.countSearchDonationsHandler
);
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

console.log("batatatatatatatata");
