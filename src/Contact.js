import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="container">
        <h2>Contact</h2>
        <p>I would be happy to talk about Tech, and job opportunities!</p>
        <form>
          <div className="form-group">
            <div className="row">
              <div className="col-6">
                <label for="exampleInputEmail1">First Name</label>
                <input
                  type="name"
                  name="firstName"
                  className="form-control"
                  id="exampleInputFirstName"
                  aria-describedby="emailHelp"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="col-6">
                <label for="exampleInputEmail1">Last Name</label>
                <input
                  type="name"
                  name="lastName"
                  className="form-control"
                  id="exampleInputLastName"
                  aria-describedby="emailHelp"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="mail"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              I'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputMessage">Message</label>
            <input
              type="message"
              name="message"
              className="form-control form-control-message"
              id="exampleInputmessage"
              placeholder="Type a message"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
</div>
  );
}
