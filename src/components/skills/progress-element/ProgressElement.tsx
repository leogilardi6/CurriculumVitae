import './ProgressElement.scss';
import React from "react";
// import {SkillsInterface } from "../../../interfaces/skills.interface"
export default function ProgressElement( {progressElem}) {
  return (
    <div className="ProgressElement">
      <div className="progressElement-title capitalize">
        {progressElem.title}
      </div>
      <div className="elem-container">
        <div className="progress" style={{ width: progressElem.progress + '%'}}></div>
      </div>
    </div>
  );
}

