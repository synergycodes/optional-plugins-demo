import { registerComponentDecorator } from "@/features/plugins/adapters/adapter-components";
import LaboratoryCard from "./components/LaboratoryCard";

registerComponentDecorator('OptionalBuildingCards', {
  content: LaboratoryCard,
});
