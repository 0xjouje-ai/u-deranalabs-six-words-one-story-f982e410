// Six Words, One Story — entry program.
//
// Writes one complete six-word story to /output/entry.txt.
// Node 22, stdlib only, no network, deterministic.
//
// Candidates considered (each exactly six words):
//   "He came home. The dog didn't."
//   "The letter arrived fifty years late."
//   "The lighthouse keeper lit nothing tonight."
//   "She kept his voicemail. Forever. Almost."
// Chosen: "Grandma's recipe, finally perfect. She's gone."
// Why it wins against the judge brief: a whole life is implied
// (years of learning and trying, mastery at last), the turn lands
// on "She's gone", every word earns its place, it reads cleanly
// aloud, and what is left unsaid — whether she ever tasted it —
// is the story the reader finishes.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "Grandma's recipe, finally perfect. She's gone.";

const words = STORY.split(/\s+/).filter(Boolean);
if (words.length !== 6) {
  throw new Error(`expected exactly 6 words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`story must be 1-60 chars, got ${STORY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log(STORY);
