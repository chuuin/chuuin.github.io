# Resume Site

## Styles (Sass)
The source of truth is the indented Sass entry file: `styles/main.sass`.
Compiled CSS is written to `css/style.css` to keep the site output identical.

### Structure
- `styles/_variables.sass`: design tokens, theme values, breakpoints
- `styles/_base.sass`: global resets and base element styles
- `styles/layout/`: layout primitives (aside, sections)
- `styles/components/`: reusable components (buttons, style switcher, back-to-top)
- `styles/pages/`: page sections (home, about, skills, portfolio, contact)
- `styles/utilities/`: helpers, animations, responsive rules

### Build CSS
Use Dart Sass (local install or via npx):

```bash
npx sass styles/main.sass css/style.css --style=expanded --source-map
```

### Add a New Section
1. Create a new partial in the appropriate folder under `styles/`.
2. Add a `@use` entry in `styles/main.sass`.
3. Rebuild CSS using the command above.
