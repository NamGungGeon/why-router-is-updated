import Head from "next/head";
import { useEffect } from "react";
import { AlertWhenRouterIsUpdated } from "../components/AlertWhenRouterIsUpdated";
import { LinkList } from "../components/LinkList";

function Home() {
  useEffect(() => {
    const checkBfcache = (e) => {
      console.log("This page is restored from bfcache?", e.persisted);
      if (e.persisted) {
        alert("This page is served from bfcache");
      }
    };
    window.addEventListener("pageshow", checkBfcache);
    window.addEventListener("popstate", (e) => {
      console.log("on popstate", e);
    });
    return () => {
      window.removeEventListener("pageshow", checkBfcache);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
        <AlertWhenRouterIsUpdated />
        <LinkList />
      </div>
    </>
  );
}

// prevent '/' be static page (running as dynamic page)
Home.getInitialProps = async ({ req, res }) => {
  res?.setHeader("Cache-Control", "private, no-cache, must-revalidate");
  return {};
};

export default Home;
