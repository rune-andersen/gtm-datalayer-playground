# GTM DataLayer Playground

A lightweight, browser-based tool to test Google Tag Manager (GTM) containers and dataLayer events in real-time.

## Version 4.0.0 Features

- **Inject GTM container**: Enter your GTM container ID to inject it directly into the page—even persists across reloads.
- **Load event presets**: Choose predefined dataLayer events from GitHub or upload a local `datalayer.js` file (your custom format).
- **Validate & push events**: Syntax-highlighted code editor; click “Push” to send the event to the actual GTM container.
- **Playground for custom events**: Write and run your own dataLayer event code in a separate editor.
- **Save custom events**: Click “Save Event to localStorage” to add a playground event to your presets, instantly updated in the event list.
- **Editable comments**: Each event has a comment box—ideal for descriptions or links (supports manual link entries).
- **Dynamic layout**: Code and comment panes side-by-side; height adjusts to show up to 20 code lines with breathing room for comments.
- **Local file persistence**: Use a local file and reload it later with “Reload local [filename]” in the same session.
- **Local modifications warning**: Events modified or added locally are clearly marked and the “Copy as datalayer.js block” button turns yellow to alert you before export.
- **Copy & Export**: Copy individual event blocks or all presets into a downloadable `datalayer.js` file.

## Disclaimer / License

This tool is **free to use**, but redistribution, modification, or claiming authorship is **not** permitted. See [LICENSE.txt](LICENSE.txt) for details.

## How to Use

1. **Inject your GTM container** or leave it out if testing without GTM.
2. Load events from GitHub or your local file.
3. Use “Go to event” navigation to jump between events.
4. Modify or create events via the Playground, then **Save Event to localStorage**.
5. Export all or select events using the copy buttons.
6. When using a local file, choose it once—“Reload” works until you reload the page. Reset to default with “Reset and use datalayer.js”.

---
By Rune Andersen
