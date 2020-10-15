import {combineReducers} from "redux";
import tableReducer from "../Table/Slice";

const RootReducer = combineReducers({
  tableReducer
});

export default RootReducer;
export type RootState = ReturnType<typeof RootReducer>;
