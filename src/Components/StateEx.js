import React, { useEffect, useState } from 'react'

const StateEx = () => {
    const [count, setCount] = useState(0);     
    useEffect(()=>{
        document.title= `useEffect is called ${count} times`;
    })
    return (
        <div className='container p-5 text-center'>
            <h1>Count: {count}</h1>           
            <button onClick={()=>setCount(count+1)} className='btn btn-primary me-3'>Update</button>
            <button onClick={()=>setCount(count-1)} className='btn btn-danger'>Reset</button>
        </div>
    )
}

export default StateEx