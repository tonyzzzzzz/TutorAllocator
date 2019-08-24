import AuthLayout from "./auth";
import React from "react";
import UserLayout from "./user";


export default function(props){
  if (props.location.pathname.indexOf('/user') === 0){
    return <UserLayout> {props.children} </UserLayout>
  } else if (props.location.pathname.indexOf('/auth') === 0) {
    return <AuthLayout> {props.children} </AuthLayout>
  } else {
    return <AuthLayout> {props.children} </AuthLayout>
  }
}
