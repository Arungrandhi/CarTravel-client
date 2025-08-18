import React, { useContext } from 'react'
import { userData } from './MainComp'


const Comp3 = () => {
  
  const [count,setCount]=useContext(userData)

  return (
    <div>
        <h1>Comp3</h1>
        <h1>Counter :{count}</h1>
        <button onClick={()=>setCount(count-1)}>Remove</button>
    </div>
  )
}

export default Comp3