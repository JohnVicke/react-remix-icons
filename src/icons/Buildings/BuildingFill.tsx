import React from "react";
import { Icon, IconProps } from "../Icon";

export type BuildingFillProps = Omit<IconProps, "name">;

export const BuildingFill = (props: BuildingFillProps) => (
  <Icon name="building-fill" {...props} />
);
