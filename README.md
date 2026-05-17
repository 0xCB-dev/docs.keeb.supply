# KeebSupply Docs

Documentation site for [keeb.supply](https://keeb.supply) — assembly instructions, troubleshooting guides, and keyboard basics.

**Live site:** https://docs.keeb.supply

---

## Stack

- **[Hugo](https://gohugo.io/)** (extended, v0.156.0+) — static site generator
- **[Thulite / Doks](https://getdoks.org/)** — documentation theme
- **[Cloudflare Pages](https://pages.cloudflare.com/)** — hosting & deployment
- **pnpm** — package manager (Node ≥ 24.13.0 required)

## Development

```bash
pnpm install       # install dependencies
pnpm dev           # start dev server at localhost:1313
pnpm build         # production build → public/
pnpm preview       # preview production build via Wrangler
pnpm format        # run Prettier
```

## Content structure

```
content/
  basics/           # foundational guides (firmware, soldering, hardware)
  instructions/     # per-keyboard assembly instructions
  troubleshooting/  # hardware & firmware troubleshooting
```

Each keyboard lives in `content/instructions/<name>/` with its own `_index.md` (section landing) and sub-pages (packing list, required supplies, assembly, etc.).

Page ordering in the instructions grid is controlled by the `weight` front matter field in each `_index.md`.

## Adding a new keyboard

1. Create `content/instructions/<keyboard-name>/` with an `_index.md`
2. Add sub-pages as needed (`packing-list/index.md`, `assembly/index.md`, etc.)
3. Drop a cover image (`cover.webp` recommended) in the section folder — it appears in the instructions grid
4. Set `weight` in `_index.md` to control sort order

## Deployment

Pushes deploy automatically via Cloudflare Pages. To preview locally:

```bash
pnpm build
pnpm preview
```

Redirects and headers for Cloudflare Pages are in `static/_redirects` and `static/_headers`.

## Customisation

Brand colours and font overrides live in `assets/scss/common/`:

| File | Purpose |
|---|---|
| `_variables-custom.scss` | Brand colours, font stack |
| `_fonts.scss` | `@font-face` declarations (Atkinson Hyperlegible) |
| `_custom.scss` | Component overrides (header bar, sidebar, callouts) |

## Differences from the default Doks starter

### Font
Default Doks ships Jost. This site uses **Atkinson Hyperlegible** (`@fontsource/atkinson-hyperlegible`), self-hosted via a Hugo module mount. The Jost font files are excluded from the build via `excludeFiles` in `config/_default/module.toml`.

### Brand colours
Two custom colours replace the Doks defaults throughout:

| Variable | Value | Used for |
|---|---|---|
| `$brand-teal` | `#00556a` | Buttons, nav active, light-mode accents |
| `$brand-pink` | `#d32e9d` | Links (both modes), callout links, sidebar active, dark-mode accents |

The Starlight CSS tokens (`--sl-color-accent`, `--sl-color-accent-high`) are wired to these so sidebar active states and other theme components inherit the brand colours automatically.

### Header bar
The top gradient bar uses a custom teal→pink gradient in both light and dark mode. The default theme uses yellow→vermilion in light mode and a blue-green in dark mode.

### Instructions landing page
The `/instructions/` page uses a fully custom image grid layout (`layouts/instructions/list.html`) instead of the default Doks section list. Each keyboard card shows a cover image (first `.webp/.jpg/.png` found in the section folder), with a gradient overlay label and hover animation. Cards are sorted by `weight`.

### Homepage
The homepage layout is replaced (`layouts/home.html`) with a simpler hero + three-panel feature section linking to the main content areas.

### Partial overrides

Theme partials are overridden by placing files at the same path under `layouts/_partials/`. Current overrides:

| Partial | What it changes |
|---|---|
| `main/edit-page.html` | Fixes a double-slash bug in the edit URL when `multilingualMode` is off — the theme appended an empty `$lang` segment unconditionally |
| `main/docs-navigation.html` | Scopes prev/next page navigation to `.CurrentSection.RegularPages` so arrows stay within the same keyboard's pages instead of jumping across the whole instructions section |
| `sidebar/section-menu.html` | Custom sidebar logic for the instructions section: when inside a keyboard (e.g. `/instructions/forager/`) only that keyboard's pages are shown; at the `/instructions/` root all keyboards are listed. Other sections (basics, troubleshooting) use default Doks behaviour |

### Custom output formats
Two extra output formats are enabled beyond the Doks defaults:
- **`markdown`** — each page is also rendered as raw markdown (at `<page>/index.md`)
- **`llms`** — an `llms.txt` is generated at the site root for AI consumption
