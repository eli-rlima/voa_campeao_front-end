import { applyMiddleware, createStore } from "redux";

import Reducers from "../reducers";
import ReduxThunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

const configureStore = initialState => {
  const store = createStoreWithMiddleware(Reducers, initialState);

  return store;
};

const Store = configureStore();
export default Store;
