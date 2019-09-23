import React from "react";
import { parse } from "../lib/markup";
import Markup from "../components/Markup";

// @ts-ignore
import rawPoemData from "../text.yaml";
const poem = parse(rawPoemData);

export default function Poem() {
  return (
    <div className="root">
      <style jsx>{`
        .root {
          max-width: 40rem;
          margin: var(--gutter);
          padding: var(--gutter) 0;
          background-color: white;
        }

        @media screen and (max-width: 40rem) {
          .root {
            margin: 0;
          }
        }

        section {
          margin-left: var(--gutter);
        }
      `}</style>
      <section>
        <h1>Theme for English B</h1>
        <p>
          <i>by Langston Hughes</i>
        </p>
      </section>
      <Markup>{poem}</Markup>
    </div>
  );
}
