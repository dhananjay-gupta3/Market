import React, { useState } from 'react'

import './Signup.css'
import {createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {auth} from "../Firebase"



const SignUp = () => {

    const [resisterEmail,setResisterEmail] = useState("");
    const [resisterPass,setResisterPass] = useState("");
    const [loginEmail,setLoginEmail] = useState("");
    const [loginpass,setLoginpass] = useState("");

    const [user,setUser] = useState({})

    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    })


    const register = async () =>{
        try{
       const user = await createUserWithEmailAndPassword(
           auth,
           resisterEmail,
           resisterPass
           );
           console.log(user)
        } catch (error) {
            console.log(error.message);
        }

    };

    const login = async () =>{
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginpass
                );
                console.log(user)
             } catch (error) {
                 console.log(error.message);
             }
     

    };

    const logout = async () =>{
        await signOut(auth);

    };
    
   

  return (
      <div>

      <div>
      <form className="form-box">
       <div className="header-text">
         Register
       </div>
  
       <input
       onChange={(event)=>{setResisterEmail(event.target.value)}}
       placeholder="Your Email Address"
       required
       type="text"/>
  
       <input
       onChange={(event)=>{setResisterPass(event.target.value)}}
       placeholder="Your Password" 
       required
       type="password"/> 
       <input id="terms" 
       required
       type="checkbox"/> 
  
       <label htmlFor="terms"></label>
       <span>Agree with <a href="/">Terms & Conditions</a></span> 
       
       <button className='button' onClick={register}>Signup</button>
    
  
  
     </form>
    
      </div>
      
      </div>
  )


}

export default SignUp;





















      
    //   <div className='autho'>
    //   <h3>Register</h3>
    //   <div className='signup'>
    //   <input
    //   onChange={(event)=>{setResisterEmail(event.target.value)}}
    //   placeholder='Email'/>

    //   <input 
    //   onChange={(event)=>{setResisterPass(event.target.value)}}
    //   placeholder='password'/>

    //   <button onClick={register}>create user </button>

    //   <div>
    //   <h3>login</h3>
    //   </div>
      
    //   <input
    //   onChange={(event)=>{setLoginEmail(event.target.value)}}
    //   placeholder='Email'/>

    //   <input
    //   onChange={(event)=>{setLoginpass(event.target.value)}}
    //   placeholder='password'/>
      
    //   <button onClick={login}>login</button>
    //   </div>
    //   <h4>logged in</h4>
    //   {user?.email}

    //   <button onClick={logout}>sign out</button>
   


  



     
  
    

  

  
