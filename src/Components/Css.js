import React from 'react'
import "./style.css"
const Css = () => {
    const mycss={
        color:"white",
        backgroundColor:"blue",
        textAlign:"center",
        padding:"10px",
    }
    return (
        <div>
            <h1 style={{color:"white",backgroundColor:"red",textAlign:"center"}}>Welcome to Css</h1>
            <h1 style={mycss}>Welcome to Css</h1>
            <h1 className="danger">Welcome to Css</h1>
        </div>
    )
}

export default Css