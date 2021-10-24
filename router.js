import express from "express";
import insertData from "./Handlers/donate-page.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("BATATATA");
});
router.post("/addItem", (req, res) => {
  insertData(req, res);
});

export default router;
