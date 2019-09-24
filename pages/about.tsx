import * as React from "react";
import Container from "../components/Container";

export default function About() {
  return (
    <Container>
      <section>
        <style jsx>
          {`
            section {
              margin: 0 var(--gutter);
            }
          `}
        </style>
        <h1>About this project</h1>
        <p>
          This is a multi-modal remix of Langston Hughes's poem, "Theme for
          English B." It was created as Artifact 1 in Aaron Colton's English
          1102 course, <i>On Becoming a Writer</i>.
        </p>
        <p>
          After reading "Theme for English B" in class the first time, I didn't
          feel like I parsed the meaning of the poem thoroughly enough. I wanted
          to dig deeper. So, for Artifact 1, I decided to remix the poem in the
          electronic mode, writing annotations and researching relevant context
          throughout.
        </p>
        <p>
          On the technical side of things, the project is implemented from
          scratch in <a href="https://reactjs.org">React</a>, as a{" "}
          <a href="https://nextjs.org">Next.js</a> SPA, deployed to{" "}
          <a href="https://pages.github.com">GitHub Pages</a>. To display the
          poem, I designed a YAML markup format to attach formatted annotations
          to each line. Using that format, the application will render{" "}
          <a href="https://github.com/wgoodall01/theme-for-english-b/blob/master/text.yaml">
            this file
          </a>{" "}
          out as an interactive page, where you can expand and explore the
          attached content line-by-line.
        </p>
        <p>
          Throughout the course of the project, I kept detailed records of my
          process. Every single line of code/text that I wrote was committed to
          a <a href="https://git-scm.com">Git</a>{" "}
          <a href="https://github.com/wgoodall01/theme-for-english-b">
            repository
          </a>
          . When changes are pushed to GitHub, an automated process will build
          and re-deploy the site. A convenient side-effect of this process is
          that the contents of the site can be reproducibly rebuilt using any of
          the past revisions.
        </p>
      </section>
    </Container>
  );
}
