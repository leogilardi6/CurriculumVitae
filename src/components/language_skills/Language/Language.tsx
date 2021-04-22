import './Language.scss';
export default function LanguageSkill( {lskill}) {

  const elements = [1,2,3,4,5];

  return (
    <div className="Language">
      <div className="elem-container">
        {
            elements.map( element =>(
              <div key={element} className={element <= lskill.level ? 'full':'empty'} ></div>
            ))
        }
      </div>
      <div className="language-title capitalize">
        {lskill.title}
      </div>
    </div>
  );
}

