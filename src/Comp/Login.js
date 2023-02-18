import React,{useRef,useState} from "react";
import {Link,useNavigate} from 'react-router-dom'
import "../Styles/Login.css"
import { signin } from "../context/AuthContext";


export default function Sign(){
const emailRef = useRef()
const passRef = useRef()
// const { signin } = useAuth()
const navigate = useNavigate()
const [error,setError]= useState('');
const [loading,setLoading]= useState(false);


   


    async function handleSubmit(e){
    e.preventDefault()

    try{
        setError("")
        setLoading(true)
        await signin(emailRef.current.value,passRef.current.value)
        navigate('/chatbox');
    }catch{
        setError("Failed to Login,Check your Username or Password")
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
            <h2>Sign In</h2>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleSubmit}>
                
                <input ref={emailRef} type="email" required placeholder="Email"/>
                <input ref={passRef} type="password" required placeholder="Enter Password"/>
                <button disabled={loading} type="submit">Log In</button>
            
            </form>
        </div>
       <div className="com-box2">
       <h3>Need an Account?<Link to="/sign"> Sign In </Link></h3>
       </div>
    </div>
        </div>
    );
  }
  