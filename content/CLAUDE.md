# Storm King's Thunder — Campaign Vault

This is an [Obsidian](https://obsidian.md/) vault for a D&D 5e campaign based on (and expanded from) the *Storm King's Thunder* module.

## Structure

- **Root** — All campaign notes as individual Markdown files (NPCs, locations, factions, items, concepts, lore)
- **Images/** — Character portraits and artwork (PNG/JPG)
- **.obsidian/** — Obsidian app config (do not edit manually)

There are no subdirectories for note categories; everything lives flat in the root.

## File Conventions

- One topic per file. File name = the topic's primary name.
- Use **Obsidian wiki links** (`[[Note Name]]`) to cross-reference notes. Never use regular Markdown links for internal references.
- Add a YAML frontmatter block when a note has aliases (alternative names people might search for):
  ```yaml
  ---
  aliases:
    - Short Name
  ---
  ```
- Notes are intentionally brief — a few sentences to a few paragraphs. Avoid padding.
- Headings (`##`) are used only when a note has distinct sections (e.g. a family tree, a list of members).

## Content Scope

Notes cover:

- **NPCs** — personality, role, faction ties, current status
- **Locations** — city, dungeon, region descriptions and notable features
- **Factions & Organizations** — goals, members, relationships
- **Items & Artifacts** — description and significance
- **Lore & Concepts** — in-world history, religions, diseases, mechanics

## What Claude Should Do Here

- Help draft or expand notes while keeping them concise and lore-consistent.
- Maintain the flat file structure — do not create subdirectories.
- Always use `[[wiki links]]` for internal cross-references.
- Preserve existing aliases in frontmatter; add new ones when a note gains a commonly used alternative name.
- Images go in `Images/` and are referenced in notes as `![[Images/filename.ext]]`.
- Do not add tags, dataview queries, or other Obsidian plugins syntax unless explicitly asked.