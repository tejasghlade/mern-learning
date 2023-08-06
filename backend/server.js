const express = require('express');
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000

connectDB();
const app = express();

// get the data from client in json
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/goals',require('./routes/goalRoutes'));


app.use(errorHandler)
app.listen(port, () => console.log(`server started on port ${port}`));