import React from "react";
import { Icon, IconProps } from "../Icon";

export type RoadsterFillProps = Omit<IconProps, "name">;

export const RoadsterFill = (props: RoadsterFillProps) => (
  <Icon name="roadster-fill" {...props} />
);
