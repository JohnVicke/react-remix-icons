import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlantLineProps = Omit<IconProps, "name">;

export const PlantLine = (props: PlantLineProps) => (
  <Icon name="plant-line" {...props} />
);
