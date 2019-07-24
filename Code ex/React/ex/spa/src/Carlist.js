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
<<<<<<< HEAD
      // url: "http://localhost:5002/api/carlist",
      // 리액트 서버 아래에 서버를 두고 하나로 묶기 위해 proxy 설정 http-proxy-middleware 패키지를 설치한다.
      //https://www.npmjs.com/package/http-proxy-middleware
      url: "/api/carlist",
=======
      url: "http://localhost:5001/car/api/list",
>>>>>>> 771bd1a67c49b157c3d2a016503af3f8c30e3e50
      method: "get"
    })
      .then(response => {
        console.log("success: ", response);
<<<<<<< HEAD
        // https://blog.sonim1.com/183 키값 설정
        let newList = response.data.map((c, index) => {
          return <Car key={index} carinfo={c} />;
=======

        let newList = response.data.map(c => {
          return <Car carinfo={c} />;
>>>>>>> 771bd1a67c49b157c3d2a016503af3f8c30e3e50
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
