import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Signin.css'
import {faInstagram,faFacebook,faGithub} from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Model from './Model'

const Signin = () => {
  const [open, setOpen] = useState(false);
 
  const navi = useNavigate();
 
  return (
    <div>
    <form className="form-box">
     <div className="header-text">
       SignIn
     </div>
     <input placeholder="Your Email Address"
     required
     
     type="text"/> 
     <input placeholder="Your Password" 
     required
     
     type="password"/> 
     <input id="terms" 
     required
     type="checkbox"/> 
     <label htmlFor="terms"></label>
     <span>Agree with <a href="/" >Terms & Conditions</a></span> 
     
     <button
     className='open'
     onClick={()=>{
       setOpen(true)
     }}
     
     >login</button>
     {open && <Model closeModel={setOpen}/>}
     <button
     className='button'
     onClick={()=>navi("/signup")}
     >SignUp</button>
    <div className='icons'>

     <a href='https://www.instagram.com/dh________jay'>
     <FontAwesomeIcon icon={faInstagram}
     className='insta'
     size='2x'/>
     </a>

     <a href='https://www.facebook.com/dhananjay.gupta.5268750'
     className='facebook'>
    <FontAwesomeIcon  className='face' icon={faFacebook} size='2x'/>
    
    </a>
 
    <a href='https://github.com/dhananajay-gupta3'
     className='git'>
    <FontAwesomeIcon  className='git' icon={faGithub} size='2x'/>
    </a>

    </div>


   </form>
  
    </div>
  )
}

export default Signin