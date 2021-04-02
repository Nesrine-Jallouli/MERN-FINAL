import {
    GET_POST,
    POST_POSTULER,

  } from "../constants/actionsTypes";
  
  const intialState = {
    Postuler: [],
  };
  
  const reducerPost = (state = intialState, action) => {
    switch (action.type) {
      case GET_POST:
        return { ...state, postuler: action.payload };
  
      case POST_POSTULER:
        return { ...state, postuler: action.payload };

  
      default:
        return state;
    }
  };
  
  export default reducerPost;
  