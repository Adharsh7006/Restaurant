import React from 'react'
import { IoCall,IoLocationOutline } from "react-icons/io5";
import Logo from '../assets/Logo.png'
import { RiFacebookFill,RiInstagramLine,RiTwitterFill,RiWhatsappFill,RiMessengerFill } from "react-icons/ri";
import '../Components/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer1'>
        <h4 className='footer2'><IoCall/></h4>
        <p className='footer8'>9876543210</p>
        <h5 className='footer9'>customer service</h5>
        <h4 className='footer10'><IoLocationOutline/></h4>
        <h5 className='footer7'>Newyork Address<br/>Avenue,34th floor</h5>
        </div>
        <div className='footer11'>
            <img className='footer3' src={Logo}></img>
            <h6 className='text1'><span>Ma</span>s<span>Home</span></h6>
        </div>
        <div className='input12'>
            <div className='footer4'>
            <div className='footer5'>
            <label style={{color:"white"}}>name</label>
            <br/>
            <input className='input1'/><br/>
            </div>
            <div style={{paddingLeft:"10px"}}>
            <label style={{color:"white"}}>email</label><br/>
            <input className='input1'/>
            </div>
            </div>
            <div style={{paddingTop:"10px"}}>
            <textarea className='input2' placeholder='Leave your message' rows="4" cols="50"></textarea><br/>
            <button className='footer6'>submit</button>
            </div>
            <div>
            <h4 className='icon'><RiFacebookFill/></h4>
            <h4 className='icon1'><RiInstagramLine/></h4>
            <h4 className='icon2'><RiTwitterFill/></h4>
            <h4 className='icon3'><RiWhatsappFill/></h4>
            <h4 className='icon4' ><RiMessengerFill/></h4>
            </div>
            <hr className='hr3'></hr>
            <p className='footer13'>Copyright @2018 Ma's Home</p>
            </div>


        </div>
  )
}

export default Footer