import React, { useState, useMemo } from 'react';
import { toast } from 'react-toastify';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import { Wrapper, Content, Top, Right, LightButtonLink, Button, Form, Field } from '../../styles/global';
import api from '../../services/api';
import history from '../../services/history';

export default function RegisterPlan({ match, location }) {
  let plan = null;

  if (match.params.id) {
    if (!location.query) {
      history.push('/plans');
    }
    plan = location.query;
  }

  const [id] = useState(plan ? plan.id : null);
  const [title, setTitle] = useState(plan ? plan.title : '');
  const [duration, setDuration] = useState(plan ? plan.duration : '');
  const [price, setPrice] = useState(plan ? plan.price : '');

  const totalPrice = useMemo(() => {
    return price * duration;
  }, [duration, price])

  async function handleSave() {
    const newPlan = { title, duration, price };

    // Cadastrar
    if (!id) {
      try {
        const response = await api.post('/plans', newPlan);

        if (!response.data) {
          toast.error('Erro ao comunicar com o servidor.');
          return
        }

        setTitle('');
        setDuration(0);
        setPrice(0);

        toast.success('Dados atualizados com sucesso!');
      }
      catch {
        toast.error('Falha ao atualizar, verifique os dados');
      }
    }
    // Atualizar
    else {
      try {
        const response = await api.put(`/plans/${id}`, newPlan);

        if (!response.data) {
          toast.error('Erro ao comunicar com o servidor.');
          return
        }

        toast.success('Plano cadastrado com sucesso!');
        history.push('/plans');
      }
      catch {
        toast.error('Falha ao cadastrar, verifique os dados');
      }
    }
  }

  return (
    <Wrapper>
      <Top>
        <strong>{ id ? 'Edição de plano' : 'Cadastro de plano' }</strong>
        <Right>
          <LightButtonLink to='/plans'>
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
        <Form cols={3}>
          <Field span={3}>
            <label htmlFor="title">TÍTULO DO PLANO</label>
            <input
              id="title"
              type="text"
              placeholder="John Doe"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Field>
          <Field>
            <label htmlFor="duration">DURAÇÃO (em meses)</label>
            <input
              id="duration"
              type="text"
              value={duration}
              onChange={e => setDuration(e.target.value)}
            />
          </Field>
          <Field>
            <label htmlFor="price">PREÇO MENSAL</label>
            <input
              id="price"
              type="text"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </Field>
          <Field>
            <label htmlFor="total_price">PREÇO TOTAL</label>
            <input
              id="total_price"
              type="text"
              value={totalPrice}
              readOnly
            />
          </Field>
        </Form>
      </Content>
    </Wrapper>
  );
}
