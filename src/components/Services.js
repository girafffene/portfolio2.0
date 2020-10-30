//imported dependencies
import React from "react"
//imported title component
import Title from "./Title"
//importing services
import services from "../constants/services"

const Services = () => {
  return (
    <section className="section services">
      <Title title="services" />

      <div className="section-center services-center">
        {services.map((service)=> {
          const {id, icon, title, text} = service
          return <article key={id} className="service">
            {icon}
            <h4>{title}</h4>
            <div className="underline"></div>
            <p>{text}</p>
          </article>
        })}
      </div>
    </section>
  )
}

export default Services