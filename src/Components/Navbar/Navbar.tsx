import React, {useState, useEffect} from 'react'
import './styles/nav.css'
import Wrapper from '../../UI/Wrapper'
import { Spin as Hamburger } from 'hamburger-react'
const Navbar = (props:any) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [navClasses, changeClasses] = useState('topNav')
    const [navDisplay, changeNavDisplay] = useState(false)
    const handleScroll = () => {
        const position = window.pageYOffset;
        const height = window.innerHeight
        console.log(height, position, scrollPosition);
        if(position > 1) {
            changeClasses('topNav mostBlack')
        } else {
            changeClasses('topNav')
        }
        setScrollPosition(position);
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
            case 'skills':
                props.skillsScroll()
                changeNavDisplay(false)
                break;  
        }
    }
    const sections = [
        {name: 'HOME',
        icons: <i className="fas fa-home"></i>,
        onClk: () => scrollToA('home'),
        },        
        {name: 'ABOUT',
        icons: <i className="far fa-address-card"></i>,
        onClk: () => scrollToA('about'),
        },        
        {name: 'SKILLS',
        icons: <i className="fas fa-bookmark"></i>,
        onClk: () => scrollToA('skills'),
        },        
        {name: 'PROJECTS',
        icons: <i className="fas fa-tasks"></i>,
        onClk: () => scrollToA('about'),
        },        
        {name: 'OPINIONS',
        icons: <i className="fas fa-users"></i>,
        onClk: () => scrollToA('about'),
        },        
        {name: 'CONTACT',
        icons: <i className="fas fa-phone"></i>,
        onClk: () => scrollToA('about'),
        },
        ]
    const links = sections.map((e) => (
        //@ts-ignore
        <li key={e.name} className='nav_item' onClick={e.onClk}>
            {e.name}
        </li>
    )) 
    const linksFull = sections.map((e) => (
        //@ts-ignore
        <li key={e.name} className='nav_item' onClick={() => scrollToA()}>
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
