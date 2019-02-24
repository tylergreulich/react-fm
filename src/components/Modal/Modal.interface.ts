interface StateProps {
  error: string;
}

interface DispatchProps {
  setModal: any;
  setError: any;
}

interface OwnProps {
  isModal: boolean;
}

export type ModalProps = StateProps & DispatchProps & OwnProps;
