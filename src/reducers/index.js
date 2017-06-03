import {createStore, combineReducers} from 'redux';
import iopenReducer from './iopenReducer';

const rootReducer = combineReducers({
    iopenReducer
});
const store = createStore(rootReducer);

export default store
