import { createStore, applyMiddleware, compose } from "redux"; // Import compose
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import dataReducer from "./Reducer";
import { ProductReducer } from "./Reducer";

const rootReducer = combineReducers({
  data: dataReducer,
  ProductData: ProductReducer,
  // other reducers...
});

// Use composeEnhancers from Redux DevTools Extension if available, otherwise fallback to the default compose function
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
