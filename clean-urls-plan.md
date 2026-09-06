# Plan: Clean URL slugs for portfolio pages

## Overview

The `pages/` directory contains HTML files with spaces and version suffixes in their names (e.g. `Product Work Case Study.html`). Browsers percent-encode spaces as `%20`, producing ugly URLs. The fix is to rename all 7 page files to lowercase, hyphenated slugs — and update every `href` that references them across the codebase.

No build system, server config, or routing framework is involved. This is a pure find-and-replace across static HTML files.

---

## Rename mapping

| Old filename | New filename |
|---|---|
| `AI Patent Case Study.html` | `ai-patent.html` |
| `Carbon Contributions Case Study v2.html` | `carbon-contributions.html` |
| `Carbon Migration Case Study v3.html` | `carbon-migration.html` |
| `Figma Kit Case Study.html` | `figma-kit.html` |
| `Product Gallery Case Study.html` | `product-gallery.html` |
| `Product Work Case Study.html` | `product-work.html` |
| `Understanding People and Gaps Case Study v2.html` | `developer-handoff-process.html` |

---

## Sub-tasks

### Sub-task 1 — Rename the 7 page files

**Intent:** Remove spaces and version suffixes from filenames so the OS-level file paths are clean before any link updates happen.

**Expected outcomes:**
- All 7 files in `pages/` have new hyphenated, lowercase names
- Old filenames no longer exist

**Todo list:**
1. Rename `pages/AI Patent Case Study.html` → `pages/ai-patent.html`
2. Rename `pages/Carbon Contributions Case Study v2.html` → `pages/carbon-contributions.html`
3. Rename `pages/Carbon Migration Case Study v3.html` → `pages/carbon-migration.html`
4. Rename `pages/Figma Kit Case Study.html` → `pages/figma-kit.html`
5. Rename `pages/Product Gallery Case Study.html` → `pages/product-gallery.html`
6. Rename `pages/Product Work Case Study.html` → `pages/product-work.html`
7. Rename `pages/Understanding People and Gaps Case Study v2.html` → `pages/developer-handoff-process.html`

**Relevant context:** File renames via shell `mv` command.

**Status:** [ ] pending

---

### Sub-task 2 — Update hrefs in index.html

**Intent:** Point all 11 links in the homepage to the new slugs so navigating from the home page lands on the renamed files.

**Expected outcomes:**
- All `href` values in `index.html` that reference `pages/` use the new filenames with no `%20` encoding

**Todo list:**
1. Replace `pages/Carbon%20Migration%20Case%20Study%20v3.html` → `pages/carbon-migration.html` (2 occurrences: hero stat + project card)
2. Replace `pages/Figma%20Kit%20Case%20Study.html` → `pages/figma-kit.html` (2 occurrences)
3. Replace `pages/Understanding%20People%20and%20Gaps%20Case%20Study%20v2.html` → `pages/developer-handoff-process.html` (2 occurrences)
4. Replace `pages/Carbon%20Contributions%20Case%20Study%20v2.html` → `pages/carbon-contributions.html` (2 occurrences)
5. Replace `pages/AI%20Patent%20Case%20Study.html` → `pages/ai-patent.html` (2 occurrences)
6. Replace `pages/Product%20Gallery%20Case%20Study.html` → `pages/product-gallery.html` (1 occurrence)
7. Replace `pages/Product%20Work%20Case%20Study.html` → `pages/product-work.html` (1 occurrence)

**Relevant context:** [`index.html`](index.html) lines 502–570.

**Status:** [ ] pending

---

### Sub-task 3 — Update cross-nav hrefs inside each page file

**Intent:** Each case study page has prev/next navigation links that reference sibling pages by their old filenames. These need updating to the new slugs.

**Expected outcomes:**
- All `project-nav-link` hrefs inside the 7 page files use new slugs
- No `%20` or old versioned names remain anywhere in `pages/`

**Todo list:**
1. `pages/ai-patent.html` — update 2 nav links (references `Product%20Work` and `Carbon%20Migration`)
2. `pages/carbon-contributions.html` — update 2 nav links (references `Understanding%20People` and `Product%20Gallery`)
3. `pages/carbon-migration.html` — update 1 nav link (references `Figma%20Kit`)
4. `pages/developer-handoff-process.html` — update 2 nav links (references `Figma%20Kit` and `Carbon%20Contributions`)
5. `pages/figma-kit.html` — update 2 nav links (references `Carbon%20Migration` and `Understanding%20People`)
6. `pages/product-gallery.html` — update 2 nav links (references `Carbon%20Contributions` and `Product%20Work`)
7. `pages/product-work.html` — update 2 nav links (references `Product%20Gallery` and `AI%20Patent`)

**Relevant context:** Each page file has nav links near the bottom. All existing `back-link` hrefs point to `../index.html` and do not need changing.

**Status:** [ ] pending

---

## Verification

After all sub-tasks are complete:
- Open `index.html` in a browser and confirm all 7 project card links resolve without `%20` in the URL
- Navigate through all prev/next links on each case study page and confirm none produce 404s
- Confirm no remaining `%20` or old versioned filenames exist anywhere with a grep for `Case%20Study` and `Case Study`
