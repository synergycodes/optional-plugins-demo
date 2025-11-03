import { OptionalBuildingCards } from "@/features/plugins/components/OptionalBuildingCards";
import PlanetBuildingCard from "./PlanetBuildingCard";

function PlanetInfrastructure() {
  return (
    <div className="mt-8 flex gap-12">
      <OptionalBuildingCards>
        <PlanetBuildingCard type="powerPlant" title="Power plant" />
        <PlanetBuildingCard type="house" title="Residential" />
      </OptionalBuildingCards>
    </div>
  );
}

export default PlanetInfrastructure;
