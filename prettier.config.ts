import { type Config } from "prettier";

const config: Config = {
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@/features/(.*)$",
    "^@/plugins/(.*)$",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};

export default config;