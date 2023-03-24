import Link from "next/link";
import React from "react";

export default function about() {
  return (
    <div>
      about <br />
      <Link className="link" href="/about">
        About 2
      </Link>
      <br />
      <Link className="link" href={"/"}>
        Home
      </Link>
    </div>
  );
}
