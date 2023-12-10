import React from 'react'
import mail from '../../assets/666162.png'
import whatsapp from '../../assets/whatsapp.256x256.png'
import location from '../../assets/location.png'
import facebook from '../../assets/facebook-icon.png'
import github from '../../assets/github.png'
import linkedln from '../../assets/linkedin.png'
import './Contact.css'

const Contact = () => {
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
      </div>
    </section>
  )
}

export default Contact