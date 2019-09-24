import React from "react";
import { parse } from "../lib/markup";
import Markup from "../components/Markup";
import Container from "../components/Container";

// @ts-ignore
import rawPoemData from "../text.yaml";
const poem = parse(rawPoemData);

export default function Poem() {
  return (
    <Container>
      <style jsx>{`
        section {
          margin-left: var(--gutter);
        }
      `}</style>
      <section>
        <h1>Theme for English B</h1>
        <p>
          <i>by Langston Hughes, annotated by William Goodall</i>
        </p>
      </section>
      <Markup>{poem}</Markup>
    </Container>
  );
}
