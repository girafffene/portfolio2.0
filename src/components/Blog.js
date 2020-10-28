//imported dependencies
import React from "react" //React
import { Link } from "gatsby" //Gatsby's Link
// import { Image } from "gatsby-image"
import PropTypes from "prop-types" //PropTypes

const Blog = ({ id, title, date, category, slug, desc }) => {
  return (
    <Link className="blog" to={`/blogs/${slug}`} key={id}>
      <article>
        {/* {publicURL && (
          <Image fluid={publicURL.childImageSharp.fluid} className="blog-img" alt={imageAlt}/>
        )} */}

        <div className="blog-card">
          <h4>{title || "This Title is Missing"}</h4>
          <p>{desc}</p>

          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {
  id:PropTypes.string.isRequired,
  slug:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  date:PropTypes.string.isRequired,
  category:PropTypes.string.isRequired,
  desc:PropTypes.string.isRequired,
  // src:PropTypes.object.isRequired,
}

export default Blog