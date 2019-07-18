import React, { Component } from "react";
import axios from "axios";

export default class Carlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carNumber: "...",
      owner: "..."
    };
  }

  //   componentDidMount() {
  //     // fetch 함수야 데이터를 가져와. 만약에 성공을 하면 then을 실행하고 에러가 나면 catch를 실행해
  //     fetch("http://localhost:5001/car/api/list")
  //       .then(response => {
  //         console.log("seccess");
  //         return response.json();
  //       })
  //       .then(json => {
  //         console.log(json);
  //         this.setState({
  //           carNumber: json[0].carNumber,
  //           owner: json[0].owner
  //         });
  //       })
  //       .catch(error => {
  //         console.log("fail");
  //         console.log(error);
  //       });
  //   }

  componentDidMount() {
    axios({
      url: "http://localhost:5001/car/api/list",
      method: "get"
    })
      .then(response => {
        console.log("success: ", response);
      })
      .catch(error => {
        console.log("failure: ", error);
      });
  }

  render() {
    return (
      <div>
        <h1>Car Info</h1>
        <ul>
          <li>{this.state.carNumber}</li>
          <li>{this.state.owner}</li>
        </ul>
      </div>
    );
  }
}
