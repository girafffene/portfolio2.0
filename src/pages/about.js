//imported dependencies
import React from "react" //React
import { graphql } from "gatsby" //Gatsby's graphql
import Image from "gatsby-image"

//imported components
import Layout from "../components/Layout" //layout
import Title from "../components/Title" //title component
import SEO from "../components/SEO" //seo component

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const{ desc, stack, title, image, imageAlt } = nodes[0];

  return (
    <Layout>
      <SEO title="About Me" description="This page is about Irene" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} alt={imageAlt} className="about-img" />
          
          <article className="about-text">
            <Title title={title} />
            <p>{desc}</p>
            <div className="about-stack">
              {stack.map((item) => {
                return (
                  <span key={item.id}>{item.name}</span>
                )
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        stack {
          id
          name
        }
        title
        desc
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageAlt
      }
    }
  }
`

export default About