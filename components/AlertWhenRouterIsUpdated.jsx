import { useRouter } from "next/router";
import React, { useEffect } from "react";

export const AlertWhenRouterIsUpdated = () => {
  const router = useRouter();

  useEffect(() => {
    alert("router is updated(or init)");
    console.log("router is updated(or init)", router);
  }, [router]);

  useEffect(() => {
    window.addEventListener("popstate", (e) => {
      console.log("popstate!", e);
    });
  }, []);

  return <h1>Currennt path: {router.asPath}</h1>;
};
