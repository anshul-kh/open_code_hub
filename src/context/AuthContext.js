// import React,{useContext,useState,useEffect} from 'react'
import { auth } from './firebase'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";

 export function signup(email,password){
  return createUserWithEmailAndPassword(auth, email, password)
}

export function signin(email,password){
  return signInWithEmailAndPassword(auth, email, password)

}



