import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { createTransform, persistStore, autoRehydrate } from 'redux-persist';
import RootReducer from '~/redux/reducers/rootReducer';
import { AsyncStorage } from 'react-native';
import sampleState from '~/redux/sampleState';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'
import firebaseApp from '~/firebase/index';
import firebaseMiddleware from '~/redux/middleware/firebase';

const reduxFirebaseConfig = {
    userProfile: 'users',
    enableLogging: true,
    enableRedirectHandling: false
};

const rootReducer = combineReducers({
    firebase: firebaseStateReducer
});

const store = createStore(
    rootReducer,
    {
        firebase: sampleState
    },
    compose(
        reactReduxFirebase(firebaseApp, reduxFirebaseConfig),
        applyMiddleware(firebaseMiddleware)
        //autoRehydrate({log: true})
    )
);

export default store;

/*

const myTransform = createTransform(
    (inboundState, key) => {
        console.log(inboundState, key);
    },
    (outboundState, key) => {
        console.log(outboundState, key);
    }
);

const persistor = persistStore(
    store,
    {
        storage: AsyncStorage,
        //transforms: [myTransform]
    },
    (err, state) => console.log(err, state)
);
console.log(store.getState());
store.subscribe( () => {
    console.log(store.getState());
})


*/
