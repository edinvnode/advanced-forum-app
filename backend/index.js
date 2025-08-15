const express = require('express');
const mongoose = require('mongoose');

//routes
const userRoutes = require('./routes/user');
const topicRoutes = require('./routes/topic');

//mongo URI
//const MONGO_URI="mongodb+srv://user:user@cluster0.w0exw.mongodb.net/?retryWrites=true&w=majority";
const MONGO_URI =
  'mongodb+srv://root:toor@cluster0.z87oyu9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const app = express();

app.use(express.json());

//middleware

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/user', userRoutes);
app.use('/api/topics', topicRoutes);

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
    console.log('The error is: ' + error);
  });
