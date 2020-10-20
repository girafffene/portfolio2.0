//imported dependencies
import React from "react" //React
import { Helmet } from "react-helmet"//React Helment
import { useStaticQuery, graphql } from "gatsby" //graphql && use static query

const query = graphql`
  {
    site {
      siteMetadata {
        description
        siteUrl
        siteTitle: title
        twitterUsername
        image
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)

  const {
    siteDesc,
    siteTitle,
    siteUrl,
    twitterUsername,
    image
  } = site.siteMetadata

  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{lang: "en"}}>
      <meta name="description" content={ description || siteDesc } />
      <meta name="image" content={image} />

      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>

  )
}

export default SEO