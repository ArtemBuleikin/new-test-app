import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import stepper from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReduser = combineReducers({
	stepper
})

export const store  = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))