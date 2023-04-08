import axios from "axios";


let baseURL = "https://ecreports.dev.fegno.com/api/v1/";
let token = localStorage.getItem('Token')
export const http = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {
        'Authorization':`Token ${token
        }`
    }
  });
  export const login  = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {
    }
  })