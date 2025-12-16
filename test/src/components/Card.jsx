import React from 'react'

const Card = ({ info }) => {
    return (
        <div className={`rounded-md ${info.color} shadow p-4`}>
            <h3 className='text-2xl font-semibold text-gray-600 mb-4'>{info.title}</h3>
            <p className='text-white'>{info.description}</p>
        </div>
    )
}

export default Card