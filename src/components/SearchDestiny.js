import React from "react";
import { allCities } from "../api";
import DestinyDetails from "./DestinyDetails";

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
        return place.city
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      }),
    });
  };
  render() {
    return (
      <div className="App">
        Search: <input onKeyDown={this.handleSearch} />
        {this.state.filteredCities &&
          this.state.filteredCities.map((place) => {
            return <p>{place.city}</p>;
          })}
      </div>
    );
  }
}

export default SearchDestiny;
