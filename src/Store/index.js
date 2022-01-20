import { applyMiddleware, compose, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../Reducers";

const configureStore = () => {
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? compose(
                applyMiddleware(promiseMiddleware),
                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
            )
            : applyMiddleware(promiseMiddleware)
        // composeWithDevTools()
    );
    return store;
};

export default configureStore;