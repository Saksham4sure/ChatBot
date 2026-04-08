import { useState } from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import UserInput from '../components/UserInput'

const Home = () => {
    const [message, setMessage] = useState([]);
    const API_Key = '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';

    const handleMessage = async (text) => {
        if (!text) return;
        setMessage(prev => [...prev, { role: "user", content: text }]);

        try {
            const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${API_Key}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "openrouter/free",
                    messages: [
                        {
                            role: "user",
                            content: text
                        }
                    ]
                })
            });

            const data = await res.json();
            console.log(data)
            const reply = data?.choices?.[0]?.message?.content || "No response";

            setMessage(prev => [...prev, { role: "ai", content: reply }])

        }
        catch (err) {
            console.log(err);
            setMessage(prev => [...prev, { role: "ai", content: "Error." }]);
        }
    }


    return (
        <div className='h-screen'>
            <Header />
            <div className='h-5/6 px-6 md:px-30'>
                <Content message={message} />
                <UserInput onSend={handleMessage} />
            </div>
        </div>
    )
}

export default Home