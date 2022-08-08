import React from "react";
import { Icon, IconProps } from "../Icon";

export type DualSim1LineProps = Omit<IconProps, "name">;

export const DualSim1Line = (props: DualSim1LineProps) => (
  <Icon name="dual-sim-1-line" {...props} />
);
