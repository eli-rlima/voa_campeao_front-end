import ViagensReducer from "./viagensReducer.js";
import { combineReducers } from "redux";

export default combineReducers({
  viagens: ViagensReducer
});
