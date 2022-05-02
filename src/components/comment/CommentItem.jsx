import React from 'react'

import './Comment.css'

function CommentItem({list}) {
  return list.map(({content, date}) => 
    <div>
      <h6>{content}</h6>
      <hr></hr>
      <p>{date}</p>
    </div>
  );
}

export default CommentItem 