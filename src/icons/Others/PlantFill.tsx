import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlantFillProps = Omit<IconProps, "name">;

export const PlantFill = (props: PlantFillProps) => (
  <Icon name="plant-fill" {...props} />
);
