import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import Segment from './Segment';
import Message from './Message';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

class App extends React.Component {
  // constructor(){
  // babel이 알아서 한다
  // }
  state = {
    comments: [],
    number: 0,
    information: faker.lorem.paragraph()
  };

  handleAddComment = () => {
    const newComment = {
      author: faker.name.firstName(),
      time: faker.date.recent().toLocaleString(),
      body: faker.lorem.sentence(),
      avatar: faker.image.avatar()
    };
    this.setState({ comments: [newComment, ...this.state.comments] });
  };

  handlePlus = () => {
    this.setState({ number: this.state.number + 1 });
  };
  handleMinus = () => {
    this.setState({ number: this.state.number - 1 });
  };
  handleReset = () => {
    this.setState({ number: 0 });
  };

  render() {
    return (
      <>
        <span>{this.state.number}</span>
        <button onClick={this.handlePlus}>Plus</button>
        <button onClick={this.handleMinus}>Minus</button>
        <button onClick={this.handleReset}>Reset</button>
        <Segment>
          <div className='ui icon header'>
            <i className='pdf file outline icon'>No document</i>
          </div>
          <div className='ui primary button'>add document</div>
        </Segment>
        <Segment>
          <h4 className='ui header'>For your information</h4>
          <p>{this.state.information}</p>
        </Segment>

        {/* props 이름 (header, body로 설정)으로 Message 컴포넌트에 정보를 전달한다. */}
        <Message header='회원 약관 변경' body='약관이 변경되었습니다' />

        <div>
          <button className='ui primary button' onClick={this.handleAddComment}>
            댓글 작성
          </button>
          <ApprovalCard>
            <h4>저는 칼퇴하겠습니다. 금요일이니까요.</h4>
          </ApprovalCard>
          {this.state.comments.map((comment, i) => {
            return (
              <ApprovalCard key={i}>
                <CommentDetail {...comment} />
              </ApprovalCard>
            );
          })}
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
