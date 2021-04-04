import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  function addUser(payload) {
    setState({
      ...state,
      user: Object.assign(state.user, payload),
    });
  };

  function addAnswer(payload) {
    setState({
      ...state,
      currentAnswer: Object.assign(state.currentAnswer, payload),
    });
  }

  return {
    state,
    addUser,
    addAnswer,
  };

};

export default useInitialState;
