import './Skills.scss';
import { SkillsList } from "../../shared/Languaje/skills.list";
import ProgressElement from './progress-element/ProgressElement';
import { language } from "../../shared/Languaje/language.config";

export default function Skills({ lang = "EN" }) {
  
  return (
    
    <div className="Skills">
      <div className="skills-title capitalize">
        {language[lang].techninal_skills}
      </div>
      { SkillsList.map( elem =>(
        <div key={elem.title} className="content">
          <ProgressElement progressElem={elem} ></ProgressElement>
        </div>
      ))}
    </div>
  );
}

