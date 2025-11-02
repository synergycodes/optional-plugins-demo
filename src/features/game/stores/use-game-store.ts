import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { PlanetTypes } from "../types";

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
