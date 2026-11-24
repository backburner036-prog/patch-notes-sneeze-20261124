// Real-Life Patch Notes — make.fun entry
// Line (105 bytes, 103 chars): version number + terse engineering register,
// a real body bug (photic sneeze reflex) stated as if it shipped.
// Criteria order: patch note on a real-life bug, genuinely funny,
// reads like a release note, specific bug, tight.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "v2.4.1 — Fixed: sneezing in sunlight. Root cause: the nose was subscribed to the wrong weather service.";

// Gate: entry must be 1–160 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 160 || !LINE.trim()) {
  throw new Error(`line length ${LINE.length} fails the 1–160 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
