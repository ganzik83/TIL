import React, { Component } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

export default class MenuContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  handleMouseDown = e => {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  };

  toggleMenu = () => {
    this.setState({
      // visible 값들 반대로 반환
      visible: !this.state.visible
    });
  };
  render() {
    console.log("Rendering: MenuContainer");
    return (
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}
        />
        <div>
          <p>Can you spot the item that doesn't belong?</p>
          <ul>
            <li>Styel</li>
            <li>ganzik</li>
            <li>doraemi</li>
            <li>chachacha</li>
            <li>ganda</li>
            <li>udil</li>
            <li>mola</li>
          </ul>
        </div>
      </div>
    );
  }
}
