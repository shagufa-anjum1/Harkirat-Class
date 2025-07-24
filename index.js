
const axios = require('axios')

async function main(){
  const response = await fetch('/', {
    method: "POST"
  });
  const json = await response.json();
  console.log(json.todos.length);
}


async function main() {
  const response = await axios.get('/')
  console.log(response.todos.length)
  
}

