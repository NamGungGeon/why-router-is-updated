# Demo page

https://why-router-is-updated.vercel.app/

## How to invoke bug

1. enter page. (/)
2. click `/?a=b` button.
3. click `/?c=d` button.
4. click `www.google.com(Outer link)` button.
5. click back button.
6. bfcache is used. (page is restored without reload page)
7. but router is updated, and `useEffect(()=> {...}, [router])` is triggered.
   - page is restored from bfcache, thus router must be not updated. but updated, and effect is executed.
   - <b>This bug is only generated from desktop/mobile safari, mobile chrome.</b> (not generated from desktop chrome)

## What is problem?

Phase 7 is unexpected behavior.

In below situation, router is not updated.

1. enter page. (/, /?a=b, /?c=d; anything)
2. click `www.google.com(Outer link)` button.
3. click back button.
4. bfcache is used (page is restored without reload page)
5. <b>(important)</b> router is not updated .
   - so `useEffect(()=> {...}, [router])` is not triggered.

why not-updated here?!
