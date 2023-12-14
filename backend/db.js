const mongoose= require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
//DB config
//connection creation and new database(if not already)
const connectionURL = process.env.MONGOURI

mongoose.connect(connectionURL)
.then(() => console.log('Database connected successfully'))
.catch(err => console.error('Database connection error: ', err));
//Api Endpoints