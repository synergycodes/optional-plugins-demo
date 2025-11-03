import { withOptionalFunctionPlugins } from "@/features/plugins/adapters/adapter-functions";
import type { InfrastructureType, Resources } from "../types";

const buildingCostByType: {
  [key in InfrastructureType]: Resources;
} = {
  powerPlant: { energy: 3.1, population: 0 },
  house: { energy: -0.1, population: 0 },
};

const getBuildingEffectsFunction = (
  infrastructureType: InfrastructureType,
  level: number
): Resources => {
  const levelCost = buildingCostByType[infrastructureType] || {
    energy: 0,
    population: 0,
  };

  return {
    energy: levelCost.energy * level,
    population: levelCost.population * level,
  };
};

export const getBuildingEffects = withOptionalFunctionPlugins(
  getBuildingEffectsFunction,
  "getBuildingEffects"
);
