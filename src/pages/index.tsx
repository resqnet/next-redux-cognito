import Component from "@/templates/Index";
import * as React from "react";
import { useRouter } from "next/router";

// ______________________________________________________
//
const Index = () => {
  const router = useRouter();
  const { o } = router.query;
  console.log(o);
  return <Component otp={o as string}/>;
};

export default Index;
