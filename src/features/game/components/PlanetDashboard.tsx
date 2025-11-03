import Planet from "./Planet";
import { cn } from "@/utils/cn";
import PlanetInfrastructure from "./PlanetInfrastructure/PlanetInfrastructure";
import PlanetName from "./PlanetName";
import PlanetResources from "./PlanetResources";

function PlanetDashboard() {
  return (
    <div className={cn("p-4", "flex justify-center items-start gap-12")}>
      <Planet />
      <div className="flex flex-col gap-4">
        <PlanetName />
        <PlanetResources />
        <PlanetInfrastructure />
      </div>
    </div>
  );
}

export default PlanetDashboard;
