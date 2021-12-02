import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { AxiospublicRequest } from "../requestMethods";



export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await AxiospublicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};