import React, {useEffect, forwardRef} from 'react'
import Background from '../../UI/Background'
import './styles/home.css'
import Aos from "aos"
import "aos/dist/aos.css"

const Home = forwardRef((props:any, ref:any) => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    },[])
    return (
        <div className='home_wrapper' ref={ref}>
            <Background className='home'>
                <p className='welcome' data-aos='fade-up'>HELLO 👋</p>
                <p className='name' data-aos='fade-up'>I am Wiktor Maciążek.</p>
                <p className='job' data-aos='fade-up'>Back-end & Front-end</p>
                <div className='social_icons' data-aos='fade-up'>
                    <a><i className="fab fa-facebook-f"></i></a>
                    <a><i className="fab fa-instagram"></i></a>
                    <a href='https://github.com/swapperDEV/' target='blank'><i className="fab fa-github"></i></a>
                    <a><i className="fab fa-youtube"></i></a>
                </div>
            </Background>
        </div>
    )
})

export default Home