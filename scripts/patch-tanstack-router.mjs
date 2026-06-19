import { readFile, writeFile } from "node:fs/promises";

const files = [
  "node_modules/@tanstack/router-plugin/dist/esm/core/code-splitter/compilers.js",
  "node_modules/@tanstack/router-plugin/dist/cjs/core/code-splitter/compilers.cjs",
];

const broken = "import('${splitUrl}')";
const fixed = "import(${JSON.stringify(splitUrl)})";

for (const file of files) {
  let source;

  try {
    source = await readFile(file, "utf8");
  } catch (error) {
    if (error?.code === "ENOENT") continue;
    throw error;
  }

  if (source.includes(fixed)) continue;

  const occurrences = source.split(broken).length - 1;
  if (occurrences === 0) {
    throw new Error(`Could not find the expected TanStack router code in ${file}`);
  }

  await writeFile(file, source.replaceAll(broken, fixed));
  console.log(`Patched ${file}`);
}
