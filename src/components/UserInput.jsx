import { useState } from 'react';
import send from '../assets/send.png'

const UserInput = ({ onSend }) => {
    const [input, setInput] = useState("");
    
    const handleSend = () => {
        if(!input) return;
        onSend(input);
        setInput("");
    }
    const keyEnter = (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    }

    return (
        <div className='flex bg-[#222222] rounded-2xl w-full h-20 p-2 gap-2 justify-between items-center'>
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={keyEnter} type="text" placeholder='Type your message here' autoComplete='off' className='w-full h-full rounded-xl px-4 focus:outline-0' />
            <button onClick={handleSend} className='flex cursor-pointer items-center justify-center h-15 w-15 overflow-hidden rounded-full'>
                <img className='h-6 object-cover invert' src={send} />
            </button>
        </div>
    )
}

export default UserInput