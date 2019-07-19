import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";
import Car from "./Car";

export default class Carlist extends Component {
  constructor(props) {
    super(props);

    this.state = { carlist: [] };
  }

  componentDidMount() {
    axios({
      url: "http://localhost:5001/car/api/list",
      method: "get"
    })
      .then(response => {
        console.log("success: ", response);

        let newList = response.data.map(c => {
          return <Car carinfo={c} />;
        });

        this.setState({
          carlist: newList
        });
      })
      .catch(error => {
        console.log("failure: ", error);
      });
  }

  render() {
    return (
      <div>
        <h1>Car Info</h1>
        <Table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Owner</th>
              <th>Model</th>
              <th>Company</th>
              <th>Accident</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>{this.state.carlist}</tbody>
          {/* <tbody>
            <tr>
              <td>{this.state.carNumber}</td>
              <td>{this.state.owner}</td>
              <td>{this.state.model}</td>
              <td>{this.state.company}</td>
              <td>{this.state.numOfAccident}</td>
              <td>{this.state.numOfOwnerChange}</td>
            </tr>
          </tbody> */}
        </Table>
      </div>
    );
  }
}
