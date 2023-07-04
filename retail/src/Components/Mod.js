import React, { useState } from 'react'
import Avatar from '../assets/Avatar.png'
import { RiFacebookFill, RiTwitterFill } from 'react-icons/ri'
import { TiSocialLinkedin } from "react-icons/ti";
import {AiOutlineGooglePlus, AiOutlineMail, AiOutlineUser} from "react-icons/ai"

function Mod() {
  return (
    <div className='login'>
      <div className='login1'>
        <div>
        <img style={{height:"120px",width:"120px",borderRadius:"50%"}} src={Avatar}></img>
        </div>
        <h2 style={{color:"white",marginTop:"10px"}}>User Login</h2>
        <div>
        <input style={{width:"250px",height:"40px",marginTop:"20px",borderRadius:"10px",border:"none",fontFamily:"Font Awesome 5 Free"}} placeholder="Username" type='text'/><br/>
      <input style={{width:"250px",height:"40px",marginTop:"10px",borderRadius:"10px",border:"none"}} placeholder='Password'  type='password'/><br/>
      </div>
      <div style={{display:"flex",marginTop:"20px"}}>
        <div style={{width:"50%"}}>
          <input style={{float:"left",marginLeft:"40px",marginTop:"3px",backgroundColor:"red"}} type='checkbox'/>
          <p style={{color:"white",fontSize:"12px",marginRight:"40px"}}>Keep me signed in</p>
        </div>
        <div style={{width:"50%"}}>
          <p style={{color:"white",fontSize:"12px"}}>Forgot the password?</p>
        </div>
      </div>
      <div style={{marginTop:"20px"}}>
        <button style={{color:"#400080",border:"none",width:"100px",height:"30px",borderRadius:"3px"}}>Sign In</button>
      </div>
      <div style={{marginTop:"40px"}}>
        <button style={{height:"40px",width:"40px",color:"white",backgroundColor:"#3b5998",border:"none"}}><RiFacebookFill style={{height:"30px",width:"30px"}}/></button>
        <button style={{height:"40px",width:"40px",color:"white",backgroundColor:"#0072b1",border:"none",marginLeft:"10px"}}><TiSocialLinkedin style={{height:"30px",width:"30px"}}/></button>
        <button style={{height:"40px",width:"40px",color:"white",backgroundColor:"#1DA1F2",border:"none",marginLeft:"10px"}}><RiTwitterFill style={{height:"30px",width:"30px"}}/></button>
        <button style={{height:"40px",width:"40px",color:"white",backgroundColor:"#db4a39",border:"none",marginLeft:"10px"}}><AiOutlineGooglePlus style={{height:"30px",width:"30px"}}/></button>
      </div>
      </div>
    </div>
  )
}

export default Mod