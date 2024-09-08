import React from "react";
import { isExpired, decodeToken } from "react-jwt";
import '../css/Hom.css'
export const Homepage = ()=>{
  const token = localStorage.getItem("Id")
  console.log(token);
  if (token==null) {
    name = "New user"
  }else{
  const decode = decodeToken(token)
  console.log(decode);
  var name = decode.id.name}
  return(
    
    <h1>hello</h1>
    )
  
}
