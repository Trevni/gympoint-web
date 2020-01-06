import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import { Wrapper, Content, Header, Top, Right, Table, ButtonLink } from '../../styles/global';
import api from '../../services/api';

export default function RegistrationList() {
  const [registrations, setRegistrations] = useState([]);

  async function loadRegistrations() {
    const response = await api.get('/registrations');
    if (!response.data) {
      toast.error('Erro ao comunicar com o servidor.');
      return
    }

    setRegistrations(response.data)
  }

  useEffect(() => {
    loadRegistrations();
  }, [])

  async function handleDelete(id) {
    const response = await api.delete(`/registrations/${id}`)
    if (!response.data) {
      toast.error('Erro ao comunicar com o servidor.');
      return
    }

    await loadRegistrations();
    toast.success('Matrícula removida com sucesso!');
  }

  return (
    <Wrapper>
      <Top>
        <strong>Gerenciando matrículas</strong>
        <Right>
          <ButtonLink to="/registrations/new">
            <MdAdd size={20}/> CADASTRAR
          </ButtonLink>
        </Right>
      </Top>
      {/* <Content> */}
      <Content>
        <Table>
          <thead>
            <tr>
              <Header size={468}>ALUNO</Header>
              <Header size={100} className="center">PLANO</Header>
              <Header size={60} className="center">INÍCIO</Header>
              <Header size={60} className="center">TÉRMINO</Header>
              <Header size={60} className="center">ATIVA</Header>
              <Header size={70}></Header>
              <Header size={70}></Header>
            </tr>
          </thead>
          <tbody>
            {registrations.map(registration => (
              <tr key={registration.id}>
                <td>{ registration.student.name }</td>
                <td className="center">{ registration.plan.name }</td>
                <td className="center">{ registration.start_date }</td>
                <td className="center">{ registration.end_date }</td>
                <td className="center">{ registration.active }</td>
                <td className="update">
                  <Link to={{
                      pathname: `/registrations/${registration.id}`,
                      query: registration
                    }}
                  >
                    editar
                  </Link>
                </td>
                <td className="delete"><button type="button" onClick={() => handleDelete(registration.id)}>apagar</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Wrapper>
  );
}
