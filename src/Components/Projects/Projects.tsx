import React, {useEffect, forwardRef, useState} from 'react'
import './styles/projects.css'
import Aos from "aos"
import "aos/dist/aos.css"
import portfolioPhoto from '../../Assets/projects/portfolio.png'
import startPagePhoto from '../../Assets/projects/startPage.png'
import memoryGamePhoto from '../../Assets/projects/memoryGame.png'
import todoAppPhoto from '../../Assets/projects/todoApp.png'
import weatherAppPhoto from '../../Assets/projects/weatherApp.png'
import shopListPhoto from '../../Assets/projects/shopList.png'

import { Fade } from 'react-awesome-reveal'

const Projects = forwardRef((props:any, ref:any) => {
    const [actSkill, changeActSkill] = useState(6)
    useEffect(() => {
        Aos.init({ duration: 1000 })
    },[])
    const skills = [
        {
            name: () => {
                return (
                <>
                    <i className="fab fa-html5"></i>
                </>
                )
            },
            textName: 'html',
            projects: 12,
            years: 2,
            id: 0,
        },
        {
            name: () => {
                return (
                <>
                    <i className="fab fa-js-square"></i>
                </>
                )
            },           
            textName: 'javascript',  
            projects: 11,
            years: 2,
            id: 1,
        }, 
        {
            name: () => {
                return (
                <>
                    <i className="fab fa-sass"></i>
                </>
                )
            },       
            textName: 'sass',    
            projects: 9,
            years: 1,
            id: 2,
        },
        {
            name: () => {
                return (
                <>
                    <i className="fab fa-react"></i>
                </>
                )
            },   
            textName: 'react',
            projects: 2,
            years: 1,
            id: 3,
        },
        {
            name: () => {
                return (
                <>
                    <i className="fab fa-php"></i>
                </>
                )
            },        
            textName: 'php',       
            projects: 1,
            years: 1,
            id: 4,
        },
        {
            name: () => {
                return (
                <>
                    <i className="fab fa-node"></i>
                </>
                )
            },   
            textName: 'node',
            projects: 1,
            years: 1,
            id: 5,
        },
        {
            name: () => {
                return (
                <>
                    <i className="fab fa-firefox-browser"></i>
                </>
                )
            },   
            textName: 'all',
            projects: '',
            years: '',
            id: 6,
        }
        
    ]
    const projects = [
        {
            photo: portfolioPhoto,
            name: 'Portfolio',
            technology: ['react', 'html', 'sass', 'php', 'all']
        },
        {
            photo: startPagePhoto,
            name: 'Browser Start Page',
            technology: ['react', 'html', 'sass', 'node', 'all']
        },
        {
            photo: shopListPhoto,
            name: 'Shop List',
            technology: ['html', 'sass', 'react', 'all']
        },
        {
            photo: weatherAppPhoto,
            name: 'Weather App',
            technology: ['html', 'sass', 'javascript', 'all']
        },
        {
            photo: todoAppPhoto,
            name: 'TodoApp',
            technology: ['html', 'sass', 'javascript', 'all']
        },
        {
            photo: memoryGamePhoto,
            name: 'Memory Game',
            technology: ['html', 'javascript', 'all']
        }
    ]
    return (
        <div className='skills_section' ref={ref}>
            <div className='skills_text' data-aos="fade-up">
                <p className='skills_section_title'>Projects & Skills</p>
                <p className='skills_section_description'>Know technologies & projects.</p>
                <hr/>
            </div>
            <div className='skills_technology'>
                <ul className='skills_list'  data-aos="flip-up">
                    {skills.map((skill) => (
                        <li key={skill.id} onClick={() => changeActSkill(skill.id)} className={`skill_icon ${actSkill === skill.id && 'choosed'}`}><i >{skill.name()}</i></li>
                    ))}
                </ul>
            </div>
            <div className='projects_list'>
                {
                    projects.map((project) => {
                        if(project.technology.includes(skills[actSkill].textName)) {
                            return (
                                <Fade duration={500}>
                                    <div className='project_block'>
                                        <img src={project.photo} alt='photo'/>
                                        <p className='project_name'>{project.name}</p>
                                        <div className='tech'>{project.technology.map(tech => {
                                        if(tech !== 'all') {
                                            return <p>{tech}</p>
                                        }
                                            })}</div>
                                    </div>
                                </Fade>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
})

export default Projects