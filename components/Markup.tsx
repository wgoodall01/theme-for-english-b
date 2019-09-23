import * as React from "react";
import { Chunk, Stanza, Line } from "../lib/markup";

export default function Markup({ children }: { children: Chunk }) {
  switch (children.kind) {
    case "line":
      return <MarkupLine>{children}</MarkupLine>;
    case "stanza":
      return <MarkupStanza>{children}</MarkupStanza>;
  }

  const _exhaustive: never = children;
}

export function MarkupLine({ children: line }: { children: Line }) {
  return (
    <div>
      <style jsx>{`
        p {
          margin: 0;
        }

        ul {
          margin: 0;
          opacity: 0.5;
        }
      `}</style>
      <p>{line.text}</p>
      <ul>
        {line.annotations.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export function MarkupStanza({ children: stanza }: { children: Stanza }) {
  return (
    <section>
      <style jsx>{`
        section {
          margin-bottom: 2rem;
        }
      `}</style>

      {stanza.children.map((e, i) => (
        <Markup key={i}>{e}</Markup>
      ))}
    </section>
  );
}
