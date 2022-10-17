import axios from "axios";
import { baseURL } from "../const";

let Token;
if(typeof window !== "undefined"){
    if(localStorage.getItem('S_Token')){
        Token=localStorage.getItem('S_Token')
    }    
}
export const instance = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization : `Bearer ${Token}`
    }
  });