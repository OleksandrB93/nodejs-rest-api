const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful 🤓");
    app.listen(PORT, () => {
      console.log(`Server running. Use out API on port: ${PORT} `);
    });
  })
  .catch((err) => {
    console.log(`Error with connect to database: ${err.message}`);
    process.exit(1);
  });
