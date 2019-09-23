export type Line = {
  kind: "line";
  text: string;
  annotations: string[];
};

export type Stanza = {
  kind: "stanza";
  children: Chunk[];
  blockquote?: boolean;
};

export type Chunk = Line | Stanza;

class ValidationFailure extends Error {
  offender: any;
  name = "ValidationFailure";

  constructor(offender: any, message: string) {
    super(message);
    this.offender = offender;
    console.error(this);
  }
}

function bail(offender: any, message: string): never {
  throw new ValidationFailure(offender, message);
}

export function parse(chunk: any): Chunk {
  // Array of several chunks. Implicit stanza.
  if (Array.isArray(chunk)) {
    return {
      kind: "stanza",
      children: chunk.map(parse)
    } as Chunk;
  }

  // Single line, without annotations.
  if (typeof chunk == "string") {
    const text: string = chunk;
    return {
      kind: "line",
      text,
      annotations: []
    } as Line;
  }

  // Single line, with annotations.
  // {"line text":["annotation1", "annotation2", ...]}
  if (typeof chunk === "object" && Object.keys(chunk).length === 1) {
    const [pair] = Object.entries(chunk);

    const [text, annotations]: [string, unknown] = pair;
    if (!Array.isArray(annotations)) {
      return bail(annotations, "line annotations are not an array");
    }
    if (!annotations.every(e => typeof e === "string")) {
      return bail(annotations, "not every annotation is a string");
    }

    return {
      kind: "line",
      text,
      annotations
    } as Line;
  }

  // Explicit Stanza
  if (typeof chunk === "object" && chunk["kind"] === "stanza") {
    if (!Array.isArray(chunk.children)) {
      return bail(chunk, "chunk does not contain array of children");
    }
    return {
      kind: "stanza",
      children: chunk.children.map(parse),
      blockquote: chunk.blockquote
    } as Chunk;
  }

  return bail(chunk, "couldn't determine chunk type");
}
