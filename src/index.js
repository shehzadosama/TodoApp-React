import React from 'react';
import ReactDOM from 'react-dom';
import './TodoList.css';
import TodoList from './TodoList';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';


// var config = {
//     apiKey: "apiKey",
//     authDomain: "https://firstjsassignment.firebaseapp.com/",
//     databaseURL: "https://firstjsassignment.firebaseio.com/",
//     storageBucket: "bucket.appspot.com"
// };
// firebase.initializeApp(config);

// // Get a reference to the database service
// var database = firebase.database();

// var dbRef = database.ref().child('id');
// dbRef.on('id',snapshot => {

// })

ReactDOM.render(<TodoList />, document.getElementById('root'));

registerServiceWorker();
