import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Form, SubmitButton, List } from './styles';
import Container from '../../components/Container';
import api from '../../services/api';

export default function Main() {
  const [newRepo, setNewrepo] = useState('rocketseat/unform');
  const [resAxios, setResaxios] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function reqLocal() {
      if (localStorage.getItem('resAxios')) {
        setResaxios(JSON.parse(localStorage.getItem('resAxios')));
      }
    }
    reqLocal();
  }, []);

  function handleInputChange(e) {
    setNewrepo(e);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const response = await api.get(`/repos/${newRepo}`);
    await setResaxios([...resAxios, response.data]);
    localStorage.setItem('resAxios', JSON.stringify(resAxios));
    console.log(resAxios);
    setLoading(false);
  }
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositorios{newRepo}
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar repositório"
          value={newRepo}
          onChange={e => handleInputChange(e.target.value)}
        />
        <SubmitButton loading={loading}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
              <FaPlus color="#FFF" size={14} />
            )}
        </SubmitButton>
      </Form>

      <List>
        {resAxios.map(repo => (
          <li key={Math.random(1) * 100}>
            <span>{repo.full_name}</span>

            <Link to={`/repository/${encodeURIComponent(repo.full_name)}`}>
              Detalhes
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
}
