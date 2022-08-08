import React from "react";
import { Icon, IconProps } from "../Icon";

export type PinDistanceLineProps = Omit<IconProps, "name">;

export const PinDistanceLine = (props: PinDistanceLineProps) => (
  <Icon name="pin-distance-line" {...props} />
);
