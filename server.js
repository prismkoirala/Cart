const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// MiddleWares
app.use(cors());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('hello There'));

// Use Routes
app.use('/api/products', require('./routes/api/products'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
