const mongoose = require("mongoose");
// const mogoURL = "mongodb://localhost:27017/hotel";
// const mogoURL='mongodb+srv://yarunkumar136:Arun123@cluster0.iz81grx.mongodb.net/'
require('dotenv').config();
const mogoURL=process.env.DB_URL



if (!mogoURL) {
  throw new Error("MongoDB connection string is missing. Ensure DB_URL is set in the .env file.");
}
mongoose.connect(mogoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const db = mongoose.connection;

//event listeners for databse connection
db.on("connected", () => {
  console.log("connected to mongodb server");
});
db.on("error", () => {
  console.log("mongodb  connection error");
});
db.on("disconnected", () => {
  console.log("mongodb disconnected");
});

module.exports = db;
