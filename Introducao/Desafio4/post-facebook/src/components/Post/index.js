import React, { useState } from 'react';
import './styles.css';
import Comment from '../Comment';

export default function Post({ user }) {
  const [comment, setComment] = useState([
    {
      url_avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
      name: 'Diego',
      content: `A Rocketseat está sempre em busca de novos membros para o time, e geralmente
      ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto
      por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando videos e criando
      posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real!)`,
    },
    {
      url_avatar: 'https://avatars1.githubusercontent.com/u/15860045?v=4',
      name: 'Jonas Kirch',
      content: `Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro
      módulo sobre Node e já tenho minha API dos desafios construida!
      `,
    },
    {
      url_avatar: 'https://avatars2.githubusercontent.com/u/5818269?v=4',
      name: 'Bruno M.',
      content: `Fala galera, beleza?
      Que maaaaasaa! Estou pensando em me inscrever na próxima turma pra ver
      qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super
      poderes!
      `,
    },
  ]);

  function brito() {
    if (user.name === `Britivaldo Leopoldo T.`) {
      return <Comment comment={comment[0]} />;
    }
    return (
      <>
        <Comment comment={comment[1]} />
        <Comment comment={comment[2]} />
      </>
    );
  }
  return (
    <li className="post-item">
      <header className="header-flex">
        <img src={user.url_avatar} alt="img" className="post-img" />
        <div className="post-user-info">
          <strong>{user.name}</strong>
          <span>{user.date}</span>
        </div>
      </header>
      <p className="post-p">{user.line01}</p>
      <p className="post-p">{user.content}</p>
      <div className="rectangle" />
      <ul>{brito()}</ul>
    </li>
  );
}
