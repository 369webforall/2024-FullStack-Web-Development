'use client'
import React, {useState} from 'react'

const User = (props) => {
    const[count, setCount] = useState(0)
    
    
    const {name, age} = props;
  return (
    <div>
        <h1>{name}</h1>
        <p>{age}</p>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count +1)}>Increase</button>
    </div>
  )
}

export default User;