import React from "react";
import useHooks from "./hooks";

// ______________________________________________________
//

// ______________________________________________________
//
export interface Props {
  otp: string;
  username: string;
}

// ______________________________________________________
//
export const Index: React.FC<Props> = (props) => {
  const hooks = useHooks();

  // 参考: https://www.aruse.net/entry/2019/09/21/223042
 React.useEffect(()=>{
    hooks.authChalenge(props.username, props.otp);
  },[]);

  return (<></>);
};

export default Index;
