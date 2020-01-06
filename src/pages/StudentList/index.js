import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import { Wrapper, Content, Header, Top, Right, Table, ButtonLink } from '../../styles/global';
import api from '../../services/api';

export default function StudentList() {
  const [students, setStudents] = useState([]);

  async function loadStudents() {
    const response = await api.get('/students');
    if (!response.data) {
      toast.error('Erro ao comunicar com o servidor.');
      return
    }

    setStudents(response.data)
  }

  useEffect(() => {
    loadStudents();
  }, [])

  async function handleDelete(id) {
    const response = await api.delete(`/students/${id}`)
    if (!response.data) {
      toast.error('Erro ao comunicar com o servidor.');
      return
    }

    await loadStudents();
    toast.success('Aluno removido com sucesso!');
  }

  return (
    <Wrapper>
      <Top>
        <strong>Gerenciando alunos</strong>
        <Right>
          <ButtonLink to="/students/new">
            <MdAdd size={20}/> CADASTRAR
          </ButtonLink>
          <input type="text" placeholder="Buscar aluno" />
        </Right>
      </Top>
      {/* <Content> */}
      <Content>
        <Table>
          <thead>
            <tr>
              <Header size={468}>NOME</Header>
              <Header size={374}>E-MAIL</Header>
              <Header size={60} className="center">IDADE</Header>
              <Header size={168}></Header>
              <Header size={70}></Header>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.name}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td className="center">{student.age}</td>
                <td className="update">
                  <Link to={{
                      pathname: `/students/${student.id}`,
                      query: student
                    }}
                  >
                    editar
                  </Link>
                </td>
                <td className="delete"><button type="button" onClick={() => handleDelete(student.id)}>apagar</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Wrapper>
  );
}
