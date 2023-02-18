import React,{useEffect,useState,useRef} from 'react'
import {useCollection} from 'react-firebase-hooks/firestore'
import {collection,orderBy,limit,query,addDoc,serverTimestamp} from 'firebase/firestore';
import {db,auth} from '../context/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import "../Styles/Chat.css"


export default function Chatbox() {
const [user] = useAuthState(auth)
const messageRef = collection(db,"messages")
const queryRef=query(messageRef,orderBy("createdAt","desc"),limit(40))
const [messages]=useCollection(queryRef,{idField:"id"})
const [formValue,setFormValue]=useState('')




const sendMessage= async(e) =>{
    e.preventDefault()
    //  const payload ={text:formValue,createdAt:serverTimestamp(),
    // uid:user.id}
    // await addDoc(messageRef,payload)

    await addDoc(collection(db, "messages"), {
        text:formValue,
        createdAt:serverTimestamp(),
        // uid:user.id
        
      });
      
    setFormValue('')
}


  return (
    <div className='chat-container'>
        <div className='chat'>
        
        {messages && messages.docs.map(msg=>
            <ChatMessge key={msg.id} message={msg.data()}></ChatMessge>)}
        <form  >
            <input value={formValue} placeholder="Enter The Message" onChange={(e)=>setFormValue(e.target.value)}/>
            <button onClick={(e)=>sendMessage(e)}>Send</button>
        </form>

    </div>
    </div>
  )

  function ChatMessge(props){
    if(!auth.currentUser) return
    const {text,uid}=props.message

    // let className ="recieved"
    // if(msg.id === auth.currentUser.uid){
    //   className ="sent"
    // }

    // const className = uid === auth.currentUser.uid? "sent":"recieved"

    return(
        <div className='chatbox'>
          <p>{text}</p>
        </div>
    )
  }
}
