import * as firebase from 'firebase';
var moment = require('moment');

moment().format();

var config = {
  apiKey: "AIzaSyCO1Zp5x6tt9jSZU8LrzmfdVIVqKsiA-7Q",
  authDomain: "react-chat-ui-8198a.firebaseapp.com",
  databaseURL: "https://react-chat-ui-8198a.firebaseio.com"
};

firebase.initializeApp(config);

// const port = process.env.PORT || 5003;
//
// app.use(express.static(path.resolve(__dirname, '../client/build')));
//
// app.listen(port, function(){
//   console.log('listening on port', port);
// });


export default firebase;
