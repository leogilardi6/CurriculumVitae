import React, { useState, useCallback, useEffect } from 'react'
import './Main.scss'
import Contact  from "../contact/Contact"
import Skills from "../skills/Skills"
import LanguageSkill from "../language_skills/Language_skills"
import ProfessionalExp  from "../professional_exp/Professional_exp"
import Hobbies from "../hobbies/Hobbies"
import Information  from "../information/Information"
import { language } from "../../shared/Languaje/language.config"
import Dropdown from 'react-dropdown'
import { EducationPath } from '../../shared/Languaje/education.list'
import { AchievementsList } from '../../shared/Languaje/achievements.list'

 function Main() {
  const [languageValue, setLanguaje] = useState("EN");
  const options = [ "EN","ES"]

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (!savedLanguage){
      setLanguaje("EN");
    }else{
      setLanguaje(savedLanguage)
    }
  }, []);
  
  const changeLanguage = useCallback((evt:any) => {
    localStorage.setItem("language",evt.value)
    setLanguaje(evt.value)
  }, []);

  return (
    <div className="Main">
      <div className="Main-header">
        <section className="left-side-bar left-side-bar-style left-side-bar-size"> 
          <div className="photo">
            <div className="banner banner-pprofile">
              <div className="content">
                {language[languageValue].professional_profile}
              </div>
              </div>
          </div>
          <Contact lang={languageValue}></Contact>
          <Information lang={languageValue} element="education" iterateOn={EducationPath[languageValue]} ></Information>
          <Skills lang={languageValue}></Skills>
          <LanguageSkill lang={languageValue}></LanguageSkill>
          <Information lang={languageValue} element="achievements" iterateOn={AchievementsList[languageValue]} ></Information>
        </section>
        <section className="main-body main-body-style main-body-size">
          <div className="language">
            <img className="language-flag" src={language[languageValue].language_image} alt={languageValue} />
            <Dropdown options={options} onChange={changeLanguage} value={languageValue} placeholder="Select an option" />
          </div>
          <div className="name-banner">
            <div className="name-content">
              {language[languageValue].surname} <br/>
              {language[languageValue].name}
            </div>
            <div className="profession">
              {language[languageValue].profession}
            </div>
            <div className="personal-info">
              {language[languageValue].personal_info}
            </div>

          </div>
            <div className="banner banner-pdescription">
            {language[languageValue].personal_description}
            </div>
          <ProfessionalExp lang={languageValue} ></ProfessionalExp>
          <Hobbies lang={languageValue}></Hobbies>
          </section>
      </div>
    </div>
  )
}

export default React.memo(Main);



