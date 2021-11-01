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
server.get("/donation/:email", handlers.getDonationByMail);
server.get("/searchDonations", searchHandler.searchDonationsHandler);
server.put("/updateDonation", handlers.updateDonationHandler);
server.delete("/dleteDonation", handlers.deleteDonationHandler);
server.get("/latestItems", handlers.last5Handler);
server.get("/deliveredItems", handlers.deliveredItemsHandler);
server.get("/totalDonations", handlers.avaiableDeliItemsHandler);
server.get("/donationsNumber", handlers.countDonationsHandler);
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

console.log("batatatatatatatata");
