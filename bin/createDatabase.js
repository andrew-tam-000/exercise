import 'babel-register';
import firebaseApp from '~/firebase/index';

export default () => {
    createDifficultyLevels();
    createExercises();
}

function genericCreate(key, value) {
    return firebaseApp
        .database()
        .ref(key)
        .once('value')
        .then(
            snapshot => (
                !snapshot.val() ? (
                    firebaseApp
                        .database()
                        .ref()
                        .update({
                            [key]: value
                        })
                ) : (
                    new Promise.resolve()
                )
            )
        )
}

function createDifficultyLevels() {
    return genericCreate('difficultyLevel', {
        1: {
            id: 1,
            name: 'easy'
        }
    });
}

function createExercises() {
    return genericCreate('exercises', {
        1: {
            id: 1,
            name: 'Situps'
        }
    });
}
