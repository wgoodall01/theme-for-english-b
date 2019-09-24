import * as React from "react";
import Link from "next/link";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="root">
      <style jsx>{`
        .root {
          max-width: 40rem;
          margin: var(--gutter);
          padding-top: calc(var(--gutter) / 2); /* for nav */
          padding-bottom: var(--gutter);
          background-color: white;
        }

        @media screen and (max-width: 40rem) {
          .root {
            margin: 0;
          }
        }

        nav {
          margin: 0 var(--gutter);
          margin-bottom: calc(var(--gutter) / 2);
          opacity: 0.5;
        }

        nav a {
          margin-right: 1rem;
          color: inherit;
        }
      `}</style>
      <nav>
        <Link href="/">
          <a>Poem</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <a
          target="_blank"
          href="https://github.com/wgoodall01/theme-for-english-b/tree/master"
        >
          Code
        </a>
        <a
          target="_blank"
          href="https://github.com/wgoodall01/theme-for-english-b/commits/master"
        >
          Revision History
        </a>
      </nav>
      {children}
    </div>
  );
}
