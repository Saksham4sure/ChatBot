import React from 'react'
import Question from './Question'

const Content = ({message}) => {
    return (
        <div className='h-[90%] px-2 gap-4 flex flex-col'>
            <div className='pt-10'>
                <h1 className='text-xl'>Welcome !</h1>
                <p className='text-2xl'>Where should we start the conversation?</p>
            </div>
            {
                message.map((msg, i) =>(
                    <Question message={msg} key={i} />
                ))
            }
        </div>
    )
}

export default Content