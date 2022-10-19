import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './SingleQuestion'

const App = () => {

  const [questions, setQuestion] = useState(data)

  return (
    <div className='w-full h-screen bg-purple-600 flex justify-center items-center'>
      <div className='w-2/3 bg-white mx-auto relative rounded-sm'>

        <div className='flex flex-col justify-center items-center py-8'>
          <h1 className='text-2xl font-bold'>Questions and Answers</h1>
          <section className='py-4 w-3/4 h-full'>
            {
              questions.map((question) => (
                <SingleQuestion key={question.id} {...question} />
              ))
            }
        </section>
        </div>

      </div>
    </div>
  )
}

export default App