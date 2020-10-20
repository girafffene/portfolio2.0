//imported dependencies
import React from "react" //React
import Image from "gatsby-image" //Gatsby's Image
import PropTypes from "prop-types" //PropTypes

//imported icons
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({ desc, title, github, stack, url, index, src }) => {
  return (
    <article className="project">
      {src && (
        <Image fluid={src.childImageSharp.fluid} className="project-img" />
      )}

      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title || "This Title is Missing"}</h3>
        <p className="project-desc">{desc}</p>

        <div className="project-stack">
          {stack.map((item) => {
            return (
              <span key={item.id}>{item.name}</span>
            )
          })}
        </div>
        
        <div className="project-links">
          <a href={github} rel="noopener noreferrer" target="___blank">
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url} rel="noopener noreferrer" target="___blank">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title:PropTypes.string.isRequired,
  desc:PropTypes.string.isRequired,
  stack:PropTypes.arrayOf(PropTypes.object).isRequired,
  index:PropTypes.number.isRequired,
  src:PropTypes.object.isRequired
}

export default Project