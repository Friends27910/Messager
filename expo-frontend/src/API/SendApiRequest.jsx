import axios from "axios"
import React from "react";
import { isExpired, decodeToken } from "react-jwt";
import {searchData} from "./StroageApi.js"
export const ApiRequest =  async(Data) =>{
  const Data1 = {
    name:Data.Name,
    password:Data.Password
  }
  const url = "https://serverside-liart.vercel.app/Api/Register"
  return (axios.post(url,Data1))
}
export const LoginRequest = async(Data) =>{
  const Data1 = {
    name:Data.Name,
    password:Data.Password
  }
  const url = "https://serverside-liart.vercel.app/Api/login"
  return (axios.post(url,Data1))
}
export const Messageapi = async(Data) =>{
  const Id = searchData()
  const decodetoken =  decodeToken(Id)
  console.log(decodetoken);
    const Data2 = {
    Message:Data,
    PostedBy:decodetoken.id.name
  }
  console.log(Data2);
  const url = "https://serverside-liart.vercel.app/Api/chat"
  return (axios.post(url,Data2))
}
export const searchMessageapi = async()=>{
  const url = "https://serverside-liart.vercel.app/Api/searchChat"
    return axios.get(url)
}
