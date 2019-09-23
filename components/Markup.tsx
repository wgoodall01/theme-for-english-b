import * as React from "react";
import { useState } from "react";
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
  const expandable = line.annotations.length !== 0;
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    if (expandable) {
      setExpanded(!expanded);
    }
  };

  return (
    <div className="root">
      <style jsx>{`
        p {
          margin: 0;
        }

        ul {
          margin-left: var(--gutter);
          appearance: none;
          opacity: 0.5;
        }

        .line-container {
          display: flex;
          cursor: ${expandable ? "pointer" : "inherit"};
          align-items: center;
        }

        .note-count {
          font-family: sans-serif;
          font-size: 0.8rem;
          color: var(--color-gray);
          background-color: var(--color-shade);
          border-radius: 1rem;
          margin-left: calc(var(--gutter) - 3rem);
          margin-right: 1rem;
          width: 2rem;
          height: 1rem;
          line-height: 1rem;
          text-align: center;
        }

        .note-count-placeholder {
          width: var(--gutter);
        }

        .root {
          transition: 0.2s;

          box-shadow: ${expanded ? "0 0 2rem rgba(0,0,0,0.2)" : "none"};
          padding: ${expanded ? "0.5rem" : "0"} 0;
          margin: ${expanded ? "0.5rem" : "0"} 0;
        }
      `}</style>

      {/* The line itself, with the annotation count to its left */}
      <div className="line-container" onClick={() => toggleExpanded()}>
        {line.annotations.length !== 0 ? (
          <div className="note-count">{line.annotations.length}</div>
        ) : (
          <div className="note-count-placeholder" />
        )}
        <p>{line.text}</p>
      </div>

      {/* All the attached annotations */}
      {expanded && (
        <ul>
          {line.annotations.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function MarkupStanza({ children: stanza }: { children: Stanza }) {
  return (
    <section>
      <style jsx>{`
        section {
          margin-bottom: 2rem;
          ${stanza.blockquote && `margin-left: var(--gutter)`}
        }
      `}</style>

      {stanza.children.map((e, i) => (
        <Markup key={i}>{e}</Markup>
      ))}
    </section>
  );
}
