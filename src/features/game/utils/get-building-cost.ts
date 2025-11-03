import type { Resources } from "../types";

const buildingCostByType: {
  [type: string]: Resources;
} = {
  powerPlant: { energy: 30, population: 1 },
  house: { energy: 20, population: 0 },
};

export const getBuildingCost = (
  infrastructureType: string,
  level: number
): Resources => {
  const levelCost = buildingCostByType[infrastructureType] || {
    energy: 40,
    population: 3,
  };

  return {
    energy: levelCost.energy * level,
    population: levelCost.population * level,
  };
};
