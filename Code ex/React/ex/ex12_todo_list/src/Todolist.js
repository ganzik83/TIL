import React, { Component } from "react";

export default class Todolist extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.addItem = this.addItem.bind(this);
  //   }
  //   // event handler
  //   addItem(e) {}
  // 화살표 함수를 사용하면 바인드를 안해줘도 된다
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }
  addItem = e => {
    const itemArray = this.state.items;

    if (this._inputElement.value !== "") {
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now()
      });
      this.setState({
        items: itemArray
      });

      this._inputElement.value = "";
    }
    console.log(itemArray);

    // 폼 전달 후 페이지 새로고침을 막기위해 이벤트의 기본동작을 막는다
    e.preventDefault();
  };

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="enter task"
            />
            <button type="submit">add</button>
          </form>
        </div>
        {/* items 배열값을 TodoItems 컴퍼넌트로 전달 */}
        <TodoItems entries={this.state.items} />
      </div>
    );
  }
}
