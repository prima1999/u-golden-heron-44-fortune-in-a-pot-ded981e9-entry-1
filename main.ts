import { mkdirSync, writeFileSync } from "node:fs";

// One kind, funny fortune for the houseplant on the windowsill.
const FORTUNE =
  "By spring you will outgrow this pot, and your keeper will finally admit you were right about the sunny corner all along.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
