import React from 'react'
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

const contact = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.init("user_aCxiPvcplKqZgIF5zn1rt");
        emailjs.sendForm('service_xwnzj2d', 'template_lublx99', e.target, 'user_aCxiPvcplKqZgIF5zn1rt')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
      return (
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      );
}

export default contact
