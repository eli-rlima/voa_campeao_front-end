import ViagensReducer from "./viagensReducer.js";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  viagens: ViagensReducer,
  form: formReducer
});
