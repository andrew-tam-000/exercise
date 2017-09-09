import React, { Component } from 'react';
import storageManager from '~/offline/storageManager';

import ExerciseApp from '~/components/ExerciseApp';

import storage from '~/offline/storage';
import _ from 'lodash';

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
            <ExerciseApp/>
        );
    }
}
