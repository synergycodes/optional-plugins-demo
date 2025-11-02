import type { PlanetTypes } from "@/features/game/types";

import IconPlanet1 from "./IconPlanet1";
import IconPlanet2 from "./IconPlanet2";
import IconPlanet3 from "./IconPlanet3";

const iconByType: Record<
  PlanetTypes,
  ({ className }: Props) => React.JSX.Element
> = {
  1: IconPlanet1,
  2: IconPlanet2,
  3: IconPlanet3,
};

type Props = {
  className?: string;
  type?: PlanetTypes;
};

const Icon = ({ className, type }: Props) => {
  const IconForType = iconByType[type as keyof typeof iconByType];

  if (!IconForType) {
    return null;
  }

  return <IconForType className={className} />;
};

export default Icon;
