import { registerFunctionDecorator } from "@/features/plugins-core/adapters/adapter-functions";

import { getScienceBuildingEffects } from "./functions/get-science-building-effects";

registerFunctionDecorator("getBuildingEffects", {
  callback: getScienceBuildingEffects,
  place: "after",
});
