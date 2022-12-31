import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const LinkList = () => {
  const router = useRouter();
  return (
    <div>
      <h3>Inner links</h3>
      <ul>
        <li>
          <button onClick={() => router.replace("/?a=b")}>/?a=b</button>
        </li>
        <li>
          <button onClick={() => router.replace("/?a=b&c=d")}>/?a=b&c=d</button>
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
  );
};
