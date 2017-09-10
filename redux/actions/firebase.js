export function onChangeTest(value) {
    return{
        type: 'FIREBASE_CHANGE_TEST',
        payload: value
    };
}
