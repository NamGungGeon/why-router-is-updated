import Link from "next/link";
import React from "react";

export const LinkList = () => {
  return (
    <div>
      <h3>Inner links</h3>
      <ul>
        <li>
          <Link href="/?a=b">
            <button>/?a=b</button>
          </Link>
        </li>
        <li>
          <Link href="?c=d">
            <button>/?c=d</button>
          </Link>
        </li>
        <li>
          <Link href="/">
            <button>/</button>
          </Link>
        </li>
      </ul>
      <h3>Outer links</h3>
      <ul>
        <li>
          <Link href="https://www.google.com">
            <button>www.google.com (Outer link)</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
