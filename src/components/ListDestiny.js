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
                            <ul>
                       <li><img src={destiny.user.imageUrl}/></li>
                       &nbsp;
                       <li>{destiny.user.username}</li>
                       &nbsp;
                                <NavLink to={`/destiny/${destiny._id}`}>{destiny.city}</NavLink>
                       &nbsp;
                       <li>date:{destiny.date}</li>
                       &nbsp;
                       <li>duration:{destiny.duration}days</li>
                       &nbsp;
                       </ul>
                            <NavLink to={`/destiny/${destiny._id}/edit`}><button type="button">Edit</button></NavLink>
                        </div>
                    </li>
                })};
            </ul>
        )
    }
}
export default ListDestinies;