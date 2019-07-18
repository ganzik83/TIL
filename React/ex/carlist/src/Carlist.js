import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";

export default class Carlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carNumber: "...",
      owner: "...",
      model: "...",
      company: "...",
      numOfAccident: "...",
      numOfOwnerChange: "..."
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

        let newList = response.data.map(c => {
          return (
            <tr key={c.carNumber}>
              <td>{c.carNumber}</td>
              <td>{c.owner}</td>
              <td>{c.model}</td>
              <td>{c.company}</td>
              <td>{c.numOfAccident}</td>
              <td>{c.numOfOwnerChange}</td>
            </tr>
          );
        });

        this.setState({
          list: newList
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
              <th>carNumber</th>
              <th>owner</th>
              <th>model</th>
              <th>company</th>
              <th>numOfAccident</th>
              <th>numOfOwnerChange</th>
            </tr>
          </thead>
          <tbody>{this.carlist}</tbody>
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
