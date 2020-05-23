import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';
import {persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'



const middleware = [thunk];
const initialState = {};


 

const persistConfig = {
    key: 'root',
    storage: storageSession,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;