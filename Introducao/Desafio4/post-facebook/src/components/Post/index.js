import React, { useState } from 'react';
import './styles.css';
import Comment from '../Comment';

export default function Post({ user }) {
  const [comment, setComment] = useState([
    {
      url_avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
      name: 'Diego',
      content: 'Pessoal, alguem sabe se a Rocketseat esta contratando?',
    },
    {
      url_avatar: 'https://avatars1.githubusercontent.com/u/15860045?v=4',
      name: 'Jonas Kirch',
      content: `Fala galera, beleza?
      Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais ai fazendo,
      comenta na publicação para trocarmos uma ideia.
      `,
    },
    {
      url_avatar: 'https://avatars2.githubusercontent.com/u/5818269?v=4',
      name: 'Bruno M.',
      content: `Fala galera, beleza?
      Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais ai fazendo,
      comenta na publicação para trocarmos uma ideia.
      `,
    },
  ]);

  return (
    <li className="post-item">
      <header className="header-flex">
        <img src={user.url_avatar} alt="img" className="post-img" />
        <div className="post-user-info">
          <strong>{user.name}</strong>
          <span>{user.date}</span>
        </div>
      </header>
      <p className="post-p">{user.content}</p>
      <div className="rectangle" />
      <ul>
        <Comment comment={comment[0]} />
        <Comment comment={comment[1]} />
        <Comment comment={comment[2]} />
      </ul>
    </li>
  );
}
