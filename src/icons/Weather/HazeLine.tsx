import React from "react";
import { Icon, IconProps } from "../Icon";

export type HazeLineProps = Omit<IconProps, "name">;

export const HazeLine = (props: HazeLineProps) => (
  <Icon name="haze-line" {...props} />
);
