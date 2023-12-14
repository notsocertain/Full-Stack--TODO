const express = require('express')
const db= require('./db')
const Cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

//App config
const app = express();
const port = process.env.PORT || 8000

//Middleware
app.use(Cors());
app.use(express.json());
