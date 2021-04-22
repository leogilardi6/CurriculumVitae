import React from 'react';
import './Hobbies.scss';
import { HobbiesList } from "../../shared/Languaje/hobbies.list";
import { AiOutlineMail, AiOutlinePhone,AiOutlineHome } from 'react-icons/ai';
export default function Hobbies( {lang = "EN"}) {
  
  return (
    
    <div className="Hobbies">
      <div className="hobbies-title capitalize">
          {HobbiesList[lang].title}
      </div >
      <div className="container">
        <div className="content ">
          <div className="title">
            {HobbiesList[lang].hobbie1}
          </div>
          <div className="logo">
            <AiOutlinePhone className="contact-icon-element"></AiOutlinePhone>
          </div>
        </div>
        <div className="content ">
          <div className="title">
            {HobbiesList[lang].hobbie2}
          </div>
          <div className="logo">
            <AiOutlineMail className="contact-icon-element"></AiOutlineMail>
          </div>
        </div>
        <div className="content ">
          <div className="title">
            {HobbiesList[lang].hobbie3}
          </div>
          <div className="logo">
            <AiOutlineHome className="contact-icon-element"></AiOutlineHome>
          </div>
        </div>
        <div className="content ">
          <div className="title">
            {HobbiesList[lang].hobbie4}
          </div>
          <div className="logo">
            <AiOutlineHome className="contact-icon-element"></AiOutlineHome>
          </div>
        </div>
      </div>
    </div>
    );
  }
  