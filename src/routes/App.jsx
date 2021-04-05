import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppContext from '../context/AppContext';
import useInitialState from '../Hooks/useInitialState';
import Home from '../containers/Home';
import QuestionsContainer from '../containers/QuestionsContainer';

import '../static/styles/mobile.css';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/questions' component={QuestionsContainer} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
