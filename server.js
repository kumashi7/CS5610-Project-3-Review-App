const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const entryRouter = require('./routes/entry');
const userRouter = require('./routes/user');
// const reviewRouter = require('./routes/review');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

const cors = require('cors');
// const auth_middleware = require('./routes/middlware/auth_middleware');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());//cookie-parser is the middleware that lets directly intercept and modify a request coming to our Express/Node app.

app.use(cors({
  origin: '*',
}));

// app.use(auth_middleware);
// Routers
app.use('/entry', entryRouter);
// app.use('/review', reviewRouter);
app.use('/user', userRouter);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Starting server');
});