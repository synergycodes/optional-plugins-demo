import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { cn } from "@/utils/cn";

import Button from "@/components/button/Button";
import IconBuilding from "@/components/icons/IconBuilding";
import IconEnergy from "@/components/icons/IconEnergy";
import IconPopulation from "@/components/icons/IconPopulation";

import { upgradeBuilding, useGameStore } from "../../stores/use-game-store";
import type { InfrastructureType } from "../../types";
import { getBuildingCost } from "../../utils/get-building-cost";
import { getBuildingEffects } from "../../utils/get-building-effects";

type Props = {
  type: InfrastructureType;
};

function PlanetBuildingCard({ type }: Props) {
  const { t } = useTranslation();
  const energy = useGameStore((store) => store.planet.energy);
  const population = useGameStore((store) => store.planet.population);
  const currentLevel = useGameStore(
    (store) => store.planet.buildings[type] || 0,
  );

  const cost = useMemo(() => {
    return getBuildingCost(type, currentLevel + 1);
  }, [currentLevel, type]);

  const effects = useMemo(() => {
    return getBuildingEffects(type, currentLevel);
  }, [currentLevel, type]);

  const canBeBuild = energy >= cost.energy && population >= cost.population;

  return (
    <>
      <div
        className={cn(
          "flex flex-col gap-2 w-[150px]",
          "border border-[#3e3e3e] p-3 rounded-md",
        )}
      >
        <h4 className="text-sm font-semibold">{t(`building.${type}`)}</h4>
        <p
          className={cn("text-xs", {
            "opacity-50": currentLevel > 0,
            "opacity-25": currentLevel === 0,
          })}
        >
          {t("building.level", { level: currentLevel })}
        </p>
        <Button
          className="mt-8 mb-4 font-bold"
          onClick={() => upgradeBuilding(type)}
          isDisabled={!canBeBuild}
        >
          <IconBuilding type={type} className="size-6" />
          <span>{t(`building.${currentLevel > 0 ? "upgrade" : "build"}`)}</span>
        </Button>
        {cost.energy > 0 && (
          <div className="flex gap-2 justify-end items-center text-[#fcbe4a] text-xs">
            <IconEnergy className="size-4" />-{cost.energy}
          </div>
        )}
        {cost.population > 0 && (
          <div className="flex gap-2 justify-end items-center text-[#e33131] text-xs">
            <IconPopulation className="size-4" />
            {t("building.min")} {cost.population}
          </div>
        )}
        {(effects.energy !== 0 || effects.population !== 0) && (
          <div className="mt-auto flex flex-col gap-1">
            <h4 className="my-2 text-xs font-semibold">
              {t("building.effects")}
            </h4>
            {effects.energy !== 0 && (
              <div className="flex gap-2 justify-end items-center text-[#fcbe4a] text-xs">
                <IconEnergy className="size-4" />
                {effects.energy.toFixed(1)} / {t("building.day")}
              </div>
            )}
            {effects.population !== 0 && (
              <div className="flex gap-2 justify-end items-center text-[#fcbe4a] text-xs">
                <IconPopulation className="size-4" />
                {effects.population.toFixed(1)} / {t("building.day")}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default PlanetBuildingCard;
