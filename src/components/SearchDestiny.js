import React from "react";
import { allCities } from "../api";
import DestinyDetails from "./DestinyDetails";
import {NavLink} from 'react-router-dom'

class SearchDestiny extends React.Component {
  state = {
    cities: [],
    filteredCities: [],
    searchKeyword: "",
  };

  async componentDidMount() {
    const response = await allCities();
    this.setState({
      cities: response.data,
      filteredCities: response.data,
    });
  }

  handleSearch = (event) => {
    this.setState({
      searchKeyword: event.target.value,
      filteredCities: this.state.cities.filter((place) => {
        return place
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      }),
    });
  };
  render() {
    return (
      <div>
<div class="space"></div>
      <div class="searchdest">
        Search: <input onKeyDown={this.handleSearch} />
        {this.state.filteredCities &&
          this.state.filteredCities.map((place) => {
            return <NavLink to={`/places/${place}`}> <p>{place}</p></NavLink>;
          })}
      </div>
      </div>
    );
  }
}

export default SearchDestiny;
