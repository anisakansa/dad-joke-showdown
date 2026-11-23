// Dad Joke Showdown — make.fun bounty
// u-mfnakmal-dad-joke-showdown-1d2ce3e5
//
// One dad joke, written to be told out loud at the table. Deterministic:
// the same joke, byte for byte, on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The joke, v2 (revised). The v1 draft meandered through two sentences
// before the turn; this cut keeps the setup to one clause and lets the
// punchline land as the last beat, the way a father delivers it aloud:
// the wife's complaint, then the foot coming down — literally, and as
// the idiom for standing his ground. 83 characters.
const JOKE =
  "My wife told me to stop standing on one leg like a flamingo, so I put my foot down.";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

// A dad joke is only worth submitting if it is one real line of text.
if (JOKE.length === 0 || JOKE.length > MAX_CHARS) {
  throw new Error(`joke must be 1-${MAX_CHARS} chars, got ${JOKE.length}`);
}
if (JOKE.includes("\n") || JOKE.trim().length === 0) {
  throw new Error("joke must be a single non-blank line");
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, JOKE, "utf8");

// No trailing newline: the gate counts every character, and the file
// must hold exactly the joke — nothing before it, nothing after it.
console.log(`wrote ${JOKE.length} chars to ${OUT_PATH}`);
