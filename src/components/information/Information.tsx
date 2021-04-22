import './Information.scss';
import { language } from '../../shared/Languaje/language.config';

export default function Information( {lang , element, iterateOn}) {
  
  return (
    
    <div className="Information">
      <div className="information-title capitalize">
        {language[lang][element]}
      </div>
      { iterateOn.map( (elem:any) =>(
        <div key={elem.year_e} className="content">
          <div className="title capitalize">
            {elem.title}
          </div>
          <div>
            {elem.place} |  {elem.year_e}
          </div>
        </div>
      ))}
    </div>
  );
}

