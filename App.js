import React, { Component } from 'react';
import storageManager from '~/offline/storageManager';
import { Provider } from 'react-redux';
import ExerciseApp from '~/components/ExerciseApp';

import storage from '~/offline/storage';
import _ from 'lodash';
import store from '~/redux/store/store';

storageManager();

(function testStorage() {
    const currentEpoch = (new Date()).getTime();
    storage.save({
        key: 'date',
        id: currentEpoch,
        data: `Persisted data ${Math.random()}`
    })
        .then(
            date => storage.getAllDataForKey('date')
        )
        .then(
            date => console.log(date)
        )
    ;

})();


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ExerciseApp/>
            </Provider>
        );
    }
}
