import React from "react";
import { Icon, IconProps } from "../Icon";

export type PinDistanceFillProps = Omit<IconProps, "name">;

export const PinDistanceFill = (props: PinDistanceFillProps) => (
  <Icon name="pin-distance-fill" {...props} />
);
