import firebase from 'firebase';
import {AppState} from 'react-native';
import _ from 'lodash';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyD90N7WhvxNChHH8ohc_m1fXPN-gGDU-GY",
    authDomain: "exercise-app-9eb0f.firebaseapp.com",
    databaseURL: "https://exercise-app-9eb0f.firebaseio.com",
    projectId: "exercise-app-9eb0f",
    storageBucket: "exercise-app-9eb0f.appspot.com",
    messagingSenderId: "853675280315"
};

const firebaseApp = firebase.initializeApp(config);

firebase.database.enableLogging( message => {
    console.log(`[FIREBASE]: ${message}`);
});

// Disconnect firebase when app is in background
AppState.addEventListener('change', appState => {
    if (appState == 'background') {
        firebaseApp.database().goOffline();
        console.warn('TODO: handle offline data management properly');
    }
    else if (appState == 'active') {
        firebaseApp.database().goOnline();
    }
});

export default firebaseApp;
