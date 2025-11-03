import { registerComponentDecorator } from "@/features/plugins/adapters/adapter-components";
import EditPlanetName from "./components/EditPlanetName";

registerComponentDecorator("PlanetName", {
  content: EditPlanetName,
  place: "after",
});
