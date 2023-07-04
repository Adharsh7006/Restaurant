import React, { useContext } from 'react'
import { samplecontext } from '../App'
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import '../Components/Time.css'

function Time() {
    const {hour,sethour} = useContext(samplecontext)
    console.log(hour[0].reviews)
    const navigate=useNavigate();
    const nav=()=>{
        navigate(-1)
    }
    
  return (
    <div className='time'>
        <h1 className='time1'>operating hours</h1>
        <ListGroup className='time2'>
            <ListGroup.Item>Monday:{hour[0].operating_hours.Monday}</ListGroup.Item>
            <ListGroup.Item>Tuesday:{hour[0].operating_hours.Tuesday}</ListGroup.Item>
            <ListGroup.Item>Wednesday:{hour[0].operating_hours.Wednesday}</ListGroup.Item>
            <ListGroup.Item>Thursday:{hour[0].operating_hours.Thursday}</ListGroup.Item>
            <ListGroup.Item>Friday:{hour[0].operating_hours.Friday}</ListGroup.Item>
            <ListGroup.Item>Saturday:{hour[0].operating_hours.Saturday}</ListGroup.Item>
            <ListGroup.Item>Sunday:{hour[0].operating_hours.Sunday}</ListGroup.Item>
        </ListGroup>
        <button type="button" className="btn btn-outline-primary" id='time3' onClick={()=>nav()}>back</button>
    </div>
  )
}

export default Time