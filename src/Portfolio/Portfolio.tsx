import React, {useRef, useState, useEffect} from 'react'
import Wrapper from '../UI/Wrapper'
import About from '../Components/About/About'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home'
import BlogPost from '../Components/BlogPost/BlogPost'
import Projects from '../Components/Projects/Projects'
import {isMobile} from 'react-device-detect';

const Portfolio = () => {
    const [offset, setOffset] = useState(0);
    const [offsetPoint, offsetPointer] = useState(0)
    const [canScrolled, changeCanScrolled] = useState(true)
    const about = useRef()
    const home = useRef()
    const projects = useRef()
    //@ts-ignore
    const aboutScroll = () => {
        //@ts-ignore
        about.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } 
    const homeScroll = () => {
        //@ts-ignore
        home.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } 
    const projectsScroll = () => {
        changeCanScrolled(false)
        //@ts-ignore
        projects.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
                    if(!isMobile) {
                        aboutScroll()
                    }
                }
            }
        } else {
            if(offset < window.innerHeight) {
                if(canScrolled) {
                    if(!isMobile) {
                        homeScroll()
                    }
                }            
        }}
        //@ts-ignore
        offsetPointer(offset)
    }, [offset])
    
    return (
        <Wrapper className='body_wrapper'>
            <Navbar aboutScroll={aboutScroll} homeScroll={homeScroll} projectsScroll={projectsScroll} home={home} about={about} projects={projects}/>
            <Home ref={home} aboutScroll={aboutScroll}/>
            <About ref={about}/>
            <Projects ref={projects}/>
            <BlogPost/>
        </Wrapper>
    )
}

export default Portfolio