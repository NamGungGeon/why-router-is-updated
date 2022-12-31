import Head from "next/head";
import { useEffect } from "react";
import { AlertWhenRouterIsUpdated } from "../components/AlertWhenRouterIsUpdated";
import { LinkList } from "../components/LinkList";

function Home() {
  useEffect(() => {
    const checkBfcache = (e) => {
      console.log("This page is restored from bfcache?", e.persisted);
    };
    window.addEventListener("pageshow", checkBfcache);
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
Home.getInitialProps = async (ctx) => {
  return {};
};

export default Home;
