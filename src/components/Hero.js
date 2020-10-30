//imported dependencies
import React from "react" //React
import { graphql, useStaticQuery, Link } from "gatsby" //Gatsby's Link, use static query, graphql
import Img from "gatsby-image" //Gatsby's Image

//importing social media links
import SocialLinks from "../constants/socialLinks"

//media query to pull in my picture
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
            <h4>Junior Full Stack Software Engineer</h4>
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