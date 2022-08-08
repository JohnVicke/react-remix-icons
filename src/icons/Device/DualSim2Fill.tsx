import React from "react";
import { Icon, IconProps } from "../Icon";

export type DualSim2FillProps = Omit<IconProps, "name">;

export const DualSim2Fill = (props: DualSim2FillProps) => (
  <Icon name="dual-sim-2-fill" {...props} />
);
