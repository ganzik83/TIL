import React, { Component } from "react";

export default class Car extends Component {
  render() {
    return (
      <tr key={this.props.index}>
        <td>{this.props.carinfo.carNumber}</td>
        <td>{this.props.carinfo.owner}</td>
        <td>{this.props.carinfo.model}</td>
        <td>{this.props.carinfo.company}</td>
        <td>{this.props.carinfo.numOfAcident}</td>
        <td>{this.props.carinfo.numOfOwnerchange}</td>
      </tr>
    );
  }
}
