import './Language_skills.scss';
import { language } from "../../shared/Languaje/language.config";
import { LanguageSkillsList } from "../../shared/Languaje/language_skills.list";
import Language from './Language/Language';
export default function LanguageSkill( {lang = "EN"}) {
  return (
    <div className="LSkills">
      <div className="lskills-title capitalize">
        {language[lang].language_skills}
      </div>
      { LanguageSkillsList[lang].map((elem:any) => (
        <div key={elem.title} className="content">
          <Language lskill={elem} ></Language>
        </div>
      ))}
    </div>
  );
}
