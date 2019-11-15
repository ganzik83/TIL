import React from 'react';

const CommentDetail = props => {
  return (
    <div>
      <a href='#' className='avatar'>
        <img src={props.avatar} alt='avatar' />
      </a>
      <div className='content'>
        <a href='!#' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>{props.time}</span>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
