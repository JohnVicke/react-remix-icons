import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShipFillProps = Omit<IconProps, "name">;

export const ShipFill = (props: ShipFillProps) => (
  <Icon name="ship-fill" {...props} />
);
