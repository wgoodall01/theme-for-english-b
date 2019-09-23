import React from "react";
import { parse } from "../lib/markup";
import Markup from "../components/Markup";

// @ts-ignore
import rawPoemData from "../text.yaml";
const poem = parse(rawPoemData);

export default function Poem() {
  return (
    <div className="outer">
      <style jsx>{`
        .outer {
          max-width: 40rem;
          margin: 3rem;
          padding: 3rem;
          background-color: white;
        }

        pre {
          font-family: "Alegreya", "Charter", sans-serif;
          line-height: 1.5rem;
        }
      `}</style>
      <h1>Theme for English B</h1>
      <p>
        <i>by Langston Hughes</i>
      </p>
      <Markup>{poem}</Markup>
    </div>
  );
}
