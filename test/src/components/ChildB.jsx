import React from 'react'

const ChildB = ({ message }) => {
  return (
    <div>
        <p>I'm Child B, This message from Childe A: <span className='text-red-500'>{message}</span>  </p>
    </div>
  )
}

export default ChildB