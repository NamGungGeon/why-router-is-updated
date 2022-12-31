import { useRouter } from "next/router";
import React, { useEffect } from "react";

export const AlertWhenRouterIsUpdated = () => {
  const router = useRouter();

  useEffect(() => {
    console.log("router is updated(or init)", router);
  }, [router]);
  useEffect(() => {
    console.log("router.query is updated(or init)", router.query);
  }, [router.query]);

  useEffect(() => {
    window.addEventListener("popstate", (e) => {
      console.log("popstate!", e);
    });
  }, []);

  return <h1>Currennt path: {router.asPath}</h1>;
};
