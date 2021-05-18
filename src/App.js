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

// const Example = (props) => {
//   return (
//     <ButtonGroup>
//       <Button>Left</Button>
//       <Button>Middle</Button>
//       <Button>Right</Button>
//     </ButtonGroup>
//   );
// }

// export default Example;


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
      <div className="App">
        🛴🚲🚙🚗
        <h1>Traveller´s Log</h1>

        
<img src ="../images/Logo2.png" alt="travelerlogo"/>
   
  

        <Navbar loggedInUser={loggedInUser} setCurrentUser={this.setCurrentUser} />
        <Switch>
          <Route exact path={"/search"} component={SearchDestiny} />
          <Route exact path={"/destiny"} component={ListDestiny} />
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
    );
  }
}
export default App;
