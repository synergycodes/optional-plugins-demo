import { OptionalBuildingCards } from "@/features/plugins-core/components/OptionalBuildingCards";
import PlanetBuildingCard from "./PlanetBuildingCard";

function PlanetInfrastructure() {
  return (
    <div className="mt-8 flex gap-6">
      <OptionalBuildingCards>
        <PlanetBuildingCard type="powerPlant" />
        <PlanetBuildingCard type="house" />
      </OptionalBuildingCards>
    </div>
  );
}

export default PlanetInfrastructure;
