import React from 'react';
import { connect } from 'react-redux';
import { setError, setModal } from '../../store/actions/lastFmActions';
import { RootState } from '../../store/reducers/rootReducer';
import { ErrorModal } from './ErrorModal/ErrorModal';
import { FaqModal } from './FaqModal/FaqModal';
import { ModalProps } from './Modal.interface';
import { Backdrop, ModalContainer, ModalWrapper } from './Modal.styles';

const Modal: React.FunctionComponent<ModalProps> = ({
  isModal,
  setModal,
  error,
  setError
}) => {
  return (
    <ModalWrapper>
      {isModal && (
        <>
          <Backdrop
            onClick={() => {
              setError('');
              setModal(false);
            }}
          />
          <ModalContainer isModal={isModal} isErrorModal={error.length >= 1}>
            {error.length >= 1 ? (
              <ErrorModal
                error={error}
                setModal={setModal}
                setError={setError}
              />
            ) : (
              <FaqModal setModal={setModal} />
            )}
          </ModalContainer>
        </>
      )}
    </ModalWrapper>
  );
};

const mapStateToProps = ({ lastFm }: RootState) => ({
  error: lastFm.error
});

export default connect(
  mapStateToProps,
  { setModal, setError }
)(Modal);
