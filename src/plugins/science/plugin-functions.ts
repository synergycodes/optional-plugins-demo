import { registerFunctionDecorator } from "@/features/plugins/adapters/adapter-functions";
import { getScienceBuildingEffects } from "./functions/get-science-building-effects";

registerFunctionDecorator("getBuildingEffects", {
  callback: getScienceBuildingEffects,
  place: 'after',
});
