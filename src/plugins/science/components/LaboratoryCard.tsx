import PlanetBuildingCard from "@/features/game/components/PlanetInfrastructure/PlanetBuildingCard";
import { useGameStore } from "@/features/game/stores/use-game-store";

function LaboratoryCard() {
  const powerPlantLevel = useGameStore(
    (store) => store.planet.buildings.powerPlant
  );

  return (
    <PlanetBuildingCard
      // Science effect increases when power plant level changes 
      key={powerPlantLevel}
      type="laboratory"
    />
  );
}

export default LaboratoryCard;
