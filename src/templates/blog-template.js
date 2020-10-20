//imported dependencies
import React from "react"//react
import ReactMarkdown from "react-markdown"//react markdown
import { graphql, Link } from "gatsby"//Gatsby's Link && graphql
//imported components
import Layout from "../components/Layout"//Layout
import SEO from "../components/SEO"//SEO

const ComponentName = ({ data }) => {
  const { content, title, desc } = data.blog;

  return (
    <Layout>
      <SEO title={title} description={desc} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn center-btn">Blog Page</Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
    }
  }
`

export default ComponentName