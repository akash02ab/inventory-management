import { combineReducers } from "redux";
import { inventoryReducer } from "./inventoryReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    userState: userReducer,
    inventoryState: inventoryReducer
});

export default rootReducer;