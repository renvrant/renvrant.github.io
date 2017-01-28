
import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h2>Get in Touch</h2>
      <form action="https://formspree.io/renee@renvrant.com" method="POST">
        <label>Name <input type="text" name="name" /></label>
        <label>Email <input type="email" name="email" /></label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
