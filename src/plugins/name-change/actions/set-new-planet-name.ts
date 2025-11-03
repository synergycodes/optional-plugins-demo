import { useGameStore } from "@/features/game/stores/use-game-store";

export const setNewPlanetName = (name: string) => {
  useGameStore.setState((state) => ({
    ...state,
    planet: {
      ...state.planet,
      name,
    },
  }));
};
