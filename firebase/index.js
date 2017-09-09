import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyD90N7WhvxNChHH8ohc_m1fXPN-gGDU-GY",
    authDomain: "exercise-app-9eb0f.firebaseapp.com",
    databaseURL: "https://exercise-app-9eb0f.firebaseio.com",
    projectId: "exercise-app-9eb0f",
    storageBucket: "exercise-app-9eb0f.appspot.com",
    messagingSenderId: "853675280315"
};

export default firebase.initializeApp(config);

// Scehma
/*
{
    users: {
        [id]: {
            id: ---
        }
    },
    sessions: {
        [id]: {
            id: ---
        }
    },
    exercises: {
        [id]: {
            id: --
        }
    }
}
*/
