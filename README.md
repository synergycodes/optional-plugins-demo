# Optional Plugins Demo

This demo showcases optional plugins developed by Synergy Codes for [Workflow Builder](https://github.com/synergycodes/workflowbuilder) - a frontend-first platform for building sophisticated workflow editors.

## Main features

- Allows users to create plugins in the plugin directory and remove them without breaking the app
- Vite serves stubs for removed plugins
- ESLint warns users that they cannot import files directly from @/plugins and must use adapters
- Plugins can modify the base code, alter function inputs and outputs, add hooks, and customize prompts

## Plugins logic

- `./src/plugins/` - directory with removable content
- `./src/features/plugins` - is a core functionality `src/features/plugins/components.ts` and `src/features/plugins/functions.ts` are places where plugins are added to the app
