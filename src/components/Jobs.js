//imported dependencies
import React, { useState} from "react" //React & use state
import { Link, graphql, useStaticQuery } from "gatsby" //Gatsby's Link, use static query, and graphql
//imported title component
import Title from "./Title"
//imported icon
import { FaAngleDoubleRight } from "react-icons/fa"

//query to pull in Job information: company name, dates worked, position, description, and id to have a key for list items
const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  //setting query equal to data to allow for destructuring
  const data = useStaticQuery(query);

  //destructuring data
  const {
    allStrapiJobs: { nodes: jobs }
  } = data;

  const [value, setValue] = useState(0);
  const { company, position, date, desc } = jobs[value];

  return (
    <section className="section jobs">
      <Title title="experience" />

      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, i) => {
            return (
              <button key={job.strapiId} onClick={() => setValue(i)} className={`job-btn ${i === value && "active-btn"}`} >
                {job.company}
              </button>
            )
          })}
        </div>

        <article className="job-info">
          <h3>{position}</h3>

          <h4>{company}</h4>

          <p className="job-date">{date}</p>

          {desc.map((item) => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon" /><p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>

      <Link to="/about" className="btn center-btn">more info</Link>
    </section>
  )
}

export default Jobs