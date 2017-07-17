import * as firebase from 'firebase';
var moment = require('moment');

var config = {
  apiKey: "AIzaSyCO1Zp5x6tt9jSZU8LrzmfdVIVqKsiA-7Q",
  authDomain: "react-chat-ui-8198a.firebaseapp.com",
  databaseURL: "https://react-chat-ui-8198a.firebaseio.com",
  projectId: "react-chat-ui",
  storageBucket: "react-chat-ui.appspot.com",
  messagingSenderId: "530100005184"
};

firebase.initializeApp(config);

export default firebase;
