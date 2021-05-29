import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import moment from 'moment';

const Projectdetails = (props) =>{
  const {auth}=props;
  const {project}=props;
  if(!auth.uid) return <Redirect to="/signin" />
  if(project){
  return(
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
        <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
          <hr/>
          <div className="content-action  grey-text lighten-3">
            <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
            <p>{moment(project.createdAt.toDate()).calendar()}</p>
          </div>
        </div>
      </div>
    </div>
  )}
  else{
    return (
      <div className="container center white-text darken-3 Loading-text-1">
        <p>Loading project...</p>
      </div>
    )
  }
};

const mapStateToProps=(state,ownProps)=>{

  const id=ownProps.match.params.id;
  const projects=state.firestore.data.projects;
  const project=projects?projects[id]:null;
  return {
    auth:state.firebase.auth,
    project:project
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{collection:'projects'}])
)(Projectdetails);
