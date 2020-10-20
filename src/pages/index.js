//imported dependencies
import React from "react"//react
import { graphql } from "gatsby"//graphql
//imported components
import Layout from "../components/Layout"//layout
import Hero from "../components/Hero"//hero
import Services from "../components/Services"//services
import Jobs from "../components/Jobs"//jobs
import Projects from "../components/Projects"//projects
import Blogs from "../components/Blogs"//blogs
import SEO from "../components/SEO"//seo

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data;

  return (
    <Layout>
      <SEO title="Home" description="This is my home page!" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="Featured Projects" showLink />
      <Blogs blogs={blogs} title="Latest Blogs" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        desc
        title
        url
        src {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          name
        }
      }
    }

    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMM Do, YYYY")
        id
        title
        category
        src {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`