import React, {useEffect, forwardRef} from 'react'
import Background from '../../UI/Background'
import './styles/home.css'
import Aos from "aos"
import "aos/dist/aos.css"
import { MobileView, BrowserView } from 'react-device-detect';
import Particles from 'react-tsparticles';
import { particlesOptions } from '../../Data/Particles/home_side_options.js'

const Home = forwardRef((props:any, ref:any) => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    },[])
    return (
        <section className='home_wrapper' ref={ref}>
            <Background className='home'>
                <BrowserView>
                    <div className='animation_bg'>
                            <Particles id="tsparticles" options={particlesOptions}/>
                        </div>
                </BrowserView>
                <p className='welcome' data-aos='fade-up'>HELLO 👋</p>
                <p className='name' data-aos='fade-up'>I am Wiktor Maciążek.</p>
                <p className='job' data-aos='fade-up'>Back-end & Front-end</p>
                <div className='social_icons' data-aos='fade-up'>
                    <a><i className="fab fa-facebook-f"></i></a>
                    <a><i className="fab fa-instagram"></i></a>
                    <a href='https://github.com/swapperDEV/' target='blank'><i className="fab fa-github"></i></a>
                    <a><i className="fab fa-youtube"></i></a>
                </div>
                <MobileView>
                    <div className='home_scroll_down'  onClick={() => props.aboutScroll()}>
                        <i className="fas fa-angle-double-down"></i>
                    </div>
                </MobileView>
            </Background>
        </section>
    )
})

export default Home