import React from 'react'
import Projects from "../../components/specific/projects/Projects"
import Welcome from '../../components/specific/welcome/Welcome'
import AboutMe from '../../components/specific/aboutMe/AboutMe'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  AOS.init({
    duration: 1000,
    once: true, 
  });

  return (
    <div>
      <Welcome />
      <AboutMe />
      <Projects />
    </div>
  )
}

export default Home