import styled, { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

import { Link } from 'react-router-dom';

// import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font: 14px 'Roboto', sans-serif;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1260px;
  margin: auto;
  padding: 30px;
`

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  strong {
    font-weight: bold;
    font-size: 24px;
    color: #444444;
  }

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 0 1px #ddd;

    height: 35px;
    width: 236px;
    padding: 15px;

    font-size: 14px;

    &::placeholder {
      color: #999999;
    }
  }
`

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button, input {
    margin-left: 15px;
  }
`

export const ButtonLink = styled(Link).attrs({
  type: 'button',
  color: '#ee4d64'
})`
  background: ${({ color }) => color};
  border: none;
  border-radius: 4px;
  padding: 8px 15px;

  display: flex;
  flex-direction: row;
  align-items: center;

  font-weight: bold;
  font-size: 14px;
  color: #ffffff;

  width: ${({ width }) => width ? `${width}px` : 'auto'};
  height: ${({ height }) => height ? `${height}px` : 'auto'};

  transition: background 0.2s;

  &:hover {
    background: ${({ color }) => darken(0.04, color)};
  }

  svg {
    margin-right: 5px;
  }
`

export const Button = styled.button.attrs({
  type: 'button',
  color: '#ee4d64'
})`
  background: ${({ color }) => color};
  border: none;
  border-radius: 4px;
  padding: 8px 15px;

  display: flex;
  flex-direction: row;
  align-items: center;

  font-weight: bold;
  font-size: 14px;
  color: #ffffff;

  width: ${({ width }) => width ? `${width}px` : 'auto'};
  height: ${({ height }) => height ? `${height}px` : 'auto'};

  transition: background 0.2s;

  &:hover {
    background: ${({ color }) => darken(0.04, color)};
  }

  svg {
    margin-right: 5px;
  }
`

export const LightButton = styled(Button).attrs({
  color: '#ccc'
})``

export const LightButtonLink = styled(ButtonLink).attrs({
  color: '#ccc'
})``

export const Content = styled.div`
  background: #fff;
  border-radius: 4px;
  margin-top: 20px;
  padding: 30px;
  width: ${({ width }) => width ? `${width}px` : 'auto'};
  cursor: auto;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  grid-gap: 20px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  grid-column: 1 / span ${({ span }) => span}

  label {
    font-size: 14px;
    font-weight: bold;
    color: #444444;
    margin-bottom: 10px;
  }

  input, textarea {
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 0 1px #ddd;
    font-size: 16px;

    &::placeholder {
      color: #999999;
    }
  }

  input {
    padding: 13px 15px;
    height: 44px;
  }

  textarea {
    padding: 10px 15px;
  }

  p {
    font-size:16px;
    color:#666666;
    line-height:26px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
  cursor: pointer;

  display: ${({ visible }) => visible ? 'flex' : 'none' };
  align-items: center;
  justify-content: center;
`;

export const Table = styled.table`
  border-spacing: 0;

  .center {
    text-align: center;
  }

  tbody {
    tr {
      td {
        font-size: 16px;
        color: #666666;
        padding: 17px 0;
      }
    }

    tr:last-child {
      td {
        padding-bottom: 0;
      }
    }

    tr + tr {
      td {
        border-top: 1px solid #eee;
      }
    }

    .update {
      text-align: right;

      a {
        color: #4d85ee;
        font-size: 15px;
      }
    }

    .delete {
      text-align: right;

      button {
        border: none;
        background: transparent;
        color: #de3b3b;
        font-size: 15px;
      }
    }
  }
`;

export const Header = styled.th`
  font-weight: bold;
  font-size: 16px;
  color: #444444;
  text-align: left;
  /* column-width: 200px; */
  column-width: ${({ size }) => size}px;
  padding-bottom: 3px;
`;
