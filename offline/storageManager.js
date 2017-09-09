import storage from '~/offline/storage';
import firebaseApp from '~/firebase/index';

export default () => {
    syncExercises();
}

function syncExercises() {
    const exercises = firebaseApp.database().ref('exercises');

    exercises.on('value', snapshot => {
        storage.save({
            key: 'exercises',
            data: snapshot.val()
        });
    }, error =>  {
        console.error(error);
    });
}
