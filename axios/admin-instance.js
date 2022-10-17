import axios from "axios";
import {baseURL} from "../const/index";


var token = "";
if(typeof window !== "undefined"){
  if(
  localStorage.getItem('Token')
  ){
    token = localStorage.getItem("Token")
  }
}
export const instance = axios.create({
    baseURL: baseURL,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}` 
    }
  });