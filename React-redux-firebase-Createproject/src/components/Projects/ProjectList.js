import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';

const ProjectLists=({projects})=>{
  console.log(projects)
  return(
    <div className="projectlists section">
    {projects && projects.map(project=>{
      return(
        <Link to={'/project/'+project.id} className="link" key={project.id}>
        <ProjectSummary project={project} key={project.id} />
        </Link>
      )
    })}
    </div>
  )
}

export default ProjectLists;
