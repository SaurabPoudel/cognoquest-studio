/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: "all",
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  jsxBracketSameLine: false,
  arrowParens: "always",
  endOfLine: "auto",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
