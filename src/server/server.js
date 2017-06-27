var ReduxThunk = require('redux-thunk')
var moment = require('moment');
import { applyMiddleware, createStore } from 'redux';

var serviceAccount = require("../../react-chat-ui-firebase-adminsdk-oskw8-fbb89ef4ca.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-chat-ui.firebaseio.com"
});

moment().format();

/*admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "<PROJECT_ID>",
    clientEmail: "foo@<PROJECT_ID>.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\n<KEY>\n-----END PRIVATE KEY-----\n"
  }),
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
});*/
