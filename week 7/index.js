const express = require('express');

const {userModel, todoModel} = require('./db');

const {auth, JWT_SECRET} = require('./auth');

const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');

mongoose.connect('');

const app = express();

app.use(express.json());


app.post('/signup', async function(req, res) {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.password;

  await userModel.create({
    name,
    password,
    email
  });

  res.json({
    message: "you are singup"
  });
});



app.post('/signin', async function(req, res) {
   const email = req.body.email;
   const password = req.body.password;

   const response = await userModel.findOne({
    email,
    password,
   });

   if(response){
    const token = jwt.sign({
      id: Response._id.toString()
    }, JWT_SECRET);

    res.json({
      token
    })
   }else{
    res.status(404).json({
      message: "Incorrect Creds"
    })
   }
});




app.post('/todoSchema', auth, async function(req, res) {

  const userId = req.body.userId;
  const title = req.body.title;
  const done = req.body.body;

  await todoModel.create({
    userId,
    title,
    done,
  })

  res.json({
    message: "todo create"
  })
  
});




app.get('/todos', async function(req, res) {
  const userId = req.body.userId;

  const todos = await todoModel.find({
    userId
  })

  res.json({
    todos
  })
});

app.listen(3000);