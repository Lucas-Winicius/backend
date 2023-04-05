require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require('./src/routes')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.emit("connect");
  console.log("Connected to mongo");
});

app.on('connect', () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    })
})