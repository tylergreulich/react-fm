import styled, { keyframes } from 'styled-components';
import { pxToEm } from '../../shared/pxToEm';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0);
  }

  65% {
    opacity: 1;
  }

  100% {
    transform: translateY(40rem);
  }
`;

const fadeInFurther = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0);
  }

  65% {
    opacity: 1;
  }

  100% {
    transform: translateY(40rem);
  }
`;

interface Props {
  isModal: boolean;
  isErrorModal: boolean;
}

export const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Backdrop = styled.div`
  background-color: ${props => props.theme.black};
  width: 100%;
  height: 100%;
  z-index: 999;
  position: absolute;
  opacity: 0.8;
`;

export const ModalContainer = styled.div<Props>`
  top: -35rem;
  position: relative;
  z-index: 1000;
  width: 45%;
  display: flex;
  background-color: ${props => props.theme.white};
  flex-direction: column;
  margin: 0 auto;
  overflow-y: scroll;
  height: ${props => (props.isErrorModal ? '10rem' : '35rem')};
  animation: 0.3s ${props => (props.isErrorModal ? fadeInFurther : fadeIn)}
    ease-in forwards;

  @media (max-width: ${pxToEm(1200)}) {
    overflow-y: scroll;
    width: 55%;
  }

  @media (max-width: ${pxToEm(870)}) {
    width: 60%;
  }

  @media (max-width: ${pxToEm(640)}) {
    width: 65%;
  }

  @media (max-width: ${pxToEm(580)}) {
    width: 75%;
  }
`;

export const FaqContainer = styled.div`
  flex: 0.15;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.primary};

  div {
    margin: 0 2rem;

    h4 {
      color: ${props => props.theme.white};
      font-size: 2rem;
    }
  }
`;

export const ErrorContainer = styled(FaqContainer)`
  flex: 0.5;
  background-color: #e63946;
`;

export const FaqWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  svg {
    color: ${props => props.theme.white};
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${props => props.theme.grey};
    }
  }
`;

export const ErrorWrapper = styled(FaqWrapper)`
  align-items: flex-start;
`;

export const ContentContainer = styled.div`
  flex: 0.75;
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Question = styled.p`
  color: ${props => props.theme.primary};
  font-size: 1.75rem;
  font-weight: 500;
`;

export const Answer = styled.p`
  color: ${props => props.theme.black};
  font-size: 1.5rem;
  padding-right: 3rem;
  margin: 2rem 0;
  line-height: 1.5;
`;
