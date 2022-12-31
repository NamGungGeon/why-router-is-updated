import { useRouter } from "next/router";
import React, { useEffect } from "react";

export const AlertWhenRouterIsUpdated = () => {
  const router = useRouter();
  !globalThis.window && console.log("router?", router);
  useEffect(() => {
    alert("router is updated(or init)");
    console.log("router is updated(or init)", router);
  }, [router]);

  return <h1>Currennt path: {router.asPath}</h1>;
};
