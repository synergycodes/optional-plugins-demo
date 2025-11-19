import { useMemo } from "react";

import { cn } from "@/utils/cn";

import IconEnergy from "@/components/icons/IconEnergy";
import IconPopulation from "@/components/icons/IconPopulation";

import { useGameStore } from "../stores/use-game-store";
import { getPlanetEffects } from "../utils/get-planet-effects";

function PlanetResources() {
  const planet = useGameStore((store) => store.planet);
  const energy = useGameStore((store) => store.planet.energy);
  const population = useGameStore((store) => store.planet.population);

  const effect = useMemo(() => {
    return getPlanetEffects(planet);
  }, [planet]);

  return (
    <>
      <div className="flex gap-5">
        <span
          className={cn(
            "flex flex-col gap-1",
            "min-w-[100px]",
            "text-[#fcbe4a] text-right",
          )}
        >
          <div className="flex gap-2 justify-between">
            <IconEnergy className="size-6" />
            {energy.toFixed(1)}
          </div>
          <small className="opacity-40">{effect.energy.toFixed(1)} / day</small>
        </span>
        <span className="flex gap-2 text-[#e33131]">
          <IconPopulation className="size-6" />
          {population}
        </span>
      </div>
    </>
  );
}

export default PlanetResources;
