# Storm King's Thunder — Campaign Wiki

This is the source for our campaign wiki. Every push to `main` automatically rebuilds the live site.

## Editing notes (no local setup needed)

1. Browse to the note you want to edit at `github.com/storm-kings-thunder/wiki/tree/main/content/`
2. Click the **pencil icon** (Edit this file) in the top-right corner
3. Make your changes — use `[[Note Name]]` to link to other notes
4. Scroll down and click **Commit changes**
5. The site rebuilds automatically within ~1 minute

## Adding a new note

1. Go to `github.com/storm-kings-thunder/wiki/tree/main/content/`
2. Click **Add file → Create new file**
3. Name it `Topic Name.md` (e.g. `Waterdeep.md`)
4. Write the note — use `[[wiki links]]` to connect it to other notes
5. Commit — the site rebuilds automatically

## Adding images

1. Go to `github.com/storm-kings-thunder/wiki/tree/main/content/Images/`
2. Click **Add file → Upload files**
3. Drag in your image and commit
4. Reference it in a note with `![[Images/filename.png]]`

## Hiding a note (draft)

Add this frontmatter to exclude a note from the live site:

```yaml
---
draft: true
---
```

It stays in git but won't appear in the wiki or search until the `draft` line is removed.
