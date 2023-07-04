import React, { useContext, useEffect, useState } from 'react'
import { samplecontext } from '../App'
import Card from 'react-bootstrap/Card';
import '../Components/Favour.css'

function Favour(){
    const {hide,sethide,cart,setcart,sample} = useContext(samplecontext)
    const Delete=(id)=>{
      setcart(cart.filter((item)=>item[0].id !== id))
      alert("deleted successfully")
    }
    console.log(cart)
    
  return (
    <div>
      <div className='favour4'>
      <h4 className='text1'><span>Ma</span>s<span>Home</span></h4>
      </div>
      {cart==""?<h1 className='favour5'>OOPS!</h1>:cart.map((item)=>{
        return(
          <div className='favour'>
            <Card className='favour1'>
      <Card.Img className='favour2' src={item[0].photograph}/>
      <Card.Body>
        <Card.Title>{item[0].name}</Card.Title>
        <Card.Text>{item[0].address}
        </Card.Text>
      </Card.Body>
      <button className="btn btn-outline-danger" id='favour3' onClick={()=>Delete(item[0].id)}>delete</button>
    </Card>
          </div>
        )
      })}
    </div>
  )
}

export default Favour