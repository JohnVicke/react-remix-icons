import React from "react";
import { Icon, IconProps } from "../Icon";

export type RoadsterLineProps = Omit<IconProps, "name">;

export const RoadsterLine = (props: RoadsterLineProps) => (
  <Icon name="roadster-line" {...props} />
);
