import React from "react";
import { getAllDestinies } from "../api";
import { NavLink } from "react-router-dom";
class ListDestinies extends React.Component {
    state = {
        destinies: []
    }
    async componentDidMount() {
        const response = await getAllDestinies();
        this.setState({
            destinies: response.data,
        });
    }
    render() {
        return (
            <ul>
                {this.state.destinies.map((destiny, index) => {
                    return <li key={index}>
                       <div class="id">
                       <NavLink to={`/destiny/${destiny._id}`}>{destiny.city}</NavLink>
                       &nbsp;
                       <h2>{destiny.user.username}</h2>
                       &nbsp;
                       <h5>{destiny.date}</h5>
                       &nbsp;
                       <h4>{destiny.duration}</h4>
                       &nbsp;
                       <NavLink to={`/destiny/${destiny._id}/edit`}><button type="button">Edit</button></NavLink>
                       </div>
                        </li>
                })};
            </ul>
        )
    }
 }
export default ListDestinies;