import React from 'react'
import './Home.css'
import tata from '../Assets/tata.png'
const Home = () => {
  return (
    <div className='home'>
    <div className='heading'>
    Electric vehicles in India
    </div>
     <div className='text'>
     In 2022, there are 13 Electric cars 
     available in India.Some of the popular electric
     cars are Porsche Taycan, BMW iX, Tata Nexon EV,
      Mercedes-Benz EQC, Jaguar I-Pace. Tata Tigor EV
       is the cheapest Electric car in the India . 
       The on road price of Tata Tigor EV in Delhi
        starts at ₹ 12.24 Lakh and has a seating
         capacity of 5 people. The most expensive
          Electric car in India is Porsche Taycan
           Cross Turismo whose on
      road price in Delhi starts at ₹ 2.31 Crore.
     </div>

    <img
    className='imgs'
    src='https://freesvg.org/storage/img/thumb/qubodup-wheel.png' alt='' />


    <img
    className='imgs'
    src='https://freesvg.org/storage/img/thumb/1342406378.png' alt='' />


    <div className='text'>
    If you are looking for an <span>Electric Car </span>
      for your short daily commutes, then an EV 
     is worth the money as it will reduce your
      commute costs in the long run.
       The maintenance cost of an electric
        car is also 
    less when compared to a conventional car.
    </div>

    <div className='tata'>
   
     <img className='im'
     src={tata} alt='' />
     <div >
     Tata Motors has announced to have 10 
     electric vehicles by 2025-26. The 
     company has recently unveiled two new
      electric concepts – the Curvv and the
       Avinya. While the former is based on Gen
        2 platform that underpins both EVs & ICE,
         the Avinya is based on the Gen 3 – the 
         skateboard platform for EV only. The
          Curvv based SUV will arrive by 2024, 
          while the Avinya 
     is expected to be launched in 2025.
     </div>
     
     </div>

     
    </div>
  )
}

export default Home