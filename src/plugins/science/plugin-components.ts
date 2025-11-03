import { registerComponentDecorator } from "@/features/plugins/adapters/adapter-components";
import LaboratoryCard from "./components/LaboratoryCard";
import IconBuildingsWithLaboratory from "./components/IconBuildingsWithLaboratory";

registerComponentDecorator("OptionalBuildingCards", {
  content: LaboratoryCard,
  place: "after",
});

registerComponentDecorator("IconBuilding", {
  content: IconBuildingsWithLaboratory,
  place: "wrapper",
});
