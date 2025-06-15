const express = require('express');
const mongoose = require('mongoose');

//routes
const userRoutes = require('./routes/user');

//mongo URI
//const MONGO_URI="mongodb+srv://user:user@cluster0.w0exw.mongodb.net/?retryWrites=true&w=majority";
const MONGO_URI =
  'mongodb://atlas-sql-658700a1e00058779f655976-w0exw.a.query.mongodb.net/test?ssl=true&authSource=admin;';

const app = express();

app.use(express.json());

//middleware

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/user', userRoutes);

/*
basic route
app.get('/', (req, res) => {
  res.send('Hello World.');
});
*/

//port declaration
const port = 4000;

//connect to db
mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
