//imported dependencies
import React from "react"//react
import { graphql } from "gatsby"//graphql

//imported components
import Layout from "../components/Layout"//layout
import Projects from "../components/Projects"//projects
import SEO from "../components/SEO"//SEO

const ProjectsPage = ({
  data: { allStrapiProjects: { nodes: projects } }
}) => {
  return (
    <Layout>
      <SEO title="Projects" description="This page shows you all of my projects." />
      <section className="projects-page">
        <Projects projects={projects} title="All Projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        desc
        title
        url
        stack {
          id
          name
        }
      }
    }
  }
`

export default ProjectsPage