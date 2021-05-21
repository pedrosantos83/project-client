import React from "react";
import { getAllDestinies } from "../api";
import { NavLink } from "react-router-dom";
class ListDestinies extends React.Component {
  state = {
    destinies: [],
  };
  async componentDidMount() {
    const response = await getAllDestinies();
    this.setState({
      destinies: response.data,
    });
  }
  render() {
    return (
      <ul class="post">
        {this.state.destinies.map((destiny, index) => {
          return (
            <li key={index}>
              <div class="space"></div>
              
              <div class="listdest">
                <div class="destup">
                  <div>
                    <img src={destiny.user.imageUrl} />
                    
                  </div>
                  <div class="city">
                    <NavLink to={`/destiny/${destiny._id}`}>
                      {destiny.city}
                    </NavLink>
                    
                  </div>
                </div>
                <div>
                  <div class="destdown">
                    <div class="username">
                    <a href={`mailto:${destiny.user.email}`}>{destiny.user.username}</a>
                    
                    &nbsp;
                    </div>
                    <div class="dates">
                    date:{destiny.date}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    duration:{destiny.duration}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {this.props.loggedInUser._id === destiny.user._id && (
                  <NavLink to={`/destiny/${destiny._id}/edit`}>
                    <button type="button">Edit</button>
                  </NavLink>
                )}
                    </div>
                  </div>
                </div>
               
              </div>
            </li>
          );
        })}
        ;
      </ul>
    );
  }
}
export default ListDestinies;
