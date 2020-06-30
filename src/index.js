const express = require("express");

const app = express();

require("./database.js");

const PORT = 3000;

app.use(require("./routes/index.routes"));

app.listen(PORT);

console.log(`Server running on port: ${PORT}`);
