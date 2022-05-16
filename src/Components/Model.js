import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Model.css'
const Model = ({closeModel}) => {
  const nevi = useNavigate();
  return (
    <div className='modalBackground'>
    <div className='modelContainer'>
    <div className='titleCloseBtn'>
    <button className='btns' onClick={()=> closeModel(false)}> X </button>
    <div className="title">
    <h1>Welcome User</h1>
    </div>
    <div className="body">
    <p>Please click on</p>
    <p>Continue</p>
    </div>
    <div className="footer">
    <button className='btnes' onClick={()=> closeModel(false)}>Cancel</button>
    <button
    onClick={()=>{
      nevi('/')
    }}
    className='btnes2'>Continue</button>
    </div>
    </div>

    </div>
    
     
     </div>
  )
}

export default Model;