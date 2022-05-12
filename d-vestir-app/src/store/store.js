import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { LoginReducers } from '../reducers/LoginReducers';
import { registerReducers } from '../reducers/registerReducers';
import { usersReducer } from '../reducers/usersReducer';
import ShoppingReducer from '../reducers/ShoppingReducer';
import { ProductReducer } from '../reducers/ProductReducer';
import CanjearReducer from '../reducers/CanjearReducer';

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: LoginReducers,
    register: registerReducers,
    users: usersReducer,
    shop: ShoppingReducer,
    products: ProductReducer,
    shop_canjear: CanjearReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)