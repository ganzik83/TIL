import React, { useState } from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './component/SeasonDisplay';
import Spinner from './component/Spinner';

// const SeasonDisplay = props => {
//   return (
//     // jsx template이 반환되어야 한다
//     <div>위도 : {props.lat}</div>
//   );
// };

// const App = () => {
//   // 사용자 위치정보 가져오기
//   // https://developer.mozilla.org/ko/docs/WebAPI/Using_geolocation
//   window.navigator.geolocation.getCurrentPosition(
//     position => {
//       console.log(position);
//     },
//     error => {
//       console.log(error);
//     }
//   );
//   return (
//     <div className='App'>
//       <div>계절 확인</div>
//     </div>
//   );
// };

// 클래스형 컴포넌트로 변경해보기
// 1. JS class를 사용해야한다.
// 2. extends React.Component
// 3. render() {return (JSX template)}

class App extends React.Component {
  constructor(props) {
    super(props);

    // state는 컴포넌트 안에서만 사용된다
    // Object 형태
    // 컴포넌트가 생성될 때, 단 1번 초기화 된다
    // setState로만 데이터 수정
    // props랑 헷갈리지 말자
    this.state = {
      lat: null,
      errorMessage: ''
    };
  }

  componentDidMount() {
    console.log('컴포넌트가 화면에 랜더링이 끝났다');
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      error => {
        console.log(error);
        this.setState({ errorMessage: error.message });
      }
    );
  }

  componentDidUpdate() {
    console.log('컴포넌트가 업데이트 되고, 리랜더링이 끝났다');
  }
  render() {
    // position을 허용
    if (this.state.lat && !this.state.errorMessage) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }
    // 거절
    if (!this.state.lat && this.state.errorMessage) {
      return (
        <div>
          <div>
            거절 : {this.state.errorMessage}
            사용자 위치 정보가 필요합니다
          </div>
        </div>
      );
    }
    // 허용/거절 대기상태
    return (
      <div>
        <Spinner />
      </div>
    );
  }
}

export default App;

// life cycle method

// constructor() 단 한번 실행되면 좋은 코드들을 담는다.

// render() {return (jsx template)}

// componentDidMount() {컴포넌트가 화면에 랜더링이 끝나면}

// componentDidUpdate() {컴포넌트가 업데이트가 되고, 리랜더링이 끝나면}

// componentWillUnmount() {React요소들이 아닌 친구들을 치울 때 좋다.}
