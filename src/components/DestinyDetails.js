import React from "react";
import {getDestiny, deleteDestiny} from "../api"

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
handleDeleteDestiny = async (id) =>{
await deleteDestiny(id);
this.props.history.push("/");

};

  render() {
    const { date, city, description,duration, places, imageUrl, _id } = this.state;
    return (
      <>
        <h2>{date}</h2>
        <h2>{city}</h2>
        <h3>{duration}</h3>
        <h3>{description}</h3>
        <h3>{places}</h3>
        {imageUrl && <img src={imageUrl} alt={city}/>}
        <button onClick={() => this.handleDeleteDestiny(_id)}>Delete</button>
      </>
    );
  }
}
export default DestinyDetails;