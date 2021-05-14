import React from "react";
import { updateDestiny, getDestiny } from "../api";
class EditDestiny extends React.Component {
  state = {
    _id: "",
    date: "",
    city: "",
    description: "",
    duration: "",
    places: "",
  };
  async componentDidMount() {
    const destinyId = this.props.match.params.id;
    const response = await getDestiny(destinyId);
    this.setState({
      _id: response.data._id,
      date: response.data.date,
      city: response.data.city,
      description: response.data.description,
      duration: response.data.duration,
      places: response.data.places,
      imageUrl: response.data.imageUrl,
    });
  }
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = async (event) => {
    event.preventDefault();
    await updateDestiny(this.state);
    this.props.history.push(`/destiny`);
  };
  render() {
    const {  date, city, description, duration, places} = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Date</label>
        <input
          type="text"
          name="date"
          onChange={this.handleChange}
          value={date}
        />
          <label>City</label>
        <input
          type="text"
          name="city"
          onChange={this.handleChange}
          value={city}
        />
          <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={this.handleChange}
          value={description}
        />
          <label>Duration</label>
        <input
          type="text"
          name="duration"
          onChange={this.handleChange}
          value={duration}
        />
        <label>Places</label>
        <input
          type="text"
          name="places"
          onChange={this.handleChange}
          value={places}
        />
        <button type="submit">Update</button>
      </form>
    );
  }
}
export default EditDestiny;