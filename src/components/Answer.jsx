import React from 'react'

const Answer = ({text}) => {
  return (
    <div className='px-3 py-2 rounded-xl'>{text.content}</div>
  ) 
}

export default Answer