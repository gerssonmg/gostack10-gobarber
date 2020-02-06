import React, { useState } from 'react';
import './styles.css';
import Post from '../Post';

export default function PostList() {
  const [user, setUser] = useState([
    {
      url_avatar: 'https://avatars2.githubusercontent.com/u/51293406?v=4',
      name: 'Britivaldo Leopoldo T.',
      date: '04 Jun 2019',
      content: 'Pessoal, alguem sabe se a Rocketseat esta contratando?',
    },
    {
      url_avatar: 'https://avatars2.githubusercontent.com/u/12429717?v=4',
      name: 'Gérson Crisóstomo Á. Filho',
      date: '04 Jun 2019',
      line01: `Fala galera, beleza?`,
      content: `
      Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais ai fazendo,
      comenta na publicação para trocarmos uma ideia.
      `,
    },
  ]);
  return (
    <div className="post-list">
      <ul>
        <Post user={user[0]} />
        <Post user={user[1]} />
        <Post user={user[1]} />
        <Post user={user[1]} />
        <Post user={user[1]} />
        <Post user={user[1]} />
        <Post user={user[1]} />
        <Post user={user[1]} />
        <Post user={user[1]} />
        <Post user={user[1]} />
        <Post user={user[1]} />
        <Post user={user[1]} />
        <Post user={user[1]} />
        <Post user={user[1]} />
        <Post user={user[1]} />
      </ul>
    </div>
  );
}
