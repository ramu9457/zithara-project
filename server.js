import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './config/db.js'
import bodyParser from "body-parser";
dotenv.config()

const app= express()
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true })); // support encoded bodies
app.use(bodyParser.json({ limit: "50mb" })); // parses application/json
app.use(express.json())

db.authenticate()
  .then(() => {
    console.log("Database connected");
    db.sync();
  })
  .catch((err) => {
    console.log(err);
  });

  app.get('/', (req, res) => {
    res.send("Hello world")
  })


import fresher_bot from './routers/fresher_bot.routers.js'

app.use("/fresher_bot",fresher_bot )

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running in port ${process.env.PORT}`)
})