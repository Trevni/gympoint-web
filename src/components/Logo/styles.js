import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* margin-bottom: 10px; */

  .left, .right {
    width: ${({ size }) => size}px;
    height: ${({ size }) => 53*size/62}px;

    img {
      position: absolute;

      width: ${({ size }) => size}px;
      height: ${({ size }) => 53*size/62}px;
    }

    .dot {
      position: absolute;
      width: ${({ size }) => size}px;
      height: ${({ size }) => 53*size/62}px;

      display: flex;
      align-items: center;
      justify-content: center;

      &::after {
        content: '';
        display: inline-block;

        background: #ee4d64;
        width: ${({ size }) => 4*size/62}px;
        height: ${({ size }) => 4*size/62}px;
        border-radius: 50%;
      }
    }
  }

  .left {
    position: relative;
    left: ${({ size }) => 13*size/62}px;
  }

  .right {
    position: relative;
    left: -${({ size }) => 13*size/62}px;
  }
`;
