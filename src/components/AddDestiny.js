import React from "react";
import { addDestiny, uploadFile } from "../api";
class AddDestiny extends React.Component {
  state = {
    title: "",
    description: "",
    imageUrl: "",
  };
  handleFileChange = (event) => {
    this.setState({
      imageUrl: event.target.files[0],
    });
  };
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { date, city, description, duration, places, imageUrl } = this.state;
    const uploadData = new FormData();
    uploadData.append("file", imageUrl);
    //1. Upload the image to our api
    const response = await uploadFile(uploadData);
    //2. Create the destiny on our api
    const newDestiny = {
      date,
      city,
      description,
      duration,
      places,
      imageUrl: response.data.fileUrl,
    };
    await addDestiny(newDestiny);
    this.props.history.push("/destiny");
  };
  render() {
    const { date, city, description, duration, places } = this.state;
    return (
      <div>
        <div class="space"></div>
        <div class="editdest">
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
        <label>&nbsp;&nbsp;Date:</label>
        <input
          type="text"
          name="date"
          onChange={this.handleChange}
          value={date}
        />
        <label>&nbsp;&nbsp;City:</label>
        <input
          type="text"
          name="city"
          onChange={this.handleChange}
          value={city}
        />
        <label>&nbsp;&nbsp;Description:</label>
        <input
          type="text"
          name="description"
          onChange={this.handleChange}
          value={description}
        />
        <label>&nbsp;&nbsp;Duration:</label>
        <input
          type="text"
          name="duration"
          onChange={this.handleChange}
          value={duration}
        />
        <label>&nbsp;&nbsp;Places:</label>
        <input
          type="text"
          name="places"
          onChange={this.handleChange}
          value={places}
        /><p></p>
        <label>Image:</label>
        <input type="file" onChange={this.handleFileChange} />
        <button type="submit">Create</button>
      </form></div>
      </div>
    );
  }
}
export default AddDestiny;
