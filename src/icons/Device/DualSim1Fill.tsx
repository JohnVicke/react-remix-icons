import React from "react";
import { Icon, IconProps } from "../Icon";

export type DualSim1FillProps = Omit<IconProps, "name">;

export const DualSim1Fill = (props: DualSim1FillProps) => (
  <Icon name="dual-sim-1-fill" {...props} />
);
