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

  const isLogin = () => {
    dispatch(Login.thunks.isLogin());
  }

  const signOut = () => {
    dispatch(Login.thunks.signOut());
  }

  const authChalenge = (username: string ,code: string) => {
    dispatch(Login.thunks.customAuthChallenge(username, code));
  }

  return {
    authChalenge,
    message,
    isLogin,
    signIn,
    signUp,
    signConfirm,
    signOut
  };
};

export default useHooks;
