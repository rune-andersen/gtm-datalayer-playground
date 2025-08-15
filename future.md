# Future Development Ideas - GTM DataLayer Playground

This document outlines planned features and improvements for future versions of the GTM DataLayer Playground.

## Features

### 1. Multiple Example Files on GitHub
**Complexity: Medium**  
**Priority: High**

**Description:**  
Break the current monolithic `datalayer.js` file into multiple specialized example files hosted on GitHub, each focusing on different use cases and industries.

**Implementation Details:**
- **shop-example.js** - E-commerce focused events (product views, cart updates, purchases, etc.)
- **video-example.js** - Video streaming and media events (play, pause, complete, etc.)
- **simple-example.js** - Basic events for beginners (page views, clicks, form submissions)
- **Additional examples** - Industry-specific examples (finance, healthcare, travel, etc.)

**UI Changes:**
- Add a file selector dropdown in the "Load Events" section
- Integrate with existing GitHub loading mechanism
- Maintain current local file upload functionality
- Add example categorization and descriptions

**Benefits:**
- Better organization of examples by use case
- Easier for users to find relevant examples
- Reduced file size for each example set
- More maintainable codebase

---

### 2. Drag-and-Drop Event Reordering
**Complexity: High**  
**Priority: Low** (Implement after other v6.0.0 features are stable)

**Description:**  
Reintroduce drag-and-drop functionality for reordering events in the Loaded Events section, with fallback to arrow up/down navigation.

**Implementation Details:**
- **Primary Method:** Drag-and-drop with visual feedback
- **Fallback Method:** Arrow up/down buttons for each event
- **State Management:** Ensure reordered lists persist in localStorage
- **Event Preservation:** Maintain all event properties during reordering

**Technical Requirements:**
- Must work smoothly without breaking event editing
- Preserve event navigation functionality
- Handle edge cases (first/last event, single event lists)
- Maintain event comments and links during reordering

**Previous Issues to Address:**
- Fix bugs that caused removal of this feature
- Ensure stable performance with large event lists
- Maintain compatibility with existing event management features

---

### 3. Text Size Controls in Settings
**Complexity: Low**  
**Priority: Medium**

**Description:**  
Add text size adjustment controls in the Settings section for both the code editor and comment boxes.

**Implementation Details:**
- **Code Editor Controls:**
  - Font size slider/input (12px - 24px range)
  - Font family selector (monospace options)
  - Line height adjustment
  
- **Comment Box Controls:**
  - Font size slider/input (12px - 20px range)
  - Font family selector (readable sans-serif options)
  
- **Settings Persistence:**
  - Save preferences in localStorage
  - Apply settings immediately without page reload
  - Reset to default option

**UI Placement:**
- Add new subsection in Settings: "Editor Appearance"
- Group related controls together
- Provide live preview of changes

---

### 4. Full README Integration in Documentation
**Complexity: Low**  
**Priority: Medium**

**Description:**  
Replace the current "Version Information" subsection in the Documentation & Instructions section with the complete README.md content, presented in a collapsible format.

**Implementation Details:**
- **Content Integration:**
  - Display full README.md content
  - Maintain proper markdown formatting
  - Include all version features and changelog
  
- **UI Presentation:**
  - Collapsible section with expand/collapse functionality
  - Maintain consistent styling with existing documentation
  - Add navigation anchors for different sections
  
- **Dynamic Updates:**
  - Auto-update when README.md changes
  - Maintain version history visibility
  - Keep documentation section organized

**Benefits:**
- Single source of truth for documentation
- Easier maintenance (update README.md once)
- Better user experience with comprehensive information
- Consistent information across all platforms

---

### 5. Event Validation & Linting
**Complexity: Medium**  
**Priority: Medium**

**Description:**  
Add real-time validation of dataLayer events to catch common mistakes and ensure proper structure according to GTM best practices.

**Implementation Details:**
- **Syntax Validation:**
  - JavaScript code validation
  - Required field checking (event name, etc.)
  - JSON structure validation
  
- **GTM Best Practices:**
  - Common accepted event names list
  - Required parameter validation
  - Warning for deprecated patterns
  
- **Visual Indicators:**
  - Real-time validation status
  - Error highlighting in code editor
  - Warning messages for best practices

**Benefits:**
- Reduce errors before testing
- Better code quality and consistency
- Learning tool for GTM standards
- Team standardization

---

### 6. Event Search & Filtering
**Complexity: Medium**  
**Priority: Medium**

**Description:**  
Advanced search and filtering capabilities beyond the current "Go to event" navigation for better event management in large collections.

**Implementation Details:**
- **Search Functionality:**
  - Search by event name
  - Search within event code content
  - Search by comments and tags
  
- **Filtering Options:**
  - Filter by event type/category
  - Filter by complexity level
  - Filter by modification status
  
- **Advanced Features:**
  - Regular expression search
  - Saved search queries
  - Bulk operations on filtered results

**Benefits:**
- Better organization of large event collections
- Faster event discovery
- Improved team collaboration
- Better project management

---

### 7. Airtable Integration
**Complexity: High**  
**Priority: Medium**

**Description:**  
Integration with Airtable "Event Tracking Library" to import events directly from the user's Airtable base.

**Implementation Details:**
- **Airtable API Integration:**
  - Connect to user's Airtable base
  - Import events from specified tables
  - Real-time sync capabilities
  
- **Data Mapping:**
  - Map Airtable fields to event structure
  - Handle different event formats
  - Preserve Airtable metadata
  
- **UI Integration:**
  - New "Import from Airtable" button
  - Base selection and table browsing
  - Import progress and error handling

**Benefits:**
- Centralized event management
- Team collaboration through Airtable
- Consistent event structures
- Reduced duplication

---

### 8. Google Sheets Export
**Complexity: Medium**  
**Priority: Low**

**Description:**  
Export events to Google Sheets for documentation, sharing, and further analysis.

**Implementation Details:**
- **Export Formats:**
  - Event summary with metadata
  - Full event code and comments
  - Journey configurations
  
- **Google Sheets Integration:**
  - Create new sheets or append to existing
  - Structured data formatting
  - Auto-updating capabilities
  
- **Export Options:**
  - Select specific events
  - Include/exclude comments
  - Custom column selection

**Benefits:**
- Easy sharing with stakeholders
- Documentation in familiar format
- Further analysis and reporting
- Team collaboration

---

## Technical Improvements & Hygiene Tasks



---

## Technical Considerations

- All features should maintain backward compatibility
- localStorage structure may need updates for new settings
- GitHub integration should handle multiple file formats
- Performance impact should be minimal for existing functionality
- Mobile responsiveness should be maintained
- External API integrations (Airtable, Google Sheets) require proper authentication handling
- Event validation requires maintaining a list of common accepted event names and GTM best practices

---

*Last Updated: Version 5.5.0 Release*
*Next Major Version Target: 6.0.0*
