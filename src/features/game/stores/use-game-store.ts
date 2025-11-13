import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { PlanetTypes } from "../types";
import { getBuildingCost } from "../utils/get-building-cost";
import { roundWithPrecision } from "@/utils/round-with-precision";
import { getPlanetEffects } from "../utils/get-planet-effects";

export type Planet = {
  type: PlanetTypes;
  name: string;
  energy: number;
  population: number;
  buildings: {
    powerPlant: number;
    house: number;
    [type: string]: number;
  };
  lastTick: number;
};

type GameStore = {
  planet: Planet;
};

const emptyStore: GameStore = {
  planet: {
    type: 1,
    name: "Earth",
    energy: 230,
    population: 5,
    buildings: {
      powerPlant: 1,
      house: 1,
    },
    lastTick: Date.now(),
  },
};

const tickEveryXSeconds = 1.2;

const updateStateForTicks = (ticksCount: number) => {
  if (ticksCount < 1) {
    return;
  }

  const store = useGameStore.getState();
  const lastTickNow = store.planet.lastTick + tickEveryXSeconds * 1000;

  const buildingsBuff = getPlanetEffects(store.planet);

  const energyToAdd = ticksCount * buildingsBuff.energy;
  const populationToAdd = ticksCount * buildingsBuff.population;

  const energyNow = roundWithPrecision(store.planet.energy + energyToAdd, 1);
  const populationNow = roundWithPrecision(
    store.planet.population + populationToAdd,
    0
  );

  useGameStore.setState((state) => ({
    planet: {
      ...state.planet,
      energy: energyNow,
      population: populationNow,
      lastTick: lastTickNow,
    },
  }));
};

const tick = () => {
  const store = useGameStore.getState();

  const timePassedInSeconds = (Date.now() - store.planet.lastTick) / 1000;
  const ticksCount = Math.floor(timePassedInSeconds / tickEveryXSeconds);

  updateStateForTicks(ticksCount);
};

setInterval(tick, 1000);

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
    store.planet.energy >= cost.energy &&
    store.planet.population >= cost.population;

  if (!canUpgrade) {
    alert("Not enough resources.");

    return;
  }

  useGameStore.setState((state) => ({
    planet: {
      ...state.planet,
      energy: roundWithPrecision(state.planet.energy - cost.energy, 1),
      population:
        infrastructureType === "house"
          ? state.planet.population + 5
          : state.planet.population,
      buildings: {
        ...state.planet.buildings,
        [infrastructureType]: level + 1,
      },
    },
  }));
};
