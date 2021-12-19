import React, {useRef, useState, useEffect} from 'react'
import Wrapper from '../UI/Wrapper'
import About from '../Components/About/About'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home'
import BlogPost from '../Components/BlogPost/BlogPost'
import Skills from '../Components/Skills/Skills'
const Portfolio = () => {
    const [offset, setOffset] = useState(0);
    const [offsetPoint, offsetPointer] = useState(0)
    const [canScrolled, changeCanScrolled] = useState(true)
    const about = useRef()
    const home = useRef()
    const skills = useRef()
    const aboutScroll = () => {
        //@ts-ignore
        about.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } 
    const homeScroll = () => {
        //@ts-ignore
        home.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } 
    const skillsScroll = () => {
        changeCanScrolled(false)
        //@ts-ignore
        skills.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setTimeout(() => {
            changeCanScrolled(true)
        }, 1000)
    } 
    useEffect(() => {
        window.onscroll = () => {
          setOffset(window.pageYOffset)
        }
      }, []);
    useEffect(() => {
        console.log(offset, offsetPoint); 
        if(offset > offsetPoint) {
            console.log(offset, window.innerHeight);
            if(offset < window.innerHeight && offset < window.innerHeight - window.innerHeight / 3) {
                if(canScrolled) {
                    aboutScroll()
                }
            }
        } else {
            if(offset < window.innerHeight) {
                if(canScrolled) {
                    homeScroll()
                }            
        }}
        offsetPointer(offset)
    }, [offset])
    
    return (
        <Wrapper className='body_wrapper'>
            <Navbar aboutScroll={aboutScroll} homeScroll={homeScroll} skillsScroll={skillsScroll}/>
            <Home ref={home}/>
            <About ref={about}/>
            <Skills ref={skills}/>
            <BlogPost/>
        </Wrapper>
    )
}

export default Portfolio
