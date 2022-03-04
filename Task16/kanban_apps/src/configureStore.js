import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducers";
import { loadState, saveState } from "./localStorage";
import { v4 as uuidv4 } from "uuid";
import throttle from "lodash.throttle";
import { createLogger } from "redux-logger";

const configureStore = () => {
  let middlewares = [];

  const initialState = [
    { id: uuidv4(), name: "Backlog", cards: [] },
    { id: uuidv4(), name: "Todo", cards: [] },
    { id: uuidv4(), name: "Evaluation", cards: [] },
    { id: uuidv4(), name: "Done", cards: [] },
  ];

  if (process.env.NODE_ENV !== "production") {
    const logger = createLogger();
    middlewares.push(logger);
  }

  const store = createStore(
    reducer,
    loadState() || initialState,
    applyMiddleware(...middlewares)
  );

  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 1000)
  );

  return store;
};

export default configureStore;
