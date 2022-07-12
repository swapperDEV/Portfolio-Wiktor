import React, { useEffect, forwardRef } from "react";
import "./styles/skills.css";
import Block from "./UI/Block";
import Aos from "aos";
import "aos/dist/aos.css";

export const Skills = forwardRef((props, ref) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const skills = [
    {
      name: () => {
        return (
          <>
            <i className="fab fa-html5"></i>
          </>
        );
      },
      projects: 12,
      years: 2,
    },
    {
      name: () => {
        return (
          <>
            <i className="fab fa-sass"></i>
          </>
        );
      },
      projects: 9,
      years: 1,
    },
    {
      name: () => {
        return (
          <>
            <i className="fab fa-react"></i>
          </>
        );
      },
      projects: 2,
      years: 1,
    },
    {
      name: () => {
        return (
          <>
            <i className="fab fa-php"></i>
          </>
        );
      },
      projects: 1,
      years: 1,
    },
    {
      name: () => {
        return (
          <>
            <i className="fab fa-node"></i>
          </>
        );
      },
      projects: 1,
      years: 1,
    },
    {
      name: () => {
        return (
          <>
            <i className="fab fa-js-square"></i>
          </>
        );
      },
      projects: 11,
      years: 2,
    },
  ];
  return (
    <div className="skills_section" ref={ref}>
      <p className="skills_section_title">Skills</p>
      <div className="skills_list">
        {skills.map((skill) => (
          <div className="skill">
            <div className="skill__name">
              <p>{skill.name()}</p>
            </div>
            <div className="count">
              <p className="count__project">Projects {skill.projects},</p>
              <p className="count__years">Years {`${skill.years}`}</p>
            </div>
            <div className="count__blocks">
              <Block number={skill.projects} type={"projects"} />
              <Block number={skill.years} type={"years"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Skills;
