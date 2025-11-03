import { withOptionalComponentPlugins } from "@/features/plugins/adapters/adapter-components";
import { useGameStore } from "../stores/use-game-store";

function PlanetNameComponent() {
  const name = useGameStore((store) => store.planet.name);

  return <h1 className="text-lg tracking-widest">{name}</h1>;
}

const PlanetName = withOptionalComponentPlugins(
  PlanetNameComponent,
  "PlanetName"
);

export default PlanetName;
