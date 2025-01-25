# scaf-it - React Component Scaffolder

A simple CLI tool to scaffold React components with optional styles and configuration.

## Features

- Quickly generate React component boilerplates.
- Choose between SCSS or CSS for styling.
- Optionally skip generating an `index.js` file.
- Define a custom location for scaffolding components.

---

## Installation

To use `scaf-it` globally, install it via npm:

```bash
npm install -g scaf-it
```

You can now use the `scaf-it` command globally.

---

## Usage

The `scaf-it` CLI helps scaffold React components. Below are the usage details and examples.

### Basic Usage

```bash
scaf-it <ComponentName> [Location] [--no-index] [--css]
```

### Arguments

| Argument          | Description                                  | Required? | Default          |
| ----------------- | -------------------------------------------- | --------- | ---------------- |
| `<ComponentName>` | The name of the React component to scaffold. | Yes       | None             |
| `[Location]`      | Directory to create the component in.        | No        | `src/components` |

### Options

| Option       | Description                          |
| ------------ | ------------------------------------ |
| `--no-index` | Skip generating an `index.js` file.  |
| `--css`      | Use CSS for styling instead of SCSS. |

---

## Examples

### 1. Default Behavior

```bash
scaf-it MyComponent
```

Scaffolds a React component named `MyComponent` in `src/components` with:

- `MyComponent.jsx`
- `MyComponent.scss`
- `index.js`

---

### 2. Custom Location

You can add a custom location by providing a path local to the project of your choosing.

```bash
scaf-it MyComponent src/custom/path
```

Scaffolds `MyComponent` in `src/custom/path` in the CWD.

---

### 3. Skip `index.js`

```bash
scaf-it MyComponent --no-index
```

Scaffolds the component without generating an `index.js` file.

---

### 4. Use CSS for Styling

```bash
scaf-it MyComponent --css
```

Scaffolds the component with `MyComponent.css` instead of `MyComponent.scss`.

---

### 5. Combine Options

```bash
scaf-it MyComponent src/custom/path --no-index --css
```

Scaffolds the component in `src/custom/path` without `index.js` and uses `CSS` for styling.

---

## Output Example

When you scaffold a component, the following structure is generated:

```plaintext
src/components/MyComponent/
├── MyComponent.jsx
├── MyComponent.scss (or .css)
└── index.js (optional)
```

---

## Help Command

For a quick overview of usage, run:

```bash
scaf-it
```

This displays detailed usage instructions in the terminal.

---

## Development

If you'd like to contribute or modify the tool:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/scaf-it-npm.git
   ```

2. Navigate to the project directory:

   ```bash
   cd scaf-it
   ```

3. Link the CLI tool globally:

   ```bash
   npm link
   ```

4. Test the tool locally:

   ```bash
   node index.js <ComponentName> [Location] [--no-index] [--css]
   ```

5. If making changes, be sure to test thoroughly!

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you'd like to improve the tool.

---

## Support

If you encounter any issues or have questions, feel free to reach out by opening an issue in the repository.

---

Enjoy faster React component scaffolding! 🚀
