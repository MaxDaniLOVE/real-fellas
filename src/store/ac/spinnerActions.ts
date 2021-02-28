import * as T from '../constants';

const showSpinner = () => ({ type: T.SHOW_SPINNER, payload: { showSpinner: true } });
const hideSpinner = () => ({ type: T.SHOW_SPINNER, payload: { showSpinner: false } });

export {
  showSpinner,
  hideSpinner,
};
