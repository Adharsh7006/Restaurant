import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { samplecontext } from '../App'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import '../Components/Food.css'


function Food() {
  const {sample,setsample,sethide,add,setadd,cart,setcart,sethour,hour} = useContext(samplecontext)
  const [data, setdata] = useState([])
  const [status, setstatus] = useState()
  const id=useParams()
  console.log(id.id)
  const datas=sample.filter((item)=>item.id==id.id)
  console.log(datas[0].status)
  console.log(status)
  const additem=(datas)=>{
    setadd(datas)

  }
  const addcart=(item)=>{
    setcart([...cart,item])
   }
  console.log(cart)
  const hrs=()=>{
    sethour(datas)


  }
  useEffect(() => {
    sethour(datas)
  })
  
  
  return (
    <div className='food'>
      <div className='food14'>
      <h4 id='food12' className='text1'><span>Ma</span>s<span>Home</span></h4>
      </div>
    <div className='food1'>
      <div className='food2'>
        <img className='food3' src={datas[0].photograph}></img>
        </div>
        <div className='food4'>
          <ListGroup className='food5'>
            <ListGroup.Item className='food6'>{datas[0].name}</ListGroup.Item>
            <ListGroup.Item className='food6'>{datas[0].address}</ListGroup.Item>
            <ListGroup.Item className='food6'>{datas[0].cuisine_type}</ListGroup.Item>
            <Link to={"/Time"}><Button variant="primary" className='food7' onClick={()=>hrs(datas)}>operting hours</Button></Link>
                  
            <ListGroup.Item className='food6'>{datas[0].neighborhood}</ListGroup.Item>
            <Link to={`/Review/${id.id}`}><Button variant="primary" className='food7' onClick={()=>hrs(datas)}>reviews</Button></Link>
          </ListGroup>
          <div className='food13'>
          <Link to={"/Favour"}><button id='food8' className="btn btn-outline-primary" onClick={()=>addcart(datas)}>add to cart</button></Link>
          <Link to={`/Comment/${id.id}`}><button id='food9' className="btn btn-outline-danger">add comments</button></Link>
          <Link to={"/order"}><button id='food10' className="btn btn-outline-warning" onClick={()=>additem(datas)}>order now</button></Link>
          </div>
          
        </div>
        </div>

        </div>
  )
}

export default Food