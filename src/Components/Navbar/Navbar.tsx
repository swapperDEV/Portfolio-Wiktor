import React, {useState, useEffect} from 'react'
import './styles/nav.css'
import Wrapper from '../../UI/Wrapper'
import { Spin as Hamburger } from 'hamburger-react'
const Navbar = (props:any) => {
    //ANIMACJA PRZY HOVERZE
    const [scrollPosition, setScrollPosition] = useState(0);
    const [navClasses, changeClasses] = useState('topNav')
    const [navDisplay, changeNavDisplay] = useState(false)
    const [navActScrollElement, changeActScrollElement] = useState('home')
    const handleScroll = () => {
        const position = window.pageYOffset;
        let height = window.innerHeight / 3.5
        if(position > 1) {
            changeClasses('topNav mostBlack')
        } else {
            changeClasses('topNav')
        }
        setScrollPosition(position);
        if(position > props.contact.current.offsetTop - height) {
            changeActScrollElement('contact')
        }else if(position > props.blog.current.offsetTop - 100) {
            changeActScrollElement('blog')
        }
        else if(position > props.opinions.current.offsetTop - height - 100) {
            changeActScrollElement('opinions')
        }
        else if(position > props.projects.current.offsetTop - height) {
            changeActScrollElement('projects')
        } else if(position > props.about.current.offsetTop - 10) {
            changeActScrollElement('about')
        } else if(position > props.home.current.offsetTop - 100) {
            changeActScrollElement('home')
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToA = (when:any) => {
        switch (when) {
            case 'about':
                props.aboutScroll()
                changeNavDisplay(false)
                break;
            case 'home':
                props.homeScroll()
                changeNavDisplay(true)
                break;
            case 'projects':
                props.projectsScroll()
                changeNavDisplay(false)
                break;  
            case 'blog':
                props.blogScroll()
                changeNavDisplay(false)
                break;  
            case 'opinions':
                props.opinionsScroll()
                changeNavDisplay(false)
                break;  
            case 'contact':
                props.contactScroll()
                changeNavDisplay(false)
                break;  
        }
    }
    const sections = [
        {name: 'HOME',
        icons: <i className={`fas fa-home`}></i>,
        onClk: () => scrollToA('home'),
        class: navActScrollElement === 'home' && 'ActiveS'
        },        
        {name: 'ABOUT',
        icons: <i className={`far fa-address-card`}></i>,
        onClk: () => scrollToA('about'),
        class: navActScrollElement === 'about' && 'ActiveS'
        },        
        {name: 'PROJECTS',
        icons: <i className={`fas fa-bookmark`}></i>,
        onClk: () => scrollToA('projects'),
        class: navActScrollElement === 'projects' && 'ActiveS'
        },          
        {name: 'OPINIONS',
        icons: <i className="fas fa-users"></i>,
        onClk: () => scrollToA('opinions'),
        class: navActScrollElement === 'opinions' && 'ActiveS'
        },           
        {name: 'BLOG',
        icons: <i className="fas fa-tasks"></i>,
        onClk: () => scrollToA('blog'),
        class: navActScrollElement === 'blog' && 'ActiveS'
        },           
        {name: 'CONTACT',
        icons: <i className="fas fa-phone"></i>,
        onClk: () => scrollToA('contact'),
        class: navActScrollElement === 'contact' && 'ActiveS'
        },
        ]
    const links = sections.map((e) => (
        //@ts-ignore
        <li key={e.name} className={`nav_item ${e.class}`} onClick={e.onClk}>
            {e.name}
        </li>
    )) 
    const linksFull = sections.map((e) => (
        //@ts-ignore
        <li key={e.name} className={`nav_item mobile_nav_item ${e.class}`} onClick={e.onClk}>
            {e.name} {e.icons}
        </li>
    )) 
    const navToggle = () => {
        changeNavDisplay(!navDisplay)
    }
    return (
        <>
        <section className='hamburgers'>
            <Hamburger distance='lg' size={30} toggled={navDisplay} toggle={navToggle} />
        </section>
        <Wrapper className={navDisplay ? 'navbar navbarUnHide':'navbar'}>
            <div className={navClasses}>
                <div className='links'>
                    <ul className='navbar_links'>
                        {links}
                    </ul>
                </div>
            </div>
            <Wrapper className={navDisplay ? 'mobile_navbar navUnHide':'mobile_navbar'}>
                <ul className='mobile_navbar_ul'>
                    {linksFull}
                </ul>
            </Wrapper>
        </Wrapper>
        </>
    )
}

export default Navbar