const express = require('express');
const jwt = require('jsonwebtoken')
const JWT_SECRET = "shagufa@8877"

const app = express();
app.use(express.json());


const users = [];

app.post('/signup', function(req, res){
  const username = req.body.username
  const password = req.body.password

   users.push({
     username: username,
     password: password
   })

   res.json({
    message: "You Are SignUp"
   })
 

})

app.post('/signin', function(req, res){
   const username = req.body.username
   const password = req.body.password
   let foundUser = null;

   for(let i =0; i<users.length; i++){
    if(users[i].username == username && users[i].password == password){
      foundUser = users[i]
    }
   }

   if(!foundUser){
    res.json({
      message: "wrong password or username"
    })
   }else{
    const token = jwt.sign({
      username: "Shagufa"
    }, JWT_SECRET)
    res.header("jwt", token);
    res.header("random", "shagufaanjum");
    res.json({
      token: token
    })
   }
})

function auth(req, res, next){
  const token = req.body.token;
  const decodedData = jwt.verify(token, JWT_SECRET);
  if(decodedData.username){
    next();
  }else{
    res.json({
      message: " you are not login"
    })
  }
}

app.get('/me', auth, function(req, res){
  let foundUser = null;

  for(let i=0; i<users.length; i++){
    if(users[i].username === decodedData.username){
      foundUser = users[i]
    }
  }
  res.json({
    username: foundUser.username,
    password: foundUser.password
  })
 

})

app.get('/get', auth, (req, res) => {

});

app.post('/post', auth, (req, res) =>{

})

app.delete('/delete', auth, (req, res) => {

})




// const express = require('express')
// const axios = require('axios')
// const jwt = require('jsonwebtoken')
// const JWT_SECRET = "shagufaloveanjum"

// const app = express();
// app.use(express.json());


// const users = [];
// app.post('/signin', function(req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   // map and flitter

//   let foundUser = null;

//   for(let i=0; i<users.length; i++){
//     if(users[i].username == username && users[i].password == password){
//       foundUser = users[i]
//     }
//   }

//   if(foundUser){
//     const token = jwt.sign({
//       username: username
//     }, JWT_SECRET);

//     // found user token = token 
//     res.json({
//       token: token
//     })
//   }else{
//     res.status(404).send({
//       message: "invalid token"
//     })
//   }
//   console.log(users);


// })


// app.get('/me', function(req, res){
//   const token = req.headers.token
//   const decodedInformation = jwt.verify(token, JWT_SECRET);
//   const username = decodedInformation.username
//   let foundUser = null;

//   for(let i=0; i<users.length; i++){
//     if(users[i].username == username){
//       foundUser = users[i];
//     }
//   }

//   if(foundUser){
//     res.json({
//       username: foundUser.username,
//       password: foundUser.password

//     })
//   }else{
//     res.json({
//       message: "invalid token"
//     })
//   }
// })

// function genrateToken(){
//   const token = ["a", "b", "c", "d", "e"];
// }

// app.get('/me', function() {
//   const token = req.headers.token
//   let foundUser = null;

//   for(let i=0; i<users.length; i++){
//     if(users[i].token == token){
//       foundUser = users[i];

//     }
//   }

//   if(foundUser){
//     res.json({
//        username: foundUser.username,
//        password: foundUser.password
//     })
//   }else{
//     res.json({
//       message: "Invalid token"
//     })
//   }
// })

// const users = [];

// app.post('/signup', (req, res) => {

//   const userName = req.body.userName;
//   const userPassword = req.body.userPassword;

//   users.push({
//     userName: userName,
//     userPassword: userPassword
//   })

//   res.json({
//     message: "you are signup already!"
//   })

// })

// function genrateToken(){
//   const token = ["a", "b", "c", "d", "e"];
// }

// app.post('/signup', (req, res) => {
//   const userName = req.body.userName;
//   const userPassword = req.body.userPassword;

//   // map fillters

//   let foundUser = null;

//   for(let i=0; i<users.length; i++){
//     if(users[i].userName == userName && users[i].userPassword == userPassword){
//       foundUser = users[i];
//     }
//   }

//   if(foundUser){
//     const token = GenrateToken();
//     foundUser.token = token;
//     res.json({
//       token: token
//     })
//   } else{
//     res.status(403).send({
//       message: "Invalid username or password"
//     })

//   }
// })

// app.post('/signin', (req, res) => {

// })




// async function main(){
//   const respone = await fetch('/', {
//     method: "GET",
//     body:{
//       userName: "shagufa",
//       password: "1233"
//     },
    
//     headers:{
//       "Authorization": "shagufa 123,"
//     },
//   });

//   const json = await respone.json();
//   console.log(json.todo.length);

// }


// async function axiFn(){
//   const rrsponse = await axios.get('/')
//   console.log(respone.todo.length);
// }

// async function axiosFn(){
//  const respone = await axios.post('/',
//    {
//   userName: "sofi",
//   password: "hjvk"
//  },
//  {
//   headers: {
//     "Authorization": "sofi like"
//   },
//  },
// );
// console.log(respone.data);
// }

// axios({
//   method: 'post',
//   url: '/',
//   data: {
//     firstN: "sofi",
//     lastN: "khan"
//   }
// });

// app.get('/me', function(req, res)  {
//       const token = req.body.token;
//       const foundUser = null;

//       for(let i=0; i<users.length; i++){
//         if(users[i].token == token){
//           foundUser = users[i]
//         }
//       }

//       if(foundUser){
//         res.json({
//           username: foundUser.username,
//           password: foundUser.password
//         })
//       }else{
//         res.json({
//           message: "token Invalid"
//         })
//       }
// })


app.listen(3000);




