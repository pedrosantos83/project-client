import './App.css';
import React from 'react';
import ListDestiny from './components/ListDestiny';
import DestinyDetails from './components/DestinyDetails';
import { Switch, Route } from "react-router-dom";
import AddDestiny from './components/AddDestiny';
import Navbar from './components/Navbar';
import EditDestiny from './components/EditDestiny';
import Signup from "./components/Signup";
import Login from "./components/Login";
import { loggedin } from "./api";
import SearchDestiny from "./components/SearchDestiny";
import { Button, ButtonGroup } from 'reactstrap';




class App extends React.Component {
  state = {
    loggedInUser: null,
    // searchKeyword:''
  };
  async componentDidMount() {
    if (this.state.loggedInUser === null) {
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
      <body className="App">
        <img src="/images/Logo1.png" alt="travelerlogo" width="600" />
        <div>
          <h1>Traveller´s Log</h1>
          <Navbar loggedInUser={loggedInUser} setCurrentUser={this.setCurrentUser} />
          <Switch>
            <Route exact path={"/search"} component={SearchDestiny} />
            <Route exact path={"/destiny"} render={(props) => {
                return <ListDestiny {...props} loggedInUser={loggedInUser} />;
              }}
            />
             {/* <PrivateRoute exact path="/projects/add" component = {AddDestiny}/> */}
            <Route exact path="/destiny/add" component={AddDestiny} />
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
      </body>
    );
  }
}
export default App;
