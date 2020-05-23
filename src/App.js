import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from 'pages/loginPage/loginPage';
import UsersList from 'pages/usersList/usersList';
import store from './store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistStore} from 'redux-persist';
import { Provider } from 'react-redux';
import 'assets/main.scss';


const persistor = persistStore(store);

const  App = () =>  {
  return (
    <Provider store={store}>
     <PersistGate persistor={persistor}>
       <BrowserRouter>
        <Switch>
            <Route path="/" component={LoginForm} exact />
            <Route path="/home-page" component={UsersList}   />
        </Switch>
      </BrowserRouter>
     </PersistGate>
  </Provider>
  );
}

export default App;
