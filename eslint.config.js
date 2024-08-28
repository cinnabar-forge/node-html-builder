import cinnabarPlugin from "@cinnabar-forge/eslint-plugin";

// [ANCA-ANCHOR-CUSTOM-CONTENT-START]

const files = ["src/**/*.ts"];
const ignores = ["bin/**/*", "build/**/*", "dist/**/*"];
const rules = {
  "jsdoc/require-param-description": "off",
  "jsdoc/require-param-type": "off",
  "jsdoc/require-returns-type": "off",
  "jsdoc/require-returns": "off",
  "security/detect-non-literal-fs-filename": "off",
  "security/detect-object-injection": "off",
  "sonarjs/no-nested-template-literals": "off",
};

// [ANCA-ANCHOR-CUSTOM-CONTENT-END]

export default [
  ...cinnabarPlugin.default.map((config) => ({
    ...config,
    files,
  })),
  {
    files,
    rules,
  },
  {
    ignores,
  },
];
