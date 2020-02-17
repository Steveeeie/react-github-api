import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% {
      transform: scale(0.3);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
`;

const Loading = styled.div`
  height: 72px;
  position: relative;
  width: 72px;

  &::before,
  &::after {
    animation: ${animation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite forwards;
    border-radius: 50%;
    border: 4px solid #fff;
    content: '';
    height: 100%;
    opacity: 1;
    position: absolute;
    width: 100%;
  }

  &::after {
    animation-delay: -0.5s;
  }
`;

Loading.defaultProps = {
  'data-testid': 'loading'
};

export default Loading;
