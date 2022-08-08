import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChargingPileLineProps = Omit<IconProps, "name">;

export const ChargingPileLine = (props: ChargingPileLineProps) => (
  <Icon name="charging-pile-line" {...props} />
);
