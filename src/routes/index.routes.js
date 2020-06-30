const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  console.log(`Llegó una solicitud: \n${JSON.stringify(req.headers)}`);
  res.send("<h2>Server is working! 🤓👌✨</h2>");
});

module.exports = router;
