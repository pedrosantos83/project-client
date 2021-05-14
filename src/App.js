import './App.css';
import React from 'react';
import ListDestiny from './components/ListDestiny';
import DestinyDetails from './components/DestinyDetails';
import { Switch, Route } from "react-router-dom";
import AddDestiny from './components/AddDestiny';
import Navbar from './components/Navbar';
import EditDestiny from './components/EditDestiny';
import Signup from "./components/Singup";
import Login from "./components/Login";
import {loggedin} from "./api";



class App extends React.Component {
  state = {
    loggedInUser: null
  }
  async componentDidMount(){
if(this.state.loggedInUser === null) {
  const response = await loggedin();
  if (response.data._id) {
    this.setCurrentUser(response.data);
  }
}
  }
  setCurrentUser = (user) => {
    this.setState({
      loggedInUser: user
    });
  }
  render() {
    const { loggedInUser } = this.state;
    return (
    <div  className="App">
      🛴🛴🚲🚲🚙🚗
      <h1>Traveller´s Log</h1>
      <Navbar loggedInUser={loggedInUser} setCurrentUser ={this.setCurrentUser} />
      <Switch>
        <Route exact path={["/", "/destiny"]} component={ListDestiny}/>
        <Route exact path="/destiny/add" component={AddDestiny}/>
        <Route exact path="/destiny/:id" component={DestinyDetails} />
        <Route exact path="/destiny/:id/edit" component={EditDestiny} />
        <Route exact path="/signup" component={Signup} />
        <Route
            exact
            path="/login"
            render={(props) => {
              return <Login {...props} setCurrentUser={this.setCurrentUser} />;
            }}
          />
      </Switch>
      🚕🚕
    </div>
  );
  }
}
export default App;
