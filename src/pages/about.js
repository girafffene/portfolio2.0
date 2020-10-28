//imported dependencies
import React from "react" //React
import { graphql } from "gatsby" //Gatsby's graphql

//imported components
import Layout from "../components/Layout" //layout
import Title from "../components/Title" //title component
import SEO from "../components/SEO" //seo component
import me from "../assets/irene-perez.jpg"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const{ desc, stack, title } = nodes[0];

  return (
    <Layout>
      <SEO title="About Me" description="This page is about Irene" />
      <section className="about-page">
        <div className="section-center about-center">
          <img src={me} alt="Irene Perez" className="blog-img" />

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
      }
    }
  }
`

export default About