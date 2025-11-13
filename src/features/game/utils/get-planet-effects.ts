import type { Resources } from "../types";
import type { Planet } from "../stores/use-game-store";
import { getBuildingEffects } from "./get-building-effects";

export const getPlanetEffects = (planet: Planet): Resources => {
  const buildingsBuff = Object.entries(planet.buildings).reduce(
    (stack: Resources, [infrastructureType, level]) => {
      const effect = getBuildingEffects(infrastructureType, level);

      stack.energy = stack.energy + effect.energy;
      stack.population = stack.population + effect.population;

      return stack;
    },
    { energy: 0, population: 0 }
  );

  return buildingsBuff;
};
