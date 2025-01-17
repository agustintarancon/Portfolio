import React from 'react'
import { customContainer, title } from "../projects/projects.module.css"
import Card from '../../general/card/Card'
import { projects } from '../../../data/projects'

const Projects = () => {
  return (
    <>
      <section className={`container ${customContainer}`} id="projects">
        <div className={`row`} data-aos="fade-up" >
          <h5 className={`${title} pb-5`}>PROYECTOS</h5>

          {projects.map((data) => {
            return (
              <Card
                key={data.id}
                imgSource={data.imgSource}
                text1={data.text1}
                text2={data.text2}
                link={data.link}
                id={data.id}
              />
            );
          })}

        </div>
      </section>
    </>
  )
}

export default Projects