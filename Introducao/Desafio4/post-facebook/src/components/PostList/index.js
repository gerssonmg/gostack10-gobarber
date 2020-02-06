import React, { useState } from 'react';
import './styles.css';
import Post from '../Post';

export default function PostList() {
  const [user, setUser] = useState([
    {
      name: 'Gabriel Lisboa',
      date: '04 Jun 2019',
      content: 'Estou fazendo o Bootcamp GoStack',
    },
    {
      name: 'Julio Alcantara',
      date: '04 Jun 2019',
      content: 'Pessoal, alguem sabe se a Rocketseat esta contratando?',
    },
  ]);
  return (
    <div>
      <Post user={user[0]} />
      <Post user={user[0]} />
    </div>
  );
}
