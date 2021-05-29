import React, {Component} from 'react';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import dashboard from'./components/dashboard/Dashboard';
import Projectdetails from './components/Projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/Projects/Createproject';


class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="Apps">
      <Navbar />
      <Switch>
        <Route exact path="/" component={dashboard}></Route>
        <Route path="/project/:id" component={Projectdetails}></Route>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/create" component={CreateProject}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
}
export default App;
