#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Function to scaffold the component
function scaffoldComponent(componentName, location, options) {
  const kebabCaseName = componentName
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();

  const resolvedPath = path.resolve(location, componentName);
  const jsxFile = path.join(resolvedPath, `${componentName}.jsx`);
  const styleExtension = options.css ? "css" : "scss";
  const styleFile = path.join(
    resolvedPath,
    `${componentName}.${styleExtension}`
  );
  const indexFile = path.join(resolvedPath, `index.js`);

  // Check if the component directory already exists
  if (fs.existsSync(resolvedPath)) {
    console.log(`Component directory "${resolvedPath}" already exists.`);
    return;
  }

  // Create the component directory
  fs.mkdirSync(resolvedPath, { recursive: true });

  // JSX file content
  const jsxContent = `import React from "react";
import "./${componentName}.${styleExtension}";

function ${componentName}() {
  return <div className="${kebabCaseName}">${componentName}</div>;
}

export default ${componentName};
`;

  // Style file content
  const styleContent = `.${kebabCaseName} {
  /* Add your styles here */
}
`;

  // Index file content
  const indexContent = `export { default } from './${componentName}';`;

  // Write files
  fs.writeFileSync(jsxFile, jsxContent);
  fs.writeFileSync(styleFile, styleContent);

  if (!options.noIndex) {
    fs.writeFileSync(indexFile, indexContent);
  }

  console.log(
    `Component "${componentName}" has been scaffolded at ${resolvedPath}.`
  );
}

// Parse command-line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    noIndex: args.includes("--no-index"),
    css: args.includes("--css"),
  };

  // Remove known flags from args
  const filteredArgs = args.filter(
    (arg) => arg !== "--no-index" && arg !== "--css"
  );

  // Extract component name and location
  const componentName = filteredArgs[0];
  const location = filteredArgs[1] || "src/components";

  return { componentName, location, options };
}

const { componentName, location, options } = parseArgs();

// Handle empty input or "scaf-it" without arguments
if (!componentName) {
  console.log(`
Welcome to the Component Scaffolder!

This script helps you scaffold a React component with optional styling files.

Usage:
  scaf-it <ComponentName> [Location] [--no-index] [--css]

Arguments:
  ComponentName  Name of the React component to scaffold (required)
  Location       Directory to create the component in (default: src/components)

Options:
  --no-index     Skip creating index.js
  --css          Use CSS instead of SCSS

Examples:
  scaf-it MyComponent
  scaf-it MyComponent src/custom
  scaf-it MyComponent --no-index
  scaf-it MyComponent src/custom --css --no-index

For help, use the --help flag: scaf-it --help
  `);
  process.exit(0);
}

// Scaffold the component
scaffoldComponent(componentName, location, options);
