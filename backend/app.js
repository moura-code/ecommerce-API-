require('dotenv').config();
require('express-async-errors');
const path = require('node:path');
const cors = require("cors")
const express = require('express')
const app = express()
var corsOptions = {origin: 'http://localhost:3000'}
app.use(cors(corsOptions))
app.use(express.json())



// database
const connectDB = require('./db/connect');

// routes
const products = require('./routes/Products.js')





app.use('/api/productos',products)



const PORT = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start()
