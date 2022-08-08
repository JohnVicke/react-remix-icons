import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChargingPileFillProps = Omit<IconProps, "name">;

export const ChargingPileFill = (props: ChargingPileFillProps) => (
  <Icon name="charging-pile-fill" {...props} />
);
