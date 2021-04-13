const axios = require('axios');
const request = require("request");

const url = "https://pokeapi.co/api/v2";

const fetchAxios = async () => {
  const {data} = await axios.get(url);
  console.log(data);
}

const fetchWithRequest = async () => {
 request({url: url, json: true },(error,response, body) => {
    console.log("\n", "Using request: " + body);
  })
}

fetchAxios();
fetchWithRequest();