import Layout from "@/layouts";
import React from "react";
import useHooks from "./hooks";
// ______________________________________________________
//
export interface Props {}
// ______________________________________________________
//
export const Index: React.FC<Props> = (props) => {
  const hooks = useHooks(props);

  return (
    <Layout>
      <>
        <button type="button" onClick={hooks.handleClickIncrement}>
          ふやす
        </button>
        <button type="button" onClick={hooks.handleClickDecrement}>
          へらす
        </button>
        <button type="button" onClick={hooks.handleClickNTimes}>
          {hooks.n}倍
        </button>
        <p>ねこ {hooks.count}匹いる</p>
      </>
    </Layout>
  );
};

export default Index;
