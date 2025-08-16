# GTM DataLayer Playground

A lightweight, browser-based tool to test Google Tag Manager (GTM) containers and dataLayer events in real-time.

## Version 5.5.0 Features

- **LocalStorage Naming Standardization**: Improved code maintainability by standardizing all localStorage keys with clear, descriptive names that indicate their purpose.
- **Enhanced Code Organization**: Replaced legacy localStorage keys with semantic naming conventions for better developer experience and code clarity.
- **Improved Data Persistence**: Cleaner localStorage structure makes it easier to understand what data is being stored and where.

## Version 5.5.0 Features

- **Comprehensive TypeScript Type Checking**: Added JSDoc annotations and type checking for better code reliability and developer experience.
- **Enhanced Code Quality**: All major functions now have proper type annotations and null checks for DOM elements.
- **Improved Developer Experience**: Better IntelliSense support and error detection during development.

## Version 5.3.0 Features

- **Random user_id for Journey runs**: Added toggle to generate new GUID for each event during journey execution, providing more realistic testing scenarios.

## Version 5.2.0 Features

- **Documentation & Instructions Section**: Added a comprehensive documentation section with step-by-step usage guides and links to relevant browser extensions for GTM testing.

## Version 5.1.0 Features

- **Enhanced Console Logging Options**: Added configurable console logging controls for actions, dataLayer.push operations, and debug information.
- **Improved Button Styling**: Aligned all button colors to use consistent grey styling for better visual consistency across all sections.

## Version 5.0.0 Features

- **Journey Builder**: Create and run sequences of events with configurable delays—perfect for testing user journeys and conversion flows.
- **Multi-Playground System**: Add multiple playground instances with three complexity levels: Flat, Object, and Object & Array structures.
- **Smart Event Naming**: Playgrounds automatically detect and display event names from your dataLayer.push code for better organization.
- **Enhanced Event Management**: Collapsible event sections with expand/collapse all options for better workspace organization.
- **Advanced Local Storage**: Split storage system that preserves original events while tracking local modifications separately.
- **Instant Reset Functionality**: Reset buttons appear immediately when changes are made, allowing quick reversion to original event states.
- **Improved UI Layout**: Reorganized sections with better visual hierarchy—Settings, Journey Builder, Playgrounds, and Loaded Events.
- **Enhanced Copy Functions**: Multiple export formats including dataLayer.push blocks, local file format, and journey presets.
- **Smart Trim Detection**: Automatic detection of trailing whitespace with visual warnings and one-click trimming.
- **Event Navigation**: "Go to event" functionality integrated into the Loaded Events section for quick event jumping.

## Version 4.0.0 Features

- **Comment System**: Add descriptive comments to each event for better documentation.
- **Link Management**: Attach URLs and descriptions to events for reference and documentation.
- **Side-by-Side Layout**: Code and comment panes displayed side-by-side for better workflow.
- **Local Changes Warning**: Visual indicators when events have been modified locally.
- **Event Export from Playground**: Save playground events directly to the loaded events list.
- **Enhanced Copy Functions**: Multiple export formats including dataLayer.push blocks and local file format.
- **Dynamic Height Adjustment**: Comment areas automatically adjust to match code editor height.

## Version 3.0.0 Features

- **Local File Support**: Upload and use custom datalayer.js files instead of built-in examples.
- **File Persistence**: Remember and reload previously used local files in the same session.
- **Improved Error Handling**: Better error detection and display in the code editor.
- **Enhanced Styling**: Refined UI with better spacing and visual hierarchy.
- **File Format Flexibility**: Support for custom event formats beyond the default examples.

## Version 2.0.0 Features

- **Enhanced UI Design**: Modern card-based layout with improved typography and styling.
- **Ace Code Editor**: Syntax-highlighted JavaScript editor for better code writing experience.
- **Trim Spaces Function**: Automatic detection and removal of trailing whitespace with visual warnings.
- **Improved Navigation**: "Go to event" navigation bar for quick jumping between events.
- **Better Button Layout**: Reorganized action buttons for improved user experience.
- **Enhanced Copy Functions**: Improved copy functionality for both individual events and all events.

## Version 1.0.0 Features

- **Basic GTM Injection**: Enter your GTM container ID to inject it directly into the page.
- **Simple Event Testing**: Basic textarea-based interface for testing dataLayer events.
- **Event Presets**: Load predefined dataLayer events from a datalayer.js file.
- **Basic Copy Functions**: Copy individual events as dataLayer.push or datalayer.js blocks.
- **Local Storage**: Save changes to localStorage for persistence across reloads.
- **Console Output**: Simple log display for operation feedback.

## Disclaimer / License

This tool is **free to use**, but redistribution, modification, or claiming authorship is **not** permitted. See [LICENSE.txt](LICENSE.txt) for details.

## How to Use

1. **Inject your GTM container** or leave it out if testing without GTM.
2. Load events from GitHub or your local file.
3. Use "Go to event" navigation to jump between events.
4. **Create custom events** in the Playgrounds section with three complexity levels.
5. **Build event journeys** by dragging events into the Journey Builder and running them sequentially.
6. Modify or create events via the Playground, then **Save Event to localStorage**.
7. Export all or select events using the copy buttons.
8. When using a local file, choose it once—"Reload" works until you reload the page. Reset to default with "Reset and use examples from GitHub".

---
By Rune Andersen
