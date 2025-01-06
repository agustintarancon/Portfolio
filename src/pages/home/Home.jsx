import React from 'react'
import Projects from "../../components/specific/projects/Projects"
import Welcome from '../../components/specific/welcome/Welcome'
import AboutMe from '../../components/specific/aboutMe/AboutMe'

const Home = () => {
  return (
    <div>
      <Welcome />
      <AboutMe />
      <Projects />
    </div>
  )
}

export default Home