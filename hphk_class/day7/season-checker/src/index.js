import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// life cycle method

// constructor() 단 한번 실행되면 좋은 코드들을 담는다.

// render() {return (jsx template)}

// componentDidMount() {컴포넌트가 화면에 랜더링이 끝나면}

// componentDidUpdate() {컴포넌트가 업데이트가 되고, 리랜더링이 끝나면}

// componentWillUnmount() {React요소들이 아닌 친구들을 치울 때 좋다.}
