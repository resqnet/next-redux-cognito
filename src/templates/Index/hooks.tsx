import { Props } from "./";
import { useDispatch, useSelector } from "react-redux";
import * as Login from "@/redux/Login";
// ______________________________________________________
//
export const useHooks = (props: Props) => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.Login.message);

  const signIn = (id: string, pass: string) => {
    dispatch(Login.thunks.signIn(id,pass));
  };

  const signUp = (id: string, pass: string) => {
    dispatch(Login.thunks.signUp(id,pass));
  };

  const signConfirm = (username: string ,verification: string) => {
    dispatch(Login.thunks.confirm(username, verification));
  };

  return {
    message,
    signIn,
    signUp,
    signConfirm
  };
};

export default useHooks;
