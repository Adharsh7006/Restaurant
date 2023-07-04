import React, { useContext, useEffect, useState } from 'react'
import Video1 from '../assets/Video1.mp4'
import { Form, Link } from 'react-router-dom'
import { samplecontext } from '../App'
import Card from 'react-bootstrap/Card';
import Image1 from '../assets/Image1.jpg'
import Image2 from '../assets/Image2.jpg'
import Chef from '../assets/Chef.mp4'
import axios from 'axios';
import Image from '../assets/Image.jpg'
import Container from 'react-bootstrap/esm/Container';
import "../Components/Content.css"

function Content() {
    const {sample,setsample} = useContext(samplecontext)
    const [first, setfirst] = useState([])
  const [data, setdata] = useState([])
  useEffect(() => {
    axios.get(`restaurants.json`).then((response)=>{
        setfirst(response.data.restaurants)
        console.log(first)
        setsample(response.data.restaurants)
        setdata(response.data.restaurants)
    })
},[])
    const Search=(e)=>{
        setdata(first.filter((item)=>item.name.toLowerCase().includes(e.target.value)))
      
      }
  return (
    <div>
        <div>
      <div >
      <video autoPlay loop muted className='video'>
        <source src={Video1} type='video/mp4'/>
      </video>
      </div>
      <div className='content'>
    <h2>Ma's Home</h2>
    <h2>Ma's Home</h2>
  </div>

    </div>
    <div style={{display:"flex"}}>
    <div className='para'>
      <h1 id='animate-charcter'>"Come for a drink<br/>Stay for a meal"</h1>
      </div>
      <div className='search1'>
            <input className='search' type="search" placeholder="Search"  onChange={Search}/>
            </div>
            </div>
      <div>
        {data.map((item)=>{
          return(
            <div style={{marginTop:"1px"}}>
              <Link to={`/Food/${item.id}`}>
      <Card className='card'>
      <Card.Img style={{borderRadius:"0px"}} variant="top" src={item.photograph} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.address}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    </div>
     )
    })}
    </div>
    <div className='img1'>
    <img className='img' src={Image}></img>
    <div className='para1'>
      <h2><i>𝕲𝖔𝖔𝖉 𝖋𝖔𝖔𝖉 <br/> 𝕰𝖖𝖚𝖆𝖑𝖘 <br/> 𝕲𝖔𝖔𝖉 𝕸𝖔𝖔𝖉</i></h2>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
      <hr className='hr'></hr>
    </div>

  </div>
  <div className='img3'>
  <p className='para2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
    <img className='img2' src={Image1}></img>
    
  </div>
  <div>
  <video autoPlay loop muted style={{width:"100%"}}>
        <source src={Chef} type='video/mp4'/>
      </video>
      <div className='content2'>
        <h1 style={{color:"white"}}><span>"Being a chef never</span></h1>
        <h1 style={{color:"yellow"}} ><span><u>seems like a job,</u></span></h1>
        <h1 style={{color:"white"}} ><span>it becomes</span></h1>
        <h1 style={{color:"yellow"}} ><span><u>a true passion"</u></span></h1>
      </div>
  </div>
  <div className='img4'>
    <img className='img5' src={Image2}></img>
    <div>
    <h1 className='text2'><strong><i>"Hunger gives <br/> flavour <br/> to the food"</i></strong></h1>
    </div>
  </div>
  <hr className='hr1'></hr>
  <div className='img6'>
    <h1 className='text3'><strong><i>"music is the wine<br/> that fills the<br/> cup of silence"</i></strong></h1>
    <img className='img7' src='http://www.sundaytimes.lk/200802/uploads/Study.jpg'></img>
  </div>
    </div>
  )
}

export default Content