import React, { useContext } from 'react'
import { samplecontext } from '../App'
import { useNavigate } from 'react-router-dom'
import '../Components/Order.css'

function Order() {
    const {setadd,add} = useContext(samplecontext)
    const navigate=useNavigate();
    const success=()=>{
        navigate(-1)
        alert('sumbit succefully')
    }
  return (
    <div>
        <h4 id='order7' className='text1'><span>ORDER</span><span>NOW</span></h4>
        <div className='order'>
            {add.map((item)=>{
                return(
                    <div>
                    <img className='order1' src={item.photograph}></img>
                    <h4>{item.name}</h4>
                    </div>
                )
            })}
        </div>
        <div className='order2'>
        <label className='order3' >name</label><br/>
        <input className='order4' type='text'/><br/>
        <label className='order3' >phone number</label><br/>
        <input className='order5'/><br/>
        <label className='order3' >email</label><br/>
        <input className='order5' /><br/>
        <label className='order3' >place</label><br/>
        <input className='order5'  type='text'/><br/>
        <label className='order3' >number</label><br/>
        <input className='order5'  type='number'/><br/>
        <button id='order6' className="btn btn-success" onClick={()=>success()}>submit</button>
        </div>  
        </div>
  )
}

export default Order