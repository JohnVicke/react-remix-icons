import React from "react";
import { Icon, IconProps } from "../Icon";

export type DualSim2LineProps = Omit<IconProps, "name">;

export const DualSim2Line = (props: DualSim2LineProps) => (
  <Icon name="dual-sim-2-line" {...props} />
);
