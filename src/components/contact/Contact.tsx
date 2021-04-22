import React from 'react';
import './Contact.scss';
import { language } from "../../shared/Languaje/language.config";
import { AiOutlineMail, AiOutlinePhone,AiOutlineHome } from 'react-icons/ai';
export default function Contact(param: { lang: string }) {
  
  return (
    
    <div className="Contact ">
      <div className="contact-title capitalize">
        {language[param.lang].contact}
      </div>
      <div className="contact-element">
        <div className="data">
          <div className="title capitalize">
            {language[param.lang].phone}
          </div>
          <div className="content">
            {language[param.lang].phoneNumber}
          </div>
        </div>
        <div className="contact-icon">
        <AiOutlinePhone className="contact-icon-element"></AiOutlinePhone>
        </div>
      </div>
      <div className="contact-element">
        <div className="data">
          <div className="title capitalize">
            {language[param.lang].email}
          </div>
          <div className="content">
            {language[param.lang].emailDescription}
          </div>
        </div>
        <div className="contact-icon">
          <AiOutlineMail className="contact-icon-element"></AiOutlineMail>
        </div>
      </div>
      <div className="contact-element">
        <div className="data">
          <div className="content">
            {language[param.lang].addressDescription}
          </div>
        </div>
        <div className="contact-icon">
          <AiOutlineHome className="contact-icon-element"></AiOutlineHome>
        </div>
      </div>
    </div>
  );
}

