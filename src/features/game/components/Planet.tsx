import IconPlanet from "@/components/icons/IconPlanet";

import { useGameStore } from "../stores/use-game-store";

function Planet() {
  const planetType = useGameStore((store) => store.planet.type);

  return (
    <span className="bg-[#3f5e1a] rounded-full inline-block">
      <IconPlanet type={planetType} className="size-24 text-[#91b530]" />
    </span>
  );
}

export default Planet;
