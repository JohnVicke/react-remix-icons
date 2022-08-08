import React from "react";
import { Icon, IconProps } from "../Icon";

export type SpaceShipLineProps = Omit<IconProps, "name">;

export const SpaceShipLine = (props: SpaceShipLineProps) => (
  <Icon name="space-ship-line" {...props} />
);
