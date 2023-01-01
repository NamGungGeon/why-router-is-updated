# Demo page

https://why-router-is-updated.vercel.app/

## Summary of code

```js
// page/index.js
function Home() {
  const router = useRouter();

  // alert if router is updated or init
  useEffect(() => {
    alert("router is updated(or init)");
    console.log("router is updated(or init)", router);
  }, [router]);

  // alert if page is restored from bfcache
  useEffect(() => {
    const checkBfcache = (e) => {
      console.log("This page is restored from bfcache?", e.persisted);
      if (e.persisted) {
        alert("This page is served from bfcache");
      }
    };
    window.addEventListener("pageshow", checkBfcache);
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
        <h1>Currennt path: {router.asPath}</h1>
        <div>
          <h3>Inner links</h3>
          <ul>
            <li>
              <button onClick={() => router.replace("/?a=b")}>/?a=b</button>
            </li>
            <li>
              <button onClick={() => router.replace("/?a=b&c=d")}>
                /?a=b&c=d
              </button>
            </li>
            <li>
              <button onClick={() => router.replace("/")}>/</button>
            </li>
          </ul>
          <h3>Outer links</h3>
          <ul>
            <li>
              <Link as="a" href="https://www.google.com" passHref={true}>
                <button>https://www.google.com</button>
              </Link>
            </li>
          </ul>
        </div>
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
```

## How to invoke bug

1. enter page. (/)
2. click `/?a=b` button.
3. click `/?a=b&c=d` button.
4. click `www.google.com(Outer link)` button.
5. click back button.
6. bfcache is used. (page is restored without reload page)
7. but router is updated, and `useEffect(()=> {...}, [router])` is triggered.
   - page is restored from bfcache, thus router must be not updated. but router is updated, and effect is executed.
   - This bug is only generated from <b>desktop/mobile safari, mobile chrome.</b> (not generated from <b>desktop chrome</b>)

#### desktop chrome

<img src="./docs/bug-desktop-chrome-bfcache-router-not-updated.gif">
      
- when page is restored from bfcache, router is not updated. (not showed router update message alert)

#### desktop safari

<img src="./docs/bug-desktop-safari-bfcache-router-updated.gif">
- when page is restored from bfcache, router is updated. ( showed router update message alert)

- same as mobile safari, mobile chrome.
- but diffrent from desktop chrome...

## What is problem?

Phase 7 is unexpected behavior.
(desktop/mobile safari and mobile chrome behavior is different from desktop chrome)

And also, in below situation, router is not updated on all browsers.

1. enter page. (/)
2. click `www.google.com(Outer link)` button.
3. click back button.
4. bfcache is used (page is restored without reload page)
5. <b>(important)</b> router is not updated on all browser.
   - so `useEffect(()=> {...}, [router])` is not triggered.

#### desktop chrome

<img src="./docs/desktop-chrome-bfcache-router-not-updated.gif">
      
- when page is restored from bfcache, router is not updated. (not showed router update message alert)

#### desktop safari

<img src="./docs/desktop-safari-bfcache-router-not-updated.gif">
- when page is restored from bfcache, router is not updated. (not showed router update message alert)

- In this case, same as mobile safari, mobile chrome.
