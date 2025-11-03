import IconPopulation from "@/components/icons/IconPopulation";
import { upgradeBuilding, useGameStore } from "../../stores/use-game-store";

import IconEnergy from "@/components/icons/IconEnergy";
import Button from "@/components/button/Button";
import { getBuildingCost } from "../../utils/get-building-cost";
import { useMemo } from "react";
import IconBuilding from "@/components/icons/IconBuilding";
import type { InfrastructureType } from "../../types";
import { getBuildingEffects } from "../../utils/get-building-effects";

type Props = {
  type: InfrastructureType;
  title: string;
};

function PlanetBuildingCard({ type, title }: Props) {
  const currentLevel = useGameStore(
    (store) => store.planet.buildings[type] || 0
  );

  const cost = useMemo(() => {
    return getBuildingCost(type, currentLevel + 1);
  }, [currentLevel, type]);

  const effects = useMemo(() => {
    return getBuildingEffects(type, currentLevel);
  }, [currentLevel, type]);

  return (
    <>
      <div className="flex flex-col gap-2">
        <h4 className="text-xs font-semibold">{title}</h4>
        <p className="text-xs">{currentLevel} level</p>
        <Button
          className="mt-8 mb-4 font-bold"
          onClick={() => upgradeBuilding(type)}
        >
          <IconBuilding type={type} className="size-6" />
          <span>{currentLevel > 0 ? "Upgrade" : "Build"}</span>
        </Button>
        {cost.energy > 0 && (
          <div className="flex gap-2 justify-end items-center text-[#ecaa2f] text-xs">
            <IconEnergy className="size-4" />-{cost.energy}
          </div>
        )}
        {cost.population > 0 && (
          <div className="flex gap-2 justify-end items-center text-[#e33131] text-xs">
            <IconPopulation className="size-4" />
            Min. {cost.population}
          </div>
        )}

        {(effects.energy !== 0 || effects.population !== 0) && (
          <div className="mt-auto flex flex-col gap-1">
            <h4 className="my-2 text-xs font-semibold">Effects</h4>
            {effects.energy !== 0 && (
              <div className="flex gap-2 justify-end items-center text-[#ecaa2f] text-xs">
                <IconEnergy className="size-4" />
                {effects.energy.toFixed(1)} / day
              </div>
            )}
            {effects.population !== 0 && (
              <div className="flex gap-2 justify-end items-center text-[#ecaa2f] text-xs">
                <IconPopulation className="size-4" />
                {effects.population.toFixed(1)} / day
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default PlanetBuildingCard;
