import React from 'react'

const Question = ({text}) => {
  return (
    <div className='bg-[#3c6e71] px-3 py-2 rounded-xl w-fit ml-auto'>{text.content}</div>
  )
}

export default Question