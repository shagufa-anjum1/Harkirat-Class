
const axios = require('axios')

async function main(){
  const respone = await fetch('/', {
    method: "GET",
    body:{
      userName: "shagufa",
      password: "1233"
    },
    
    headers:{
      "Authorization": "shagufa 123,"
    },
  });

  const json = await respone.json();
  console.log(json.todo.length);

}


async function axiFn(){
  const rrsponse = await axios.get('/')
  console.log(respone.todo.length);
}

async function axiosFn(){
 const respone = await axios.post('/',
   {
  userName: "sofi",
  password: "hjvk"
 },
 {
  headers: {
    "Authorization": "sofi like"
  },
 },
);
console.log(respone.data);
}

axios({
  method: 'post',
  url: '/',
  data: {
    firstN: "sofi",
    lastN: "khan"
  }
});



