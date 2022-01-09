import React, {useEffect, forwardRef, useState} from 'react'
import './styles/projects.css'
import Aos from "aos"
import "aos/dist/aos.css"
import { projectList } from '../../Data/projects/projectList'
import { Fade } from 'react-awesome-reveal'
import { skills } from '../../Data/projects/skills'

const Projects = forwardRef((props:any, ref:any) => {
    const [actSkill, changeActSkill] = useState(6)
    useEffect(() => {
        Aos.init({ duration: 1000 })
    },[])
    return (
        <section className='skills_section' ref={ref}>
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
                    projectList.map((project) => {
                        if(project.technology.includes(skills[actSkill].textName)) {
                            return (
                                <Fade duration={500}>
                                    <div className='project_block'>
                                        <img src={project.photo} alt='projectimg'/>
                                        <p className='project_name'>{project.name}</p>
                                        <div className='tech'>{project.technology.map(tech => {
                                        if(tech !== 'all') {
                                            return <p>{tech}</p>
                                        }
                                            })}</div>
                                        <div className='project_btn'>
                                            <button><a target='blank' href={project.live}>Live</a></button>
                                            <button><a target='blank' href={project.code}>Code</a></button>
                                        </div>
                                    </div>
                                </Fade>
                            )
                        }
                    })
                }
            </div>
        </section>
    )
})

export default Projects