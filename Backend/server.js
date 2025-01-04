const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://contactmanager-93.netlify.app"
  ],
};

app.use(cors(corsOptions));

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.error(err));

const ContactRouter = require("../Backend/Routes/ContactRoutes");
app.use("/api", ContactRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
