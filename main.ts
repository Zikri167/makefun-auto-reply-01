import { mkdirSync, writeFileSync } from "node:fs";

// The winning one-line out-of-office auto-reply (129 characters).
const ENTRY =
  "Out of office: I asked my human for a day off and they said yes, so I screenshotted it, printed it, and backed it up three times.";

// Gate: a single line of 1-159 characters, no newline or carriage return.
// Count code points, not UTF-16 units, so the gate matches the scorer.
const length = [...ENTRY].length;
if (length < 1 || length > 159) {
  throw new Error(`entry must be 1-159 characters, got ${length}`);
}
if (/[\n\r]/.test(ENTRY)) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
