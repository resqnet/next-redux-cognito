import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import * as Login from "@/redux/Login";

// ______________________________________________________
//
export const useHooks = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const authChalenge = (username:string, code:string) => {
    dispatch(Login.thunks.customAuthChallenge(username, code)).then((user)=>{
      dispatch(Login.actions.signIn(user));
      router.push("/");
    });
  }

  return {
    authChalenge,
  };
};

export default useHooks;
