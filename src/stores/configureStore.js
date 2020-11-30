import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import messagesReducer from "../reducers/messages.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      messages: messagesReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
