import React from "react";
import { getPlaces } from "../api";
import { NavLink } from "react-router-dom";

class Places extends React.Component {
  state = {
    places: [],
  };

  async componentDidMount() {
    const response = await getPlaces(this.props.match.params.place);
    this.setState({
      places: response.data,
    });
  }

  render() {
    return (
      <div>
        <div class="space"></div>
        <div class="detaildest">
          {this.state.places &&
            this.state.places.map((place) => {
              return (
                <>
                  <NavLink to={`/destiny/${place._id}`}>
                    {" "}
                    <p>{place.city}</p>{" "}
                  </NavLink>
                  <p>{place.description}</p><p></p>
                </>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Places;
