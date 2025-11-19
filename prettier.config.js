/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@/utils/(.*)$",
    "^@/features/plugins-core(.*)$",
    "^@/features/(.*)$",
    "^@/plugins/(.*)$",
    "^@/(.*)$",
    "^[../]",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};

export default config;
