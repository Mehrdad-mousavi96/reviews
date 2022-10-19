import React, { useState } from 'react'
import Review from './Review'
import people from './data'

const App = () => {

  return (
    <article className='w-full h-screen flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold my-4 underline'>Our Reviews</h1>
      <Review />
    </article>
  )
}

export default App