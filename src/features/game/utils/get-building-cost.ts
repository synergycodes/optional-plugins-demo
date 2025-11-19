import type { Resources } from "../types";

const buildingCostByType: {
  [type: string]: Resources;
} = {
  powerPlant: { energy: 30, population: 1 },
  house: { energy: 20, population: 0 },
};

export const getBuildingCost = (
  infrastructureType: string,
  level: number,
): Resources => {
  const levelCost = buildingCostByType[infrastructureType] || {
    energy: 30,
    population: 3,
  };

  const levelImpact = level > 1 ? 0.4 : 0;

  return {
    energy: Math.ceil(
      levelCost.energy * level +
        (levelCost.energy ^ (levelCost.energy * levelImpact)),
    ),
    population: Math.ceil(
      levelCost.population * level +
        (levelCost.population ^ (levelCost.population * levelImpact)),
    ),
  };
};
