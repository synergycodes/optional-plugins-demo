import { registerComponentDecorator } from "@/features/plugins-core/adapters/adapter-components";

import IconBuildingsWithLaboratory from "./components/IconBuildingsWithLaboratory";
import LaboratoryCard from "./components/LaboratoryCard";

registerComponentDecorator("OptionalBuildingCards", {
  content: LaboratoryCard,
  place: "after",
});

registerComponentDecorator("IconBuilding", {
  content: IconBuildingsWithLaboratory,
  place: "wrapper",
});
