import React, { useContext, useEffect, useState } from 'react'
import { samplecontext } from '../App'
import ListGroup from 'react-bootstrap/ListGroup';
import '../Components/Review.css'

function Review() {
    const {hour,sehour,details,setdetails} = useContext(samplecontext)
    const [detail, setdetail] = useState([])
    console.log(hour)
    console.log(details)
    
  return (
    <div className='rev'>
      <div className='rev1'>
        <div className='rev2'>
            <ListGroup>
            <ListGroup.Item>name: {hour[0].reviews[0].name}</ListGroup.Item>
        <ListGroup.Item>date: {hour[0].reviews[0].date}</ListGroup.Item>
        <ListGroup.Item>rating: {hour[0].reviews[0].rating}</ListGroup.Item>
        <ListGroup.Item>comments: {hour[0].reviews[0].comments}</ListGroup.Item>
        </ListGroup>
        </div>
        <div className='rev3'>
            <ListGroup>
            <ListGroup.Item>name: {hour[0].reviews[1].name}</ListGroup.Item>
        <ListGroup.Item>date: {hour[0].reviews[1].date}</ListGroup.Item>
        <ListGroup.Item>rating: {hour[0].reviews[1].rating}</ListGroup.Item>
        <ListGroup.Item>comments: {hour[0].reviews[1].comments}</ListGroup.Item>
        </ListGroup>
        </div>
        <div className='rev4'>
            <ListGroup>
            <ListGroup.Item>name: {hour[0].reviews[2].name}</ListGroup.Item>
        <ListGroup.Item>date: {hour[0].reviews[2].date}</ListGroup.Item>
        <ListGroup.Item>rating: {hour[0].reviews[2].rating}</ListGroup.Item>
        <ListGroup.Item>comments: {hour[0].reviews[2].comments}</ListGroup.Item>
        </ListGroup>
        </div>
        {details.map((item)=>{
          return(
        <div className='rev5'>
            <ListGroup>
            <ListGroup.Item>name: {item.name}</ListGroup.Item>
        <ListGroup.Item>date: {item.date}</ListGroup.Item>
        <ListGroup.Item>rating: {item.rate}</ListGroup.Item>
        <ListGroup.Item>comments: {item.text}</ListGroup.Item>
        </ListGroup>
        </div>
         )
        })}
        </div>
    </div>
  )
}

export default Review