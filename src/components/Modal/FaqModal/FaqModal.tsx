import React from 'react';
import { faq } from '../faqData';
import {
  Answer,
  ContentContainer,
  FaqContainer,
  FaqWrapper,
  Question
} from '../Modal.styles';
import { FaqModalProps } from './FaqModal.interface';

export const FaqModal: React.FunctionComponent<FaqModalProps> = ({
  setModal
}) => (
  <>
    <FaqContainer>
      <FaqWrapper>
        <h4>FAQ</h4>
        <span onClick={() => setModal(false)}>
          <i className="fas fa-times" />
        </span>
      </FaqWrapper>
    </FaqContainer>
    <ContentContainer>
      {faq.map(({ id, question, answer }) => (
        <div key={id} style={{ marginTop: '2rem' }}>
          <Question>{question}</Question>
          <Answer>{answer}</Answer>
        </div>
      ))}
    </ContentContainer>
  </>
);
