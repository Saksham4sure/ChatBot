import {useState} from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import UserInput from '../components/UserInput'

const Home = () => {
    const [message, setMessage] = useState([]);

    return (
        <div className='h-screen'>
            <Header />
            <div className='h-5/6 px-6 md:px-30'>
                <Content message={message} />
                <UserInput setMessage={setMessage}/>
            </div>
        </div>
    )
}

export default Home