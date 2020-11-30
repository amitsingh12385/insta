import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { addMessages } from "./actions/messages.action";
import AppRoutes from "./routes/AppRoutes";
import configureStore from "./stores/configureStore";

import "./styles/main.scss";
import { messages } from "./utils/fixtures/messages";

const store = configureStore();

store.dispatch(addMessages(messages));

const connectedComponents = (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

ReactDOM.render(connectedComponents, document.getElementById("app"));
