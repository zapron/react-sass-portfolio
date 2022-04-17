import React from "react";
import "./contact.scss";
import { useState } from "react";
function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    setMessage(true);
  }
  const [message, setMessage] = useState(false);
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
        {message && <span>Thanks, I will reply ASAP </span>}
      </div>
    </div>
  );
}

export default Contact;
