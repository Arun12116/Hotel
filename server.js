const express = require("express");
require("dotenv").config();
const app = express();
const db = require("./db");
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const routerPerson = require("./router/person");

const PORT=process.env.PORT || 3000
console.log("Port:", process.env.PORT);  // Check if the PORT is loaded
console.log("MongoDB URL:", process.env.DB_URL); 


app.use("/person", routerPerson);

const routerMenu = require("./router/menu");
app.use("/menu", routerMenu);

app.listen(PORT, () => {
  console.log("app is running on por 3000");
});
