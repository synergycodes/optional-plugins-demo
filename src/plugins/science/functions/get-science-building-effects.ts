import { useGameStore } from "@/features/game/stores/use-game-store";
import { getBuildingEffects } from "@/features/game/utils/get-building-effects";

type DecoratorParams = {
  params: unknown[];
};

export const getScienceBuildingEffects = ({ params }: DecoratorParams) => {
  const effectParams = params as Parameters<typeof getBuildingEffects>;
  const isLaboratory = effectParams[0] === "laboratory";

  if (isLaboratory) {
    const laboratoryLevel = effectParams[1];
    if (laboratoryLevel > 0) {
      const powerPlantLevel =
        useGameStore.getState().planet.buildings.powerPlant;
      const powerPlantEffect = getBuildingEffects(
        "powerPlant",
        powerPlantLevel
      );

      // Efficiency can never be higher than 100% for a power plant.
      // 1 / 21 -> 0.05, 2 / 22 -> 0.(09), 3 -> 3 / 23 -> 0.13, 4 -> 4 / 24 -> 0.16
      const scienceBuff = laboratoryLevel / (laboratoryLevel + 20);

      return {
        replacedReturn: {
          energy: powerPlantEffect.energy * scienceBuff,
          population: powerPlantEffect.population * scienceBuff,
        },
      };
    }
  }
};
