# Learn Gutenberg

Learn Gutenberg plugin have different examples of custom blocks development. Showing examples of different APIs and functionalities.

This plugin created using [@wordpress/create-block](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) package.

You can find all the custom blocks under `Learn Gutenberg` block category.

## Examples

### Basic (Static) Block

- [blocks/static-block.php](blocks/static-block.php)
- [src/static-block](src/static-block)
- [build/static-block](build/static-block)

#### References

- [Create a Block Tutorial](https://developer.wordpress.org/block-editor/getting-started/create-block/)
- [API Versions](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-api-versions/)
- [Registration](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/)
- [Metadata](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/)
- [Edit and Save](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/)
- [Use styles and stylesheets](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/applying-styles-with-stylesheets/)

### Dynamic Block

Using client-side or server-side rendering.

- [blocks/dynamic-block.php](blocks/dynamic-block.php)
- [src/dynamic-block](src/dynamic-block)
- [build/dynamic-block](build/dynamic-block)

#### References

- [Creating dynamic blocks](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/)
- [Block Supports in dynamic blocks](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/block-supports-in-dynamic-blocks/)

### Block Supports

- [blocks/block-supports.php](blocks/block-supports.php)
- [src/block-supports](src/block-supports)
- [build/block-supports](build/block-supports)

#### References

- [Block Supports](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/)

### Attributes and Editable Field

- [blocks/block-attributes.php](blocks/block-attributes.php)
- [src/block-attributes](src/block-attributes)
- [build/block-attributes](build/block-attributes)

#### References

- [Introducing Attributes and Editable Fields](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/introducing-attributes-and-editable-fields/)
- [Attributes](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/)
- [RichText Reference](https://developer.wordpress.org/block-editor/reference-guides/richtext/)

### Block Controls: Block Toolbar and Settings Sidebar

- [blocks/block-controls.php](blocks/block-controls.php)
- [src/block-controls](src/block-controls)
- [build/block-controls](build/block-controls)

#### References

- [Block Controls: Block Toolbar and Settings Sidebar](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/block-controls-toolbar-and-sidebar/)
- [Component Reference](https://developer.wordpress.org/block-editor/reference-guides/components/) - Refer child pages for all components.
- [InspectorControls](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#inspectorcontrols)
- [BlockControls](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#blockcontrols)

### Nested Blocks: Using InnerBlocks

- [Nested Blocks: Using InnerBlocks](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/)
  - Allowed Blocks
  - Orientation
  - Template
  - Post Template
  - Parent-Child InnerBlocks
- [InnerBlocks](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#innerblocks)

### How-to Guides

- [Meta Boxes](https://developer.wordpress.org/block-editor/how-to-guides/metabox/)
- [Notices](https://developer.wordpress.org/block-editor/how-to-guides/notices/)
  - [Notices Data Reference](https://developer.wordpress.org/block-editor/reference-guides/data/data-core-notices/)
- [Plugin Sidebar](https://developer.wordpress.org/block-editor/how-to-guides/plugin-sidebar-0/)
- [Feature Flags](https://developer.wordpress.org/block-editor/how-to-guides/feature-flags/)

### Block API Reference

- [API Versions](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-api-versions/)
- [Registration](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/)
- [Metadata](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/)
- [Edit and Save](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/)
- [Attributes](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/)
- [Supports](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/)
- [Styles](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/)
- [Templates](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-templates/)
- [Patterns](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/)
- [Deprecation](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-deprecation/)
- [Variations](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/)
- [Transforms](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-transforms/)
- [Context](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-context/)
- [Annotations](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-annotations/)

### Filter Reference

- [Block Filters](https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/)
- [Editor Filters](https://developer.wordpress.org/block-editor/reference-guides/filters/editor-filters/)
- [i18n Filters](https://developer.wordpress.org/block-editor/reference-guides/filters/i18n-filters/)
- [Parser Filters](https://developer.wordpress.org/block-editor/reference-guides/filters/parser-filters/)
- [Autocomplete](https://developer.wordpress.org/block-editor/reference-guides/filters/autocomplete-filters/)

### SlotFills

- [SlotFills Reference](https://developer.wordpress.org/block-editor/reference-guides/slotfills/)

### Data Module Reference

- [Data Module Reference](https://developer.wordpress.org/block-editor/reference-guides/data/)
  - core: WordPress Core Data
  - core/annotations: Annotations
  - core/blocks: Block Types Data
  - core/block-editor: The Block Editor’s Data
  - core/editor: The Post Editor’s Data
  - core/edit-post: The Editor’s UI Data
  - core/notices: Notices Data
  - core/nux: The NUX (New User Experience) Data
  - core/viewport: The Viewport Data

### Themes

- [Themes](https://developer.wordpress.org/block-editor/how-to-guides/themes/)
- [Theme.json Reference](https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/)

### Other References

- [Widgets](https://developer.wordpress.org/block-editor/how-to-guides/widgets/)
- [Core Blocks Reference](https://developer.wordpress.org/block-editor/reference-guides/core-blocks/)
- [Package Reference](https://developer.wordpress.org/block-editor/reference-guides/packages/)
- [Glossary](https://developer.wordpress.org/block-editor/explanations/glossary/)
- [Frequently Asked Questions](https://developer.wordpress.org/block-editor/explanations/faq/)
- [Architecture](https://developer.wordpress.org/block-editor/explanations/architecture/)
- [Designer Documentation](https://developer.wordpress.org/block-editor/how-to-guides/designers/)

## Credits

- [Block Editor Handbook](https://developer.wordpress.org/block-editor/)
