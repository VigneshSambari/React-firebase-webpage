import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import signUp from '../../store/actions/authsignUp'

class SignUp extends Component {
  state={
    email:"",
    password:"",
    firstname:"",
    lastname:""
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.signUp(this.state)
  }
  handleChange=(e)=>{
   this.setState({
     [e.target.id]:e.target.value
   })
  }
  render() {
    const {auth,authError}=this.props;
    if(auth.uid) return <Redirect to="/" />
    return (
      <div className="container boxes ">
      <br/>
      <h5>Sign Up</h5>
      <br/>
        <form onSubmit={this.handleSubmit} action="">
          <div className="input-field">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn">Sign Up</button>
          </div>
          <div className="red-text center">
            {authError?<p>{authError}</p>:null}
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {
    auth:state.firebase.auth,
    authError:state.auth.authError
  }
}

const mapDispatchToProps=(dispatch)=>{
    return {
      signUp:(newUserData)=>dispatch(signUp(newUserData))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
