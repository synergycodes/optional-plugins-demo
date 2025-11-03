import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { PlanetTypes } from "../types";
import { getBuildingCost } from "../utils/get-building-cost";

type Planet = {
  type: PlanetTypes;
  name: string;
  energy: number;
  population: number;
  buildings: {
    powerPlant: number;
    house: number;
    [type: string]: number;
  };
};

type GameStore = {
  planet: Planet;
};

const emptyStore: GameStore = {
  planet: {
    type: 1,
    name: "Earth",
    energy: 120,
    population: 5,
    buildings: {
      powerPlant: 1,
      house: 1,
    },
  },
};

export const useGameStore = create<GameStore>()(
  devtools(
    () =>
      ({
        ...emptyStore,
      } satisfies GameStore),
    { name: "gameStore" }
  )
);

export const upgradeBuilding = (infrastructureType: string) => {
  const store = useGameStore.getState();
  const level = store.planet.buildings[infrastructureType] || 0;

  const cost = getBuildingCost(infrastructureType, level + 1);

  const canUpgrade =
    store.planet.energy > cost.energy &&
    store.planet.population > cost.population;

  if (!canUpgrade) {
    alert("Not enough resources.");

    return;
  }

  useGameStore.setState((state) => ({
    planet: {
      ...state.planet,
      energy: state.planet.energy - cost.energy,
      population:
        infrastructureType === "house"
          ? state.planet.population + 10
          : state.planet.population,
      buildings: {
        ...state.planet.buildings,
        [infrastructureType]: level + 1,
      },
    },
  }));
};
