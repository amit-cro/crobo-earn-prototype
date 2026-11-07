import { build } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { cp, mkdir, readFile, writeFile } from "node:fs/promises"

const entry = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(entry, "../..")
const output = path.join(root, "dist-earn-money")
const base = "/crobo-earn-prototype/versions/earn-money/"

await build({
  configFile: false, root, base, publicDir: false, envDir: false,
  plugins: [{
    name: "standalone-earn-money", enforce: "pre",
    transform(source, id) {
      if (id.endsWith("/northstar-directions/EditorialDirection.tsx")) {
        return source.replace('<a className="north-stack-login" href="/login">', '<button className="north-stack-login" type="button" aria-disabled="true">').replace('Log in\n          </a>', 'Log in\n          </button>')
      }
      if (id.endsWith("/northstar-directions/EditorialExtras.tsx")) {
        return source.replace(/<Link to="(\/[^"]+)">([^<]+)<\/Link>/g, '<a href="https://croboearn.com$1" target="_blank" rel="noreferrer">$2</a>').replace('import { Link } from "react-router"', '').replace('href={href}', 'href={href.startsWith("/") ? `https://croboearn.com${href}` : href}')
      }
    },
  }, react(), tailwindcss()],
  resolve: {
    alias: [
      { find: "@/components/patterns/logo-link", replacement: path.join(entry, "wordmark.tsx") },
      { find: "@", replacement: path.join(root, "src") },
    ],
    dedupe: ["react", "react-dom"],
  },
  build: { outDir: output, emptyOutDir: true, sourcemap: false, rollupOptions: { input: path.join(entry, "index.html") } },
})
const html = await readFile(path.join(output, "prototypes/earn-money/index.html"), "utf8")
await writeFile(path.join(output, "index.html"), html)
await mkdir(path.join(output, "source"), { recursive: true })
for (const file of ["EditorialDirection.tsx", "EditorialExtras.tsx", "HeroFlow.tsx", "editorial-extras.css", "northstar-directions.css"]) {
  await cp(path.join(root, "src/prototypes/northstar-directions", file), path.join(output, "source", file))
}
for (const file of ["index.html", "main.tsx", "wordmark.tsx", "build-shareable.mjs"]) await cp(path.join(entry, file), path.join(output, "source", file))
await writeFile(path.join(output, "README.md"), "# Earn money prototype\n\nStandalone design review of Cash, Income and Wealth. Product buttons and sign-in are inactive. No authentication, analytics, backend calls or money movement. Wealth is illustrative.\n\nBuilt from app/prototypes/earn-money/build-shareable.mjs in the staging-based design checkout. Source snapshot is included in source/. The existing quiz-first prototype, Scenic, staging and production are unchanged.\n")
console.log(`Standalone output: ${output}`)
