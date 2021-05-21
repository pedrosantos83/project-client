import React from "react";
import { getDestiny, deleteDestiny } from "../api";

class DestinyDetails extends React.Component {
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
  handleDeleteDestiny = async (id) => {
    await deleteDestiny(id);
    this.props.history.push("/");
  };

  render() {
    const { date, city, description, duration, places, imageUrl, _id } =
      this.state;
    return (
      <div>
        <div class="space"></div>
        <div class="detaildest">
          <h1>{city}</h1>
          <p></p>
          <h3>{date}</h3>
          <h2>{duration}</h2>
          <p></p>
          <p></p>
          <h5>{description}</h5>
          <p></p>
          <p></p>
          {imageUrl && <img src={imageUrl} alt={city} />}
          <p></p>
          <iframe width="600" height="450"  loading="lazy" allowfullscreen
src={`https://www.google.com/maps/embed/v1/search?q=${city}&key=AIzaSyBjVewyaBvhC5ZDdwpIZawbH7PI_AocXaM`}></iframe>
          <h6>{places}</h6>
          <p></p>
          <button onClick={() => this.handleDeleteDestiny(_id)}>Delete</button>
        </div>
      </div>
    );
  }
}
export default DestinyDetails;
