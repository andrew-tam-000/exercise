import { createStore } from 'redux';
import RootReducer from '~/redux/reducers/rootReducer';
import sampleState from '~/redux/sampleState';

const store = createStore(RootReducer, sampleState);

export default store;
