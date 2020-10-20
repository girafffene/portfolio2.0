//imported dependencies
import React from "react" //React
import { Link } from "gatsby" //Gatsby's Link
//imported components
import Title from "./Title" //title
import Project from "./Project" //project

const Projects = ({ projects, title, showLink }) => {

  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {
        showLink && <Link to="/projects" className="btn center-btn">Projects</Link>
      }
    </section>
  )
}

export default Projects
