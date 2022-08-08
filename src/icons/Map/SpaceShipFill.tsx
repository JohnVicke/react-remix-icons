import React from "react";
import { Icon, IconProps } from "../Icon";

export type SpaceShipFillProps = Omit<IconProps, "name">;

export const SpaceShipFill = (props: SpaceShipFillProps) => (
  <Icon name="space-ship-fill" {...props} />
);
