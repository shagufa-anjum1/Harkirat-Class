const express = require('express')
const axios = require('axios')

const app = express();
app.use(express.json());

const users = [];

function genrateToken(){
  const token = ["a", "b", "c", "d", "e"];
}

app.get('/me', function() {
  const token = req.headers.token
  const foundUser = null;

  for(let i=0; i<users.length; i++){
    if(users[i].token == token){
      foundUser = users[i];

    }
  }

  if(foundUser){
    res.json({
       username: foundUser.username,
       password: foundUser.password
    })
  }else{
    res.json({
      message: "Invalid token"
    })
  }
})

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




