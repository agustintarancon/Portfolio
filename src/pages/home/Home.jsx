import React from 'react'
import Projects from "../../components/specific/projects/Projects"
import Welcome from '../../components/specific/welcome/Welcome'
import AboutMe from '../../components/specific/aboutMe/AboutMe'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  // Inicializar AOS con la opción `once` en true
  AOS.init({
    duration: 1000, // Duración de la animación
    once: true, // Ejecuta la animación solo una vez al bajar
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