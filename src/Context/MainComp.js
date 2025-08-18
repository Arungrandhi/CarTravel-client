import React, { createContext, useState } from 'react'
import Comp1 from './Comp1'
import Comp3 from './Comp3'

export const userData = createContext()


const MainComp = () => {

  const [count, setCount] = useState(0);
  
  return (
    <userData.Provider value={[count,setCount]}>
      <div className='container p-5'>
        <h1>Main Component</h1>
        <h1>Counter : {count}</h1>
        <button onClick={()=>setCount(count+1)}>ADD</button>
        <Comp1 />
      </div>
    </userData.Provider>
    
  )
}

export default MainComp