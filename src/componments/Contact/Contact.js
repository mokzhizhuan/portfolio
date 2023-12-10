import React, { useRef } from 'react';
import mail from '../../assets/666162.png'
import whatsapp from '../../assets/whatsapp.256x256.png'
import location from '../../assets/location.png'
import facebook from '../../assets/facebook-icon.png'
import github from '../../assets/github.png'
import linkedln from '../../assets/linkedin.png'
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pb57iws', 'template_8ne3kda', form.current, 'Nowiumqs2lFvbpHY-')
      .then((result) => {
          console.log(result.text);
          alert("You have submitted your message.");
          document.getElementById("name").value= " ";
          document.getElementById("email").value= " ";
          document.getElementById("msg").value= " ";

      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <div className="myContacts">
        <span className="ContactTitle">Contact Info:</span>
        <div className="ContactTextBar">
        <img src={mail} alt="" className="ContactImg"/>
            <p className="ContactText">gamerdark@outlook.com</p>
        </div>
        <div className="ContactTextBar">
        <img src={whatsapp} alt="" className="ContactImg"/>
            <p className="ContactText">+6593655121</p>
        </div>
        <div className="ContactTextBar">
        <img src={location} alt="" className="ContactImg"/>
            <p className="ContactText">Bukit Gombak, singapore</p>
        </div>
        <span className="SocialMedia">Social Media:</span>
        <div className="ContactTextBar">
        <img src={facebook} alt="" className="ContactImg"/>
            <p className="ContactText">www.facebook.com/<br/>neowolfyuri/</p>
        </div>
        <div className="ContactTextBar">
        <img src={github} alt="" className="ContactImg"/>
            <p className="ContactText">github.com/mokzhizhuan/</p>
        </div>
        <div className="ContactTextBar">
        <img src={linkedln} alt="" className="ContactImg"/>
            <p className="ContactText">sg.linkedin.com/in/mok-zhi-zhuan-a490b2163</p>
        </div>
        <div className="contactPage">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below for any further discussion</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your Name" name='your_name' id="name" />
            <input type="email" className="email" placeholder="Your Email" name='your_email' id="email" />
            <textarea name="message" className="msg"  rows="5" placeholder="Your Message" id="msg"></textarea>
            <button type="submit" value="Send" placeholder="Submit"className="submitBtn">Submit</button>
        </form>
      </div>
      </div>
    </section>
  )
}

export default Contact