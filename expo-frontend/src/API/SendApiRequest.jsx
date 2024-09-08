import axios from "axios"
import React from "react";
import { isExpired, decodeToken } from "react-jwt";
import {searchData} from "./StroageApi.js"
export const ApiRequest =  async(Data) =>{
  const Data1 = {
    name:Data.Name,
    password:Data.Password
  }
  const url = "http://localhost:2009/Api/Register"
  return (axios.post(url,Data1))
}
export const LoginRequest = async(Data) =>{
  const Data1 = {
    name:Data.Name,
    password:Data.Password
  }
  const url = "http://localhost:2009/Api/login"
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
  const url = "http://localhost:2009/Api/chat"
  return (axios.post(url,Data2))
}
export const searchMessageapi = async()=>{
  const url = "http://localhost:2009/Api/searchChat"
    return axios.get(url)
}