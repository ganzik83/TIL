const express = require("express");

module.exports = () => {
  const router = express.Router();

  router.get("./carlist", (req, res) => {
    res.json(sampleCarList);
  });
};
