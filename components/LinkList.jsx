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
          <button onClick={() => router.push("/?a=b")}>/?a=b</button>
        </li>
        <li>
          {" "}
          <button onClick={() => router.push("/?c=d")}>/?c=d</button>
        </li>
        <li>
          <button onClick={() => router.push("/")}>/</button>
        </li>
      </ul>
      <h3>Outer links</h3>
      <ul>
        <li>
          <button onClick={() => router.push("https://www.google.com")}>
            https://www.google.com
          </button>
        </li>
      </ul>
    </div>
  );
};
