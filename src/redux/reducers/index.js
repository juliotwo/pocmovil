
import { combineReducers } from 'redux';
import { CLEAR } from '../actions';
import products from './products';

const reducers = combineReducers({
    products: products,
});
    
const rootReducer = (state, action) => {
    if (action.type === CLEAR) {
        state = undefined;
    }
    return reducers(state, action);
}

export default rootReducer;