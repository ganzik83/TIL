import React, { Component } from "react";
import FlipMove from "react-flip-move";

export default class TodoItems extends Component {
  constructor(props) {
    super(props);
  }
  delete = key => {
    this.props.delete(key);
  };
  createTasks = item => {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  };
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}
