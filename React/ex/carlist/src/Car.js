import React, { Component } from "react";

export default class Car extends Component {
  render() {
    return (
      <div>
        <tr key={c.carNumber}>
          <td>{c.carNumber}</td>
          <td>{c.owner}</td>
          <td>{c.model}</td>
          <td>{c.company}</td>
          <td>{c.numOfAccident}</td>
          <td>{c.numOfOwnerChange}</td>
        </tr>
      </div>
    );
  }
}
