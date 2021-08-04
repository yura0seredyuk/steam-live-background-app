import { createStore, applyMiddleware, combineReducers } from 'redux';
import reposReducer from '@/reducers/reposReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
  repos: reposReducer,
});

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));
