import IconPopulation from "@/components/icons/IconPopulation";
import IconEnergy from "@/components/icons/IconEnergy";
import { useGameStore } from "../stores/use-game-store";

function PlanetResources() {
  const energy = useGameStore((store) => store.planet.energy);
  const population = useGameStore((store) => store.planet.population);

  return (
    <div className="flex gap-5">
      <span className="flex gap-2 text-[#ecaa2f]">
        <IconEnergy className="size-6" />
        {energy}
      </span>
      <span className="flex gap-2 text-[#e33131]">
        <IconPopulation className="size-6" />
        {population}
      </span>
    </div>
  );
}

export default PlanetResources;
