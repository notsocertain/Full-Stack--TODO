const express = require('express')
const router = require('./routes/routes')
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

app.use("/api",router);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log("Server successfully started at port ", port);
  });
