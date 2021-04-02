import { combineReducers } from "redux";
import userReducer from "./userReducer";
import reducerPost from "./reducerPost";
import offreReducer from "./offreReducer";
import reducerJob from "./reducerJob"

const rootReducer = combineReducers({
  userReducer,
  reducerPost,
  offreReducer,
  reducerJob,

});

export default rootReducer;
