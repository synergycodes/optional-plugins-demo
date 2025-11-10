import Planet from "./Planet";
import { cn } from "@/utils/cn";
import PlanetInfrastructure from "./PlanetInfrastructure/PlanetInfrastructure";
import PlanetName from "./PlanetName";
import PlanetResources from "./PlanetResources";
import LanguageToggle from "@/features/i18n/components/LanguageToggle";

function PlanetDashboard() {
  return (
    <div className={cn("p-4", "flex justify-center gap-12")}>
      <div className="flex flex-col">
        <Planet />
        <LanguageToggle className="mt-auto" />
      </div>
      <div className="flex flex-col gap-4">
        <PlanetName />
        <PlanetResources />
        <PlanetInfrastructure />
      </div>
    </div>
  );
}

export default PlanetDashboard;
