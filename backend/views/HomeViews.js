const express = require("express");
const { getHomeController } = require("../controller/HomeController");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { carrousel, books, best_selling_books } = await getHomeController(
      req
    );
    return res.json({ carrousel, books, best_selling_books });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Falta información requerida" });
  }
});

module.exports = router;
