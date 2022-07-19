require('dotenv').config()

//Import npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URL = process.env.DATABASE_URL;

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.listen(PORT, console.log(`Sever is starting at ${PORT}`));

//HTTP request logger
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan());


app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

const userRouter = require('./routes/userRouter')
app.use('/users', userRouter)

const internresourceneedRouter = require('./routes/internresourceneedRouter')
app.use('/internresourceneed', internresourceneedRouter)