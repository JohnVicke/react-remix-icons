import React from "react";
import { Icon, IconProps } from "../Icon";

export type RocketLineProps = Omit<IconProps, "name">;

export const RocketLine = (props: RocketLineProps) => (
  <Icon name="rocket-line" {...props} />
);
