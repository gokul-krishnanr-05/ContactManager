const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()
const cors=require('cors');

mongoose.connect(process.env.DB_URI)
.then(()=>console.log("Connected to Database"))
.catch(err=>console.error(err))


const ContactRouter = require('../Backend/Routes/ContactRoutes');
app.use('/api',ContactRouter)

const PORT = 5000;

app.listen(PORT, () => {
  console.log(` listening on http://localhost:${PORT}`);
});
