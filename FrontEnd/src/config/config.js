 export const baseUrl = import.meta.env.VITE_BASE_URL;


 import axios from "axios"
 export const instance = axios.create({
   baseURL: baseUrl,
 });


