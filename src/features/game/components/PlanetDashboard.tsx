import IconPopulation from "@/components/icons/IconPopulation";
import { useGameStore } from "../stores/use-game-store";
import Planet from "./Planet";
import { cn } from "@/utils/cn";
import IconEnergy from "@/components/icons/IconEnergy";
import PlanetInfrastructure from "./PlanetInfrastructure/PlanetInfrastructure";

function PlanetDashboard() {
  const name = useGameStore((store) => store.planet.name);
  const energy = useGameStore((store) => store.planet.energy);
  const population = useGameStore((store) => store.planet.population);

  return (
    <div className={cn("p-4", "flex justify-center items-start gap-12")}>
      <Planet />
      <div className="flex flex-col gap-4">
        <h1 className="text-lg tracking-widest">{name}</h1>
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
        <PlanetInfrastructure />
      </div>
    </div>
  );
}

export default PlanetDashboard;
