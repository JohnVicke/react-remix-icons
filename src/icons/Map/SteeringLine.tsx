import React from "react";
import { Icon, IconProps } from "../Icon";

export type SteeringLineProps = Omit<IconProps, "name">;

export const SteeringLine = (props: SteeringLineProps) => (
  <Icon name="steering-line" {...props} />
);
