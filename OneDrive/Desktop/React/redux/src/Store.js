import rootReducer from './reducer/index'
import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(rootReducer)

export default store;