import React from 'react'

const ChildA = ({ sendToParent }) => {
  return (
    <div>
        <button onClick={() => sendToParent('I\'m child A')} className='px-2 py-0.5 text-white bg-emerald-500 rounded-md'>
            Childe A Click me
        </button>
    </div>
  )
}

export default ChildA