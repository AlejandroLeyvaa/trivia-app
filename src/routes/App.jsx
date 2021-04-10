import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppContext from '../context/AppContext';
import useInitialState from '../Hooks/useInitialState';
import Home from '../containers/Home';
import QuestionsContainer from '../containers/QuestionsContainer';
import Main from '../components/Main';
import Users from '../components/Users';
import SignUp from '../containers/SignUp';
// import PrivateRoute from '../auth/PrivateRoute';
// import EditProfile from '../components/EditProfile';

import '../static/styles/mobile.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Header />
        <Main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/questions' component={QuestionsContainer} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/signup' component={SignUp} />
            {/* <PrivateRoute exact path='/user/edit/:userId' component={EditProfile} /> */}
          </Switch>
        </Main>
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
