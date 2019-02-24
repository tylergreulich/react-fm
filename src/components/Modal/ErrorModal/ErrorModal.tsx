import React from 'react';
import {
  Answer,
  ContentContainer,
  ErrorContainer,
  ErrorWrapper
} from '../Modal.styles';
import { ErrorModalProps } from './ErrorModal.interface';

export const ErrorModal: React.FunctionComponent<ErrorModalProps> = ({
  setModal,
  setError,
  error
}) => (
  <>
    <ErrorContainer>
      <ErrorWrapper>
        <h4>Error!</h4>
        <span
          onClick={() => {
            setError('');
            setModal(false);
          }}
        >
          <i className="fas fa-times" />
        </span>
      </ErrorWrapper>
    </ErrorContainer>
    <ContentContainer
      style={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: '2rem'
      }}
    >
      <div>
        <Answer style={{ padding: 0, margin: 0 }}>{error}</Answer>
      </div>
    </ContentContainer>
  </>
);
