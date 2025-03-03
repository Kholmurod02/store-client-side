import axios from "axios";
import { create } from "zustand";
import { URL } from "../config/config"; 

export const  useStore = create((set,get)=>({
    loginUser: async (user,nav)=> {
        try {
           const {data} = await axios.post(`${URL}/Account/login`,user)
               localStorage.setItem("access_token",data.data)
               
               nav("/")
         } catch (error) {
            console.error(error);
        }
    },
    registUser: async (user,nav)=> {
        try {
           const {data} = await axios.post(`${URL}/Account/register`,user)
             nav("/login")
         } catch (error) {
            console.error(error);
        }
    },
    
}))