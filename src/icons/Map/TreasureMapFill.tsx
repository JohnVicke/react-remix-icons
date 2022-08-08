import React from "react";
import { Icon, IconProps } from "../Icon";

export type TreasureMapFillProps = Omit<IconProps, "name">;

export const TreasureMapFill = (props: TreasureMapFillProps) => (
  <Icon name="treasure-map-fill" {...props} />
);
