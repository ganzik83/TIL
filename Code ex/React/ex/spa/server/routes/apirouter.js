const express = require("express");

module.exports = () => {
  const router = express.Router();

<<<<<<< HEAD
  router.get("/carlist", (req, res) => {
    res.json(sampleCarList);
  });

  return router;
=======
  router.get("./carlist", (req, res) => {
    res.json(sampleCarList);
  });
>>>>>>> 771bd1a67c49b157c3d2a016503af3f8c30e3e50
};
