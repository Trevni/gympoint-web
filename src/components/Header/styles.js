import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #fff;
  padding-left: 20px;
  padding-right: 30px;
  border: 1px solid #ccc;
  /* box-shadow: 0px 0 10px rgba(0, 0, 0, 0.25); */
`;

export const Content = styled.div`
  height: 60px;
  /* max-width: 900px; */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;
      margin-right: 30px;
      padding-right: 30px;
      border-right: 1px solid #ccc;

      /* img {
        margin-right: 20px;
        padding-right: 20px;
        border-right: 1px solid #eee;
      } */

      a {
        font-weight: bold;
        font-size: 15px;
        color: #ee4d64;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const PageLink = styled(Link)`
  font-weight: bold;
  font-size: 15px;
  margin-right: 20px;
  color: ${({ selected }) => selected ? '#444' : '#999'};
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* text-align: right;
  margin-right: 10px; */

  strong {
    /* display: block; */
    font-size: 16px;
    font-weight: bold;
    color: #666;
  }

  button {
    /* display: block; */
    margin-top: 2px;
    font-size: 14px;
    color: #de3b3b;
    background: transparent;
    border: none;
  }
`;
