import {combineReducers} from "redux";
import alertReducer from "./alertReducer";
import userReducer from "./userReducer";


const myReducers = combineReducers({
    user: userReducer,
    alert: alertReducer,
});

export default myReducers;