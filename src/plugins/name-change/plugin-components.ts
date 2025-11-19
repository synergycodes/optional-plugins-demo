import { registerComponentDecorator } from "@/features/plugins-core/adapters/adapter-components";
import EditPlanetName from "./components/EditPlanetName";

registerComponentDecorator("PlanetName", {
  content: EditPlanetName,
  place: "after",
});
