const express = require("express");
const handlers = require("./handlers/donationHandler.js");
const searchHandler = require("./handlers/searchItem.js");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("BATATATA");
});
server.get("/allDonations", handlers.getAllDonationsHandler);
server.post("/addItem", handlers.addDonationHandler);
server.get("/donation/:email", handlers.getDonationByMail);
server.get("/searchDonations", searchHandler.searchDonationsHandler);
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
