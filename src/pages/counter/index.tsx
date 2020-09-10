import Component from "@/templates/counter";
import * as React from "react";
import { useDispatch } from "react-redux";
import * as Counter from "@/redux/Counter";

// ______________________________________________________
//
const Index = () => {
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(Counter.thunks.ntimes(4));
  }
  );
  return <Component />;
};

export default Index;
