import axios from "axios";

// const BASE_URL = 'http://localhost:5000/api/v1/' ;
const BASE_URL ='passcrafter-x.netlify.app'

const instance = axios.create({
    baseURL: BASE_URL,
  });
  
  export default instance;