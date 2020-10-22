import Layout from "@/layouts";
import React from "react";
import useHooks from "./hooks";

// ______________________________________________________
//

// ______________________________________________________
//
export interface Props {
  otp?: string
}

// ______________________________________________________
//
export const Index: React.FC<Props> = (props) => {
  const hooks = useHooks(props);
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("")
  const [confirm, setComfirm] = React.useState("");

  // 参考: https://www.aruse.net/entry/2019/09/21/223042
  const handleClickSignIn = (e: React.MouseEvent) => {
    e.preventDefault();
    hooks.signIn(username, password);
  };

  const handleClickSignUp = (e: React.MouseEvent) => {
    e.preventDefault();
    hooks.signUp(username, password);
  };

  const handleClickConfirm = (e: React.MouseEvent) => {
    e.preventDefault();
    hooks.signConfirm(username, confirm);
  };

  const handleClickIsLogin = (e:React.MouseEvent) => {
    e.preventDefault();
    hooks.isLogin();
  };

  const handleClickLogout = (e:React.MouseEvent) => {
    e.preventDefault();
    hooks.signOut();
  };

  const handleClickOTP = (e: React.MouseEvent) => {
    e.preventDefault();
    hooks.authChalenge(username, confirm);
  }

  React.useEffect(() => {
    hooks.isLogin();
  }, []);

  return (
    <Layout>
      <>
        <div>
          <h3>{hooks.message}</h3>
          <form id="signInForm">
            UserName:
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
            <br />
            Password:
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            VelificationCode:
            <input type="text" onChange={(e) => setComfirm(e.target.value)} />
            <br />
            <button onClick={handleClickSignIn}>Sign In</button>
            <button onClick={handleClickSignUp}>Sign Up</button>
            <button onClick={handleClickLogout}>Sign Out</button>
            <br/>
            <button onClick={handleClickConfirm}>VelificationCode</button>
            <br/>
            <button onClick={handleClickIsLogin}>IsLogin</button>
            <br/>
            <button onClick={handleClickOTP}>OTP</button>
          </form>
        </div>
      </>
    </Layout>
  );
};

export default Index;
