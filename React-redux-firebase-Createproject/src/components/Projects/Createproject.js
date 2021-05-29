import React, { Component } from 'react';
import {connect} from 'react-redux';
import createProjects from '../../store/actions/createProjects';
import {Redirect} from 'react-router-dom';

class CreateProject extends Component {
  state={
    title:"",
    content:""
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    //console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/');
  }
  handleChange=(e)=>{
   this.setState({
     [e.target.id]:e.target.value
   })
  }
  render() {
    const {auth}=this.props;
    if(!auth.uid) return <Redirect to="/signin" />
    return (
      <div className="container boxes">
      <br/>
      <h5>Create New Project</h5>
        <form onSubmit={this.handleSubmit} action="">
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn">Create Project</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
    return {
      auth:state.firebase.auth
    }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    createProject: (project)=>dispatch(createProjects(project))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)
