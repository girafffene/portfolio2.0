//imported dependencies
import React from "react" //React
import { Link } from "gatsby" //Gatsby's Link

//imported components
import Title from "./Title" //title component
import Blog from "./Blog" //blog

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="section">
      <Title title={title} />

      <div className="section-center blogs-center">
        {blogs.map((blog) => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>

      {showLink && <Link to="/blog" className="btn center-btn">Blog</Link>}
    </section>
  )
}

export default Blogs