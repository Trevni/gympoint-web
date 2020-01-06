import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Wrapper, Content, Header, Top, Right, Table, Overlay, Form, Field, Button } from '../../styles/global';
import api from '../../services/api';

export default function HelpOrderList() {
  const [helpOrders, setHelpOrders] = useState([]);
  const [answering, setAnswering] = useState(null);
  const [answer, setAnswer] = useState('');

  async function loadHelpOrders() {
    const response = await api.get('/help_orders');
    if (!response.data) {
      toast.error('Erro ao comunicar com o servidor.');
      return
    }

    setHelpOrders(response.data)
  }

  useEffect(() => {
    loadHelpOrders();
  }, [])

  function openAnswer(helpOrder) {
    setAnswering(helpOrder);
  }

  async function handleAnswer() {
    const response = await api.post(`/help_orders/${answering.id}/answer`, { answer })
    if (!response.data) {
      toast.error('Erro ao comunicar com o servidor.');
      return
    }

    await loadHelpOrders();
    setAnswer('');
    setAnswering(null);
    toast.success('Resposta enviada!');
  }

  return (
    <Wrapper>
      <Overlay visible={answering !== null}>
        <Content width={450}>
          <Form>
            <Field>
              <label htmlFor="question">PERGUNTA DO ALUNO</label>
              <p id="question">{answering ? answering.question : null}</p>
            </Field>
            <Field>
              <label id="answer" htmlFor="answer">SUA RESPOSTA</label>
              <textarea
                placeholder="Resposta para o aluno"
                rows="5"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
              />
            </Field>
            <Button
              height={45}
              expand
              onClick={handleAnswer}
            >Responder Aluno</Button>
          </Form>
        </Content>
      </Overlay>
      <Top>
        <strong>Gerenciando pedidos de auxílio</strong>
        <Right>
        </Right>
      </Top>
      {/* <Content> */}
      <Content>
        <Table>
          <thead>
            <tr>
              <Header size={468}>ALUNO</Header>
              <Header size={70}></Header>
            </tr>
          </thead>
          <tbody>
            {helpOrders.map(helpOrder => (
              <tr key={helpOrder.id}>
                <td>{helpOrder.title}</td>
                <td className="update"><button type="button" onClick={() => openAnswer(helpOrder)}>responder</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Wrapper>
  );
}
