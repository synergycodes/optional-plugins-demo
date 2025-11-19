import type { PropsWithChildren } from "react";
import { withOptionalComponentPlugins } from "../adapters/adapter-components";

const Wrapper = ({ children }: PropsWithChildren) => {
  return children;
};

export const OptionalBuildingCards = withOptionalComponentPlugins(
  Wrapper,
  "OptionalBuildingCards"
);
