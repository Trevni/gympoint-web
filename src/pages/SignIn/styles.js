import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  background: #ee4d64;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #ffffff;
  border-radius: 4px;
  padding: 50px 30px;
  width: 100%;
  max-width: 360px;
  box-shadow: 0px 0 10px rgba(0, 0, 0, 0.25);

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin-bottom: 10px;

    span {
      margin-top: 10px;
      font-weight: bold;
      font-size:29px;
      color: #ee4d64;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    .field {
      display: flex;
      flex-direction: column;
      justify-items: flex-start;

      label {
        font-size: 14px;
        font-weight: bold;
        color: #444444;
        margin-top: 20px;
        margin-bottom: 10px;
      }

      input {
        border: 1px solid #ddd;
        border-radius: 4px;
        box-shadow: 0 0 1px #ddd;
        font-size: 16px;

        height: 44px;
        padding: 0 15px;

        &::placeholder {
          color: #999999;
        }
      }
    }

    button {
      background: #ee4d64;
      color: #fff;
      font-size: 16px;
      font-weight: bold;

      border: 0;
      border-radius: 4px;
      height: 45px;
      margin-top: 15px;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#ee4d64')};
      }
    }
  }
`;
