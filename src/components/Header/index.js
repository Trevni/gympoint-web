import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo';
// import Notifications from '~/components/Notifications';

import { Container, Content, Profile, PageLink } from './styles';
import { signOut } from '../../store/modules/auth/actions';

export default function Header({ match, location }) {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.auth.profile)
  // const profile = useSelector(state => state.user.profile);

  console.tron.log(match, location);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <div className="logo">
            <Logo size={28} />
            <Link to="/">GYMPOINT</Link>
          </div>
          <div className="pages">
            <PageLink to="/students" selected>ALUNOS</PageLink>
            <PageLink to="/plans">PLANOS</PageLink>
            <PageLink to="/registrations">MATRÍCULAS</PageLink>
            <PageLink to="/help_orders">PEDIDOS DE AUXÍLIO</PageLink>
          </div>
        </nav>
        <aside>
          {/* <Notifications /> */}

          <Profile>
            <strong>{profile.name}</strong>
            <button onClick={handleSignOut}>sair do sistema</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
