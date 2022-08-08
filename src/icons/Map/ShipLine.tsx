import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShipLineProps = Omit<IconProps, "name">;

export const ShipLine = (props: ShipLineProps) => (
  <Icon name="ship-line" {...props} />
);
