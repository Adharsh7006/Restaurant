import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { samplecontext } from '../App'
import { RiFacebookFill } from 'react-icons/ri'
import { IoLogoGoogle } from 'react-icons/io5'
import '../Components/Login.css'

function Login() {
  const {sethide,hide} = useContext(samplecontext)
  
  return (
    <div>
      <div className='log'>
      </div>
      <div className='log1'>
      <div>
        <h1 className='log2'>Login</h1>
      </div>
      <div className='log3'>
        <label className='log4'>username</label><br/>
        <input className='log5'/><br/>
        <label style={{color:"white"}}>password</label><br/>
        <input className='log5'/><br/>
        <button className='log6'><RiFacebookFill/>continue with facebook</button><br/>
        <button className='log7'><IoLogoGoogle/> continue with google</button><br/>
        <button id='log8' type="button" className="btn btn-outline-primary">Login</button>
        <Link to={"/Register"}><p>create an account</p></Link>
      </div>
      </div>
        
    </div>
  )
}

export default Login