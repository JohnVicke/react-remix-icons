import React from "react";
import { Icon, IconProps } from "../Icon";

export type TreasureMapLineProps = Omit<IconProps, "name">;

export const TreasureMapLine = (props: TreasureMapLineProps) => (
  <Icon name="treasure-map-line" {...props} />
);
