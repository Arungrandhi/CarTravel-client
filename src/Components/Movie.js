import React from 'react'

const Movie = (props) => {
  return (
    <div className='movie'>
        <figure>
            <img src={props.path}/>
            <figcaption>
                <h2>{props.title}</h2>
                <p>{props.cat}</p>
             </figcaption>   
        </figure>
    </div>
  )
}
export default Movie