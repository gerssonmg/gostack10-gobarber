import React from 'react';
import './styles.css';

export default function Comment({ comment }) {
  return (
    <li className="comment-item">
      <img src={comment.url_avatar} alt="img" className="comment-img" />
      <p>
        <strong>{comment.name}</strong>
        {comment.content}
      </p>
    </li>
  );
}
