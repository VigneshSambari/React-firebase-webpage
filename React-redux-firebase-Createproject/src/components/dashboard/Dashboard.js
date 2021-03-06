import React,{Component} from 'react';
import Notifications from './Notifications';
import ProjectLists from '../Projects/ProjectList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

class dashboard extends Component{
  render(){
    const {projects,auth}=this.props;
    if(!auth.uid) return <Redirect to="/signin" />
    return(
      <div className="container dashboard">
        <div className="row">
          <div className="col s12 m12">
            <ProjectLists projects={projects}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{

  return{
    projects:state.firestore.ordered.projects,
    auth:state.firebase.auth
  }
}
 export default compose(
   firestoreConnect([{collection:'projects',orderBy:['createdAt','desc']}]),
   connect(mapStateToProps),

 )(dashboard);
