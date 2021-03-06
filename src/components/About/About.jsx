import React, { forwardRef, useEffect } from "react";
import memoji from "../../assets/images/memoji.jpg";
import "./styles/about.css";
import { AboutHeadline } from "./AboutHeadline";
export const About = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="section_line"></div>
      <div className="fill_white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path
            fill="#4a4e69"
            fill-opacity="1"
            d="M0,32L60,37.3C120,43,240,53,360,80C480,107,600,149,720,165.3C840,181,960,171,1080,138.7C1200,107,1320,53,1380,26.7L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <section className="about_section">
          <div className="about__left" data-aos="fade-right">
            <div className="about__left_top">
              <div className="about__left_info">
                <p className="about__one">
                  <AboutHeadline />
                </p>
                <p className="about__two">Frontend & Backend Developer</p>
                <div className="icons">
                  <i className="far fa-keyboard"></i>
                  <i className="fas fa-camera"></i>
                  <i className="far fa-lightbulb"></i>
                </div>
              </div>
              <div className="about__right_info">
                <img src={memoji} alt="myphoto" data-aos="flip-up" />
              </div>
            </div>
            <p data-aos="fade-up">
              Hi, i'm Wiktor, i Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Obcaecati itaque earum vitae reprehenderit
              nesciunt sint enim quidem saepe asperiores quisquam ab incidunt
              culpa maiores cupiditate, rerum, tempora officia debitis.
              Nobis?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Itaque saepe laboriosam vero, dolor illum at enim, sed repellendus
              quo inventore, facere voluptates laborum dolores incidunt!
            </p>
            <div className="about__buttons">
              <button className="btn_one" data-aos="fade-up">
                Contact
              </button>
              <button className="btn_two" data-aos="fade-up">
                Read more
              </button>
            </div>
          </div>
          <div className="about__right" data-aos="fade-left">
            <img src={memoji} alt="myphoto" />
          </div>
        </section>
      </div>
    </>
  );
});
