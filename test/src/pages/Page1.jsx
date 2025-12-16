import React from 'react'
import PageTitle from '../components/PageTitle'
import Card from '../components/Card'

const Page1 = () => {
  const cardsInfo = [
    {
      title: 'Header 1',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia aspernatur error magni',
      color: 'bg-orange-500'
    },
    {
      title: 'Header 2',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia aspernatur error magni',
        color: 'bg-emerald-500'
    },
    {
      title: 'Header 3',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia aspernatur error magni',
        color: 'bg-sky-500'
    },
    {
      title: 'Header 4',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia aspernatur error magni',
        color: 'bg-rose-500'
    },
  ]
  return (
    <div>
      <h1 className='text-center text-6xl'>Parent to Child</h1>
      <div className='grid grid-cols-4 gap-3 mt-5'>
        {cardsInfo.map((info, index) => (
          <Card key={index} info={info} />
        ))}
      </div>
    </div>
  )
}

export default Page1