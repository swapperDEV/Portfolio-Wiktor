import React, { useRef, useState, useEffect } from "react";
import { Wrapper } from "../../ui/Wrapper";
import { About } from "../../components/About/About";
import { Navbar } from "../../components/Navbar/Navbar";
import { Home } from "../../components/Home/Home";
import { Blog } from "../../components/Blog/Blog";
import { Projects } from "../../components/Projects/Projects";
import { isMobile } from "react-device-detect";
import { Footer } from "../../components/Footer/Footer";
import { Opinions } from "../../components/Opinions/Opinions";
import { Contact } from "../../components/Contact/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

export const Portfolio = () => {
  const [offset, setOffset] = useState(0);
  const [offsetPoint, offsetPointer] = useState(0);
  const [canScrolled, changeCanScrolled] = useState(true);
  const about = useRef();
  const home = useRef();
  const projects = useRef();
  const blog = useRef();
  const contact = useRef();
  const opinions = useRef();
  //@ts-ignore
  const aboutScroll = () => {
    //@ts-ignore
    about.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const homeScroll = () => {
    //@ts-ignore
    home.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const projectsScroll = () => {
    changeCanScrolled(false);
    //@ts-ignore
    projects.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      changeCanScrolled(true);
    }, 1000);
  };
  const blogScroll = () => {
    changeCanScrolled(false);
    //@ts-ignore
    blog.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      changeCanScrolled(true);
    }, 1000);
  };
  const opinionsScroll = () => {
    changeCanScrolled(false);
    //@ts-ignore
    opinions.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      changeCanScrolled(true);
    }, 1000);
  };
  const contactScroll = () => {
    changeCanScrolled(false);
    //@ts-ignore
    contact.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      changeCanScrolled(true);
    }, 1000);
  };
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  useEffect(() => {
    console.log(offset, offsetPoint);
    if (offset > offsetPoint) {
      console.log(offset, window.innerHeight);
      if (
        offset < window.innerHeight &&
        offset < window.innerHeight - window.innerHeight / 3
      ) {
        if (canScrolled) {
          if (!isMobile) {
            aboutScroll();
          }
        }
      }
    } else {
      if (offset < window.innerHeight) {
        if (canScrolled) {
          if (!isMobile) {
            homeScroll();
          }
        }
      }
    }
    //@ts-ignore
    offsetPointer(offset);
  }, [offset]);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Wrapper className="body_wrapper">
      <Navbar
        aboutScroll={aboutScroll}
        homeScroll={homeScroll}
        projectsScroll={projectsScroll}
        home={home}
        about={about}
        projects={projects}
        blogScroll={blogScroll}
        blog={blog}
        opinions={opinions}
        contact={contact}
        opinionsScroll={opinionsScroll}
        contactScroll={contactScroll}
      />
      <Home ref={home} aboutScroll={aboutScroll} />
      <About ref={about} />
      <Projects ref={projects} />
      <Opinions ref={opinions} />
      <Blog ref={blog} />
      <Contact ref={contact} />
      <Footer />
    </Wrapper>
  );
};
