//imported dependencies
import React from "react"//React
import { Link } from "gatsby"//Gatsby's Link
//imported components
import Layout from "../components/Layout"//Layout
import SEO from "../components/SEO"//SEO

const Error = () => {
  return (
    <Layout>
      <SEO title="404" />
      <main className="error-page">
        <div className="error-container">
          <h1>Oops, this isn't the page you are looking for.</h1>
          <Link to="/" className="btn">Home</Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error