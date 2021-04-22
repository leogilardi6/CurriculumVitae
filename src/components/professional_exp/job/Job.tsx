import './Job.scss';
export default function Job({job}:any) {
  
  return (
    
      <div className="Job-title">
        <div className="content-job">
          <div className="one"> 
              <div>{job.title}</div>
              <div>{job.company}</div>
              <div className=" from-to border-bottom">{job.from} {job.to}</div>
          </div>
          <div className="four justify  border-left"> {job.description}</div>
          <div className="five justify  border-left"> 
            {job.objetives.map( (obj:string) => ( 
                <li key={obj}>{obj}</li>)
            )}
           <div className="separator"></div>
           </div>
        </div>
      </div>
  );
}

