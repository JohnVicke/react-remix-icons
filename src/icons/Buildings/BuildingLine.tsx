import React from "react";
import { Icon, IconProps } from "../Icon";

export type BuildingLineProps = Omit<IconProps, "name">;

export const BuildingLine = (props: BuildingLineProps) => (
  <Icon name="building-line" {...props} />
);
