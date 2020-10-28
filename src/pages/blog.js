//imported dependencies
import React from "react"//react
import { graphql } from "gatsby"//gatsby
//imported components
import Layout from "../components/Layout"//layout
import Blogs from "../components/Blogs"//blogs
import SEO from "../components/SEO" //SEO

const Blog = ({ data: { allStrapiBlogs: { nodes: blogs }}}) => {
  return (
    <Layout>
      <SEO title="Blog" description="This is my blog page. You can read all about my thoughts here lol" />
      <section className="blog-page">
        <Blogs blogs={blogs} title="Blog Page"/>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        desc
        date(formatString: "MMM Do, YYYY")
        id
        title
        category
      }
    }
  }
`

export default Blog