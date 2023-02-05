import React from "react";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            className="form-control"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button type="submit" className=" submit-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
