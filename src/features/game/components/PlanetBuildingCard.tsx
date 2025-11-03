import IconPopulation from "@/components/icons/IconPopulation";
import { upgradeBuilding, useGameStore } from "../stores/use-game-store";

import IconEnergy from "@/components/icons/IconEnergy";
import Button from "@/components/button/Button";
import { getBuildingCost } from "../utils/get-building-cost";
import { useMemo } from "react";
import IconBuilding from "@/components/icons/IconBuilding";
import type { InfrastructureType } from "../types";

type Props = {
  type: InfrastructureType;
  title: string;
};

function PlanetBuildingCard({ type, title }: Props) {
  const currentLevel = useGameStore((store) => store.planet.buildings[type]);

  const cost = useMemo(() => {
    return getBuildingCost(type, currentLevel + 1);
  }, [currentLevel, type]);

  return (
    <>
      <div className="flex flex-col gap-2">
        <h4 className="text-xs font-semibold">{title}</h4>
        <p className="text-xs">{currentLevel} level</p>
        <Button
          className="mt-4 mb-4 font-bold"
          onClick={() => upgradeBuilding(type)}
        >
          <IconBuilding type={type} className="size-6" />
          <span>Upgrade</span>
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
      </div>
    </>
  );
}

export default PlanetBuildingCard;
