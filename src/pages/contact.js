//imported dependencies
import React, { useState } from "react" //React && use state
import Validator from "validator" //validator
//imported components
import Layout from "../components/Layout" //layout
import SEO from "../components/SEO"

const Contact = () => {
  //setting name & name error's initial state to "empty string"
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")

  //setting job title & job title error's initial state to "empty string"
  const [jobTitle, setJobTitle] = useState("")
  const [jobTitleError, setJobTitleError] = useState("")

  //setting email & email error's initial state to "empty string"
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  //setting message & message error's initial state to "empty string"
  const [message, setMessage] = useState("")
  const [messageError, setMessageError] = useState("")

  //setting status's initial state to "empty string"
  const [status, setStatus] = useState("")

  //on submit do this ... :
  const onSubmit = (e) => {
    //prevent default
    e.preventDefault();
    //target the form
    const form = e.target;
    //sets data to NEW form data
    const data = new FormData(form);
    //creating a new http request
    const xhr = new XMLHttpRequest();

    //setting valid to true
    let valid = true;

    //if name value is alpha, set error === "" , if not set an error
    if (Validator.isAlpha(name)) {
      setNameError("")
    } else {
      valid = false
      setNameError("Name cannot be blank")
    }

    //if job title value is alpha, set error === "" , if not set an error
    if (Validator.isAlpha(jobTitle)) {
      setJobTitleError("")
    } else {
      valid = false
      setJobTitleError("Name cannot be blank")
    }

    //if email value is valid, set error === "" , if not set an error
    if (Validator.isEmail(email)) {
      setEmailError("")
    } else {
      valid = false
      setEmailError("Please enter a valid email")
    }

    //if message value is alpha, set error === "" , if not set an error
    if (Validator.isAlpha(message)) {
      setMessageError("")
    } else {
      valid = false
      setMessageError("Message cannot be blank")
    }

    //if the form is valid... :
    if(valid) {
      //open the method & action
      xhr.open(form.method, form.action);
      // set the req. header to "accept"
      xhr.setRequestHeader("Accept", "application/json");

      xhr.onreadystatechange = () => {
        //if req is done, return
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        // if status === 200...: 
        if (xhr.status === 200) {
          //clear the form
          form.reset();
          // && set status's value === SUCCESS
          setStatus("SUCCESS");
        } else {
          // else ... you failed! set error
          setStatus("ERROR");
        }
      }
      //send the form :)
      xhr.send(data);
    }    
  }

  return (
    <Layout>
      <SEO title="Contact" description="This is my contact page, where you can send any inquiry straight to my inbox!"/>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/mlepzjjr" method="POST" onSubmit={onSubmit}>
            <div className="form-group">
              <input name="name" type="text" placeholder={nameError ? "please enter your name" : "Name :"} className="form-control" id={nameError ? "input-error" : ""} onChange={e => setName(e.target.value)}/>
              <input name="job-title" type="text" placeholder={jobTitleError ? "please enter your job title" : "Job Title :"} className="form-control" id={jobTitleError ? "input-error" : ""} onChange={e => setJobTitle(e.target.value)} />
              <input name="email" type="email" placeholder={emailError ? "please enter a valid email" : "Email :"} className="form-control" id={emailError ? "input-error" : ""} onChange={e => setEmail(e.target.value)} />
              <textarea name="message" rows="5" placeholder={messageError ? "please enter a message" : "Message :"} className="form-control" id={emailError ? "input-error" : ""} onChange={e => setMessage(e.target.value)} />
            </div>
            {status === "SUCCESS" ? <p>Thanks! Your message has been submitted. I'll be in contact soon!</p> : <button type="submit" className="submit-btn btn">Submit here</button>}
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default Contact