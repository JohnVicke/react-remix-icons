import React from "react";
import { Icon, IconProps } from "../Icon";

export type RocketFillProps = Omit<IconProps, "name">;

export const RocketFill = (props: RocketFillProps) => (
  <Icon name="rocket-fill" {...props} />
);
