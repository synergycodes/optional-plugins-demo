# Optional Plugins Demo

This demo showcases **optional** plugins developed by Synergy Codes for **[Workflow Builder](https://github.com/synergycodes/workflowbuilder)** - a frontend-first platform for building sophisticated workflow editors.

## Main features

- **Allows users to create plugins in the plugin directory and remove them without breaking the app**
- Vite serves stubs for removed plugins (there is a log in the console when it is served)
- ESLint warns users that they cannot import files directly from @/plugins and must use adapters
- Plugins can modify the base code, alter function inputs and outputs, add hooks, localization strings and customize prompts
- Plugins have an additional parameter `priority`, allowing the user to define which plugin should be applied first

## Plugins logic

- `./src/plugins/` -> `@/plugins` - directory with removable content
- `./src/features/plugins-core` -> `@/features/plugins-core` - is a core functionality
- `src/features/plugins-core/components.ts`, `src/features/plugins-core/functions.ts` and `src/features/plugins-core/i18n.ts` are places where plugins are added to the app

## How to add plugin?

1. Create your plugin directory, for example: `plugins/example`.
2. Add your `<ExampleComponent />` to `src/plugins/example/components/example-component.tsx`.
3. In `src/plugins/example/plugin-component` import dependencies and add:

```ts
registerComponentDecorator("OptionalBuildingCards", {
  content: ExampleComponent,
  place: "after",
});
```

4. Import your plugin to `src/app/features/plugins-core/components.ts` with line `import '@/plugins/example/plugin-components';`
5. Refresh the page.

Your component should now be displayed in `<PlanetInfrastructure />` list.

### How to remove plugin?

Simply remove the folder of your plugin and restart the application. It will still work with empty stubs instead of registration.
