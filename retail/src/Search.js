import React, { useState } from 'react'

function Search() {
  const [first, setfirst] = useState(0)
  const [data, setdata] = useState(0)
  const [add, setadd] = useState(0)
  var id=new Date();
  console.log(id)
  setTimeout(()=>{
    if(first==59){
      setfirst(0)
      setdata(data+1)

    }
    else{
      setfirst(first+1)

    }
    if(data==59){
      setadd(add+1)
      setdata(0)
    }
    else{

    }
  },1000)
  return (
    <div style={{backgroundColor:"green",color:"white"}}>
      <h1>{add}:{data}:{first}</h1>
      <h1>Hello</h1>
      </div>
  )
}

export default Search