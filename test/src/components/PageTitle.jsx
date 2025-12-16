import React from 'react'

const PageTitle = ({ title, description }) => {
  return (
    <div className='mt-6'>
        <h1 className='font-bold text-4xl text-gray-800'>{title}</h1>
        <p className='text-sm text-gray-500'>{description}</p>
    </div>
  )
}

export default PageTitle