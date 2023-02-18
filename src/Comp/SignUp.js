import React,{useRef,useState} from "react";
import {Link,useNavigate} from 'react-router-dom'
import "../Styles/Login.css"
import { signup } from "../context/AuthContext";


export default function Sign(){
const emailRef = useRef()
const passRef = useRef()
const passConfirmRef = useRef()

const [error,setError]= useState("");
const [loading,setLoading]= useState(false);
const navigate = useNavigate()


   


    async function handleSubmit(e){
    e.preventDefault()

    if(passRef.current.value!==passConfirmRef.current.value){
        return  setError('Password do not match')
    }

    try{
        setError("")
        setLoading(true)
        await signup(emailRef.current.value,passRef.current.value)
        navigate('/chatbox');
    }catch{
        setError("Failed to create an account")
    }
    setLoading(false)


   
}


    return(
        <div className="screen">
            <div className="light"></div>
            <div className="light1"></div>
            <div className="light2"></div>
            <div className="light3"></div>
            <div className="com-container">
        <div className="com-box1">
            <h2>Sign Up</h2>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} id="email" type="email" required placeholder="Email"/>
                <input ref={passRef} id="password" type="password" required placeholder="Enter Password"/>
                <input ref={passConfirmRef} id="password-confirm" type="password" required placeholder="Re-Enter Password"/>
                <button disabled={loading} type="submit">Sign Up</button>
            
            </form>
        </div>
       <div className="com-box2">
       <h3>Alredy have an Account?<Link to="/Login"> Log In </Link></h3>
       </div>
    </div>
        </div>
    );
  }
  