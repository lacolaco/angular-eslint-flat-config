const tsParser = require("@typescript-eslint/parser");
const ngTemplateParser = require("@angular-eslint/template-parser");
const ng = require("@angular-eslint/eslint-plugin");
const ngTemplate = require("@angular-eslint/eslint-plugin-template");

module.exports = [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@angular-eslint": ng,
    },
    processor: ngTemplate.processors["extract-inline-html"],
    rules: {
      ...ng.configs.recommended.rules,
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: ngTemplateParser,
    },
    plugins: {
      "@angular-eslint/template": ngTemplate,
    },
    rules: {
      ...ngTemplate.configs.recommended.rules,
    },
  },
];
