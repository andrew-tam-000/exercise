import firebaseApp from '~/firebase/index';

export default store => next => action => {
    const { type, payload } = action;

    // If firebase action, update firebase
    if ( type.match(/^FIREBASE_/) ) {

        if ( type == 'FIREBASE_CHANGE_TEST') {
            firebaseApp.database().ref().update({
                'test': payload||''
            });
        }

        return;
    }
    // Otherwise, propagate the event
    else {
        const result = next(action);
        return result;
    }

}
