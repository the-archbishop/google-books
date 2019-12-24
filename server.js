// DEPENDENCIES
const express = require('express');
const connectDB = require('./config/db');

const app = express();

const PORT = process.env.PORT || 5000;

// Connect database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));


// @TODO Define Routes

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));