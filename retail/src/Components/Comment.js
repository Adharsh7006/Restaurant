import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { samplecontext } from '../App'
import '../Components/Comment.css'

function Comment() {
    const {details,setdetails} = useContext(samplecontext)
    const id=useParams()
    console.log(id)
    const [text, settext] = useState([])
    const [name, setname] = useState([])
    const [date, setdate] = useState([])
    const [rate, setrate] = useState([])
    console.log(text)
    const review=()=>{
        setdetails([...details,{name:name,date:date,rate:rate,text:text}])
    }
  return (
    <div>
      <div className='comment2'>
      <h4 className='text1'><span>Ma</span>s<span>Home</span></h4>
      </div>
      <div className='comment4'>
      <div className='comment3'>
        <h1>Comment</h1>
        <label>username</label><br/>
        <input className='comment' onChange={(e)=>setname(e.target.value)}/><br/>
        <label>date</label><br/>
        <input type='date' className='comment' onChange={(e)=>setdate(e.target.value)}/><br/>
        <label>rating</label><br/>
        <input className='comment' onChange={(e)=>setrate(e.target.value)}/><br/>
        <label>Comment</label><br/>
        <textarea type='text' className='comment5' placeholder='Leave your message' rows="6" cols="40" onChange={(e)=>settext(e.target.value)}></textarea><br/>
        <Link to={`/Review/${id.id}`}><button id='comment1' className="btn btn-outline-primary" onClick={()=>review()}>submit</button></Link>
        </div>
    </div>
    </div>
  )
}

export default Comment