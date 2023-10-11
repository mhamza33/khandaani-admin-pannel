import React from 'react'
import "./error.css"

const Error404 = () => {
  return (
    <div className='error404'>
        <div className='oops' >
            <h1>Oops!</h1>
            <img src='./assets/images/404.svg' alt='Sorry, Page not found!' />
        </div>
    </div>
  )
}

export default Error404