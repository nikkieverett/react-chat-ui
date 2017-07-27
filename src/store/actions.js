import constants from './constants.js';

const SET_USERNAME = { type: constants.SET_USERNAME };
const LOAD_ALL_MESSAGES = { type: constants.LOAD_ALL_MESSAGES };
const ADD_NEW_MESSAGE = { type: constants.ADD_NEW_MESSAGE };
const CHANGE_MESSAGE_INPUT = { type: constants.CHANGE_MESSAGE_INPUT };
const CLEAR_MESSAGE_INPUT = { type: constants.CLEAR_MESSAGE_INPUT };

const actions = {
  SET_USERNAME: SET_USERNAME,
  LOAD_ALL_MESSAGES: LOAD_ALL_MESSAGES,
  ADD_NEW_MESSAGE: ADD_NEW_MESSAGE,
  CHANGE_MESSAGE_INPUT: CHANGE_MESSAGE_INPUT,
  CLEAR_MESSAGE_INPUT: CLEAR_MESSAGE_INPUT
}

module.exports = actions;
