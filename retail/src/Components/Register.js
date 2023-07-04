import React from 'react'
import '../Components/Register.css'

function Register() {
  return (
    <div>
      <div className='reg'>

      </div>
      <div className='reg1'>
        <h1 className='reg4'>Register</h1>
        <label>username</label><br/>
        <input className='reg2'/><br/>
        <label>email</label><br/>
        <input className='reg2'/><br/>
        <label>phone number</label><br/>
        <input className='reg2'/><br/>
        <label>password</label><br/>
        <input className='reg2'/><br/>
        <label>confirm password</label><br/>
        <input className='reg2'/><br/>
        <button type="button" className="btn btn-warning" id='reg3' >sign up</button>
             </div>
    </div>
  )
}

export default Register