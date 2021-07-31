const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use('/api/users', require('./src/routes/usersRoute'));

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Yura', lastName: 'Seredyuk'},
    {id: 2, firstName: 'Oleg', lastName: 'Seredyuk'}
  ];

  res.json(customers);
})

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

mongoose.connect('mongodb+srv://admin:admin@cluster0.1b6uf.mongodb.net/steam-profile-background-app?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) {
    console.log('Err, could not connect to the database.');
  } else {
    console.log('Connected to the database.');
  }
})

// example

const usersSchema = new mongoose.Schema({ name: { type: String, require: true } });
const Users = mongoose.model('Users', usersSchema);

app.get('/api/custom',(req, res) => {
  // Users.create({
  //   name: 'Denis'
  // })
  // .then((user) => res.send(user))
  // .catch(err => res.send(err))
  Users.find()
    .then(user => res.send(user))
    .catch(err => res.send(err))
})

//


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server was running on port ${PORT}`);
})
