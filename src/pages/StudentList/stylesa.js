import styled from 'styled-components';

export const Right = styled.div`
  button {
    margin-right: 15px;
  }

  input {
    margin-left: 15px;
  }
`
export const Wrapper = styled.div`
  height: 100%;
  width: ${({ width }) => width ? `${width}px` : 'auto'};
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

  button {
    background: #ee4d64;
    /* height: 40px; */
    border: none;
    border-radius: 4px;
    padding: 10px 15px;
    margin-right: 15px;

    font-weight: bold;
    font-size: 14px;
    color: #ffffff;
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

export const Table = styled.table`
  padding: 30px;
  border-spacing: 0;

  .center {
    text-align: center;
  }

  tbody {
    tr {
      padding: 16px 0;

      td {
        font-size: 16px;
        color: #666666;
        padding: 17px 0;
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

      a {
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
