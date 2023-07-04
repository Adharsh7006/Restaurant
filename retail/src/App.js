import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Food from './Components/Food';
import Footer from './Components/Footer'
import { createContext, useState } from 'react';
import Mod from './Components/Mod';
import Search from './Search';
import Favour from './Components/Favour';
import Order from './Components/Order';
import Content from './Components/Content';
import Login from './Components/Login';
import Register from './Components/Register';
import Time from './Components/Time'
import Review from './Components/Review';
import Comment from './Components/Comment';
import Home from './Components/Home';
const samplecontext=createContext()

function App() {
  const [hide, sethide] = useState(false)
  const [sample, setsample] = useState([])
  const [add, setadd] = useState([])
  const [cart, setcart] = useState([])
  const [hour, sethour] = useState([])
  const [details, setdetails] = useState([])
  return (
    <div className="App">
      <samplecontext.Provider value={{sample,setsample,hide,sethide,add,setadd,cart,setcart,hour,sethour,setdetails,details}}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path="/Food/:id" element={<Food/>}/>
      <Route path="/Favour" element={<Favour/>}/>
      <Route path='/order'  element={<Order/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Time' element={<Time/>}/>
      <Route path='/Review/:id' element={<Review/>}/>
      <Route path='/Comment/:id' element={<Comment/>}/>
      </Routes>
      </BrowserRouter>
      </samplecontext.Provider>
      {/* <Mod/> */}
    </div>
  );
}

export default App;
export {samplecontext}
