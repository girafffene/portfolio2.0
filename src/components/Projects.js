import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = ({projects, title, showLink}) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((pro, index) => {
          return (
            <Project key={pro.id} index={index} {...pro} />
          )
        })}
      </div>
      
      {showLink && (
        <Link to="/projects" className="btn center-btn">projects</Link>
      )}
    </section>
  )
}

export default Projects
