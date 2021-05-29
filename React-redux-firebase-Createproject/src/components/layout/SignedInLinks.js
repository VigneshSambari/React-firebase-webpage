import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import signOut from '../../store/actions/authsignOut';

const SignedInLinks=(props)=>{
  return(
    <div>
    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons"></i></a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><NavLink to="/create">Create Project</NavLink></li>
      <li><button onClick={props.signOut}  className="white-text btn-flat grey darken-3 ">Log out</button></li>
      <li><NavLink to="/" className="btn btn-floating ">{props.profile.initial}</NavLink></li>
    </ul>
    </div>
  )
}

const mapstateToProps=(state)=>{
  //console.log(state)
  return {

  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    signOut:()=>dispatch(signOut())
  }
}

export default connect(mapstateToProps,mapDispatchToProps)(SignedInLinks);
