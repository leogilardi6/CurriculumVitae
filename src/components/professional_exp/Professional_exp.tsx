import React from 'react';
import './Professional_exp.scss';
import { language } from "../../shared/Languaje/language.config";
import {JobsList} from "../../shared/Languaje/job.list";
import Job from "./job/Job";
// import { AiOutlineMail, AiOutlinePhone,AiOutlineHome } from 'react-icons/ai';
export default function ProfessionalExp( {lang = "EN"}) {
  return (
    
    <div className="Professional_exp">
        <div className="professional_exp-title capitalize">
        {language[lang].professional_experience}
        </div>
        {
          JobsList[lang].map( (job:any) => (
            <Job key={job.title} job={job}></Job>
          )
           )
        }
    </div>
  );
}
