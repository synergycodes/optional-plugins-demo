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

      // 1 +7.5% buff, 2 +15% buff etc.
      const scienceBuff = laboratoryLevel * 0.075;

      return {
        replacedReturn: {
          energy: powerPlantEffect.energy * scienceBuff,
          population: powerPlantEffect.population * scienceBuff,
        },
      };
    }
  }
};
