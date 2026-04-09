import { useState } from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import UserInput from '../components/UserInput'

const Home = () => {
    const [message, setMessage] = useState([]);

    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    const handleMessage = async (text) => {
        if (!text) return;

        setMessage(prev => [
            ...prev,
            { role: "user", content: text }
        ]);

        try {
            const res = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    {
                                        text: text
                                    }
                                ]
                            }
                        ]
                    })
                }
            );

            const data = await res.json();
            const reply =
                data?.candidates?.[0]?.content?.parts?.[0]?.text ||
                "No response, error occured.";

            setMessage(prev => [
                ...prev,
                { role: "ai", content: reply }
            ]);
        }
        catch (err) {
            console.log(err);

            setMessage(prev => [
                ...prev,
                { role: "ai", content: "Error." }
            ]);
        }
    };

    return (
        <div className='h-screen'>
            <Header />
            <div className='h-5/6 px-6 md:px-30'>
                <Content message={message} />
                <UserInput onSend={handleMessage} />
            </div>
        </div>
    );
};

export default Home;