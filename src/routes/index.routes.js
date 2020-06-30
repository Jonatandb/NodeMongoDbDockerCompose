const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("<h3>Server working! 🤓👌✨");
});

module.exports = router;
