import constants from './constants.js';
import createStore from 'redux';
import actions from './actions.js';


const initialState = {
  messages: [],
  username: ''
}

const messageReducer = (state = initialState, action) => {
  switch(action.type){
    case constatnts.SET_USERNAME:
      return Object.assign({}, state, {
        username: action.username
      });
    case constatnts.LOAD_ALL_MESSAGES:
      return Object.assign({}, state, {
        messages: action.messagesData
      });
    case constatnts.SET_USERNAME:
      return Object.assign({}, state, {
        username: action.username
      });
    default:
    return(state);
  }
}

const store = createStore(messagesReducer);

module.exports = {
  store: store,
  actions: actions
}
