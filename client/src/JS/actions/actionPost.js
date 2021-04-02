import {
    GET_POST,
    POST_POSTULER,
  } from "../constants/actionsTypes";
  import axios from "axios";
  
  export const getPost = () => (dispatch) => {
    axios
      .get("/postuler")
      .then((res) => dispatch({ type: GET_POST, payload: res.data }))
      .catch((err) => console.log(err));
  };
  export const postuler = (postuler) => (dispatch) => {
    axios
      .post("/postuler", postuler)
      .then((res) => dispatch({ type: POST_POSTULER, payload: res.data }))
      .catch((err) => console.log(err));
  };