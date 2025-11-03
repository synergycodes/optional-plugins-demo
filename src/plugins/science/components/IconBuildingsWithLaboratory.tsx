import IconBuilding from "@/components/icons/IconBuilding";
import IconBuildingLaboratory from "./icons/IconBuildingLaboratory";

type IconBuildingProps = React.ComponentProps<typeof IconBuilding>;

type Props = {
  props: IconBuildingProps;
  component: typeof IconBuilding;
};

function IconBuildingsWithLaboratory({ props, component: Component }: Props) {
  console.log(props);
  if (props.type === "laboratory") {
    return <IconBuildingLaboratory {...props} />;
  }

  return <Component {...props} />;
}

export default IconBuildingsWithLaboratory;
