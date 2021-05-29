import React, { Component } from 'react'
import signIn from '../../store/actions/authActions'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
class SignIn extends Component {
  state={
    email:"",
    password:""
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.signIn(this.state)
  }
  handleChange=(e)=>{
   this.setState({
     [e.target.id]:e.target.value
   })
  }
  render() {
    const {authError,auth}=this.props;
    if(auth.uid) return <Redirect to="/" />
    return (
      <div className="container  boxes">
      <br/>
      <h5>Sign In</h5>
      <br/>
        <form onSubmit={this.handleSubmit} action="">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn">Login</button>
          </div>
          <div className="red-text center">
            {authError?<p>Login Failed!!</p>:null}
          </div>
        </form>
      </div>
    )
  }
}

const mapStatetoProps=(state)=>{
  return{
    authError:state.auth.authError,
    auth:state.firebase.auth
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}
export default connect(mapStatetoProps,mapDispatchToProps)(SignIn)
