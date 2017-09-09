import storage from '~/offline/storage';
import firebaseApp from '~/firebase/index';

console.log(firebaseApp);

export default () => {
    syncExercises();
}

function syncExercises() {
    const exercises = firebaseApp.database().ref('exercises');
    console.log(exercises);

    exercises.on('value', snapshot => {
        console.log(snapshot.val());
        storage.save({
            key: 'exercises',
            data: snapshot.val()
        });
    }, error =>  {
        console.error(error);
    });
}

