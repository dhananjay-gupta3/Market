
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Prebooking from './components/Prebooking';
import Signin from './components/Signin';
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="Ap">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/prebooking' element={<Prebooking/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
