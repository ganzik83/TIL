import React, { Component } from "react";

export default class Car extends Component {
  render() {
    return (
<<<<<<< HEAD
      <tr key={this.props.index}>
=======
      <tr key={this.props.carinfo.carNumber}>
>>>>>>> 771bd1a67c49b157c3d2a016503af3f8c30e3e50
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
