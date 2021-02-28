import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import './spinner.scss';
import { SpinnerStateProps } from '../../types';

const Spinner = ({ showSpinner }: SpinnerStateProps) => {
  const spinnerNode = showSpinner ? (
    <div className='spinner-wrapper' >
      <div className='spinner'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  ) : null;
  const rootDiv = document.getElementById('spinnerContainer')
  return rootDiv
    ? ReactDOM.createPortal(spinnerNode, rootDiv)
    : null;
}

const mapStateToProps = ({ data: { showSpinner } }): SpinnerStateProps => ({ showSpinner })
export default connect(mapStateToProps)(Spinner);
