import Button from "@/components/button/Button";
import IconPencil from "./icons/IconPencil";
import { useGameStore } from "@/features/game/stores/use-game-store";
import { setNewPlanetName } from "../actions/set-new-planet-name";

function EditPlanetName() {
  const name = useGameStore((store) => store.planet.name);
  const handleNameChange = () => {
    const newName = prompt("Type new name", name);

    if (!newName || newName.length < 1) {
      alert("New name is too short.");

      return;
    }

    if (newName.length > 10) {
      alert("New name is too long.");

      return;
    }

    setNewPlanetName(newName);
  };

  return (
    <Button
      className="absolute top-10 right-0 font-bold"
      onClick={handleNameChange}
    >
      <IconPencil className="size-6" />
    </Button>
  );
}

export default EditPlanetName;
