import firebase from 'firebase';
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

export default firebaseApp;

/*

- userExercises
    - id
    - date
    - sets
        - id

- difficultyLevel
    - id
    - name

- sets
    - id
    - reps
    - weight

- exercises
    - id
    - name
    - bodyPartId
    - difficultyId

- bodyParts
    - id
    - name

- users
    - firstName
    - lastName

*/
