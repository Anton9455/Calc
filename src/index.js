import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import App from "./App";
import { switchMiddleware } from "./redux/middlerware";
import { rootReducer } from "./redux/reducers/rootReducer";
import reportWebVitals from "./reportWebVitals";
import createSagaMiddleware from 'redux-saga';
import {resultSagaWatcher} from './redux/sagas/resultSaga'

const resultSaga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(switchMiddleware, resultSaga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

resultSaga.run(resultSagaWatcher);

const app = (<Provider store={store}>
 <React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>)

ReactDOM.render(
  app,
  document.getElementById("root")
);
reportWebVitals();
