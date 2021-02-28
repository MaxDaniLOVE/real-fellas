import * as T from '../constants';
import { DefaultActionCreator } from "../../types";

const showSpinner: DefaultActionCreator = () => ({ type: T.SHOW_SPINNER, payload: { showSpinner: true } });
const hideSpinner: DefaultActionCreator = () => ({ type: T.SHOW_SPINNER, payload: { showSpinner: false } });

export {
  showSpinner,
  hideSpinner,
};
