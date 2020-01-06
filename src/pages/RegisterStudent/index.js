import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import { Wrapper, Content, Top, Right, LightButtonLink, Button, Form, Field, Overlay } from '../../styles/global';
import api from '../../services/api';
import history from '../../services/history';

export default function RegisterStudent({ match, location }) {
  let student = null;

  if (match.params.id) {
    if (!location.query) {
      history.push('/students');
    }
    student = location.query;
  }

  const [id] = useState(student ? student.id : null);
  const [name, setName] = useState(student ? student.name : '');
  const [email, setEmail] = useState(student ? student.email : '');
  const [age, setAge] = useState(student ? student.age : '');
  const [weight, setWeight] = useState(student ? student.weight : '');
  const [height, setHeight] = useState(student ? student.height : '');

  async function handleSave() {
    const newStudent = { name, email, age, weight, height };

    // Cadastrar
    if (!id) {
      try {
        const response = await api.post('/students', newStudent);

        if (!response.data) {
          toast.error('Erro ao comunicar com o servidor.');
          return
        }

        setName('');
        setEmail('');
        setAge('');
        setWeight('');
        setHeight('');

        toast.success('Dados atualizados com sucesso!');
      }
      catch {
        toast.error('Falha ao atualizar, verifique os dados');
      }
    }
    // Atualizar
    else {
      try {
        const response = await api.put(`/students/${id}`, newStudent);

        if (!response.data) {
          toast.error('Erro ao comunicar com o servidor.');
          return
        }

        toast.success('Aluno cadastrado com sucesso!');
        history.push('/students');
      }
      catch {
        toast.error('Falha ao cadastrar, verifique os dados');
      }
    }
  }

  return (
    <Wrapper>
      <Overlay visible={false}>
        <Content width={450}>
          <Form>
            <Field>
              <label htmlFor="question">PERGUNTA DO ALUNO</label>
              <p id="question">
                Olá pessoal da academia, gostaria de saber se quando
                acordar devo ingerir batata doce e frango logo de
                primeira, preparar as marmitas e lotar a geladeira?
                Dou um pico de insulina e jogo o hipercalórico?
              </p>
            </Field>
            <Field>
              <label id="answer" htmlFor="answer">SUA RESPOSTA</label>
              <textarea placeholder="Resposta para o aluno" rows="5" />
            </Field>
            <Button height={45} expand>Responder Aluno</Button>
          </Form>
        </Content>
      </Overlay>
      <Top>
        <strong>{ id ? 'Edição de aluno' : 'Cadastro de aluno' }</strong>
        <Right>
          <LightButtonLink to='/students'>
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
            <label htmlFor="name">NOME COMPLETO</label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Field>
          <Field span={3}>
            <label htmlFor="email">ENDEREÇO DE E-MAIL</label>
            <input
              id="email"
              type="email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Field>
          <Field>
            <label htmlFor="age">IDADE</label>
            <input
              id="age"
              type="text"
              value={age}
              onChange={e => setAge(e.target.value)}
            />
          </Field>
          <Field>
            <label htmlFor="weight">PESO (em kg)</label>
            <input
              id="weight"
              type="text"
              value={weight}
              onChange={e => setWeight(e.target.value)}
            />
          </Field>
          <Field>
            <label htmlFor="height">ALTURA</label>
            <input
              id="height"
              type="text"
              value={height}
              onChange={e => setHeight(e.target.value)}
            />
          </Field>
        </Form>
      </Content>
    </Wrapper>
  );
}
