import React, { PureComponent } from "react";
import "./MenuButton.css";

export default class MenuButton extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     // handleMouseDown 값이 바뀌지 않는 경우에만 false를 호출
  //     if (nextProps.handleMouseDown === this.props.handleMouseDown) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //     return false;
  //   }
  render() {
    console.log("Rendering: MenuButton");
    return <button id="roundButton" onMouseDown={this.props.handleMouseDown} />;
  }
}
