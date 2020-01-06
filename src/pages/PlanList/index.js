import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import { Wrapper, Content, Header, Top, Right, Table, ButtonLink } from '../../styles/global';
import api from '../../services/api';

export default function PlanList() {
  const [plans, setPlans] = useState([]);

  async function loadPlans() {
    const response = await api.get('/plans');
    if (!response.data) {
      toast.error('Erro ao comunicar com o servidor.');
      return
    }

    setPlans(response.data)
  }

  useEffect(() => {
    loadPlans();
  }, [])

  async function handleDelete(id) {
    const response = await api.delete(`/plans/${id}`)
    if (!response.data) {
      toast.error('Erro ao comunicar com o servidor.');
      return
    }

    await loadPlans();
    toast.success('Plano removido com sucesso!');
  }

  return (
    <Wrapper>
      <Top>
        <strong>Gerenciando planos</strong>
        <Right>
          <ButtonLink to="/plans/new">
            <MdAdd size={20}/> CADASTRAR
          </ButtonLink>
        </Right>
      </Top>
      {/* <Content> */}
      <Content>
        <Table>
          <thead>
            <tr>
              <Header size={468}>TÍTULO</Header>
              <Header size={100} className="center">DURAÇÃO</Header>
              <Header size={60} className="center">VALOR p/ MÊS</Header>
              <Header size={70}></Header>
              <Header size={70}></Header>
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td>{plan.title}</td>
                <td className="center">{plan.duration}</td>
                <td className="center">{plan.price}</td>
                <td className="update">
                  <Link to={{
                      pathname: `/plans/${plan.id}`,
                      query: plan
                    }}
                  >
                    editar
                  </Link>
                </td>
                <td className="delete"><button type="button" onClick={() => handleDelete(plan.id)}>apagar</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Wrapper>
  );
}
