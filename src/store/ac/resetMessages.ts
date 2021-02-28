import * as T from '../constants';
import { DefaultActionCreator } from '../../types';

export const resetMessages: DefaultActionCreator= () => ({ type: T.RESET_MESSAGES });
