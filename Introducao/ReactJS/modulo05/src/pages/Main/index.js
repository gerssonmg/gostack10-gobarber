import React, { useState } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';
import api from '../../services/api';

export default function Main() {
  const [newRepo, setNewrepo] = useState('rocketseat/unform');
  const [resAxios, setResaxios] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    setNewrepo(e);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const response = await api.get(`/repos/${newRepo}`);
    setResaxios([...resAxios, response.data.full_name]);
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
      {resAxios}
    </Container>
  );
}
