import React, { useState, useMemo } from 'react';
import { toast } from 'react-toastify';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import { Wrapper, Content, Top, Right, LightButtonLink, Button, Form, Field } from '../../styles/global';
import api from '../../services/api';
import history from '../../services/history';

export default function NewRegistration({ match, location }) {
  let registration = null;

  if (match.params.id) {
    if (!location.query) {
      history.push('/registrations');
    }
    registration = location.query;
  }

  const [id] = useState(registration ? registration.id : null);
  const [student, setStudent] = useState(registration ? registration.student : '');
  const [plan, setPlan] = useState(registration ? registration.plan : '');
  const [startDate, setStartDate] = useState(registration ? registration.startDate : '');

  const endDate = useMemo(() => {
    // return startDate + plan.duration;
    return plan ? startDate + plan.duration : 0;
  }, [plan, startDate])

  const price = useMemo(() => {
    return plan ? plan.duration * plan.price : 0;
  }, [plan])

  async function handleSave() {
    const newRegistration = { student, plan, startDate };

    // Cadastrar
    if (!id) {
      try {
        const response = await api.post('/registrations', newRegistration);

        if (!response.data) {
          toast.error('Erro ao comunicar com o servidor.');
          return
        }

        setStudent('');
        setPlan('');
        setStartDate('');

        toast.success('Dados atualizados com sucesso!');
      }
      catch {
        toast.error('Falha ao atualizar, verifique os dados');
      }
    }
    // Atualizar
    else {
      try {
        const response = await api.put(`/registrations/${id}`, newRegistration);

        if (!response.data) {
          toast.error('Erro ao comunicar com o servidor.');
          return
        }

        toast.success('Matrícula cadastrada com sucesso!');
        history.push('/registrations');
      }
      catch {
        toast.error('Falha ao cadastrar, verifique os dados');
      }
    }
  }

  return (
    <Wrapper>
      <Top>
        <strong>{ id ? 'Edição de matrícula' : 'Cadastro de matrícula' }</strong>
        <Right>
          <LightButtonLink to='/registrations'>
            <MdKeyboardArrowLeft size={20} />
            VOLTAR
          </LightButtonLink>
          <Button onClick={handleSave}>
            <MdCheck size={20} />
            SALVAR
          </Button>
        </Right>
      </Top>
      <Content>
        <Form cols={4}>
          <Field span={4}>
            <label htmlFor="student">ALUNO</label>
            <input
              id="student"
              type="text"
              placeholder="Buscar aluno"
              value={student}
              onChange={e => setStudent(e.target.value)}
            />
          </Field>
          <Field>
            <label htmlFor="plan">PLANO</label>
            <input
              id="plan"
              type="text"
              placeholder="Selecione o plano"
              value={plan}
              onChange={e => setPlan(e.target.value)}
            />
          </Field>
          <Field>
            <label htmlFor="start_date">DATA DE INÍCIO</label>
            <input
              id="start_date"
              type="text"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
            />
          </Field>
          <Field>
            <label htmlFor="end_date">DATA DE TÉRMINO</label>
            <input
              id="end_date"
              type="text"
              value={endDate}
              readOnly
            />
          </Field>
          <Field>
            <label htmlFor="price">VALOR FINAL</label>
            <input
              id="price"
              type="text"
              value={price}
              readOnly
            />
          </Field>
        </Form>
      </Content>
    </Wrapper>
  );
}
