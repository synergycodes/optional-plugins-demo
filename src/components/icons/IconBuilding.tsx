import { withOptionalComponentPlugins } from "@/features/plugins-core/adapters/adapter-components";
import IconBuildingPowerPlant from "./IconBuildingPowerPlant";
import IconBuildingResidential from "./IconBuildingResidential";

const iconByType: Record<string, ({ className }: Props) => React.JSX.Element> =
  {
    powerPlant: IconBuildingPowerPlant,
    house: IconBuildingResidential,
  };

type Props = {
  className?: string;
  type?: string;
};

const Icon = ({ className, type }: Props) => {
  const IconForType = iconByType[type as keyof typeof iconByType];

  if (!IconForType) {
    return null;
  }

  return <IconForType className={className} />;
};

const IconBuilding = withOptionalComponentPlugins(Icon, "IconBuilding");

export default IconBuilding;
