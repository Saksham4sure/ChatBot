import React from 'react'
import Question from './Question'
import Answer from './Answer'

const Content = ({ message }) => {
    return (
        <div className='h-[90%] px-2 gap-4 flex flex-col overflow-y-auto'>
            <div className='pt-10'>
                <h1 className='text-xl'>Welcome !</h1>
                <p className='text-2xl'>Where should we start the conversation?</p>
            </div>
            {
                message.map((msg, i) => {
                    if (msg.role === "user") return <Question key={i} text={msg} />;
                    if (msg.role === "ai") return <Answer key={i} text={msg} />;
                    return null;
                })
            }
        </div>
    )
}

export default Content