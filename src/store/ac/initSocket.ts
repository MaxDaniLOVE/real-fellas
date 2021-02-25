import * as T from '../constants';

const initSocket = ws => (dispatch, getState) => {
  ws.onopen = (e) => {
    dispatch({ type: T.INIT_WS + T.SUCCESS });
  }
  ws.onerror = (error) => {
    console.log(error);
    dispatch({ type: T.INIT_WS + T.ERROR });
  }
  ws.onmessage = ({ data }) => {
    const { data : { messages } } = getState();
    dispatch({ type: T.MESSAGE_RECEIVE, payload: { messages: [ ...messages, JSON.parse(data) ] } });
  }
}

export default initSocket;
