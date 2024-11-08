#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Function to create the component scaffold
function scaffoldComponent(componentName, componentPath) {
  const kebabCaseName = componentName
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
  // Resolve the full path for the component directory
  const resolvedPath = path.resolve(componentPath, componentName);
  const jsxFile = path.join(resolvedPath, `${componentName}.jsx`);
  const scssFile = path.join(resolvedPath, `${componentName}.scss`);
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
import "./${componentName}.scss";

function ${componentName}() {
  return <div className="${kebabCaseName}">${componentName}</div>;
}

export default ${componentName};
`;

  // SCSS file content
  const scssContent = `.${kebabCaseName} {
  // Add your styles here
}
`;

  // Index content
  const indexContent = `export { default } from './${componentName}';`;

  // Create the JSX file
  fs.writeFileSync(jsxFile, jsxContent);

  // Create the SCSS file
  fs.writeFileSync(scssFile, scssContent);

  // Create the Index file
  fs.writeFileSync(indexFile, indexContent);

  console.log(
    `Component "${componentName}" has been scaffolded at ${resolvedPath}.`
  );
}

// Get the component name and path from the command line arguments
const componentName = process.argv[2];
const componentPath = process.argv[3] || "src/components"; // Default to 'src/components' if no path is provided

if (!componentName) {
  console.log("Please provide a component name.");
  process.exit(1);
}

// Call the function to scaffold the component
scaffoldComponent(componentName, componentPath);
