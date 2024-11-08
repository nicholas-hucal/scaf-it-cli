# Scaffold Component CLI Tool

This CLI tool helps you create React component scaffolding with `.jsx` and `.scss` files. It generates a component directory containing the component and stylesheet, based on the specified component name.

## Prerequisites

- **Node.js** and **npm**: Make sure you have Node.js and npm installed. You can verify the installation with:
  ```bash
  node -v
  npm -v
  ```
- **Global npm directory in PATH**: Ensure that the global npm path is set up in your system PATH.

## Installation

### 1. Clone the Project

Clone or download this repository to your local machine.

### 2. Add the Script to Your PATH

Since the script is set up for Node installations managed by Homebrew, add the following to your `.zshrc` file:

```bash
export PATH=$PATH:/usr/local/Cellar/node/<YOUR_NODE_VERSION>/lib/node_modules/.bin
```

Replace `<YOUR_NODE_VERSION>` with the installed version of Node (for example, `22.3.0`).

After adding this, reload `.zshrc`:

```bash
source ~/.zshrc
```

### 3. Link the Package Globally

Navigate to the directory containing `package.json`, then run:

```bash
npm link
```

This command makes the `scaffold-component` command available globally.

## Usage

To scaffold a new component, use:

```bash
scaffold-component <ComponentName> [componentPath]
```

- **ComponentName**: Required. Name of the component to create.
- **componentPath**: Optional. Path to the directory where the component should be created. Defaults to `src/components` if not provided.

Example:

```bash
scaffold-component MyComponent
```

This creates a directory `MyComponent` under `src/components` (or specified path) with the following files:

- `MyComponent.jsx`
- `MyComponent.scss`

## Troubleshooting

### Command Not Found: scaffold-component

If you encounter `zsh: command not found: scaffold-component`, check the following:

1. Ensure that the Node global `bin` directory is added to your PATH. Confirm it by running:

   ```bash
   echo $PATH
   ```

2. Make sure to run `npm link` again if the command still isn’t recognized.

### Using npx as a Backup

If linking doesn’t work, you can use `npx` to run the script:

```bash
npx ./scaffoldComponent.js <ComponentName>
```

## Uninstalling

To unlink the package globally, run:

```bash
npm unlink -g
```

This removes the `scaffold-component` command from global use.

## License

This project is licensed under the MIT License.

# global-scaffold
