import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../redux/reducers/rootReducer';

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

export default store;