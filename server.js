const express = require("express");
const handlers = require("./handlers/donationHandler.js");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("BATATATA");
});
server.get("/allDonations", handlers.getAllDonationsHandler);
server.post("/addItem", handlers.addDonationHandler);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
