
import React from 'react';

function Contact() {
  return (
    <div className="contact pb3 center">
      <h2>Get in Touch</h2>
      <form action="https://formspree.io/rvrant@gmail.com" method="POST" className="flex flex-wrap form text-center">
        <label className="field-label col-6">
          Name
          <input type="text" name="name" className="block field-input" />
        </label>

        <label className="field-label col-6">
          Email
          <input type="email" name="email" className="block field-input" />
        </label>

        <label className="field-label py2 col-12">
          Message
          <textarea name="message" className="field-input block"></textarea>
        </label>
        <input type="submit" value="Send" className="button bg-color3 pt2" />
      </form>
    </div>
  );
}

export default Contact;
