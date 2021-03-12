import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import { Alert  } from 'reactstrap';
import './alertsContainer.scss';
import { connect } from 'react-redux';
import { ErrorContainerDispatchProps, ErrorContainerStateProps } from '../../types';
import { isEmpty } from '../../utils/isEmpty';
import { closeError } from "../../store/ac/errorActions";

const AlertsContainer = ({ error, closeError }: ErrorContainerStateProps & ErrorContainerDispatchProps) => {
  const initialValue = useMemo(() => !isEmpty(error), [ error ] );
  const [ isOpenAlert, setIsOpenAlert ] = useState(initialValue);
  useEffect(() => setIsOpenAlert(initialValue), [ initialValue ])
  const onCloseAlert = () => {
    setIsOpenAlert(false);
    setTimeout(closeError, 500);
  };
  const spinnerNode = (
    <div className='alerts__container'>
      {
          <Alert
            color='danger'
            className='alerts__container-item'
            isOpen={isOpenAlert}
            toggle={onCloseAlert}
          >
            {`${error.status}: ${error.message}`}
          </Alert >
      }

    </div>
  )
  const rootDiv = document.getElementById('alertsContainer')
  return rootDiv
    ? ReactDOM.createPortal(spinnerNode, rootDiv)
    : null;
};
const mapStateToProps = ({ error }):ErrorContainerStateProps => ({ error });
export default connect(mapStateToProps, { closeError })(AlertsContainer);
