import * as T from '../constants';
import ws from '../../utils/ws';

const initSocket = () => (dispatch, getState) => {
  
  ws.onopen = (e) => {
    dispatch({ type: T.INIT_WS + T.SUCCESS });
  }
  ws.onerror = (error) => {
    console.log(error);
    dispatch({ type: T.INIT_WS + T.ERROR });
  }
  ws.onmessage = ({ data }) => {
    const { data : { messages } } = getState();
    dispatch({ type: T.MESSAGE_RECIEVE, payload: { messages: [ ...messages, data ] } });
  }
}

export default initSocket;
