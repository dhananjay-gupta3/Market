import React, { useState } from 'react'
import axios from 'axios'
import './Gallery.css'
const Gallery = () => {
  const [img,setImg] = useState("")
  const [image,setImage]= useState([])
  const url =`https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=DskH9K7AXvXP2Cfso8H55mb-ggUPeeLrG7S4ojN-uZI`
  
  const changeimage = ()=>{
    axios.get(url).then((response)=>{
        console.log(response)
        setImage(response.data.results);
    })
   
} 
  
  return (
    <div className='main'>
    <div className='search'>
    <input className='input' type='text' 
    placeholder='Search Image'
    value={img} 
    onChange={(e)=>{
        setImg(e.target.value)
    }} />
    <button className='btness' type='submit' 
    onClick={changeimage} > Get Image</button>
    </div>
    <div className='card'>
    
    {
        image.map((values ,i )=>{
            return<div key={i}>
           
            <img className='img' src={values.urls.regular}  alt='' />
            <div className='p'>{values.tags.title}</div>
            
            </div>
        })
    }
    </div>
  
    </div>
  )
}

export default Gallery