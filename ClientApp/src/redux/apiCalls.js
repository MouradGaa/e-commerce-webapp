import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { AxiospublicRequest } from "../requestMethods";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess
} from "./ProductRedux";


export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await AxiospublicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await AxiospublicRequest.post("/products", product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};