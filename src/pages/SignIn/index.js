import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Logo from '../../components/Logo';

import { Wrapper, Content } from './styles'
import { signInRequest } from '../../store/modules/auth/actions';

function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn(e) {
    e.preventDefault()
    dispatch(signInRequest(email, password));
  }

  return (
    <Wrapper>
      <Content>
        <form>
          <div className="logo">
            <Logo size={62} />
            <span>GYMPOINT</span>
          </div>
          <div className="field">
            <label htmlFor="email">SEU E-MAIL</label>
            <input
              id="email"
              type="text"
              placeholder="exemplo@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="pass">SUA SENHA</label>
            <input
              id="pass"
              type="password"
              placeholder="*************"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleSignIn}>Entrar no sistema</button>
        </form>
      </Content>
    </Wrapper>
  );
}

export default SignIn;
