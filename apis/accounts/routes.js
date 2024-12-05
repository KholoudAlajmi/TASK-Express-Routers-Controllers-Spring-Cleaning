const express = require("express");
const router = express.Router();

//مادري اي functions يقصدون حطيت هذا

const cakeRoutes = require("./api/cakes/routes");

// router.use("/api/cakes", cakeRoutes);
// const cakes = require("../cakeData");

// router.get("/", (req, res) => {
//   res.json(cakes);
// });

// router.get("/:cakeId", (req, res) => {
//   const { cakeId } = req.params;
//   const cake = cakes.find((_cake) => _cake.id === +cakeId);
//   res.json(cake);
// })
// module.exports = router;

const { cakeList, cakeDetail } = require("./controllers");

router.get("/", cakeList);

router.get("/:cakeId", cakeDetail);;


