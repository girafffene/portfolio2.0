import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
const query = graphql`
  {
    file(relativePath: {eq: "me-blue-foil.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Hi, I'm Irene Perez</h1>
            <h4>Front End Software Engineer</h4>
            <Link to="/contact" className="btn">contact</Link>
            <SocialLinks />
          </div>
        </article>
        <Img fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
