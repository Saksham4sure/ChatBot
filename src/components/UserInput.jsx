import { useState } from 'react';
import send from '../assets/send.png'

const API_Key = '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';
const fetchData = fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
        "Authorization": `Bearer ${API_Key}`,
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "model": "openrouter/free",
        "messages": [
            {
                "role": "user",
                "content": "what is meaning of life"
            }
        ]
    })
});

// fetchData.then(response => response.json())
//     .then(data => console.log(data.choices[0].message.content));


const UserInput = ({setMessage}) => {
    const [input, setInput] = useState("");

    const handleSend = () => {
        addMessage(input);
    }

    const addMessage = (text) => {
        if(!text) return;
        setMessage(prev => [...prev, {role : "user", content: text}])
    }

    const keyEnter = (e) =>{
        if(e.key === "Enter"){
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