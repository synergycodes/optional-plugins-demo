import type { BuildingCost } from "../types";

const buildingCostByType: {
  [type: string]: { energy: number; population: number };
} = {
  powerPlant: { energy: 100, population: 5 },
  house: { energy: 50, population: 0 },
};

export const getBuildingCost = (
  buildingType: string,
  level: number
): BuildingCost => {
  const levelCost = buildingCostByType[buildingType] || {
    energy: 20,
    population: 1,
  };

  return {
    energy: levelCost.energy * level,
    population: levelCost.population * level,
  };
};
