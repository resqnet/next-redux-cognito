import Component from "@/templates/auth";
import * as React from "react";
import { useRouter } from 'next/router';

// ______________________________________________________
//
const Index = () => {
  const router = useRouter();
  const o = router.query.o;
  const un = router.query.un;

  if(typeof(o) !== "string" ||
    typeof(un) !== "string") {
      return <></>;
  }

  return <Component otp={o} username={un}/>;
};

export default Index;
